const express = require("express");
const magicMaster = require("./Models/magicModel");
const generateOtp = require("./functions/generateOtp");
const sendOtp = require("./functions/sendOtp");
const apiRoutes = express.Router();
apiRoutes.get("/test",(req,res)=>{
    res.send("apiRoutes here /test")
});
apiRoutes.get("/sendOtp/:email", async (req,res)=>{
    try{
        const email= req.params.email;
        res.send("otp sent successfully...!"+email);
    const otp = generateOtp();
    sendOtp(email,otp);
    console.log(otp);
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