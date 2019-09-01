// Colin Reesor
// Word Guess Game
// game.js

//Auxiliary Objects
const Initial= {
    "Text" : "Can you guess that trick?",
    "Picture" : "assets/images/skater.png",
    "Sound" : "assets/audio/imnotaloser.mp3"
};

const Victory = {
    "Text" : "You got it!",
    "Picture" : "assets/images/victory.jpg",
    "Sound" : "assets/audio/karatekid.mp3"
};

const GameOver = {
    "Text" : "Game Over!",
    "Picture" : "assets/images/crash.jpg",
    "Sound" : "assets/audio/laugh.mp3"
};

//Movie Clip Objects
const Ollie = {
    "trickName" : "ollie",
    "trickText" : "Yup!",
    "trickVideo" : "#",
};

const Shuvit = {
    "trickName" : "shuvit",
    "trickText" : "Will ya look at that!",
    "trickVideo" : "#",
};

const Kickflip = {
    "trickName" : "kickflip",
    "trickText" : "Stuff is happening!",
    "trickVideo" : "#",
};

const Heelflip = {
    "trickName" : "heelflip",
    "trickText" : "Well done, son!",
    "trickVideo" : "#",
};

const Nollie = {
    "trickName" : "nollie",
    "trickText" : "Yup again!",
    "trickVideo" : "#",
};

const Boneless = {
    "trickName" : "boneless",
    "trickText" : "You are certainly special!",
    "trickVideo" : "#",
};

const Threeflip = {
    "trickName" : "threeflip",
    "trickText" : "Whirly-whoopty-woo!",
    "trickVideo" : "#",
};

const Impossible = {
    "trickName" : "impossible",
    "trickText" : "Lordy, the possiblities!",
    "trickVideo" : "#",
};

//Ollie, Shuvit, Kickflip, Heelflip, Nollie, Boneless, Threeflip, Impossible