//our Globabl Variables
const movies = ['psycho', 'scream', 'halloween']; //movies is comprised of strings
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];//good old alphabet
var guesses = []; //user guesses should be the solution guesses + graveyard , so concat these
var selectedMovie=[]; //random selection from movie array
var solution=[]; // solution, to match against selectedMovie
var graveyard=[];//empty array to hold wrong guesses
// document.onload =function(){reset()}
function play() {
    selectedMovie = randomMovie(movies); //select a movie
    graveyard = new Array(7); //clear out graveyard
    solutionArr = getBlanks(selectedMovie);//repopulate solution Array
    graveyard = getBlanks(graveyard);
    populate("solutionArr");//the div ID and array have the same name
    // populate("graveyard", graveyard);//the div ID and array have the same name
    // document.getElementById("info").innerHTML =" ";
    // document.addEventListener("keyup", handleGuess);
}
function populate(name) {
    console.log("in populate our name"+name)
    document.getElementById( name ).innerHTML = name.join(" ");
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

function pushguesses () {
    let guess = event.key;
    let checkGuess=guesses.indexOf(guess) //check if already guessed
    let checkSolution=solution.indexOf(guess)
    let checkGraveyard=graveyard.indexOf(guess)
    if (checkGuess === -1 && checkSolution === -1 ) {
        guesses.push(guess)
        document.getElementById("guess").innerHTML = "you Guessed "+ guess.toLowerCase();
    }else if (checkGraveyard===-1){
        graveyard.push(guess)
        document.getElementById("guess").innerHTML = "Wrong Guess "+ guess.toLowerCase();
    } else{
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