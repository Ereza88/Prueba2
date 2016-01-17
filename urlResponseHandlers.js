var path = require('path');
var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer');


function index(req, res) {
    console.log("Manipulador de peticion 'index' fue llamado.");
    res.sendFile(path.join(__dirname, './public', 'index.html'));
}

function home(req, res) {
    console.log("Manipulador de peticion 'home' fue llamado.");
    res.sendFile(path.join(__dirname, './public', 'home.html'));
}

function registrar(req, res) {
    console.log("Manipulador de peticion 'registrar' fue llamado.");
    res.sendFile(path.join(__dirname, './public', 'registrar.html'));
  
}



exports.index = index;
exports.home = home;
exports.registrar = registrar;


