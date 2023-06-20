const nodemailer = require("nodemailer");

async function sendEmail(email, subject, message) {
  try {
    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "otteeztech@gmail.com", // Replace with your Gmail email address
        pass: "eyqoeznqrvjwekbr", // Replace with your Gmail password or an app-specific password
      },
    });

    // Configure the email options
    const mailOptions = {
      from: "otteeztech@gmail.com", // Replace with your Gmail email address
      to: email,
      subject: subject,
      text: message,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
    return true;
  } catch (error) {
    console.error("Failed to send email:", error);
    return false;
  }
}


module.exports = {sendEmail}





