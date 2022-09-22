const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let userAnswers;

let currentQuestionIndex;

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  userAnswers = 0;
  startButton.classList.add('hide');

  currentQuestionIndex = 0;
  questionContainerElement.classList.remove('hide');
  setNextQuestion();

}

function setNextQuestion() {
  resetState();
  showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn');
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer);
    answerButtonsElement.appendChild(button);
  })
}

function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add('hide');
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct);
  })
  if (questions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide');
  } else {
    startButton.innerText = 'Your score is: ' + userAnswers
    startButton.classList.remove('hide');
  }
}


function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add('correct');
    userAnswers++;
  } else {
    element.classList.add('wrong');
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
}

var timeEl = document.querySelector(".time");
var secondsLeft = 60;
function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft + "s remaining!";
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
    
      }
  
    }, 1000);
  }
  setTime();

const questions = [
  {
    question : 'JavaScript File Has An Extension of:',

        answers:[
            { text: '.java', correct: false} ,
            { text: '.js', correct: true} ,
            { text: '.html', correct: false} ,
            { text: '.xml', correct: false}
        ]
  },
  {
    question: 'Which statement cannot be used to declare a variable in JavaScript??',
    answers: [
      { text: 'Let', correct: false },
      { text: 'Var', correct: false },
      { text: 'Int', correct: true },
      { text: 'Const', correct: false }
    ]
  },
  {
    question: 'Which of the following is correct about the features of JavaScript?',
    answers: [
      { text: 'JavaScript is complementary and integrated with HTML.', correct: false },
      { text: 'JavaScript is open and cross-platform.', correct: false },
      { text: 'All of the above', correct: true },
      { text: 'None of the above', correct: false }
    ]
  },
  {
    question: 'Which of the following methods is used to access HTML elements using Javascript?',
    answers: [
        { text: 'getElementById()', correct: false },
        { text: 'getElementByClassName()', correct: false },
        { text: 'All of the above', correct: true },
        { text: 'None of the above', correct: false }
    ]
  },
  {
    question: 'Which of the following methods can be used to display data in some form using Javascript?',
    answers: [
        { text: 'documentWrite()', correct: false },
        { text: 'console.log()', correct: false },
        { text: 'window.alert', correct: false },
        { text: 'All of the above', correct: true }
    ]
  }
]
