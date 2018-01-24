var express = require('express');
require('dotenv').config({path : '/meanstack/.env'});
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
//employees
mongoose.connect(process.env.mydb)
    .connection
        .on('connected',function(){
            console.log("successfully connected to the database ")
        })
        .on('error',function(err){
            console.log("database error "+ err)
        })
var app = express();
//var port = 3000 ;
app.get('/', function(req, res){
    res.send("venki...");
});
var router = require('../routes/routes.js');
//middleware 
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());
app.use('/api/students', router);
app.listen(process.env.myport, function(){
    console.log("server is running on port  "+ process.env.myport);
})