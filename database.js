var dbUrl = "library";
var collections = ["books"];
var db = require("mongojs").connect(dbUrl, collections);
//exports.db = db; //this exports db object
module.exports = db; //this exports db variable