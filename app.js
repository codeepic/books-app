
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//my stuff here
var dbUrl = "library";
var collections = ["books"];

var db = require("mongojs").connect(dbUrl, collections);

app.get('/', routes.index);
// app.get("/blobs", function(req, res){
//   res.send("kurwa");
// });
app.get('/books', function(req, res){
  //do query on a database
  db.books.find({}, function(err, books){
  	if(err) return;
  	var response = {
  			books: books
  	};
  	res.json(response);
  });
});
//my stuff above



http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
