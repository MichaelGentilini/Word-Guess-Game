//Create an array

var animalList = [
  "panda",
  "giraffe",
  "octopus",
  "platypus",
  "hellbender",
  "tiger",
  "puppy",
  "orangutan",
  "turtle",
  "salamander",
  "ape",
  "otter",
  "beaver",
  "koala",
  "kangaroo",
  "hippopotamus"
];

var
  wins = 0,
  rightArray = [],
  underScore = [],
  guessesLeft = 10,
  rightArray = [],
  wrongArray = [],
  lettersUsed = [];

specialAnimal = getComputerGuess();
// DOM Manipulation
var divWins = document.getElementById("wins");
var divLeft = document.getElementById("remaining");
var divUsed = document.getElementById("used");
var divRight = document.getElementById("right");
var currentWord = document.getElementById("currentword");

divWins.textContent = wins;
divLeft.textContent = guessesLeft;



// divUsed.textContent = guessSoFar;

// Beginning Setup
function getComputerGuess() {
  var computerGuess = animalList[Math.floor(Math.random() * animalList.length)];
  return computerGuess;
}


console.log(specialAnimal);
console.log(specialAnimal.length);

// create underscores based on the length of specialAnimal

function generateUnderScore() {
  for (var i = 0; i < specialAnimal.length; i++) {
    underScore[[i]] = "_";
    underScore.push = ("_");
  }
  return underScore;
}

// Display answer in HTML
generateUnderScore();
var theAnswer = generateUnderScore();
//var theAnswer = generateUnderScore().join(' ');

console.log("the answer is " + theAnswer);

currentWord.textContent = theAnswer; //This is the answer as it appears on the screen

// Start the Program
// Get User Guesses from keypress
document.addEventListener('keypress', (event) => {
  var humanGuess = String.fromCharCode(event.keyCode);
  console.log("Here's the " + humanGuess);
  //         ***Check for Correctness***

  // if userguess incorrect
  if (specialAnimal.indexOf(humanGuess) > -1) {
    // letter is valid
    console.log("this is " + true);
    rightArray.push(humanGuess);

    console.log("rightArray:" + rightArray);


    for (var j = 0; j < specialAnimal.length; j++) {
      // if letter guesssed is in word at that point or index
      console.log("human: " + humanGuess);
      console.log("computer: " + specialAnimal[j]);

      if (specialAnimal[j] === humanGuess) {
        // update array with guesssed letter at that point
        specialAnimal[j].push = humanGuess;
        console.log("human guess after: " + humanGuess);
      }
    }
  } else {
    wrongArray.push(humanGuess);
    console.log("wrongArray:" + wrongArray);
    // Use this Function to Remove Duplicates

    function removeDuplicates(arr) {
      var uniqueArray = [];
      for (var i = 0; i < arr.length; i++) {
        if (uniqueArray.indexOf(arr[i]) == -1) {
          uniqueArray.push(arr[i]);
        }
      }
      return uniqueArray;
    }
    wrongArray = (removeDuplicates(wrongArray));
    // ray
  }

  // Print to HTML
  divUsed.textContent = wrongArray;
  divRight.textContent = rightArray;
});

// See if guess is correct