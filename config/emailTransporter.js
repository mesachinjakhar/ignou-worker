const nodemailer = require("nodemailer");

const emailTransporter = (from) => {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST, // SMTP server
    port: process.env.EMAIL_PORT, // Convert port to a number
    secure: process.env.EMAIL_SECURE === "true", // Convert "true"/"false" string to boolean
    auth: {
      user:
        from == "Accounts"
          ? process.env.EMAIL_ACCOUNTS_USER
          : process.env.EMAIL_ORDERS_USER,
      pass: process.env.EMAIL_PASS, // Email password
    },
  });
};

module.exports = emailTransporter;
