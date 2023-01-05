const express = require("express");
const fs = require("fs");
const app = express();

const verify = require('./verify')
const PORT = 4300 ;
app.get('/',verify, (req,res) => {
    fs.readFile('./HomePage.html','utf8', (err,data) =>{
        err? res.end("File Not Found")&&console.error(err) : res.end (data);
    })
});
app.get('/HomePage.html', verify, (req,res) => {
    fs.readFile('./HomePage.html','utf8', (err,data) =>{
        err? res.end("File Not Found")&&console.error(err) : res.end (data);
    })
} );
app.get('/OurServices.html', verify, (req,res) => {
    fs.readFile('./OurServices.html','utf8', (err,data) =>{
        err? res.end("File Not Found")&&console.error(err) : res.end (data);
    })
});
app.get('/ContactUs.html', verify, (req, res) => {
    fs.readFile('./ContactUs.html','utf8', (err,data) =>{
        err? res.end("File Not Found")&&console.error(err) : res.end (data);
    })
});
app.listen(PORT, (req,res) => {
    console.log (`server running : port ${PORT}...`)
});