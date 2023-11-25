const nodemailer = require('nodemailer');

// Create a transporter using your email credentials
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'rajeshwari.dhar@gmail.com',
    pass: 'Golobull123#',
  },
});

module.exports = transporter;
