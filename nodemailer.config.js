const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

module.exports.sendConfirmationEmail = (name, email, confirmationCode, url) => {
  transport
    .sendMail({
      from: process.env.EMAIL,
      to: email,
      subject: "Please confirm your account",
      html: `<h1>Email Confirmation</h1>
        <h2>Hello ${name}</h2>
        <p>Thank you for subscribing. Please confirm your email by clicking on the following link</p>
        <a href=${url}/${confirmationCode}> Click here</a>
        </div>`,
    })
    .catch((err) => console.log(err));
};
