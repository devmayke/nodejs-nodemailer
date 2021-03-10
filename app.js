const express = require('express');
const app = express();
const admin = require('./routes');
const cors = require('cors')
const path = require('path')
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const { dirname } = require('path');
const PORT = 3000;

app.use(cors())

app.use(express.static(path.join(__dirname, "public")))

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.engine("handlebars", handlebars({defaultLayout: "main"}));
app.set("view engine", "handlebars")


app.use('/', admin)

app.listen(PORT, ()=>{
     console.log("Servidor iniciado em http://127.0.0.1:"+PORT+"/contato");  
})