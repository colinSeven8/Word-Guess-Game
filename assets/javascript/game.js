$(document).ready(function () {

    const wordArr = ["Ollie", "Shuvit", "Halfcab", "Kickflip", "Heelflip", "Nollie", "Impossible", "Threeflip", "Darkslide", "Boneless", "Nocomply"];

    var randomWord = wordArr[Math.floor(Math.random() * wordArr.length)];

    var dashArr = [];

    //Load the dash array with the appropriate number of dashes
    function onStartUp() {
        wordArr.forEach(trick => {
            dashArr.push("_");
        });
    }

}