const emailTransporter = require("../config/emailTransporter");
const emailTemplates = require("../emails/email"); // Ensure `email` is properly structured

async function sendEmail(emailConfig) {
  const transporter = emailTransporter(emailConfig.from); // Create transporter instance

  const { template, data } = emailConfig;
  const emailTemplate = emailTemplates[template];

  if (!emailTemplate) {
    throw new Error(`Email template "${template}" not found.`);
  }

  try {
    await transporter.sendMail(emailTemplate(data));
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = sendEmail;
