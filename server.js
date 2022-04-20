const express = require("express");
const bcrypt = require("bcrypt");
const server = express();
const jwt = require("jsonwebtoken")
const saltRounds = 15;
const SECRET_KEY = "qwertyutiro@123"




server.post("/register", (req, res) => {
    console.log(req.query);
    bcrypt.genSalt(saltRounds, (err, salt) => {
        if(err){
            console.log(err)
        }
        else {
            bcrypt.hash(req.query.name, salt, (err, hashpwd) => {
                if(err){console.log(err)}
                else {
                    console.log(hashpwd)
                }

            })

        }
    })
})

server.post("/login", (req, res) => {
    const token = jwt.sign(req.query, SECRET_KEY);
    console.log(token)
    const decodedtoken = jwt.decode(token, SECRET_KEY);
    console.log(decodedtoken)

})

server.listen(5000, () => {
    console.log("Application is runnning")
})