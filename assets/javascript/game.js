// Global Variables ===============================================================

var wordOptions = ['mitsubishi', 'honda', 'toyota', 'jaguar', 'mercedes', 'nissan', 'ford', 'cheverolet', 'infiniti', 'tesla', 'lexus'];
var selectedWord = '';
var lettersinWord = [];
var numBlanks = 0;
var blanksnSucesses = [];
var wrongGuesses = [];

var winCounter = 0;
var lossCounter = 0;
var guessesLeft = 9;


// Functions ===============================================================

function startNew () {
    selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];

    lettersinWord = selectedWord.split('');

    numBlanks = lettersinWord.length;

    guessesLeft = 9;
    wrongGuesses = [];
    blanksnSucesses = [];

    for (i=0; i < numBlanks; i++) {
        blanksnSucesses.push('_');
    }

    $('#blankSpaces').text(blanksnSucesses.join(' '));
    $('#guessesLeft').text(guessesLeft);
    $('#winCounter').text(winCounter);
    $('#lossCounter').text(lossCounter);
    $('#wrongGuesses').text(wrongGuesses);

    console.log(selectedWord);
    console.log(lettersinWord);
    console.log(numBlanks);
    console.log(blanksnSucesses);
    
};


function compareLetters(letter) {
    
    var letterCheck = false;

    for (i=0; i<numBlanks; i++) {
        if (selectedWord[i] == letter) {
            letterCheck = true;
        }
    }

    if (letterCheck) {
        for (i=0; i<numBlanks; i++) {
            if (selectedWord[i] == letter) {
                blanksnSucesses[i] = letter;
            }
        }
    }

    else {
        wrongGuesses.push(letter);
        guessesLeft--;
        $('#guessesLeft').text(guessesLeft);
    }

};


function endRound() {
    console.log(' Win Count: '+ winCounter + " Loss Count: "+ lossCounter + " Guesses Left: "+ guessesLeft)

    $('#wrongGuesses').text(wrongGuesses);
    $('#blankSpaces').text(blanksnSucesses.join(' '));

    if (lettersinWord.toString() == blanksnSucesses.toLocaleString()) {
        winCounter++;
        alert('You won!')
        $('#winCounter').text(winCounter);
        startNew();
    }

    if (guessesLeft == 0) {
        lossCounter++;
        alert('You lost!');
        $('#lossCounter').text(lossCounter);
        startNew();
    }

}


// Main Process ===============================================================
$(document).ready(startNew());

document.onkeyup = function(event) {
    lettersGuessed = event.key;
    compareLetters(lettersGuessed);
    endRound();
}




// Random ===============================================================

var test = ['abcdefghiklmnop'];   
var testString = ''; // Value has been set to a string

function testing () {
    testString = test[0].split('');  // First index of the array for the variable 'test' has been split into separate string letters as another array

    // testString is now equal to that new array of letters ['a', 'b', 'c', etc]

    console.log(testString[2]) // value sould be 'c'
};

testing();

