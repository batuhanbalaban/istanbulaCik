var express = require('express');
var app = express();
 
app.listen(3000);

// public folders
app.use('/s',express.static('s'));

app.get('/', function(req, res) {
   res.sendfile('./views/index.html');
});

app.post('/', function(req, res) {

	//todo: save form

   res.sendfile('./views/index.html');
});