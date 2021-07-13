//made variables for timer first, have a hard time with timers
var start = document.querySelector("#startButton");
var countdown = document.querySelector("#countdown");
var questions = document.querySelector("#questions");
var choiceA = document.querySelector("#A");
var choiceB = document.querySelector("#B");
var choiceC = document.querySelector("#C");

var choicesDisplayed = [
    {
        "question": "Which of the following is the correct attribute to link an external JS file?",
        "optionA" : "href",
        "optionB" : "rel",
        "optionC" : "src",
        "answer" : "C"
    }, 
    {
        "question" : "Which of the following methods removes an item from the end of an array and returns that value to the caller?",
        "optionA" : "pop()",
        "optionB" : "push()",
        "optionC" : "unshift()",
        "answer" : "A"
    }, 
    {
        "question" : "Which method is used to prevent \"Event Bubbling\" of an event to parent elements in JavaScript?",
        "optionA" : "event.stopPropagation",
        "optionB" : "event.preventDefault",
        "optionC" : "event.clearEvent",
        "answer" : "A"
    }, 
    {
        "question" : "Which option will add a functioning event listener?",
        "optionA" : "someButton.addEventListener(\"click\", function{}(\/\/Do Something)",
        "optionB" : "someButton.addEventListener(\"click\", function(){\/\/Do Something}",
        "optionC" : "someButton.addEventlistener(\"click\", function(){\/\/Do Something}",
        "answer" : "B"
    }, 
    {
        "question" : "What does \"API\" stand for?",
        "optionA" : "Application Programming Integration",
        "optionB" : "Application Programming Interpreter",
        "optionC" : "Application Programming Interface",
        "answer" : "C"
    }, 
    {
        "question" : "Which node relationship do the <head> and <body> elements have?",
        "optionA" : "Parent, Child",
        "optionB" : "Siblings",
        "optionC" : "Child, Parent",
        "answer" : "B"
    }
]
for(var i = 0; i < choicesDisplayed; i++) {
    var response
}
start.addEventListener("click", function() {
    var timer = 60;
    var timerInterval = setInterval(function () {
        timer--;
        countdown.textContent = timer + "seconds left."
        if (timer === 0) {
            clearInterval(timerInterval);
        }
    }, 1000)
})








































// var quiz = document.querySelector("#quizDiv");
// var question = document.querySelector("#question");
// var options = document.querySelector("#options");
// var optionA = document.querySelector("#A");
// var optionB = document.querySelector("#B");
// var optionC = document.querySelector("#C");
// var score = document.querySelector("score")

// var questionObject = [
//     {
//         "question": "Which of the following is the correct attribute to link an external JS file?",
//         "optionA" : "href",
//         "optionB" : "rel",
//         "optionC" : "src",
//         "answer" : "C"
//     }, {
//         "question" : "Which of the following methods removes an item from the end of an array and returns that value to the caller?",
//         "optionA" : "pop()",
//         "optionB" : "push()",
//         "optionC" : "unshift()",
//         "answer" : "A"
//     }, {
//         "question" : "Which method is used to prevent \"Event Bubbling\" of an event to parent elements in JavaScript?",
//         "optionA" : "event.stopPropagation",
//         "optionB" : "event.preventDefault",
//         "optionC" : "event.clearEvent",
//         "answer" : "A"
//     }, {
//         "question" : "Which option will add a functioning event listener?",
//         "optionA" : "someButton.addEventListener(\"click\", function{}(\/\/Do Something)",
//         "optionB" : "someButton.addEventListener(\"click\", function(){\/\/Do Something}",
//         "optionC" : "someButton.addEventlistener(\"click\", function(){\/\/Do Something}",
//         "answer" : "B"
//     }, {
//         "question" : "What does \"API\" stand for?",
//         "optionA" : "Application Programming Integration",
//         "optionB" : "Application Programming Interpreter",
//         "optionC" : "Application Programming Interface",
//         "answer" : "C"
//     }, {
//         "question" : "Which node relationship do the <head> and <body> elements have?",
//         "optionA" : "Parent, Child",
//         "optionB" : "Siblings",
//         "optionC" : "Child, Parent",
//         "answer" : "B"
//     }
// ];