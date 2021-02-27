const express = require('express');
const app = express();
const admin = require('./routes');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser')
const PORT = 3000


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.engine("handlebars", handlebars({defaultLayout: "main"}));
app.set("view engine", "handlebars")


app.use('/', admin)

app.listen(PORT, (err)=>{
    console.log("Servidor iniciado em http://127.0.0.1:"+PORT+"/formulario")
})


