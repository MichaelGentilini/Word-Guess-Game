//Create an array

var songTitle = [
  "Tainted Love",
  "Achy Breaky Heart",
  "Macarena",
  "Come on Eileen",
  "Eye of the Tiger",
  "My Sharona",
  "Because I Got High",
  "Who Let the Dogs Out",
  "Ice Ice Baby",
  "Tubthumping",
  "How Bizarre",
  "No Rain",
  "Spirit In The Sky"
];

// Choose word randomly
var randNum = Math.floor(Math.random() * songTitle.length);
var chosenSong = songTitle[randNum];
underScore = [];

// create underscores based on the length of the word
function generateUnderScore() {
  for (let i = 0; i < chosenSong.length; i++) {
    underScore.push(' ');
  }
  return underScore;
}

console.log(generateUnderScore());
console.log(chosenSong);