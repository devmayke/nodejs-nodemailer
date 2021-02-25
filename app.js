const express = require('express');
const app = express();
const admin = require('./routes/admin');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());



app.engine("handlebars", handlebars({defaultLayout: "main"}));
app.set("view engine", "handlebars")

app.use('/', admin)
app.listen(3000);




