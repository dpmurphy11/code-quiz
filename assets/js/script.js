var headerDiv =  document.querySelector('header');
var gameDiv = document.querySelector('#game');
var highScoresDiv = document.querySelector('#high-scores');
var saveScoresDiv = document.querySelector('#save-scores');
var startDiv = document.querySelector('#start');
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
var nameInput = document.querySelector('#name');

var counter = 60;
var questionIdx = 0;

var highScores = JSON.parse(localStorage.getItem('scores'));
if (highScores === null) {
     highScores = [];
}
// console.log(highScores);

// question / answer data in nested arrays
// Element 1: Question 
// Element 2: Possible answers
// Element 3: Correct answer
// Element 4: Points for correct answer
var arrQuestions = [];
arrQuestions[0] = ['Quest1',['answer1', 'answer2', 'answer3', 'answer4'], 'answer3', 10];
arrQuestions[1] = ['Quest2',['answer1', 'answer2', 'answer3', 'answer4'], 'answer1', 20];
arrQuestions[2] = ['Quest3',['answer1', 'answer2', 'answer3', 'answer4'], 'answer4', 10];
arrQuestions[3] = ['Quest4',['answer1', 'answer2', 'answer3', 'answer4'], 'answer2', 12];
arrQuestions[4] = ['Quest5',['answer1', 'answer2', 'answer3', 'answer4'], 'answer1', 25];
// console.log(arrQuestions);

// functions
function loadGame() {
  headerDiv.setAttribute('style', 'display: visible');
  startDiv.setAttribute('style', 'display: visible');
  highScoresDiv.setAttribute('style', 'display: none');
  saveScoresDiv.setAttribute('style', 'display: none');
  gameDiv.setAttribute('style', 'display: none');

  // shuffle array

}

loadGame();

function gameStart(event) {
    event.preventDefault();
    headerDiv.setAttribute('style', 'display: visible');
    startDiv.setAttribute('style', 'display: none');
    highScoresDiv.setAttribute('style', 'display: none');
    saveScoresDiv.setAttribute('style', 'display: none');
    gameDiv.setAttribute('style', 'display: visible');
      // console.log(event);
    // start timer
    var timeInterval = setInterval(function () {
      timerSpan.textContent = "Time: " + counter
        if (counter > 0 && arrQuestions.length > 0) {
        counter--;
      } else {
        clearInterval(timeInterval);
      }
    }, 1000);
    // ask first question
    renderQuestion();
};

function renderQuestion() {
  // render next question
  questionH1.textContent = arrQuestions[questionIdx][0];
  // questionH1.textContent = arrQuestions[questionIdx][0][1]; // index 1 of answers array
  // questionH1.textContent = arrQuestions[questionIdx][1]; //all answers
  // questionH1.textContent = arrQuestions[questionIdx][2]; // corect answer
  // render answers
  console.log(arrQuestions[questionIdx][1].length)
  for (var i=0; i < arrQuestions[questionIdx][1].length; i++) {
    var answer = document.createElement('button');
    answer.setAttribute('style', 'display: block');
    answer.setAttribute('value', arrQuestions[questionIdx][1][i]);
    answer.textContent = arrQuestions[questionIdx][1][i];
    // add event listener
    answer.addEventListener('click', function() {
      //
      event.preventDefault();
      console.log(this.value);
    });
    answersOl.appendChild(answer);
  };
  // // remove question from array
  arrQuestions.pop();
  questionIdx++;


};

function saveScore(event) {
    event.preventDefault();
    startDiv.setAttribute('style', 'display: none');
    highScoresDiv.setAttribute('style', 'display: none');
    saveScoresDiv.setAttribute('style', 'display: visible');
    gameDiv.setAttribute('style', 'display: none');
  
    // get initials

    // save to local storage
    localStorage.setItem('highScores', JSON.stringify(highScores));
}

function clearScores(event) {
    event.preventDefault();
    localStorage.removeItem('highScores');

    renderScores();
}

function renderScores(event) {
    event.preventDefault();
    headerDiv.setAttribute('style', 'display: none');
    startDiv.setAttribute('style', 'display: none');
    highScoresDiv.setAttribute('style', 'display: visible');
    saveScoresDiv.setAttribute('style', 'display: none');
    gameDiv.setAttribute('style', 'display: none');
  
    // get scores

    // order scores

    // render scores
}

// event listeners
startBtn.addEventListener('click', gameStart);

scoresSpan.addEventListener('click', renderScores);

saveBtn.addEventListener('click', saveScore);

backBtn.addEventListener('click', gameStart);

clearBtn.addEventListener('click', clearScores);
