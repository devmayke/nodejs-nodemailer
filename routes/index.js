const nodemailer = require('./email.js')
const express = require('express');
const app = express();
const router = express.Router();
const transporter = nodemailer.transporter;
const enviaEmail = nodemailer.enviaEmail;
const formulario = require('./formulario')



router.get("/formulario", formulario.form)

router.post("/formulario", (req, res)=>enviaEmail(req, res))
module.exports = router;