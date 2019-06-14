
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var movieChoices = ["terminator", "diehard", "predator", "kungfury", "alien", "bladerunner", "starshiptroopers", "starwars", "robocop", "truelies", "commando", "thematrix"];

var guessTotal = 12;
var winsTotal = 0;
var chosenMovie = "";
var incorrectChoice = [];
var movieFilling = [];
var movieBlanks = [];
var movieLetters = [];

var synthwave = document.getElementById("#synth");

function playSynth(){
    synthwave.play();
}

function pauseSynth(){
    synthwave.pause();
}

// ------------------------------------------------------------------------------ //

function wordGuessStart() {
    chosenMovie = movieChoices[Math.floor(Math.random() * movieChoices.length)];

    movieLetters = chosenMovie.split("");
    movieBlanks = movieLetters.length; 

    for(i = 0; i < movieBlanks; i++) {
        movieFilling.push("_");
    }

    document.getElementById("wordblanks").innerHTML = " " + movieFilling.join(" ");
    document.getElementById("guessesremaining").innerHTML = " " + guessTotal;
    document.getElementById("wins").innerHTML = " " + winsTotal;

}
// ------------------------------------------------------------------------------ //

function keyCheck(letter) {
    var correct = false; 

    for(var i = 0; i < movieBlanks; i++) {
        if(chosenMovie[i] == letter) {
            correct = true;
        }
    }

    if(correct) {
        for(var i = 0; i < movieBlanks; i++) {
            if(chosenMovie[i] == letter){
                movieFilling[i] = letter;
            }
        }
    }
    else if(letter == incorrectChoice[i]){
        guessTotal++;
    }
    else{
        incorrectChoice.push(letter);
        guessTotal--;
    }
}

// ------------------------------------------------------------------------------ //

function restart (){
    location.reload();
}

// ------------------------------------------------------------------------------ //

function nextMovie(){
    guessTotal = 12;
    chosenMovie = "";
    incorrectChoice = [];
    movieFilling = [];
    movieBlanks = [];
    movieLetters = [];
}

// ------------------------------------------------------------------------------ //

function winning(){
    if(movieLetters.toString() == movieFilling.toString()){
        winsTotal++;
        alert(chosenMovie + "! Correct!")
        nextMovie();
        wordGuessStart();

        document.getElementById("wins").innerHTML = " " + winsTotal;

    }
    else if (guessTotal === 0) {

        alert("Game Over.")
        restart();
    }

    document.getElementById("wordblanks").innerHTML = "  " + movieFilling.join(" ");
    document.getElementById("guessesremaining").innerHTML = "  " + guessTotal;
}

// ------------------------------------------------------------------------------ //

wordGuessStart();

document.onkeyup = function(event){
    var letterKey = String.fromCharCode(event.keyCode).toLowerCase();

        keyCheck(letterKey);
        winning();

    document.getElementById("guessedletters").innerHTML = " " + incorrectChoice.join(" ");



}





// ------------------------------------------------------------------------------ //

