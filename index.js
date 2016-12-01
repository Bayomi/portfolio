/*

//Defining express framework and other libraries variables
var express = require("express"),
    app     = express(),
    qs = require('querystring'),
    bs = require( "body-parser")


//CORS middleware - Allow Cross Origin requests
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*'); // NOT SAFE FOR PRODUCTION
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  
    next();
}

//use the allowCrossDomain function and bodyparsing
    app.use(allowCrossDomain);


app.use(express.static(__dirname));

//app.use(bodyParser()); is now deprecated
app.use(bs.json());
app.use(bs.urlencoded({
  extended: true
}));


console.log('Request received');
console.log('Server running at port: 9999');

app.listen(9999);
*/
///

var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname));
/*
app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});
*/

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


