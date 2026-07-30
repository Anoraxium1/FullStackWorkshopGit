var express = require('express'); // Used for routing
var app = express();
var http = require('http').Server(app); // Used to provide http functionality
app.use(express.static(__dirname + '/www'));

app.use('/', require('./pages'));
app.use('/', require('./auth'));

let server = http.listen(3000, function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log("My First Nodejs Server!");
    console.log("Server listening on: " + host + " port: " + port);
});