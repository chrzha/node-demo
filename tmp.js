const http = require('http');
const url = require('url');
const fs = require('fs');

var server = http.createServer(function (request, response) {
   var obj = url.parse(request.url, true);
   var method = request.method;
   switch (method) {
       case 'GET':
           response.write('success');
           response.end();
           break;
       case "POST":
           request.on('data', function (data) {
               console.log(data.toString());
           });
           request.end;
           break;
   }
});
server.listen(8080);

// fs.readFile('app.js', function (error, data) {
//     console.log(data.toString());
// });

