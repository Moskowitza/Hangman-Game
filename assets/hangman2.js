var movies = ['psycho', 'scream', 'halloween']; //movies is comprised of strings
// Pick a movie to play
//we are entering guesses from key entry
//guesses in the global scope
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];//good old alphabet
let guesses = [];
// document.onload =function(){reset()}
function play() {
    guesses = [];
    //pick movie
    let selectedMovie = randomMovie(movies);
    console.log("Selected Movie : " + selectedMovie);
    let solution = getBlanks(selectedMovie);
    console.log("solution:" + solution)
    populateBoard(solution);
    document.getElementById("guess").innerHTML =" ";
    document.addEventListener("keyup", pushguesses)
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


// hangman = function () {

//     var movieName = [];  //movie name is an empty array
//     for (i = 0; i < moviePick.length; i++) {  //create an array as long as the length of the pick, fill it with "_"
//         movieName[i] = "_";
//     }
//     document.getElementById("blanks").innerHTML = movieName;//display the empty dashes on the screeen
//     var movieLetters = moviePick.split("");//movieLetters is the moviePick represented as the array, it is as long as movieName but has letters instead of dashes.

//     var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];//good old alphabet
//     var wrongLetters = alphabet.filter(function (x) { //wrong Letters is an array
//         return movieLetters.indexOf(x) < 0;
//     });
//     var wrong = []; //wrong letters is alphabet minus the movieLetters
//     for (i = 0; i < wrongLetters.length; i++) { //remember we only have 10 guesses before you lose
//         wrong[i] = "_";
//     }
//     document.getElementById("graveyard").innerHTML = wrong; //put the Graveyard up on the screen as empty dashes


//     //TIME TO PLAY

//     var guesses = [];//this variable is outside 
//     var rightCounter = moviePick.length; //when the right counter is equal to 0 you win
//     var wrongCounter = 10; //start at 10 everytime and count to zero


//     document.onkeyup = function (event) {
//         var userGuess = event.key;
//         guesses = [];
//         guesses.push(userGuess);
//         document.getElementById("guesses").innerHTML = guesses; //displays guesses on the screen
//         letterChecker = function () {
//             for (i = 0; i < moviePick.length; i++) {    //move through the movieLetters Array one space at a time
//                 if (movieLetters[i] === userGuess) {        // if the userguess is the same as a value,
//                     movieName[i] = userGuess;                //  replace the value "_" with the userGuess at index of i
//                     document.getElementById("blanks").innerHTML = movieName;  // change display answer
//                     rightCounter--;
//                     document.getElementById("rightCounter").innerHTML = rightCounter;  // change display answer
//                 }
//             }
//         }
//         graveYard = function () {
//             for (i = 0; i < wrongLetters.length; i++) {   //move through the wrong letters array one space at a time
//                 if (wrongLetters[i] === userGuess && userGuess[i] !== userGuess) {        // if the userguess is the same as a value,
//                     wrong[i] = userGuess; // replace the value "_" with the userGuess at index of i
//                     document.getElementById("graveyard").innerHTML = wrong;
//                     wrongCounter--;
//                     document.getElementById("wrongCounter").innerHTML = wrongCounter;  // change display answer

//                 }
//             }
//         }
//         determineWin = function () {
//             if (rightCounter === 0) {
//                 if (moviePick == 'scream') {  //it would be nice to simplify this if movie is an object
//                     document.getElementById("poster").innerHTML = "<img src='assets/images/scream.jpeg'>";
//                     document.getElementById("sound").innerHTML = "<source src='assets/sounds/scream.mp3'></source>";
//                 }
//                 else if (moviePick == 'psycho') {
//                     document.getElementById("poster").innerHTML = "<img src='assets/images/psycho.jpeg'>";
//                     document.getElementById("sound").innerHTML = "<source src='assets/sounds/psycho.mp3'></source>";
//                 }
//                 else {
//                     document.getElementById("poster").innerHTML = "<img src='assets/images/halloween.jpeg'>";
//                     document.getElementById("sound").innerHTML = "<source src='assets/sounds/halloween.mp3'></source>";
//                 }
//             }
//         }
//         determineLose = function () {
//             if (wrongCounter <= 0) {
//                 // document.getElementById("poster").innerHTML = "you just lost!";
//                 document.getElementById("poster").innerHTML = "<img src='assets/images/hangman.jpeg'>";
//                 document.getElementById("sound").innerHTML = "<source src='assets/sounds/trombone.mp3'></source>";

//             }
//         }
//         letterChecker(userGuess); //call these functions and pass in the user guess
//         graveYard(userGuess);
//         determineWin(rightCounter);
//         determineLose(wrongCounter);
//     }
// }
// function reset() {
//     // var rightCounter = moviePick.length; //when the right counter is equal to 0 you win
//     // var wrongCounter =10; //start at 10 everytime and count to zero
//     // document.getElementById("answer").innerHTML = "";
//     document.getElementById("blanks").innerHTML = "";
//     document.getElementById("guesses").innerHTML = "";
//     document.getElementById("rightCounter").innerHTML = "";
//     document.getElementById("graveyard").innerHTML = "";
//     document.getElementById("wrongCounter").innerHTML = "";
//     document.getElementById("poster").innerHTML = "";
//     document.getElementById("sound").innerHTML = "";
// }    