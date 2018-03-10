document.addEventListener("DOMContentLoaded", onload);

// url to get book data from server
const BOOK_URL = "/api/json/book/";
// tracks current page of book
var currentPage = 1;
// holds current book
var book;
// holds current page
var page;
// flag if book is started
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

// grab a book page by page number
function getBookPage(book, pageNumber) {
	// iterate the books pages 
	for(var i = 0; i < book.pages.length; i++) {
		// check if page number of book mach target page number
		if(+book.pages[i].page === +pageNumber) {
			// once page is found, log it to the console
			console.log("page:", book.pages[i]);
			// return the page
			return book.pages[i];
		}
	}

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
	//page = getBookPage(book, currentPage);
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
	//page = getBookPage(book, currentPage);
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

// render page
function renderPage() {
	// grab the location the page content shall go
	var node = document.getElementById("page");
	// clear it out (may be a cleaner way to do this)
	node.innerHTML = "";	

	// create a head element
	var head = document.createElement("H3");
	// add the page head property to this
	node.appendChild(head);
	head.innerHTML = page.head;

	// loop through all the pages paragraphs
	for(var i = 0; i < page.paras.length; i++) {
		// create a new paragraph element for each page.para property
		var para = document.createElement("P");
		// add the page text to the paragraph element
		para.innerHTML = page.paras[i]
		// append the paragraph to the page
		node.appendChild(para);
	}

	// loop through pages images
	for(var i = 0; i < page.imgs.length; i++) {
		// create an new img element for each image in page.para property
		var img = document.createElement("IMG");
		// set the src attribute for the image
		img.setAttribute("src", page.imgs[i].src);
		// append the image to the page
		node.appendChild(img);
	}

	// check if the book has been started
	if(!started) {
		// if not started, clear out the nave container (start button)
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
	// grab the book id from the browser's current url string
	var bookId = window.location.href.split("/").pop();
	// make ajax request to get the book with the id 
	ajaxGet(BOOK_URL + bookId, function(res) {
		// set the book flag to be not started
		started = false;
		// set the current page to 1
		currentPage = 1;
		// save the response to the book var
		book = res;
		// fetch the current page
		page = getBookPage(book, currentPage);

		// add listener to start book btn, render page once its clicked
		document.getElementById("start-book-btn")
			.addEventListener("click", renderPage);

	});
		


}
