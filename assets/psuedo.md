# Hangman Game PsuedoCode
1. User hits play button
2. A movie is selected from an array of strings
3. A number of blank "_" underscores will appear representing the winning solution
4. Seven "_" will appear in the grave yard.

## Game Play
* A User presses a keyboard key

1. check to see if the user has already guessed this letter
- if the letter is in the solution Array || graveyard ->you already guessed this letter.

ELSE

- loop through the selectedMovie comparing match
*  If the guess matches the position-> assign the guess to the same position(s) in the solution array.

-- if guess is not in selectedMovie array -> push it into theGraveyard

Now check to see if we won or lost