var db = require("../database.js")

exports.books = {};

exports.books.all = function(req, res){
	db.books.find({}, function(err, books){
  	if(err) return;
  	var response = {
  		books: books
  	};
  	res.json(response);
  });
};
