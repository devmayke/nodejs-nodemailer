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
transporter.sendMail({
    from:
})


module.exports = nodemailer;