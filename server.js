var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function(req, res){
    res.send('Test Ok!');
})

app.get('/index.html', function(req, res){
  res.sendFile(__dirname + "/" + "index.html");  
})


app.get('/test.html', function(req, res){
  res.sendFile(__dirname + "/" + "test.html");  
})

var server = app.listen(3000, function() {
    var host = server.address().address
    var port = server.address().port

    console.log("Web Server listening at http://%s:%s", host, port)
})

