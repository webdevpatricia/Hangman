
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



//array of chistmas words

var christmasWords = ["Advent","angels","announcement","bells","Bethlehem","Blitzen","candles","candy",
"candy canes","cards","cedar","celebrate","ceremonies","chimney","Christmas cookies","Christmas tree","cold",
"Comet","cranberry sauce","crowds","Cupid","Dancer","Dasher","December","decorations","dolls","Donner","dressing","eggnog",
"elves","family reunion","festival","fir","Frosty","fruitcake","gift boxes","gifts","goodwill","greetings","ham","happy",
"holiday","holly","holy","icicles","jolly","lights","lists","merry","miracle","mistletoe","New Year","Noel","North Pole",
"pageant","parades","party","pie","pine","plum pudding","poinsettia","Prancer","presents","pumpkin pie","punch",
"red/green","reindeer","ribbon","Rudolph","sacred","sales","sauce","Scrooge","season","sled","sleigh bells","snowflakes",
"spirit","St. Nick","stand"];

var alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];



// get a new word
var randomWord = christmasWords[Math.floor(Math.random()*christmasWords.length)];
console.log(randomWord);


// display underscores for each letter in the word
	var word = ""
	for (var i = 0; i < randomWord.length; i++) {
	word = word + "_ "
    document.getElementById("word").innerHTML = word;
	};

document.onkeyup = function(event){
var lettersGuessed = event.key;
// console.log(lettersGuessed);
for (var i = 0; i < randomWord.length; i++) {
  if (lettersGuessed === randomWord[i]) {
   var index = lettersGuessed.indexOf(i);
   wordArray = word.split();
   wordArray[i].pop;
   wordArray.append()


  }
}
//document.getElementById("guess").innerHTML= event.key;
}

// 	guesses = [];

// function checkWord(){
// 	document.getElementById("word").innerHTML("you did it!");
// }



//create guesses list
// var guesses = function () {
//     myGuess = document.getElementById('guesses');
//     letters = document.createElement('ul');

//     for (var i = 0; i < alphabet.length; i++) {
//       letters.id = 'alphabet';
//       list = document.createElement('li');
//       list.id = 'letter';
//       list.innerHTML = alphabet[i];
//       console.log(list.innerHTML);
//       // check();
//       // myButtons.appendChild(letters);
//       // letters.appendChild(list);
//     }
//   }

  // onKeyUp Function
  //  check = function () {
  //   list.onKeyUp = function () {
  //     var guess = (this.innerHTML);
  //     this.setAttribute("class", "active");
  //     this.onKeyUp = null;
  //     for (var i = 0; i < newWord.length; i++) {
  //       if (newWord[i] === guess) {
  //         guesses[i].innerHTML = guess;
  //         counter += 1;
  //       } 
  //     }
  //     var j = (word.indexOf(guess));
  //     if (j === -1) {
  //       guessesLeft -= 1;
  //       showGuessesLeft.innerHTML=" " + guessesLeft;
  //       if(guessesLeft <1) {
  //       	showGuesses.innerHTML = "Game Over";
  //       }
  //       animate();
  //     } else {
  //       comments();
  //     }
  //   }
  // }

// var correctLetters  = [];
// while(currentWord.indexOf(i.letters) != 1){
// 	i = currentWord.indexOf(i.letters) + 1;
// 	document.getElementById("currentWord").innerHTML = i;
// }
// console.log(i);

//guessed letters display
  //  result = function () {
  //   wordHolder = document.getElementById('hold');
  //   correct = document.createElement('ul');

  //   for (var i = 0; i < word.length; i++) {
  //     correct.setAttribute('id', 'my-word');
  //     guess = document.createElement('li');
  //     guess.setAttribute('class', 'guess');
  //     if (word[i] === "-") {
  //       guess.innerHTML = "-";
  //       space = 1;
  //     } else {
  //       guess.innerHTML = "_";
  //     }

  //     geusses.push(guess);
  //     wordHolder.appendChild(correct);
  //     correct.appendChild(guess);
  //   }
  // }
//reset function

//calculate wins
// function calcWins(){
// 	var numWins = 0;
// 	numWins = numWins + 1;
// };

//starting word display


//reveal letters display

//number of guesses remining
// function calcRemGuesses(){
// 	var numGuesses = 12;
// 	numGuesses = numGuesses + 1;
// };


	