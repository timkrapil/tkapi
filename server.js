var express = require('express');
var app = express();



var server = app.listen(process.env.PORT, process.env.IP, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});


app.get('/', function (req, res) {
  res.send('foo!');
});