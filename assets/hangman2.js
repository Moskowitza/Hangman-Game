var movies = ['psycho', 'scream', 'halloween']; //movies is comprised of strings
// Pick a movie to play
//we are entering guesses from key entry
//guesses in the global scope
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];//good old alphabet
var guesses = [];
var selectedMovie=[];
var solution=[];
// document.onload =function(){reset()}
function play() {
    guesses = [];
    graveyard = [];
    //pick movie
    selectedMovie = randomMovie(movies);
    solution = getBlanks(selectedMovie);
    populateBoard(solution);
    document.getElementById("guess").innerHTML =" ";
    document.addEventListener("keyup", pushguesses);
    
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
function populateBoard(blanks) {
    document.getElementById("blanks").innerHTML = blanks.join(" ");
}
function pushguesses () {
    let guess = event.key;
    let check=guesses.indexOf(guess)
    if (check === -1) {
        guesses.push(guess)
        document.getElementById("guess").innerHTML = "you Guessed "+ guess.toLowerCase();
    }else{
        document.getElementById("guess").innerHTML = "You Already Guessed "+ guess.toLowerCase();
    }
    checkSolution();
}
function checkSolution(){
    console.log("check solution")
    //selectedmovie is an array of letters
    //compare guess to each letter in selectedMovie
    for(i=0;i < selectedMovie.length;i++){
        if (guesses[guesses.length-1] == selectedMovie[i]){
            solution[i]=guesses[guesses.length-1];
            populateBoard(solution);
            console.log("a match")
        }else{
            graveyard.push(guess);
            populateBoard(solution);
            console.log("to the graveyard");
        }
    }
}
function reset() {
    var rightCounter = moviePick.length; //when the right counter is equal to 0 you win
    var wrongCounter = 10; //start at 10 everytime and count to zero
    document.getElementById("answer").innerHTML = "";
    document.getElementById("blanks").innerHTML = "";
    document.getElementById("guesses").innerHTML = "";
    document.getElementById("rightCounter").innerHTML = "";
    document.getElementById("graveyard").innerHTML = "";
    document.getElementById("wrongCounter").innerHTML = "";
    document.getElementById("poster").innerHTML = "";
    document.getElementById("sound").innerHTML = "";
    document.getElementById("guess").innerHTML ="Click Start to play"
}