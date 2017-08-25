var PORT = 4000;
var API_URL = 'http://recipepuppy.com/api';

var express = require('express');
var request = require('request');

var app = express();
app.use('/api', function (req, res) {
  var url = API_URL + req.url;
  req.pipe(request(url)).pipe(res);
});

app.listen(process.env.PORT || PORT);
console.log('PROXY SERVER LISTEN ON ' + PORT);