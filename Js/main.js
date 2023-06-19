function openTab(tabId) {
    var tabContents = document.getElementsByClassName('timer');
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove('show');
    }

    var selectedTab = document.getElementById(tabId);
    selectedTab.classList.add('show');
}

const timerSection = document.getElementById('tab1');
const stopwatchSection = document.getElementById('tab2');
const timerStartBtn = timerSection.querySelector('.control_btn button:first-child');
const timerResetBtn = timerSection.querySelector('.control_btn button:last-child');
const stopwatchStartBtn = stopwatchSection.querySelector('.control_btn button:first-child');
const stopwatchResetBtn = stopwatchSection.querySelector('.control_btn button:last-child');

let timerInterval;
let timerTime = 0;
const timerDisplay = timerSection.querySelector('.timer_watch span');

let stopwatchInterval;
let stopwatchTime = 0;
const stopwatchDisplay = stopwatchSection.querySelector('.timer_watch span');

timerStartBtn.addEventListener('click', startTimer);
timerResetBtn.addEventListener('click', resetTimer);

stopwatchStartBtn.addEventListener('click', startStopwatch);
stopwatchResetBtn.addEventListener('click', resetStopwatch);

function startTimer() {
    if (!timerInterval) {
        timerInterval = setInterval(updateTimer, 1000);
    }
}

function updateTimer() {
    timerTime++;
    const minutes = Math.floor(timerTime / 60);
    const seconds = timerTime % 60;
    timerDisplay.textContent = `${padZero(minutes)} m ${padZero(seconds)} s`;
}

function resetTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    timerTime = 0;
    timerDisplay.textContent = '00 m 00 s';
}

function startStopwatch() {
    if (!stopwatchInterval) {
        stopwatchInterval = setInterval(updateStopwatch, 10);
    }
}

function updateStopwatch() {
    stopwatchTime++;
    const milliseconds = stopwatchTime % 100;
    const seconds = Math.floor(stopwatchTime / 100) % 60;
    const minutes = Math.floor(stopwatchTime / 6000);
    stopwatchDisplay.textContent = `${padZero(minutes)} m ${padZero(seconds)} s ${padZero(milliseconds)}`;
}

function resetStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
    stopwatchTime = 0;
    stopwatchDisplay.textContent = '0 s 00';
}

function padZero(number) {
    return number.toString().padStart(2, '0');
}
