const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Set up Nodemailer transport
const transporter = nodemailer.createTransport({
  service: 'gmail', // You can use other services like Outlook, SendGrid, etc.
  auth: {
    user: 'davidjayaraj@karunya.edu.in', // Replace with your Gmail address
    pass: '10@klassy', // Replace with your Gmail password or app password
  },
});

// POST endpoint to send the email
app.post('/send-email', (req, res) => {
  const { name, email, address, phone, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'davidjayaraj@karunya.edu.in', // Replace with your email address
    subject: `New message from ${name}`,
    text: `
      Name: ${name}
      Email: ${email}
      Address: ${address}
      Phone: ${phone}
      Message: ${message}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ message: 'Error sending email', error });
    }
    res.status(200).json({ message: 'Message sent successfully', info });
  });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
