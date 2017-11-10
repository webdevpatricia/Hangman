
var myCanvas = document.getElementById("gallows");
var myContext = myCanvas.getContext("2d");
var centerX = 0;
var centerY = 0;
var radius = 10;

//draw gallows
function drawGallows(mx,my,lx,ly) {
		myContext.beginPath();
		myContext.moveTo(mx,my);
		myContext.lineTo(lx,ly);
		myContext.lineWidth = 15;
		myContext.strokeStyle = "maroon";
		myContext.stroke();

	}

	drawGallows(15,0,200,0);
	drawGallows(15,0,15,20);
	drawGallows(200,0,200,300);
	drawGallows(195,145,115,175);

//draw the rope
	myContext.fillStyle ="maroon";
	myContext.fillRect(15,20,2,8);

//draw noose
	myContext.save();
	myContext.translate(myCanvas.width /19, myCanvas.height / 4);
	myContext.scale(1,1);
	myContext.beginPath();
    myContext.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    myContext.restore();

 //apply styling to the noose
	myContext.lineWidth = 2;
	myContext.strokeStyle = "maroon";
	myContext.stroke();

//press any key

//array of chistmas words
var myWord = document.getElementById("currentWord");
var myWordContext = myWord.getContext("2d");

var christmasWords = ["Advent","angels","announcement","bells","Bethlehem","Blitzen","candles","candy",
"candy canes","cards","cedar","celebrate","ceremonies","chimney","Christmas cookies","Christmas tree","cold",
"Comet","cranberry sauce","crowds","Cupid","Dancer","Dasher","December","decorations","dolls","Donner","dressing","eggnog",
"elves","family reunion","festival","fir","Frosty","fruitcake","gift boxes","gifts","goodwill","greetings","ham","happy",
"holiday","holly","holy","icicles","jolly","lights","lists","merry","miracle","mistletoe","New Year","Noel","North Pole",
"pageant","parades","party","pie","pine","plum pudding","poinsettia","Prancer","presents","pumpkin pie","punch",
"red/green","reindeer","ribbon","Rudolph","sacred","sales","sauce","Scrooge","season","sled","sleigh bells","snowflakes",
"spirit","St. Nick","stand"]

var randomWord = christmasWords[Math.floor(Math.random()*christmasWords.length)];

for (var i = 0; i < randomWord.length; i++) {
	var newWord = ""
	document.getElementById("currentWord")
    document.currentWord.innerHTML = newWord(randomWord.charAt(i));
	}

//reset function

//calculate wins

//starting word display


//reveal letters display

//number of guesses remining

//guessed letters display


	