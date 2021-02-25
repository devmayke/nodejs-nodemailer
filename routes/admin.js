const express = require('express');
const { renameSync } = require('fs');
const app = express();
const router = express.Router();

const nodemailer = require('nodemailer')
let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, 
    auth:{
        user: "devmayke@gmail.com",
        pass: "Codebase1@1"
    }
});


router.get("/formulario", (req, res)=>{
    res.render('form')
})
router.post("/formulario", (req, res)=>{
    transporter.sendMail({
        from: `${req.body.nome} <devmayke@gmail.com>`,
        to: "incognator@gmail.com",
        subject:`Formuário criado no servido node`,
        html:`Enviado de: ${req.body.email}`+`<br>`+`${req.body.mensagem}`
    }).then((sucesso)=>{
        console.log(sucesso)
        res.send('email enviado com sucesso')
    }).catch((err)=>
    console.log(err))    
})
module.exports = router;