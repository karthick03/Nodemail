const send = require('./mail.js');
const nodemailer = require("nodemailer");
const  crypt = require('./crypt');
//Getting dynamically Gmail decrypted password runtime environment.
var transporter = nodemailer.createTransport("SMTP", {
    service: "Gmail",
    auth: {
        user: "youremail@gmail.com",
        pass: crypt.decrypt(process.argv[2])
    }
});
//params:
//To email id
//Subject
//Message
//Transporter object
send.sendEmail('toEmail@provider.com','Subject','Message',transporter);
