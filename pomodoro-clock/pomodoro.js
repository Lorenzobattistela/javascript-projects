let defaultMinutesFocusValue = document.getElementById("minutes-focus").innerText;
let defaultSecondsFocusValue = document.getElementById("seconds-focus").innerText;
let defaultMinutesBreakValue = document.getElementById("minutes-break").innerText;
let defaultSecondsBreakValue = document.getElementById("seconds-break").innerText;

var focusInterval;
var breakInterval;
var counter = 0;
var interval;

function startPomodoro() {
    var minutes = document.getElementById("minutes-focus");
    var seconds = document.getElementById("seconds-focus");

    function countingTime() {
        var secondsN = Number(seconds.innerText);
        var minutesN = Number(minutes.innerText);

        if (minutesN == 0 && secondsN == 0) {
            counter = counter + 1;
            alert('Break time!');

            if (counter == 4) {
                document.getElementById("minutes").innerText = "10";
            }
            clearInterval(focusInterval);
            breakTimeCounting();
        }

        else {
            if (secondsN == 00) {
                secondsN = 60;
                minutesN = minutesN - 1;
            }
            secondsN--;
        }

        seconds.innerText = secondsN.toString();
        minutes.innerText = minutesN.toString();
    }
    focusInterval = setInterval(countingTime, 1000);
}

function breakTimeCounting() {
    var minutes = document.getElementById("minutes-break");
    var seconds = document.getElementById("seconds-break");
    breakInterval = setInterval(countingTime, 1000);

    function countingTime() {
        var secondsN = Number(seconds.innerText);
        var minutesN = Number(minutes.innerText);

        if (minutesN == 0 && secondsN == 0) {
            resetar()
            startPomodoro()
        }

        else {
            if (secondsN == 0) {
                secondsN = 60;
                minutesN = minutesN - 1;
            }
            secondsN--;
            seconds.innerText = secondsN.toString();
            minutes.innerText = minutesN.toString();
        }

    }
}


function resetar() {
    clearInterval(focusInterval);
    clearInterval(breakInterval);

    document.getElementById("minutes-break").innerText = defaultMinutesBreakValue;
    document.getElementById("seconds-break").innerText = defaultSecondsBreakValue;
    document.getElementById("minutes-focus").innerText = defaultMinutesFocusValue;
    document.getElementById("seconds-focus").innerText = defaultSecondsFocusValue;
}

function pause() {
    clearInterval(focusInterval)
    clearInterval(brearkInterval)
}

function aumentarFocus() {
    var value = document.getElementById("minutes-focus").innerText;
    value = Number(value);
    value = value + 1;
    defaultMinutesFocusValue = value;
    document.getElementById("minutes-focus").innerText = value;
}

function diminuirFocus() {
    var value = document.getElementById("minutes-focus").innerText;
    value = Number(value);
    value = value - 1;
    if (value > 0) {
        defaultMinutesFocusValue = value;
        document.getElementById("minutes-focus").innerText = value;
    }
}

function aumentarBreak() {
    var value = document.getElementById("minutes-break").innerText;
    value = Number(value);
    value = value + 1;
    defaultMinutesBreakValue = value;
    document.getElementById("minutes-break").innerText = value;
}

function diminuirBreak() {
    var value = document.getElementById("minutes-break").innerText;
    value = Number(value);
    value = value - 1;
    if (value > 0) {
        defaultMinutesBreakValue = value;
        document.getElementById("minutes-break").innerText = value;
    }
}

document.querySelector("#start").addEventListener("click", startPomodoro);
document.querySelector("#reset").addEventListener("click", resetar);
document.querySelector("#up-focus").addEventListener("click", aumentarFocus);
document.querySelector("#down-focus").addEventListener("click", diminuirFocus);
document.querySelector("#up-break").addEventListener("click", aumentarBreak);
document.querySelector("#down-break").addEventListener("click", diminuirBreak);
document.querySelector("#pause").addEventListener("click", pause)