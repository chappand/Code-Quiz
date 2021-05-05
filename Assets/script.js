var time = document.querySelector("#time");
var question = document.querySelector("#questions");
var answer = document.querySelector("#answers");
var score = document.querySelector("#score");
var aButton = document.querySelector("#answer1");
var bButton = document.querySelector("#answer2");
var cButton = document.querySelector("#answer3");
var dButton = document.querySelector("#answer4");
var questionNumber;
var userSelection;
var gotItRight;
var timeLeft;
var countdown;
var scoreCount;

var questionList = [
    { 
        question: "What is CSS?",
        answer: [
            "A TV Show set in New Orleans",
            "A branch of the government",
            "A way to style a web page",
            "A new diet"
        ],
        rightAnswer: "A way to style a web page"
    },
    {
        question: "What symbol generally signifies the end of a line of code?",
        answer: [
            "?",
            ".",
            ";",
            ":"
        ],
        rightAnswer: ";"
    },
    {
        question: "What do you type out to start a new html file?",
        answer: [
            "HTML",
            "!DOCTYPE html",
            "LANGUAGE html",
            "html please!"
        ],
        rightAnswer: "!DOCTYPE html"
    },
    {
        question: "What do you type in javascript to signify a variable?",
        answer: [
            "var",
            "vari",
            "variable",
            "x"
        ],
        rightAnswer: "var"
    },
    {
        question: "Which language gives a web page functionality?",
        answer: [
            "HTML",
            "CSS",
            "English",
            "Javascript"
        ],
        rightAnswer: "Javascript"
    },
    {
        question: "What are you adding to a button when you want to do something when it is clicked?",
        answer: [
            "Clicker",
            "Event Watcher",
            "Instructions",
            "Event Listener"
        ],
        rightAnswer: "Event Listener"
    },
];

function questionDisplay(ask) {
    if (questionNumber >= 6) {
        quizStop();
        return;
    }
    question.innerText = ask.question

    aButton.innerText = ask.answer[0]
    bButton.innerText = ask.answer[1]
    cButton.innerText = ask.answer[2]
    dButton.innerText = ask.answer[3]

    gotItRight = ask.rightAnswer
};

function newQuestion() {
    questionDisplay(questionList[questionNumber])
};

function newQuiz() {
    questionNumber = 0;
    newQuestion();
    timer();
};

 function timer() {
     timeLeft = 60;
     countdown = setInterval(function() {
         timeLeft--;
        time.innerHTML = timeLeft;

        if (timeLeft === 0) {
            clearInterval(timeLeft)
            time.innerHTML = "-";
            score.innerHTML = scoreCount;
        }
     }, 1000)
 };

 function wrongAnswer() {
     timeLeft = timeLeft-5;
 };


newQuiz();