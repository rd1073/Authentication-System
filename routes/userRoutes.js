const express = require("express")
const { registerUser, loginUser,}=require("../controllers/userController");
//const protect=require("../protect");
//console.log(typeof protect);
const generateToken = require("../token");
const { User } = require("../db");
const transporter = require('../mailer');



const router=express.Router();
 
router.route("/signup").post(registerUser);
router.route("/login").post(loginUser);

router.post('/forgot-password', async (req, res) => {
    const { email } = req.body;
  
    try {
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      // Generate a unique token (you can use libraries like crypto to create a random token)
      const token = generateToken;
  
      // Save the token to the user in your database
      user.resetPasswordToken = token;
      user.resetPasswordExpires = Date.now() + 3600000; // Token expires in 1 hour
      await user.save();
  
      // Send email with the reset link
      const mailOptions = {
        from: 'rajeshwari.dhar@gmail.com',
        to: email,
        subject: 'Password Reset',
        text: `Click the following link to reset your password: http://localhost:3000/reset-password/${token}`,
      };
  
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return res.status(500).json({ error: 'Failed to send reset email' });
          console.log(error);
        }
  
        console.log(`Email sent: ${info.response}`);
        return res.status(200).json({ message: 'Reset email sent successfully' });
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error probably' });
    }
  });
  
  router.post('/reset-password/:token', async (req, res) => {
    const { password } = req.body;
    const { token } = req.params;
  
    try {
      const user = await User.findOne({
        resetPasswordToken: token,
        resetPasswordExpires: { $gt: Date.now() }, // Check if the token is still valid
      });
  
      if (!user) {
        return res.status(400).json({ error: 'Invalid or expired token' });
      }
  
      // Update user's password
      user.password = password;
      user.resetPasswordToken = undefined;
      user.resetPasswordExpires = undefined;
      await user.save();
  
      return res.status(200).json({ message: 'Password reset successful' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error probably' });
    }
  });
  
  

module.exports=router;
  