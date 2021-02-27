const express = require('express');
const app = express();
const router = express.Router();
const nodemailer = require('./email.js')
const formulario = require('./formulario')



router.get("/teste", function(req, res ){
    res.render('teste')

})

router.get("/formulario", formulario.get)

router.post("/formulario", nodemailer.post)
module.exports = router;