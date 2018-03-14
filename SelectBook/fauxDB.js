var quizes = [
	{
		ID: 927,
		questions: [
			{ 
				question: "What did kind of animal jumped over a bat?",
				choices: [ 
					{ 
						txt: "Cat", 
					},
					{
						txt: "Dog", 
					},
					{
						txt: "Mouse", 
					},
					{
						txt: "Frog",
					},
				],
				answer: "Cat",
			},
			{
				question: "What action did the dog perform?",
				choices: [ 
					{ 
						txt: "Jump", 
					},
					{ 
						txt: "Sit", 
					},
					{ 
						txt: "Walk", 
					},
					{ 
						txt: "Bark" 
					},
				],
				answer: "Walk",
			},
			{
				question: "How many cats were in the story?",
				choices: [ 
					{ 
						txt: "One", 
					},
					{ 
						txt: "Three", 
					},
					{ 
						txt: "Two", 
					},
					{ 
						txt: "Zero" 
					},
				],
				answer: "Two",
			},
			{
				question: "What animal did the frog hop on?",
				choices: [ 
					{ 
						txt: "Cat", 
					},
					{ 
						txt: "Frog", 
					},
					{ 
						txt: "Lizzard", 
					},
					{ 
						txt: "Dog" 
					},
				],
				answer: "Dog",
			},
			{
				question: "Did the lamb row in a boat?",
				choices: [ 
					{ 
						txt: "Yes", 
					},
					{ 
						txt: "No", 
					},
				],
				answer: "Yes",
			},
		],
	},
	{
		ID: 929,
		questions: [
			{ 
				question: "What animal stepped on a frog?",
				choices: [ 
					{ 
						txt: "Lamb", 
					},
					{
						txt: "Fish", 
					},
					{
						txt: "Dog", 
					},
					{
						txt: "Lizzard",
					},
				],
				answer: "Dog",
			},
			{
				question: "What color was the lamb?",
				choices: [ 
					{ 
						txt: "Yellow", 
					},
					{ 
						txt: "White", 
					},
					{ 
						txt: "Grey", 
					},
					{ 
						txt: "Tan" 
					},
				],
				answer: "Grey",
			},
			{
				question: "How many dogs were in the story?",
				choices: [ 
					{ 
						txt: "One", 
					},
					{ 
						txt: "Three", 
					},
					{ 
						txt: "Two", 
					},
					{ 
						txt: "Zero" 
					},
				],
				answer: "One",
			},
			{
				question: "How many Lizzards were in the story?",
				choices: [ 
					{ 
						txt: "One", 
					},
					{ 
						txt: "Two", 
					},
					{ 
						txt: "Three", 
					},
					{ 
						txt: "Zero" 
					},
				],
				answer: "Zero",
			},
			{
				question: "Did the dog walk in fog?",
				choices: [ 
					{ 
						txt: "Yes", 
					},
					{ 
						txt: "No", 
					},
				],
				answer: "Yes",
			},
		],
	},
	{
		ID: 933,
		questions: [
			{
				question: "What color was the second cat?",
				choices: [ 
					{ 
						txt: "Orange", 
					},
					{ 
						txt: "Black", 
					},
					{ 
						txt: "White", 
					},
					{ 
						txt: "Green", 
					},
				],
				answer: "Orange",
			},
			{
				question: "How many cats were in the story?",
				choices: [ 
					{ 
						txt: "One", 
					},
					{ 
						txt: "Three", 
					},
					{ 
						txt: "Two", 
					},
					{ 
						txt: "Zero" 
					},
				],
				answer: "Two",
			},
			{
				question: "What object did the lamb row?",
				choices: [ 
					{ 
						txt: "Boat", 
					},
					{ 
						txt: "Train", 
					},
					{ 
						txt: "Car", 
					},
					{ 
						txt: "Bike" 
					},
				],
				answer: "Boat",
			},
			{
				question: "Did the two cats trip over the same hat?",
				choices: [ 
					{ 
						txt: "Yes", 
					},
					{ 
						txt: "No", 
					},
				],
				answer: "Yes",
			},
			{
				question: "What color of shirt was the dog wearing?",
				choices: [ 
					{ 
						txt: "Blue", 
					},
					{ 
						txt: "Red", 
					},
					{ 
						txt: "White", 
					},
					{ 
						txt: "Green", 
					},
				],
				answer: "Red",
			},
		],
	},
]






var books = [
	{
		ID: 184,
		title: "Test Book One Eight Four",
		subject: "Cats",
		author: "Randy Roo Coon",
		year: 2008,
		quizes: [ 927, 929, 933, ],
		pages: [
			{
				page: 1,
				head: "The Cat Jumped Over the Hat",
				paras: [
					"There once was a little cat that jumped over a hat. Once the cat got over the hat, it tripped over a baseball bat",
				],
				imgs: [
					{ src: "/imgs/cat001.png", },
					//{ src: "http://www.photosforclass.com/download/pixabay-2024026", },
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
					{ src: "/imgs/dog001.png", },
					//{ src: "http://www.photosforclass.com/download/pixabay-2029284" },
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
					{ src: "/imgs/goat001.png", },
					//{ src: "http://www.photosforclass.com/download/pixabay-297028", },
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
					{ src: "/imgs/cat002.png", },
					//{ src: "http://www.photosforclass.com/download/pixabay-30746", },
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
					{ src: "/imgs/frog001.png", },
					//{ src: "http://www.photosforclass.com/download/pixabay-2740933", },
				],
				audio: [],
			},
        	]
    	},
	{
		ID: 154,
		title: "Test Book One Five Four",
		subject: "Dogs",
		author: "Lizzy Lou Loo",
		year: 2009,
		quizes: [ 927, 929, 933, ],
		pages: [
			{
				page: 1,
				head: "The Cat Jumped Over the Hat",
				paras: [
					"There once was a little cat that jumped over a hat. Once the cat got over the hat, it tripped over a baseball bat",
				],
				imgs: [
					{ src: "/imgs/cat001.png", },
					//{ src: "http://www.photosforclass.com/download/pixabay-2024026", },
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
					{ src: "/imgs/dog001.png", },
					//{ src: "http://www.photosforclass.com/download/pixabay-2029284" },
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
					{ src: "/imgs/goat001.png", },
					//{ src: "http://www.photosforclass.com/download/pixabay-297028", },
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
					{ src: "/imgs/cat002.png", },
					//{ src: "http://www.photosforclass.com/download/pixabay-30746", },
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
					{ src: "/imgs/frog001.png", },
					//{ src: "http://www.photosforclass.com/download/pixabay-2740933", },
				],
				audio: [],
			},
        	]
    	},
	{
		ID: 174,
		title: "Test Book One Seven Four",
		subject: "Lambs",
		author: "Bambi Boo Boo",
		year: 1987,
		quizes: [ 927, 929, 933, ],
		pages: [
			{
				page: 1,
				head: "The Cat Jumped Over the Hat",
				paras: [
					"There once was a little cat that jumped over a hat. Once the cat got over the hat, it tripped over a baseball bat",
				],
				imgs: [
					{ src: "/imgs/cat001.png", },
					//{ src: "http://www.photosforclass.com/download/pixabay-2024026", },
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
					{ src: "/imgs/dog001.png", },
					//{ src: "http://www.photosforclass.com/download/pixabay-2029284" },
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
					{ src: "/imgs/goat001.png", },
					//{ src: "http://www.photosforclass.com/download/pixabay-297028", },
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
					{ src: "/imgs/cat002.png", },
					//{ src: "http://www.photosforclass.com/download/pixabay-30746", },
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
					{ src: "/imgs/frog001.png", },
					//{ src: "http://www.photosforclass.com/download/pixabay-2740933", },
				],
				audio: [],
			},
        	]
    	},
	{
		ID: 75,
		title: "Test Book Seventy Five",
		subject: "Skunk",
		author: "Skinny Skunky Skunk",
		year: 1937,
		quizes: [ 927, 929, 933, ],
		pages: [
			{
				page: 1,
				head: "The Cat Jumped Over the Hat",
				paras: [
					"There once was a little cat that jumped over a hat. Once the cat got over the hat, it tripped over a baseball bat",
				],
				imgs: [
					{ src: "/imgs/cat001.png", },
					//{ src: "http://www.photosforclass.com/download/pixabay-2024026", },
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
					{ src: "/imgs/dog001.png", },
					//{ src: "http://www.photosforclass.com/download/pixabay-2029284" },
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
					{ src: "/imgs/goat001.png", },
					//{ src: "http://www.photosforclass.com/download/pixabay-297028", },
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
					{ src: "/imgs/cat002.png", },
					//{ src: "http://www.photosforclass.com/download/pixabay-30746", },
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
					{ src: "/imgs/frog001.png", },
					//{ src: "http://www.photosforclass.com/download/pixabay-2740933", },
				],
				audio: [],
			},
        	]
    	},
	{
		ID: 114,
		title: "Test Book One One Four",
		subject: "Worm",
		author: "Hermie the Worm",
		year: 1999,
		quizes: [ 927, 929, 933, ],
		pages: [
			{
				page: 1,
				head: "The Cat Jumped Over the Hat",
				paras: [
					"There once was a little cat that jumped over a hat. Once the cat got over the hat, it tripped over a baseball bat",
				],
				imgs: [
					{ src: "/imgs/cat001.png", },
					//{ src: "http://www.photosforclass.com/download/pixabay-2024026", },
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
					{ src: "/imgs/dog001.png", },
					//{ src: "http://www.photosforclass.com/download/pixabay-2029284" },
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
					{ src: "/imgs/goat001.png", },
					//{ src: "http://www.photosforclass.com/download/pixabay-297028", },
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
					{ src: "/imgs/cat002.png", },
					//{ src: "http://www.photosforclass.com/download/pixabay-30746", },
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
					{ src: "/imgs/frog001.png", },
					//{ src: "http://www.photosforclass.com/download/pixabay-2740933", },
				],
				audio: [],
			},
        	]
    	},
	{
		ID: 100,
		title: "Test Book One Hundred",
		subject: "Lizzard",
		author: "Larry the Lizzard",
		year: 1937,
		quizes: [ 927, 929, 933, ],
		pages: [
			{
				page: 1,
				head: "The Cat Jumped Over the Hat",
				paras: [
					"There once was a little cat that jumped over a hat. Once the cat got over the hat, it tripped over a baseball bat",
				],
				imgs: [
					{ src: "/imgs/cat001.png", },
					//{ src: "http://www.photosforclass.com/download/pixabay-2024026", },
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
					{ src: "/imgs/dog001.png", },
					//{ src: "http://www.photosforclass.com/download/pixabay-2029284" },
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
					{ src: "/imgs/goat001.png", },
					//{ src: "http://www.photosforclass.com/download/pixabay-297028", },
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
					{ src: "/imgs/cat002.png", },
					//{ src: "http://www.photosforclass.com/download/pixabay-30746", },
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
					{ src: "/imgs/frog001.png", },
					//{ src: "http://www.photosforclass.com/download/pixabay-2740933", },
				],
				audio: [],
			},
        	]
    	},
];


exports.select = {
	book: function(tgtID, callback) {
		for(var i = 0; i < books.length; i++) {
			if(books[i].ID == tgtID) {
				var dbResponse = books[i];
				callback( dbResponse );
			}
		}
	},
	quiz: function(tgtID, callback) {
		for(var i = 0; i < quizes.length; i++) {
			if(quizes[i].ID == tgtID) {
				var dbResponse = quizes[i];
				callback( dbResponse );
			}
		}
	},
}
