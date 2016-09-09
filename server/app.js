console.log('this.js sourced');

var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});

app.listen(process.env.PORT || 3000, function() {
  console.log('listening on', http.address().port);
});

// base url
app.get('/', function (req, res){
  console.log('base url hit');
  // send index file from resolved path
  res.sendFile(path.resolve('public/index.html'));
}); //end base url

// set up public folder
app.use(express.static('public'));

app.post('/texter', urlencodedParser, function(req, res) {
  console.log('texter hit', req.body);
  res.send('you sent a ' + req.body.creature);
});
