//made variables 
var start = document.querySelector("#startBtn");
var begin = document.querySelector("#beginBtn")
var countdown = document.querySelector("#countdown");
var box = document.querySelector(".box");
var quiz = document.querySelector(".quiz")

//Variable for repeated class addition
var visible = "boxVisible";

//var array of objects for quesitions, options, answers
//brought back after some revamping
var choicesDisplayed = [
    {
        "number": "1",
        "question": "Which of the following is the correct attribute to link an external JS file called \"script.js\"?",
        "answer": "src= \"script.js\"",
        "options": [
            "href = \"script.js\"",
            "rel= \"script.js\"",
            "src= \"script.js\"",
        ]
    }, 
    {
        "number": "2",
        "question" : "Which of the following methods removes an item from the end of an array and returns that value to the caller?",
        "answer": "pop()",
        "options": [
            "pop()",
            "push()",
            "unshift()",
        ]
    }, 
    {
        "number": "3",
        "question" : "Which method is used to prevent \"Event Bubbling\" of an event to parent elements in JavaScript?",
        "answer": "event.stopPropagation",
        "options": [
            "event.stopPropagation",
            "event.preventDefault",
            "event.clearEvent",
        ]
    }, 
    {
        "number": "4",
        "question" : "Which option will add a functioning event listener?",
        "answer": "someButton.addEventListener(\"click\", function(){\/\/Do Something}",
        "options": [
            "someButton.addEventListener(\"click\", function{}(\/\/Do Something)",
            "someButton.addEventListener(\"click\", function(){\/\/Do Something}",
            "someButton.addEventlistener(\"click\", function(){\/\/Do Something}",
        ]
    }, 
    {
        "number": "5",
        "question" : "What does \"API\" stand for?",
        "answer": "Application Programming Interface",
        "options": [
            "Application Programming Integration",
            "Application Programming Interpreter",
            "Application Programming Interface",
        ]
    }, 
    {
        "number": "6",
        "question" : "Which node relationship do the <head> and <body> elements have?",
        "answer": "Siblings",
        "options": [
            "Parent, Child",
            "Siblings",
            "Child, Parent",
        ]
    }
    ]

//START event listener timer and hides start button after being clicked. 
start.addEventListener("click", timerFunction);

function timerFunction() {
    var timer = 30;
    var timerInterval = setInterval(function () {
        timer--;
        countdown.textContent = timer + "seconds left."
        if (timer === 0) {
            clearInterval(timerInterval);
        }
    }, 1000)
    start.classList.add(visible);
    box.classList.add (visible)
    questions(0)
}

//function to show description box upon begin being clicked.
begin.addEventListener("click", showBox);

function showBox() {
    box.classList.remove(visible);
    begin.classList.add(visible);
}

//function to show first set of questions
start.addEventListener("click", showQuiz);

function showQuiz() {
    quiz.classList.remove(visible);
}

var questionCount = 0;

//getting questions and options from array
function questions(index) {
    var questionText = document.querySelector(".questions");
    var optionText = document.querySelector(".optionList");
    var questionInsert = "<span class = \"question\">" + choicesDisplayed[index].number + ". " + choicesDisplayed[index].question + "</span>";
    var optionInsert = '<div class = "options"><span class = \"multiple\">' + choicesDisplayed[index].options[0] + '</span></div>'
                        + '<div class = "options"><span class = \"multiple\">' + choicesDisplayed[index].options[1] + '</span></div>'
                        + '<div class = "options"><span class = \"multiple\">' + choicesDisplayed[index].options[2] + '</span></div>';
                        
    questionText.innerHTML = questionInsert;
    optionText.innerHTML = optionInsert;
    var allOptions = document.querySelectorAll(".options");
    for (var i = 0; i < allOptions.length; i++) {
        allOptions[i].setAttribute("onclick", "optionSelected(this)")
    }
}

//function for option selected right or wrong
function optionSelected(answer) {
    var userAnswer = answer.textContent;
    var correctAnswer = choicesDisplayed[questionCount].answer;
    if (userAnswer === correctAnswer) {
        console.log("answer is correct");
        var right = document.querySelector(".rightWrong")
        var rightInsert = '<span class = "correct">' + "Correct!" + '</span>';
        right.innerHTML = rightInsert;
    } else {
        console.log("answer is wrong")
        var wrong = document.querySelector(".rightWrong")
        var wrongInsert = '<span class = "incorrect">' + "Incorrect!" + '</span>';
        wrong.innerHTML = wrongInsert;
    }
}



// //event listener for when one is clicked *testing*
// userChoice.addEventListener("click", moveOn);

// //function for user choice *testing*
// function moveOn() {
//     if(questionCount < choicesDisplayed.length -1) {
//         questionCount++;
//         questions
//     }
// }









































// var quiz = document.querySelector("#quizDiv");
// var question = document.querySelector("#question");
// var options = document.querySelector("#options");
// var optionA = document.querySelector("#A");
// var optionB = document.querySelector("#B");
// var optionC = document.querySelector("#C");
// var score = document.querySelector("score")

   