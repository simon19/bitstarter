var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var fs = require ('fs');
    var buf = new Bufer (fs.readFileSync('index.html', 'utf-8'));
    Response.send(buf.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
