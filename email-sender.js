const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ahmedmohamedasee2022@gmail.com',
    pass: '010094924',
  },
});

const mailOptions = {
  from: 'ahmedmohamedasee2022@gmail.com',
  to: 'recipient_email@example.com',
  subject: 'Test Email',
  text: 'This is a test email sent from Node.js',
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.error('Error sending email:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
