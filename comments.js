// Create web server
var express = require('express');
var app = express();

// Define the port
var port = process.env.PORT || 3000;

// Define the route
app.get('/', function(req, res) {
    res.send('Hello, world!');
});

// Start the server
app.listen(port, function() {
    console.log('Server started on http://localhost:' + port);
});