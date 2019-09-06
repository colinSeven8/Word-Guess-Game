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
let words = [
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
let wordsRandomOrder = randomOrder(words);
let currentIndex = 0;
let currentHiddenWordArray = [];
let currentHiddenWord = "";
let gameOver = false;
let wins = 0;
let currentWord = "";
let guessesRemaining = 12;
let lettersGuessed = "";
let gameAlreadyStarted = false;

main();

//Run all game functionality.
function main() {

    //Keypress initiates game activity
    document.onkeyup = function (event) {

        //See if this is the first keypress event
        if (gameAlreadyStarted === false) {
            //Initialize game data
            init(wordsRandomOrder);
        }

        //This user input is not the first input
        else {
            processInput(event);

            if (gameOver === true) {
                resetGame();
            }
        }
    }
}

//Compares the new user input against past entries to find duplicates
function isDuplicate(letter) {

    for (let i = 0; i < lettersGuessed.length; i++) {

        if (letter === lettersGuessed.charAt(i)) {
            return true;
        }
    }
    return false;
}

//Resets all values for another game to start
function resetGame() {

    wins = 0;
    guessesRemaining = 0;
    gameAlreadyStarted = false;
    lettersGuessed = "";
    currentHiddenWord = "";
    currentHiddenWordArray = [];
    document.querySelector("#letters-guessed").innerHTML = lettersGuessed;
    document.querySelector("#guesses-remaining").innerHTML = guessesRemaining;
    document.querySelector("#wins").innerHTML = 0;
    document.querySelector("#hidden-word").innerHTML = "";
    document.querySelector("#letters-guessed").innerHTML = "None yet!"
}

//Compare input against the currentWord, if correct, update currentWordDashed, if guess is incorrect, update guessesRemaining and the lettersGuessed list. If there are no more guesses left, end game.
function processInput(event) {

    let input = event.key;
    let keyInput = input.toLowerCase();

    if (!isDuplicate(keyInput) && !isTheCorrectLetter(keyInput)) {

        guessesRemaining--;

        if (guessesRemaining === 11) {
            lettersGuessed = keyInput;
        }
        else if (guessesRemaining > 0) {
            lettersGuessed = lettersGuessed + ", " + keyInput;
        }
        else {
            gameOver = true;
        }
    }
    document.querySelector("#letters-guessed").innerHTML = lettersGuessed;
    document.querySelector("#guesses-remaining").innerHTML = guessesRemaining;
}

//See if the current input matches any characters in the current word
function isTheCorrectLetter(letter) {

    let atLeastOneLetterChanged = false;

    for (var i = 0; i < currentWord.length; i++) {

        if (currentWord.charAt(i) === letter) {
            currentHiddenWordArray[i] = letter;
            atLeastOneLetterChanged = true;
        }
    }
    currentHiddenWord = currentHiddenWordArray.toString();
    console.log("currentHiddenWord  " + currentHiddenWord.replace(/,/g, ' '));
    console.log("currentHiddenWordArray  " + currentHiddenWordArray);


    if (atLeastOneLetterChanged) {

        document.querySelector("#hidden-word").innerHTML = currentHiddenWord.replace(/,/g, ' ');
        return true;
    }
    return false;
}

//Normalizes user input, updates the start message and sets the game flag
function updateStartChanges() {

    document.querySelector("#start-msg").innerHTML = "Good Luck!";
    gameAlreadyStarted = true;
}

//Initializing all game data
function init(arr) {

    updateStartChanges();
    initCurrentAndDashedWord(arr);
}

//Initializes the current word and the dashed form of it
function initCurrentAndDashedWord(arr) {

    for (let i = 0; i < arr[currentIndex].trickName.length; i++) {
        currentHiddenWordArray.push("_");
    }

    currentWord = arr[currentIndex].trickName;
    currentHiddenWord = currentHiddenWordArray.join(" ");
    document.querySelector("#wins").innerHTML = 0;
    document.querySelector("#hidden-word").innerHTML = currentHiddenWord;
    document.querySelector("#guesses-remaining").innerHTML = guessesRemaining;
    document.querySelector("#letters-guessed").innerHTML = "None yet!"
}

//Takes an array of objects and returns a randomly ordered object array.
function randomOrder(arr) {

    let currentIndex = arr.length;
    let tempObj = [];
    let rand = 0;

    for (let i = 0; i < arr.length; i++) {
        rand = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        tempObj = arr[currentIndex];
        arr[currentIndex] = arr[rand];
        arr[rand] = tempObj;
    }
    return arr;
}
















































































































































































































































































































































































































































































