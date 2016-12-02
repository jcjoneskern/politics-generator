var express = require('express');
var app = express();
var quote = require("./module");

app.use(express.static(__dirname + '/public'));

app.get('/api/quote', function (req, res) {
  res.send(quote.randomDennis());
});

app.get("/api/quotes", function(req, res) {
  res.send(quote.peasant);
});

app.get('/api/king', function (req, res) {
  res.send(quote.randomArthur());
});

app.get("/api/kings", function(req, res) {
  res.send(quote.quietude);
});

var server = app.listen(3000, function () {
  var port = server.address().port;
  console.log('Example app listening at http://localhost:%s', port);
});
