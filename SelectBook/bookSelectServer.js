/* Group 31
 * 03/06/2018
 * 
 */

// require js file that simulates a database
var DB = require("./fauxDB.js");

var express = require('express');

var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 4037);

app.use(express.static('public'));

//When bookSelect is visited the book choices will be fecthed
//and then they will be displayte to the user
app.get('/bookSelect', function(req, res){
	context = {};
	//Driver to create a list of books to display
	fillBooks(context);
	//Script to create event handler for when book icons are clicked
	context.jscript = ['bookSelectScript.js'];
	res.render('bookSelect', context); 
});

//Selecting a book will send a get request back to the current page with the bookId appended
//Which this will handle by redirection the the render page for the book
app.get('/bookSelect/:bookId', function(req, res){
	res.redirect('/renderBook/' + req.params.bookId);
});


app.get('/renderBook/:bookId', function(req, res){
	context = {};
	context.bookId = req.params.bookId;

	// query book db for book id, then call callback function for response
	DB.select.book(req.params.bookId, function(dbResult) { 
		context.book = dbResult;

		//Currently displays the bookId that was selected
		res.render('renderBookContext', context);
	});
});


// api endpoint for JSON book data
app.get("/api/json/book/:bookId", function(req, res) {
	// query db for book id
	DB.select.book(req.params.bookId, function(dbResult) { 
		// send the JSON result as the response
		res.send(dbResult);
	});
});


app.use(function(req,res){
  res.status(404);
  res.render('404');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.type('plain/text');
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});

//Driver function to fill book choices with placeholders
function fillBooks(context){
	context.bookChoices = [ 
		{
			"ID" : 184,
			"icon" : "http://via.placeholder.com/300x300"
		},
		{
			"ID" : 154,
			"icon" : "http://via.placeholder.com/300x300"
		},
		{
			"ID" : 174,
			"icon" : "http://via.placeholder.com/300x300"
		},
		{
			"ID" : 75,
			"icon" : "http://via.placeholder.com/300x300"
		},
		{
			"ID" : 114,
			"icon" : "http://via.placeholder.com/300x300"
		},
		{
			"ID" : 100,
			"icon" : "http://via.placeholder.com/300x300"
		}
	];
}
