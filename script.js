console.log("hello script js");

var secretWord = [ 'c' , 'a', 't' ];
var letterToSearchFor;

var correctBank = [ ];
var correctGuess = false;
var wrongCounter = 0;
var displayMsg;
var wordFound;

var symbolBank = [ '(' , '╯' , 'ರ' , '~' , 'ರ' , '）' , '╯' , '︵' , '┻' , '━' , '┻' ];
var symbolDisplay = [ ];

var gameOver = false;


var inputHappened = function(userInput){
    if (gameOver == true ) {
        display("Game Over");
    } else {
        wordFound = checkForSecretWord(userInput);
        var correctBankWord = updateCorrectBank(userInput);
        display(correctBankWord);
    }
};

// Game Logic /////////////////
// check for user input //////////////////
var checkForSecretWord = function (letterToSearchFor) {
    for (var i = 0; i < secretWord.length; i++ ) {
        if( secretWord[i] === letterToSearchFor ){
            valueFound = true;
            //console.log("Letter Found!");
            return true;
        }
    }
    return false;
};


// if correct ////////////////
// add letter to correctBank.push()
// displayMsg = correctBank [ ]

var updateCorrectBank = function (correctAnswer) {
    if ( wordFound === true) {
        correctBank.push(correctAnswer);
        displayMsg = correctBank.toString();
        return displayMsg;
    } else {
        updateSymbolBank();
    }
};

// if wrong /////////////////
// add to number of wrong guesses wrongCounter = wrongCounter + 1
// take first letter of symbol bank & put it into end of symbolDisplay
// var newSymbol = symbolBank.shift()
// Display this updated array of symbolDisplay
// symbolDisplay.push(newSymbol)

var updateSymbolBank = function () {

    if ( wrongCounter == 11 ) {
        gameOver = true;
    } else {
        gameOver = false;
        wrongCounter = wrongCounter + 1;
        var newSymbol = symbolBank.shift();
        symbolDisplay.push(newSymbol);
        document.getElementById("demo").innerHTML = symbolDisplay.join('');
    }
};



// if number of wrong guesses is 11
// wrong guesses = secretWord.length
    // displayMsg = "Game Over";

// var checkGameOver = function() {
//     if ( wrongCounter = secretWord.length ){
//         //console.log("Game Over");
//         return true;
//     } else {
//         //console.log("Keep Trying");
//         return false;
//     }
// }

// Display Message