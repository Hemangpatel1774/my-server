const express = require("express");
const magicMaster = require("./Models/magicModel");
const sendOtpNo = require("./functions/sendOtp")
const generateOtp = require("./functions/generateOtp")
const apiRoutes = express.Router();
apiRoutes.get("/test", (req, res) => {
    res.send("apiRoutes here /test")
});
apiRoutes.post("/sendOtp", async (req, res) => {
    try {
        const email = req.body.email;
        const otp = generateOtp();
        let a = sendOtpNo(email, otp);
        res.send("otp sent successfully...!");
        const newData = magicMaster({ email, otp })
        await newData.save()
    } catch (e) {
        res.send(e);
    }
});
apiRoutes.get("/verifyOtp", (req, res) => {
    res.send("apiRoutes here /test")
});
apiRoutes.post("/getdata", (req, res) => {
    res.send("")
})



module.exports = apiRoutes;