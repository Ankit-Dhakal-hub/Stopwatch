let milliseconds = 0, seconds = 0, minutes = 0, hours = 0;
let timerInterval;

const display = document.getElementById("display");

function timer() {
    milliseconds += 10;

    if (milliseconds === 1000) {
        milliseconds = 0;
        seconds++;
    }

    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }

    if (minutes === 60) {
        minutes = 0;
        hours++;
    }

    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');
    const formattedMilliseconds = String(milliseconds / 10).padStart(2, '0');

    display.innerHTML = `${formattedHours}:${formattedMinutes}:${formattedSeconds}:${formattedMilliseconds}`;
}

function start() {
    if (!timerInterval) {
        timerInterval = setInterval(timer, 10);
    }
}

function stop() {
    clearInterval(timerInterval);
    timerInterval = null;
}

function reset() {
    clearInterval(timerInterval);
    timerInterval = null;
    milliseconds = seconds = minutes = hours = 0;
    display.innerHTML = "00:00:00:00";
}
