function sendEmail(to,subject,message,transporter){
var mailOptions = {
  from: "youremail@gmail.com",
  to,
  subject,
  generateTextFromHTML: true,
  html: message,
};
//Checking whether the email is sent. Else error message is displayed.
transporter.sendMail(mailOptions, function(error, response) {
  if (error) {
    console.log(error);
  } else {
    console.log(response);
  }
  transporter.close();
});
};

exports.sendEmail=sendEmail;
