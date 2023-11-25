const { User } = require("../db");
const generateToken = require("../token");
const bcrypt = require("bcrypt");

// register user
// api route api/user/login
const registerUser = async (req, res) => {
  try {
    const { name, lastname, password, about, email, city, state, zip } = req.body;
    console.log("Request Body:", req.body);

    if (!name || !password || !email) {
      res.status(400).json({ error: "Please Enter all the Fields" });
      return;
    }

    // Check if user already exists
    const userExists = await User.findOne({ email });

    if (userExists) {
      res.status(400).json({ error: "User already exists" });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user instance
    const newUser = new User({
      name,
      lastname,
      password: hashedPassword,
      about,
      email,
      city,
      state,
      zip,
    });

    // Save the user instance to the database
    const user = await newUser.save();

    console.log("User saved:", user);

    res.status(201).json({
      _id: user._id,
      name: user.name,
      lastname: user.lastname,
      about: user.about,
      email: user.email,
      city: user.city,
      state: user.state,
      zip: user.zip, // Fix typo here
      token: generateToken(user._id),
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error probably" });
  }
};


 //login user
  //api route api/user/login
  const loginUser = async (req, res) => {
    try {
      const { email, password } = req.body;
      console.log("Request Body:", req.body);

  
      if (!email || !password) {
        res.status(400).json({ error: "Please Enter all the Fields" });
        return;
      } 
  
      // Check if user already exists
      const user = await User.findOne({ email });
  
      if (user && (await bcrypt.compare(password, user.password))) {
        console.log("login succesful");
        res.json({
            _id: user._id,
            name: user.name,
            lastname:user.lastname,
            email: user.email,
            token: generateToken(user._id),
          });
      } else{
        res.status(401);
        throw new Error("Invalid Email or Password");

      }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error probably" });
}};
module.exports = { registerUser, loginUser };
