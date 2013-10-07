var moment = require('moment');
var mongoose = require('mongoose');
var express = require('express');
var app = express();

mongoose.connect('mongodb://nodejitsu:d14696a62c2f9e0e134d9594d57a44e9@paulo.mongohq.com:10070/nodejitsudb3370222912');

var itemSchema = mongoose.Schema({
    who: String,
    where: String,
    when: String,
    why: String,
    what: String,
    how: String
});
var item = mongoose.model('Item', itemSchema);

app.listen(3000);

// public folder for static files...
app.use('/s', express.static('s'));
app.use(express.bodyParser());

app.get('/', function(req, res) {
   res.sendfile('./views/index.html');
});

app.post('/', function(req, res) {

	var time = moment().format('YYYY-MM-DD HH:mm');
	var filledForm = new item({ who: req.body.name, 
                          where: req.body.location,
                          when: time,
                          why: req.body.description,
                          what: req.body.obstacleType,
                          how: ''});

	filledForm.save(function (err, result) {
	  console.log(result._id);  
	});

    res.send('Thank you...');
});

app.use(function(req, res){ res.send('Hello'); });