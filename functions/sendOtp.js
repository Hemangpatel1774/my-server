const nodemailer = require("nodemailer");
const dotenv = require('dotenv');
dotenv.config();


const sendOtp = (userEmail, otp) => {
    try {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.MAILUSERNAME,
                pass: process.env.MAILPASS,
            }
        });
        let mailOptions = {
            from: '15hemagn1774@gmail.com',
            to: userEmail,
            subject: 'Interview Authentication',
            html: '<h1>Welcome to nits</h1><br><br>Your OTP is ' + otp,
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                return "error"
            } else {
                return "otp send to " + userEmail
            }
        });
        return "ok"
    }catch(e){
        return e
    }
}

module.exports = sendOtp;