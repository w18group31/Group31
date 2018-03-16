document.addEventListener("DOMContentLoaded", onload);

// dummy user id to simulate user taking quiz
const FAUX_USER_ID = 676;

// url to get quiz data from server
const QUIZ_URL = "/api/json/quiz/";
const SUBMIT_URL = "/api/json/quizSubmit/";
// tracks current page of book


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

// ajax function to post data to the server
function ajaxPost(url, payload, callback) {
	// log the url endpoint request is being sent to
	console.log(url);
	// create new ajax request object
	var req = new XMLHttpRequest();
	// get request to url that is async
	req.open("POST", url, true);
	req.setRequestHeader('Content-Type', 'application/json');
	// add listener for the response
	req.addEventListener("load", function(event) {
		// save ther response to a var (this is json)
		console.log("ajax response:", req);
		//res = JSON.parse(req.responseText);
		// log the resoponse to the console
		//console.log("ajax response:", res);
		// perform this callback function with the response once its recieved
		callback(req);
	});

	// send request to server
	req.send(JSON.stringify(payload));
}

function startQuiz(quiz){
	var currentQuestion = 0;
	// holds current question
	var question = quiz.questions[currentQuestion];
	// flag if quiz is started
	var started = false;
	var preMissed = false;

	var results = {};

	results.quizId = quiz.ID;
	results.questionCount = quiz.questions.length;
	results.correctAnswers = 0;
	results.missedQuestions = [];	

	// render question
	function renderQuestion() {


		// select id page to add quiz	
		var node = d3.select("#page");

		// select all elements with class of 'question'
		var q = node.selectAll(".question")
			// bind quiz question to the elements in selection
			.data([question]);

		// select all elements with class of 'choice'
		var c = node.selectAll(".choice")
			// bind all choices for question to selection
			.data(question.choices);


		// perform this when a new question occures
		q.enter()
			// append a header 3
			.append("h3")
			// give header a class of question
			.attr("class", "question")
			// begin the element with zero transparency
			.style("opacity", 0)
			// add the question and question number to the element's html
			.html(function(d) { return (currentQuestion + 1) + ") " + d.question; } )
			// transition the elments transparency to 100 % over .75 seconds
			.transition()
			.duration(750)
			.style("opacity", 1)

		
		// perform this when a new choice occurs
		c.enter()
			// append a div
			.append("div")
			// give div a class of choice
			.attr("class", "choice col-sm-6",)
			// begin the div with a zero transparency
			.style("opacity", 0)
			// add choice and letter (a, b, c, d...) to div's html
			.html(function(d) { 
				var i = question.choices.map(function(e) { return e.txt } ).indexOf(d.txt)
				var letter = "abcdefgh".slice(i, i + 1);
				return letter + ") " + d.txt; 
			})
			// add on click function to div
			.on("click", function(d) { 
				quiz.questions[currentQuestion].response = d.txt;
				checkAnswer();
			})
			// transition the elments transparency to 100 % over .75 seconds
			.transition()
			.duration(750)
			.style("opacity", 1)


		// perform this when updating questions
		q.transition()
			// over .75 seconds, fade the text to zero transparancy
			.duration(750)
			.style("opacity", 0)
			// once at 0 transparency, perform the following
			.on("end", function() {
				// update the html of the text, then return the transparncey to 100 %
				d3.select(this)
					.html(function(d, i) { return (currentQuestion + 1) + ") " + d.question; } )
					.transition()
					.duration(750)
					.style("opacity", 1)
			});

		// perform this when updating choices
		c.transition()
			// over .75 seconds, fade the text to zero transparancy
			.duration(750)
			.style("opacity", 0)
			// once at 0 transparency, perform the following
			.on("end", function() {
				// update the html of the div, then return the transparncey to 100 %
				d3.select(this)
					.html(function(d) { 
						var i = question.choices.map(function(e) { return e.txt } ).indexOf(d.txt)
						var letter = "abcdefgh".slice(i, i + 1);
						return letter + ") " + d.txt; 
					})
					// add on click function to div
					.on("click", function(d) { 
						quiz.questions[currentQuestion].response = d.txt;
						checkAnswer();
					})
					.transition()
					.duration(750)
					.style("opacity", 1)
			});

		// perform this when updating questions (say q3 has 4 choices, buth q4 only has 2 choices)
		c.exit()
			// over .75 seconds, fade the text to zero transparancy
			.transition()
			.duration(750)
			.style("opacity", 0)
			// reomve the element from the dom
			.remove();


		// check if the quiz has been started
		if(!started) {
			//Hide the book info if visible
			if($('#quizInfo').is(":visible")){
				$('#quizInfo').hide();
			}
			// if not started, clear out the nav container (start button)
			document.getElementById("nav").innerHTML = "";
			started = true;
		}

	}


	function checkAnswer() {
		if(quiz.questions[currentQuestion].response == quiz.questions[currentQuestion].answer) {
			//****************************************************************************************************
			//****************     Alerts aren't touch friendly should change to modals       ********************
			//****************************************************************************************************
			results.correctAnswers++;
			alert("Very Good");
			preMissed = false;
			nextQuestion();
		} else {
			if(!preMissed){
				alert("Please Try Again");
				preMissed = true;
			}
			else{
				preMissed = false;
				results.missedQuestions.push(currentQuestion);
				alert("Not Quite But Its Okay");
				nextQuestion();
			}
		}
	}


	function nextQuestion() {
		// incriment current page by one

		// if page number is greater than page count, set curr page to page count
		if(currentQuestion >= quiz.questions.length - 1) {
			endQuiz();
		}
		else{
			currentQuestion++;
			question = quiz.questions[currentQuestion];
			// call to render the new page
			renderQuestion();
		}

	}

	function endQuiz(){
		console.log(results);
		ajaxPost(SUBMIT_URL + FAUX_USER_ID + "/" + quiz.ID, results, function(res){
			if(res.responseText === "success"){
				renderFinish("success");
			}
			else{
				renderFinish("error");
			}
		 });
	}

	//Renders the book success screen and allows user to return to book select
	function renderFinish(status){
		//Possibly use status to change render if server failed to respond
		$("#page").html('');
		$('#page').append(
			$("<h1>").text('Great Job!!'),
			$("<button>").text("Read More").on('click', function(){
				window.location.href="/bookSelect";
			})
		);

	}

	renderQuestion();
}


function onload() {
	// grab the quiz id from the browser's current url string
	var quizId = window.location.href.split("/").pop();
	// make ajax request to get the quiz with the id 
	ajaxGet(QUIZ_URL + quizId, function(res) {
		var quiz = res;
		document.getElementById("start-quiz-btn")
			.addEventListener("click", function (){startQuiz(quiz)});

	});
		
}
