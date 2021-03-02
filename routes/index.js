const express = require('express');
const app = express();
const router = express.Router();
const nodemailer = require('./email.js');
const formulario = require('./formulario');
const home = require('./home');
const sobre = require('./sobre');

router.get("/contato", formulario.get);

router.get('/', home.get);

router.get("/sobre", sobre.get);

router.post("/formulario", nodemailer.post);
module.exports = router;