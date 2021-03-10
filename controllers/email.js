require('dotenv/config')
const nodemailer = require('nodemailer')
let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, 
    auth:{
        user: "devmayke@gmail.com",
        pass: process.env.PASSWORD_EMAIL
    }
})


module.exports = {
    nodemailer, 
    transporter,
    post: function enviaEmail(req, res){
        transporter.sendMail({
            from: `${req.body.nome} <devmayke@gmail.com>`,
            to: "incognator@gmail.com",
            subject:`Formuário criado no servidor node`,
            html:`Enviado de: ${req.body.email}`+`<br>`+`${req.body.mensagem}`
        }).then((sucesso)=>{
            console.log(sucesso)
            res.send('email enviado com sucesso')
        }).catch((err)=>{
            console.log(err)            
    })}
}