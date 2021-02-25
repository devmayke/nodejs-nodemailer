const nodemailer = require( '../email/email.js')
const express = require('express');
const app = express();
const router = express.Router();
const transporter = nodemailer.transporter;
const enviaEmail = nodemailer.enviaEmail;


router.get("/formulario", (req, res)=>{
    res.render('form')
})
router.post("/formulario", (req, res)=>enviaEmail(req, res))
module.exports = router;