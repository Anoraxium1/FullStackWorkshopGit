var express = require('express'); // Used for routing
var app = express();
var http = require('http').Server(app); // Used to provide http functionality

app.use(express.static(__dirname + '/www'));