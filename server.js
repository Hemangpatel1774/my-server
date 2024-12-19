const express = require("express");
const cors = require("cors");
const dotEnv = require("dotenv");
const mongoose = require("mongoose");
const apiRoutes = require("./apiRoutes");
const server = express();
server.use(express.json())
server.use(cors())
dotEnv.config()
const port = process.env.PORT;

server.use((req, res, next) => {
    try{
    mongoose.connect(process.env.DBURL)
        .then(() => {
            next();
            console.log("db Connect successfully...!");
        })
    }catch(e){
        console.log(e);
        
    }    
    })

server.get("/", (req, res) => {
    res.send("Server running...!")
})
server.use("/", apiRoutes);

server.listen(port, () => {
    console.log(`server listen at http://localhost:${port}`);

})