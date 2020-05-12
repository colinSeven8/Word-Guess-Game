// Colin Reesor
// Word Guess Game
// game.js

//Auxiliary object array - Initial, Win, Loss.
let aux = [
  {
    text: "Can you guess that trick?",
    msg: "Good luck!",
    image: "assets/images/skater.png",
    audio: "assets/audio/imnotaloser.mp3",
  },
  {
    text: "You got it!",
    image: "assets/images/victory.jpg",
  },
  {
    text: "Game Over!",
    image: "assets/images/crash.jpg",
  },
];

//Skate trick object array - Ollie, Shuvit, Kickflip, Heelflip, Nollie, Boneless, Threeflip, Impossible.
let tricks = [
  {
    trickName: "ollie",
    trickText: "Yup!",
    trickVideo: "https://media.giphy.com/media/1BgqELRJaEQqufiGmz/giphy.gif",
  },
  {
    trickName: "shuvit",
    trickText: "Will ya look at that!",
    trickVideo: "https://media.giphy.com/media/YVYWXf3bHcNnQHRPUU/giphy.gif",
  },
  {
    trickName: "kickflip",
    trickText: "Stuff is happening!",
    trickVideo: "https://media.giphy.com/media/5UxHLH17XsFm8iJesT/giphy.gif",
  },
  {
    trickName: "heelflip",
    trickText: "Well done, son!",
    trickVideo: "https://media.giphy.com/media/i4bTcbeNVI8evqzLS5/giphy.gif",
  },
  {
    trickName: "nollie",
    trickText: "Yup again!",
    trickVideo: "https://media.giphy.com/media/8FM8xhCSZjKyafqZy3/giphy.gif",
  },
  {
    trickName: "boneless",
    trickText: "You are certainly special!",
    trickVideo: "https://media.giphy.com/media/kyWekBsvsWLz0BMkko/giphy.gif",
  },
  {
    trickName: "threeflip",
    trickText: "Whirly-whoopty-woo!",
    trickVideo: "https://media.giphy.com/media/GYt8vu7nSsdLa/giphy.gif",
  },
  {
    trickName: "impossible",
    trickText: "Lordy, the possiblities!",
    trickVideo: "https://media.giphy.com/media/l0IulSRkjIYAaCHCM/giphy.gif",
  },
];

//Set up globals.
let tricksRandomOrder = randomOrder(tricks);
let currentIndex = 0;
let currentHiddenTrickArray = [];
let currentHiddenTrick = "";
let gameOver = false;
let wins = 0;
let currentTrick = "";
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
      init(tricksRandomOrder);
    }

    //This user input is not the first input
    else {
      processInput(event);

      if (gameOver === true) {
        //Determines if it was a win or a loss
        resetGame();
      }
    }
  };
}

//Initializing all game data
function init(arr) {
  updateStartChanges();
  initCurrentAndDashedTrick(arr);
}

//Normalizes user input, updates the start message and sets the game flag
function updateStartChanges() {
  document.getElementById("headline").innerHTML = aux[0].text;
  document.getElementById("start-msg").innerHTML = aux[0].msg;
  document.getElementById("myAudio").play();
  console.log("updateStartChanges()");
  gameAlreadyStarted = true;
}

//Initializes the current word and the dashed form of it
function initCurrentAndDashedTrick(arr) {
  for (let i = 0; i < arr[currentIndex].trickName.length; i++) {
    currentHiddenTrickArray.push("_");
  }

  currentTrick = arr[currentIndex].trickName;
  currentHiddenTrick = currentHiddenTrickArray.join(" ");
  console.log("initCUrrentAndDashedTruick()");
  document.getElementById("headline-wins").innerHTML = "Wins";
  document.getElementById("wins").innerHTML = wins;
  document.getElementById("hidden-trick").innerHTML = currentHiddenTrick;
  document.getElementById("number-of-guesses-remaining").innerHTML = "Number of Guesses Remaining";
  document.getElementById("guesses-remaining").innerHTML = guessesRemaining;
  document.getElementById("letters-already-guessed").innerHTML = "Letters Already Guessed";
  document.getElementById("letters-guessed").innerHTML = "None yet!";
  document.getElementById("game-graphic").src = tricks[currentIndex].trickVideo;
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

//Resets all values for another game to start after determining whether or not it was a win.
function resetGame() {
  updateWinCount();
  tricksRandomOrder = randomOrder(tricks);
  guessesRemaining = 12;
  gameAlreadyStarted = false;
  lettersGuessed = "";
  currentHiddenTrick = "";
  currentHiddenTrickArray = [];
  document.getElementById("letters-guessed").innerHTML = lettersGuessed;
  document.getElementById("guesses-remaining").innerHTML = guessesRemaining;
  document.getElementById("letters-guessed").innerHTML = "None yet!";
  gameOver = false;
}

//adjusts the win count according to win status
function updateWinCount() {
  console.log("updateWinCount " + guessesRemaining);
  //Some guesses remaining, so it was a win!
  if (guessesRemaining > 0) {
    wins++;
    console.log("wins " + wins);
    console.log("tricks[currentIndex].trickText ", tricks[currentIndex].trickText);
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("headline").innerHTML = aux[1].text;
    document.getElementById("hidden-trick").innerHTML = tricks[currentIndex].trickText;
    document.getElementById("start-msg").innerHTML = "Good job!";
    document.getElementById("game-graphic").src = "assets/images/victory.jpg";
  }
  //...it was a loss
  else {
    wins = 0;
    document.getElementById("headline").innerHTML = aux[2].text;
    document.getElementById("start-msg").innerHTML = "Press any key to try again!";
    document.getElementById("game-graphic").src = "assets/images/crash.jpg";
  }
}

//Compare input against the currentWord, if correct, update currentWordDashed, if guess is incorrect, update guessesRemaining and the lettersGuessed list. If there are no more guesses left, end game.
function processInput(event) {
  let input = event.key;
  let keyInput = input.toLowerCase();

  if (!isDuplicate(keyInput) && !isTheCorrectLetter(keyInput)) {
    guessesRemaining--;

    if (guessesRemaining === 11) {
      console.log("processInput 11 " + guessesRemaining);
      lettersGuessed = keyInput;
    } else if (guessesRemaining > 0) {
      console.log("processInput > 0 " + guessesRemaining);
      lettersGuessed = lettersGuessed + ", " + keyInput;
    } else {
      console.log("processInput == 0 " + guessesRemaining);
      gameOver = true;
    }
  }
  document.getElementById("letters-guessed").innerHTML = lettersGuessed;
  document.getElementById("guesses-remaining").innerHTML = guessesRemaining;
}

//See if the current input matches any characters in the current word
function isTheCorrectLetter(letter) {
  let atLeastOneLetterChanged = false;

  for (var i = 0; i < currentTrick.length; i++) {
    if (currentTrick.charAt(i) === letter) {
      currentHiddenTrickArray[i] = letter;
      atLeastOneLetterChanged = true;
    }
  }
  //Pass the hidden word as it is at this point and check if the word was solved
  currentHiddenTrick = currentHiddenTrickArray.toString();

  //If at least one of the letters guessed was correct, display the current hidden word to the user and return true
  if (atLeastOneLetterChanged) {
    document.getElementById(
      "hidden-trick"
    ).innerHTML = currentHiddenTrick.replace(/,/g, " ");
    if (currentHiddenTrick.replace(/,/g, "") === currentTrick) {
      gameOver = true;
    }

    return true;
  }
  return false;
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
