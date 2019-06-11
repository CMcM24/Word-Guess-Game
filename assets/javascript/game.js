
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var movieChoices = ["terminator", "diehard", "predator", "kungfury", "alien", "bladerunner"];

var guessTotal = 10;
var winsTotal = 0;
var chosenMovie = "";
var movieFilling = [];
var movieBlanks = [];
var movieLetters = [];



function movies() {
    chosenMovie = movieChoices[Math.floor(Math.random() * words.length)];

    movieLetters = chosenMovie.split("");
    movieBlanks = movieLetters.length; 

    for(i = 0; i < movieBlanks; i++) {
        movieFilling.push("_");
    }

    document.getElementById("wordblanks") = (" " + movieFilling.join(" "));

    console.log(chosenMovie);
    console.log(movieLetters);
    console.log(movieBlanks);
    console.log(movieFilling);
}


function input(guess) {
    var correctLetter = false; 
 
    for (var i = 0; i < movieBlanks; i++) {
        if (chosenMovie[i] == guess) {
            correctLetter = true;
        }
    }

    if(correctLetter) {
        for
    }
}

function musicAndPics() {

    if(chosenMovie == moviesChoices[0]){
        
    }
    
}

movies();