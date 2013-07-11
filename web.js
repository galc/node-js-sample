var express 	= require('express');
var fs		= required('fs');

var app = express.createServer(express.logger());
var text = "";

fs.readfile('index.html', function (err,data){
	if (err) throw err;
	console.log(data);
});

app.get('/', function(request, response) {
  response.send(data);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
