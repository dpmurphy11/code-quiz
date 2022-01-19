var gameDiv = document.querySelector('#game');
var scoresDiv = document.querySelector('#high-scores');
var scoresSpan = document.querySelector('#scores');
var timerSpan = document.querySelector('#timer');
var titleH1 = document.querySelector('#title');
var questionH1 = document.querySelector('#question');
var answersOl = document.querySelector('#answers');
var startBtn = document.querySelector('#btn-start');
var saveBtn = document.querySelector('#btn-save');
var backBtn = document.querySelector('#btn-back');
var clearBtn = document.querySelector('#btn-clear');
var scoreH2 = document.querySelector('#final-score');
var nameInp = document.querySelector('#name');

var counter = 60;

var highScores = JSON.parse(localStorage.getItem('scores'));
if (highScores === null) {
     highScores = [];
}
// highScores = [];
console.log(highScores);
// scoresDiv.setAttribute('style', 'visibility: hidden');
// gameDiv.setAttribute('style', 'visibility: visible');

// functions
function gameStart(event) {
    event.preventDefault();
    // console.log(event);
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
      timerSpan.textContent = "Time: " + counter
        if (counter > 0) {
        // Decrement `counterby 1
        counter--;
      } else {
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
        // Call the `displayMessage()` function
        // displayMessage();
      }
    }, 1000);
  
}

function saveScore(event) {
    event.preventDefault();
    highScores.push('abc', 123);
    localStorage.setItem('scores', JSON.stringify(highScores));
}

function clearScores(event) {
    event.preventDefault();
    localStorage.removeItem('scores');
}

function renderScores(event) {
    event.preventDefault();
    console.log(event);
}

// event listeners
startBtn.addEventListener('click', gameStart);

scoresSpan.addEventListener('click', renderScores);

saveBtn.addEventListener('click', saveScore);

backBtn.addEventListener('click', gameStart);

clearBtn.addEventListener('click', clearScores);
