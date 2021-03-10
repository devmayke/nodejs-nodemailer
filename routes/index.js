const express = require('express');
const app = express();
const router = express.Router();
const nodemailer = require('../controllers/email.js');
const formulario = require('../controllers/formulario');
const home = require('../controllers/home');
const sobre = require('../controllers/sobre');

router.get("/contato", formulario.get);

router.get('/', home.get);

router.get("/sobre", sobre.get);

router.post("/formulario", nodemailer.post);

module.exports = router;