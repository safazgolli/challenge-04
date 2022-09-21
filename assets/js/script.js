let startBtn = document.getElementById("start-btn");
let nextBtn = document.getElementById("next-btn");
let questionContainerEl = document.getElementById("question-container");
let questionEl = document.getElementById("question");
let answersElBtn = document.getElementById("answer-buttons");

startBtn.addEventListener('click' , startQuiz);

function startQuiz(){
    
    startBtn.classList.add("hide");
    questionContainerEl.classList.remove("hide");
    nextQuestion();

}
function nextQuestion(){

    resetState();

    showQuestion(questions[0]);

}
function showQuestion(question){
    questionEl.innerText = question.question;
    question.answers.forEach( answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn")
        if( answer.correct){
            button.dataset.correct =answer.correct;
        
        }
        button.addEventListener('click', selectAnswer);
        answersElBtn.appendChild(button);
        
    });

}
function resetState(){
    nextBtn.classList.add("hide");
    while(answersElBtn.firstChild){
        answersElBtn.removeChild(answersElBtn.firstChild);
    }
}
function selectAnswer(e){
    const slectedBtn = e.target

}

const questions =[
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
        question : 'Amine File Has An Extension of:',

        answers:[
            { text: '.java', correct: false} ,
            { text: '.js', correct: true} ,
            { text: '.html', correct: false} ,
            { text: '.xml', correct: false}
        ]

    }
    
]  