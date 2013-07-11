var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var text = 'Hello Gal 2';
/*
fs.readfile('index.html', function (err,text){
	if (err) throw err;
	console.log(text);
});
*/

app.get('/', function(request, response) {
  response.send(text);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
