const nodemailer = require("nodemailer");
const dotenv = require('dotenv');
dotenv.config();


const sendOtpNo = async (userEmail, otp) => {
    let transporter =await nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "15hemang1774@gmail.com",
            pass: "ovpk zywt znto qkxe",
        }
    });
    let mailOptions =await {
        from: '15hemagn1774@gmail.com',
        to: userEmail,
        subject: 'Interview Authentication',
        html: '<h1>Welcome to nits</h1><br><br>Your OTP is ' + otp,
    };
    try{
    let r =await transporter.sendMail(mailOptions);

    }catch(e){
        return e
    }
}

module.exports = sendOtpNo;