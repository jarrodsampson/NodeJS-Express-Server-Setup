// require express in file
var express = require('express');
// initialize
var app = express();

// set up route
app.get('/', function (req, res) {
  res.send('Root Directory route.');
});

// set up as many as you need to
app.get('/example', function (req, res) {
  res.send('Alternate Route.');
});

// set server to listen to port 8000
var server = app.listen(8000, function () {
  var host = server.address().address;
  var port = server.address().port;

  // return port number and url for browser
  console.log('Example app listening at http://%s:%s', host, port);
});
