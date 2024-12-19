const nodemailer = require("nodemailer");
const dotenv = require('dotenv');
dotenv.config();


const sendOtpNo = async (userEmail, otp) => {
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
    try{
    let r =await transporter.sendMail(mailOptions);
    console.log(r.response);
    return r.response
    }catch(e){
        return e
    }
}

module.exports = sendOtpNo;