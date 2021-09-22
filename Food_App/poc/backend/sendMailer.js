const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const port = process.env.PORT;
const nodemailer = require('nodemailer');


sendMail = async (req, res)=>{
    try{
        const transporter = nodemailer.createTransport({
            host: "smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "a320382a9aeb27",
                pass: "ea1b14ac06e677"
            }
        })
    
        let info = await transporter.sendMail({
            from: '"Sachin Sharma 👻" <sachinsharma0237@gmail.com>', // sender address
            to: "bar@example.com, baz@example.com", // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello I'm testing", // plain text body
            html: "<b>Hello I'm testing this</b>", // html body
          }); 

    }
    catch(err){
        console.log(err);
    }
}

sendMail().then(function(){
    console.log("email sent!")
})
.catch(err=>{
    console.log("Email not sent",err);
})