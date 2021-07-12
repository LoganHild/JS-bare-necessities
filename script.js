var start = document.querySelector("#startButton");
var countdown = document.querySelector("#countdown");
var quiz = document.querySelector()

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