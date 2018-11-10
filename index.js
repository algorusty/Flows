'use strict';

var http = require('http');

var server = http.createServer(function(req, res) {
res.writeHead(200{});
res.end('Hi everybody!');
});
server.listen(8080);

var fs = require('fs');
var path = require('path');

exports.get = function(event, context, callback) {
  var contents = fs.readFileSync(`public${path.sep}index.html`);
  var result = {
    statusCode: 200,
    body: contents.toString(),
    headers: {'content-type': 'text/html'}
  };

  callback(null, result);
};
