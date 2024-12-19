const express = require("express");
const magicMaster = require("./Models/magicModel");
const sendOtp = require("./functions/sendOtp")
const generateOtp = require("./functions/generateOtp")
const apiRoutes = express.Router();
apiRoutes.get("/test",(req,res)=>{
    res.send("apiRoutes here /test")
});
apiRoutes.get("/sendOtp/:email", async (req,res)=>{
    try{
        const email= req.params.email;
        const otp = generateOtp();
        try{
        let a = sendOtp(email,otp);
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