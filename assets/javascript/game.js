const wordArr = ["Ollie", "Shuvit", "Halfcab", "Kickflip", "Heelflip", "Nollie", "Impossible", "Threeflip", "Darkslide", "Boneless", "Nocomply"];

var randomWord = wordArr[Math.floor(Math.random() * wordArr.length)];

var dashArr = [];

function onStartUp() {

    wordArr.forEach(trick => {
        dashArr.push("_");
    });

}

let wordGame = {
    wordArr: ["Ollie", "Shuvit", "Halfcab", "Kickflip", "Heelflip", "Nollie", "Impossible", "Threeflip", "Darkslide", "Boneless", "Nocomply"],
    randomWord: wordArr[Math.floor(Math.random() * wordArr.length)],
    dashArr: [],

    function onStartUp() {

        wordArr.forEach(trick => {
            dashArr.push("_");
        });
    
    }
};