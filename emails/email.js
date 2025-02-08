module.exports.otp = (data) => {
  return {
    from: `"IGNOU Backbenchers" <accounts@mails.ignoubackbenchers.com>`, // Sender's name and email
    to: data.to, // Recipient email
    subject: "OTP for Login", // Subject line
    text: `Hi, your one-time password for logging in to ignoubackbenchers.com is ${data.otp}.`, // Plain text email body
  };
};

module.exports.orderConfirmationToCust = (data) => {
  return {
    from: '"IGNOU Backbenchers" <orders@mails.ignoubackbenchers.com>', // Sender's name and email
    to: data.orderDetails.email,
    subject: "Order Confirmation - IGNOU Backbenchers", // Subject line
    text: `Dear Customer,

Thank you for your order from IGNOU Backbenchers! Your handwritten assignment is now confirmed and is being processed.

Order Details:
- Order ID: ${data.orderDetails._id}
- Programme: ${data.orderDetails.programme}

We will notify you once your order is shipped. For any queries, feel free to contact us.

Best Regards,
IGNOU Backbenchers
📞 +91 90534 42043`,
  };
};

module.exports.orderConfirmationToAdmin = (data) => {
  return {
    from: '"IGNOU Backbenchers" <orders@mails.ignoubackbenchers.com>', // Sender's name and email
    to:
      process.env.NODE_ENV == "development"
        ? process.env.DEV_EMAIL
        : process.env.ADMIN_EMAIL,
    subject: "New Order Received - IGNOU Backbenchers", // Subject line
    text: `Dear Admin,

A new order has been placed on IGNOU Backbenchers.

Order Details:
- Order ID: ${data.orderDetails._id}
- Customer Name: ${data.orderDetails.name}
- Mobile: ${data.orderDetails.mobile}
- Email: ${data.orderDetails.email}
- Programme: ${data.orderDetails.programme}
- Number of Assignments: ${data.orderDetails.numberOfAssignments}

Please review and process the order at your earliest convenience.

Best Regards,
IGNOU Backbenchers`,
  };
};
