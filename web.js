var express = require('express');

var app = express.createServer(express.logger());
var fs = require('fs');
var stext = fs.readFileSync('index.html');


app.get('/', function(request, response) {
  response.send(stext.toString('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
