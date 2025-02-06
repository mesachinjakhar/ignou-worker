module.exports.otp = (data) => {
  return {
    from: `"IGNOU Backbenchers" <accounts@mails.ignoubackbenchers.com>`, // Sender's name and email
    to: data.to, // Recipient email
    subject: "OTP for Login", // Subject line
    text: `Hi, your one-time password for logging in to ignoubackbenchers.com is ${data.otp}.`, // Plain text email body
  };
};

module.exports.orderConfirmationToCust = (orderDetails) => {
  return {
    from: '"IGNOU Backbenchers" <orders@mails.ignoubackbenchers.com>', // Sender's name and email
    to: orderDetails.email,
    subject: "Order Confirmation - IGNOU Backbenchers", // Subject line
    text: `Dear Customer,

Thank you for your order from IGNOU Backbenchers! Your handwritten assignment is now confirmed and is being processed.

Order Details:
- Order ID: ${orderDetails._id}
- Programme: ${orderDetails.programme}
- Expected Delivery: ${formattedDeliveryDate}

We will notify you once your order is shipped. For any queries, feel free to contact us.

Best Regards,
IGNOU Backbenchers
📞 +91 90534 42043`,
  };
};
