// Colin Reesor
// Word Guess Game
// game.js

//Auxiliary obect array - Initial, Win, Loss.
let aux = [
    {
        "name": "initial",
        "text": "Can you guess that trick?",
        "image": "assets/images/skater.png",
        "audio": "assets/audio/imnotaloser.mp3"
    },

    {
        "name": "win",
        "text": "You got it!",
        "image": "assets/images/victory.jpg",
        "audio": "assets/audio/karatekid.mp3"
    },

    {
        "name": "loss",
        "text": "Game Over!",
        "image": "assets/images/crash.jpg",
        "audio": "assets/audio/laugh.mp3"
    }
];

//Skate trick object array - Ollie, Shuvit, Kickflip, Heelflip, Nollie, Boneless, Threeflip, Impossible.
let tricks = [
    {
        "trickName": "ollie",
        "trickText": "Yup!",
        "trickVideo": "#"
    },

    {
        "trickName": "shuvit",
        "trickText": "Will ya look at that!",
        "trickVideo": "#"
    },

    {
        "trickName": "kickflip",
        "trickText": "Stuff is happening!",
        "trickVideo": "#"
    },

    {
        "trickName": "heelflip",
        "trickText": "Well done, son!",
        "trickVideo": "#"
    },

    {
        "trickName": "nollie",
        "trickText": "Yup again!",
        "trickVideo": "#"
    },

    {
        "trickName": "boneless",
        "trickText": "You are certainly special!",
        "trickVideo": "#"
    },

    {
        "trickName": "threeflip",
        "trickText": "Whirly-whoopty-woo!",
        "trickVideo": "#"
    },

    {
        "trickName": "impossible",
        "trickText": "Lordy, the possiblities!",
        "trickVideo": "#"
    }
];

//Set up globals.
let tricksRandomOrder = randomOrder(tricks);
let currentIndex = 0;
let currentWordDashed = [];
let gameOver = false;
let wins = 0;
let currentWord = [];
let guessesRemaining = 0;
let lettersGuessed = [];
let gameAlreadyStarted = "false";

//Run all game functionality.
function main() {

    //Keypress initiates game activity
    document.onkeyup = function(event) {

        //Normalize the user input
        let inputLetter = event.key.toLowerCase;

        //See if this is the first keypress event
        updateStartChanges(event);

        //Compare input against the currentWord, if correct, update currentWordDashed, if guess is incorrect, update guessesRemaining and the lettersGuessed list.
        processInput(event);


        document.querySelector("#letters-guessed").innerHTML = inputLetter;

        document.querySelector("#guesses-remaining").innerHTML = guessesRemaining--;
    }

}

function processInput() {
    
}

function updateStartChanges() {

    if (gameAlreadyStarted === "false") {

        document.querySelector("#startMsg").innerHTML = "Good Luck!";

        gameAlreadyStarted = "true";
    }
}
//Initializing an array of randomly ordered "word" objects.
function init(arr) {

   for (let i = 0; i < arr[currentIndex].trickName.length; i++) {
    currentWordDashed[i].
   }
}

//Takes an array of objects and returns a randomly ordered object array.
function randomOrder(arr) {

    let currentIndex = arr.length;
    let tempObj = [];
    let rand = 0;

    for (let i = 0; i < arr.length; i++) {

        rand = Math.floor(Math.random() * currentIndex);

        tempObj.push(arr[currentIndex]);

        arr[currentIndex].push(arr[rand]);

        arr[rand].push(tempObj);
    }
  
    return arr;
}