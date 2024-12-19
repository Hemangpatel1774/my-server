const express = require("express");
const magicMaster = require("./Models/magicModel");
// const sendOtpNo = require("./functions/sendOtp")
const generateOtp = require("./functions/generateOtp")
const nodemailer = require("nodemailer");
const dotenv = require('dotenv');
dotenv.config();
const apiRoutes = express.Router();

const sendOtpNo = (userEmail, otp) => {
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

    transporter.sendMail(mailOptions);
}

apiRoutes.get("/test",(req,res)=>{
    res.send("apiRoutes here /test")
});
apiRoutes.post("/sendOtp", async (req,res)=>{
    try{
        const email= req.body.email;
        const otp = generateOtp();
        try{
        let a = sendOtpNo(email,otp);
        res.send("otp sent successfully...!"+a);
        }catch(e){
            res.send(e.message)
        }
        const newData = magicMaster({email , otp})
    await newData.save()
    }catch(e){
        res.send(e);
    }
});
apiRoutes.get("/verifyOtp",(req,res)=>{
    res.send("apiRoutes here /test")
});
apiRoutes.post("/getdata",(req,res)=>{
    res.send("")
})



module.exports = apiRoutes;