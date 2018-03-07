// ensure all dom content and libraries are loaded before running
document.addEventListener("DOMContentLoaded", onload);

// returns a simulated book file in JSON format
// book pages are stored in an array

var currentPage = 3;
var book; 
function getBook() {
	var book = {
		bookId: 187,
		title: "Test Book For Page Turn",
		subject: "Children",
		author: "Cindy Lou Who",
		year: 1937,
		pages: [
			{
				page: 1,
				head: "The Cat Jumped Over the Hat",
				paras: [
					"There once was a little cat that jumped over a hat. Once the cat got over the hat, it tripped over a baseball bat",
				],
				imgs: [
					{ src: "http://www.photosforclass.com/download/pixabay-2024026", },
				],
				audio: [],
			},
			{
				page: 2,
				head: "The Dog Walked in the Fog",
				paras: [
					"There once was a big dog that went for a long walk in the fog. The dog could not see through the fog and it stepped on a frog.",
					"There once was a big dog t",
				],
				imgs: [
					{ src: "http://www.photosforclass.com/download/pixabay-2029284" },
				],
				audio: [],
			},
			{
				page: 3,
				head: "The Goat Rowed a Boat",
				paras: [
					"The goat rowed a small wooden boat across the archduke's moat. All of a sudden the boad decided to no longer float and the goat had to put on his life coat.",
				],
				imgs: [
					{ src: "http://www.photosforclass.com/download/pixabay-297028", },
				],
				audio: [],

			},
			{
				page: 4,
				head: "A Second Cat Jumped Over the Hat",
				paras: [
					"There was a second little cat that jumped over the same hat. Once the second cat got over the same hat, it tripped over the same baseball bat.",
				],
				imgs: [
					{ src: "http://www.photosforclass.com/download/pixabay-30746", },
				],
				audio: [],
			},
			{
				page: 5,
				head: "The Frog Walked in the Fog",
				paras: [
					"There once was a little frog that went for a long walk in the fog. The frog could not see through the fog and it hopped into a dog.",
				],
				imgs: [
					{ src: "http://www.photosforclass.com/download/pixabay-2740933", },
				],
				audio: [],
			},
        	]
    	}

	// log the book file to the console
    	console.log("book", book);

    	// return the JSON book file
    	return book
}


// takes book and page number as parameters
// finds page number in book's page array
// returns the page as JSON

function nextButton() {
    	currentPage = currentPage + 1;
	if (currentPage > 5) {
		currentPage = 5;
	}

	var page1= getBookPage(book, currentPage);

	renderPage(page1);
}



function backButton() {
    	currentPage = currentPage - 1;
    	if (currentPage < 1) {
        	currentPage = 1;
    	}
    	var page1=getBookPage(book, currentPage);
    	renderPage(page1);
}


function getBookPage(book, pageNumber) {
    	for (var i = 0; i < book.pages.length; i++) {
        	if (+book.pages[i].page === +pageNumber) {
            		console.log("page", book.pages[i]);
            		return book.pages[i];
        	}
    	}
}

// takes a page as parameter
// will put the page's paras and images in the document's 'page' div
function renderPage(page) {
	// select dive with id of 'page'
    	var node = document.getElementById("page");

	// select all h3 elements
	var heads = node.getElementsByTagName("H3");

	// if there are not any h3 elements make one	
	if(!(heads.length)) {
		var head = document.createElement("H3");
		node.appendChild(head);
	} else {
		var head = heads[0];
	}

	// add the page head text to the h1 element
	head.innerHTML = page.head;

	// select all p elements
	var paras = node.getElementsByTagName("P");

	
	while(paras.length > page.paras.length) {
		node.removeChild(paras[0]);	
	}


	// add p elements as needed until there is enough to match the page para count
	while(paras.length < page.paras.length) {
		var para = document.createElement("P")
		node.appendChild(para);
		paras = node.getElementsByTagName("P");
	}

	// add each of the page's paras to each of p elements
	for(var i = 0; i < page.paras.length; i++) {
		paras[i].innerHTML = page.paras[i];
	
	}

	// select all img elements
	var imgs = node.getElementsByTagName("IMG");

	for(var i = 0; i < imgs.length; i++) {
		node.removeChild(imgs[i])
	}


	// iterator to add needed images
	var i = 0;	

	// add img elements as needed until there is enought to mach the page img count
	while(i < page.imgs.length) {
		var img = document.createElement("IMG")
		node.appendChild(img);
		imgs = node.getElementsByTagName("IMG");
		i++;
	}

	// add each of the page's img srcs to each of the img elements
	for(var i = 0; i < page.imgs.length; i++) {
		var width = node.parentElement.clientWidth * .15;
		imgs[i].setAttribute("src", page.imgs[i].src);
		imgs[i].setAttribute("width", width);
		
	
	}
	

	




	
	
	
}


// once dom content is loaded, functions below will run
function onload() {
	// fetch a book file
	book = getBook();
	// go to page 3 of book
	var page = getBookPage(book, currentPage)
    	renderPage(page);
}// JavaScript source code
