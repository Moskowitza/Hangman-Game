//our Globabl Variables
const movies = ['psycho', 'scream', 'halloween']; //movies is comprised of strings
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];//good old alphabet
var guesses = []; //user guesses should be the solution guesses + graveyard , so concat these
var selectedMovie = []; //random selection from movie array
var solutionArr = []; // correct guesses, to match against selectedMovie
var graveyard = [];//wrong guesses, when it doesn't contain any more blanks you lose

// document.onload =function(){reset()}
function play() {
    selectedMovie = randomMovie(movies); //select a movie
    console.log(selectedMovie)
    graveyard = new Array(7); //clear out graveyard
    solutionArr = getBlanks(selectedMovie);//repopulate solution Array
    graveyard = getBlanks(graveyard);
    populate("solutionArr", solutionArr);//the div ID and array have the same name
    populate("graveyard", graveyard);//the div ID and array have the same name
    document.getElementById("info").innerHTML = " ";
    document.addEventListener("keyup", handleGuess);
}
function populate(id, arr) {
    document.getElementById(id).innerHTML = " ";
    return document.getElementById(id).innerHTML = arr.join(" ");
}
function randomMovie(array) {
    let choice = Math.floor(Math.random() * array.length);
    return array[choice].split("");
}
//create spaces for each letter
getBlanks = function (answer) {
    let spaces = []
    for (i = 0; i < answer.length; i++) {
        let tile = document.createElement("div" + i).innerHTML = "_";
        spaces.push(tile)
    }
    return spaces;
}

function handleGuess() {
    let guess = event.key;
    let alreadyGuessed = solutionArr.concat(graveyard)
    let checkGuess = alreadyGuessed.indexOf(guess) //check if already guessed
    //if a new letter is guessed
    if (checkGuess === -1) {
        checkSolution(guess)
        //if we already guessed
        document.getElementById("info").innerHTML = "New Guess " + guess.toLowerCase();
        checkWinLose()
    } else {
        document.getElementById("info").innerHTML = "You Already Guessed " + guess.toLowerCase();
    }
    return checkWinLose();
}
function checkSolution(guess) {
    console.log("check solution " + guess)
    //selectedmovie is an array of letters
    //compare guess to each letter in selectedMovie
    if (selectedMovie.indexOf(guess) === -1) {
        graveyard.pop();
        graveyard.unshift(guess);
        console.log("to the graveyard " + graveyard);
    } else {
        for (i = 0; i < selectedMovie.length; i++) {
            if (selectedMovie[i] == guess) {
                solutionArr[i] = guess;
                console.log("a match " + solutionArr)
            }
        }
    }
    populate("solutionArr", solutionArr);
    populate("graveyard", graveyard)
    
}
function checkWinLose() {
    if (selectedMovie.join() == solutionArr.join()) {
        document.getElementById("info").innerHTML = "You Win";
        document.removeEventListener("keyup", handleGuess)
    } else if (graveyard.indexOf("_") === -1) {
        document.getElementById("info").innerHTML = "You lose";
        document.removeEventListener("keyup", handleGuess)
    }
}

function reset() {
    document.getElementById("info").innerHTML = "";
    document.getElementById("solutionArr").innerHTML = "";
    document.getElementById("graveyard").innerHTML = "";

}