const express = require('express');
const app = express();
const router = express.Router();
const nodemailer = require('./email.js')
const formulario = require('./formulario')


router.get("/contato", formulario.pegar)

// router.get("/home", home.get)


router.get("/", (req, res)=>{
    let obj ={       
        nome:"mayke",
        idade:31
       
    }  
    
    res.render('home', obj)

  
    // res.send(obj)
})

router.get("/sobre", function(req, res){
    
    res.render("about")
})

router.post("/formulario", nodemailer.post)
module.exports = router;