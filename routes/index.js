const express = require('express');
const app = express();
const router = express.Router();
const nodemailer = require('./email.js')
const formulario = require('./formulario')


router.get("/contato", formulario.get)

router.post("/formulario", nodemailer.post)
module.exports = router;