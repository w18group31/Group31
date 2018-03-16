document.addEventListener("DOMContentLoaded", onload);

// url to get book data from server
const BOOK_URL = "/api/json/book/";

var bookId;


// ajax function to get data from server
function ajaxGet(url, callback) {
	// log the url endpoint request is being sent to
	console.log(url)
	// create new ajax request object
	var req = new XMLHttpRequest();
	// get request to url that is async
	req.open("GET", url, true);

	// add listener for the response
	req.addEventListener("load", function(event) {
		// save ther response to a var (this is json)
		res = JSON.parse(req.responseText);
		// log the resoponse to the console
		console.log("ajax response:", res);
		// perform this callback function with the response once its recieved
		callback(res);
	});

	// send request to server
	req.send();
}

function startBook(book){
	// tracks current page of book
	var currentPage = 0;
	// holds current page
	var page = book.pages[0];
	// flag if book is started
	var started = false;

	// function to advance page
	function nextButton() {
		// incriment current page by one
		currentPage++;
		// if page number is greater than page count end the book
		if(currentPage > book.pages.length - 1) {
			endBook();
		}
		else{
			renderPage();	
		}
		
	}

	// function to go back a page
	function backButton() {
		// decrement current page by one
		currentPage--;
		// if page count is less then one, set curr page to first page
		if(currentPage < 1) {
			currentPage = 1;
		}
		renderPage();
	}

	// render page
	function renderPage() {



		$('.pageContent').html('');
		$('#pageHeader').append(
			$('<h3>').text(book.pages[currentPage].head)
		);

		book.pages[currentPage].paras.forEach(function(val, index, arr){
			$('#pageText').append(
				$('<p>').text(val)
			)
		});

		book.pages[currentPage].imgs.forEach(function(val, index, arr){
			$('#pageImg').append(
				$('<img>').attr('src', val.src)
					.addClass("img-responsive pageImg")
			)
		});

		// check if the book has been started
		if(!started) {
			//Hide the book info
			if($('#bookInfo').is(":visible")){
				$('#bookInfo').hide();
			}

			//Create the turn page buttons
			$("#backBtn").append(
				$('<p>').text("<")
					.addClass('button')
					.on('click', backButton)
			);
			$("#nextBtn").append(
				$('<p>').text(">")
					.addClass('button')
					.on('click', nextButton)
			);
			// set stared flag to true
			started = true;
		}
	}

	function endBook(){
		var quizId = book.quizzes[Math.floor(Math.random() * book.quizzes.length)];
		window.location.assign('/renderQuiz/' + quizId);
	}
	renderPage();
}



function onload() {
	// grab the book id from the browser's current url string
	bookId = window.location.href.split("/").pop();
	// make ajax request to get the book with the id 
	ajaxGet(BOOK_URL + bookId, function(res) {
		// add listener to start book btn, render page once its clicked
		document.getElementById("start-book-btn")
			.addEventListener("click", function (){startBook(res)});

	});
		


}
