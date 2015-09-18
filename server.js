var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Root Directory route.');
});

app.get('/example', function (req, res) {
  res.send('Alternate Route.');
});

var server = app.listen(8000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
