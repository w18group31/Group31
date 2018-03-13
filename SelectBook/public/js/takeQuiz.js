document.addEventListener("DOMContentLoaded", onload);

// url to get quiz data from server
const QUIZ_URL = "/api/json/quiz/";
// tracks current page of book
var currentQuestionPage = 1;
// holds current quiz
var quiz;
// holds current question
var question;
// flag if quiz is started
var started = false;

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

// function to advance page
function nextButton() {
	// incriment current page by one
	currentPage += 1;
	// if page number is greater than page count, set curr page to page count
	if(currentPage > book.pages.length) {
		currentPage = book.pages.length;
	}

	// fetch the new page
	page = book.pages.find(pages => pages.page === currentPage);
	// call to render the new page
	renderPage();
}

// function to go back a page
function backButton() {
	// decrement current page by one
	currentPage -= 1;
	// if page count is less then one, set curr page to first page
	if(currentPage < 1) {
		currentPage = 1;
	}

	// fetch the new page
	page = book.pages.find(pages => pages.page === currentPage);
	// call to render the new page
	renderPage();
}

// add a button to the document
function appendButton(container, text, onclickFunc) {
	// grab the location the button will go
	var node = document.getElementById(container);
	// create a new button element
	var btn = document.createElement("button");
	// set the button properties
	btn.setAttribute("type", "button");
	btn.setAttribute("class", "btn btn-default");
	btn.innerHTML = text;

	// add the button to the document
	node.appendChild(btn);
	// set listener to perform the function that was passed 
	btn.addEventListener("click", onclickFunc);
}

// render question
function renderQuestion() {
	// grab the location the page content shall go
	var node = document.getElementById("page");
	//Hide the book info if visible
	if($('#bookInfo').is(":visible")){
		$('#bookInfo').hide();
	}
	// clear it out (may be a cleaner way to do this)
	node.innerHTML = "";	

	// create a head element
	var head = document.createElement("H3");
	// add the page head property to this
	node.appendChild(head);
	head.innerHTML = question.question;

	// loop through all the questions choices
	for(var i = 0; i < question.choices.length; i++) {
		// create a new div element for each choice property
		var div = document.createElement("DIV");
		// add the choicee text to the div element
		div.innerHTML = question.choices[i].txt;
		// append the paragraph to the page
		node.appendChild(div);
	}

	// check if the quiz has been started
	if(!started) {
		// if not started, clear out the nav container (start button)
		document.getElementById("nav").innerHTML = "";
		// call function to append back button to nav container
		appendButton("nav", "< Back", backButton)
		// call function to append next button to nav container
		appendButton("nav", "Next >", nextButton)
		// set stared flag to true
		started = true;
	}
}

function onload() {
	// grab the quiz id from the browser's current url string
	var quizId = window.location.href.split("/").pop();
	// make ajax request to get the quiz with the id 
	ajaxGet(QUIZ_URL + quizId, function(res) {
		// set the quiz flag to be not started
		started = false;
		// set the current question to 1
		currentQuestion = 0;
		// save the response to the quiz var
		quiz = res;
		// fetch the current question
		question = quiz.questions[currentQuestion];


		// add listener to start book btn, render page once its clicked
		document.getElementById("start-quiz-btn")
			.addEventListener("click", renderQuestion);

	});
		


}
