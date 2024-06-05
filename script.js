let startPauseButton = document.getElementById('start-pause');
let resetButton = document.getElementById('reset');
let lapButton = document.getElementById('lap');

let hour = 0;
let minute = 0;
let second = 0;
let count = 0;
let timer = false;
let interval;
let lapCount = 0;

startPauseButton.addEventListener('click', function () {
    if (timer) {
        clearInterval(interval);
        timer = false;
        startPauseButton.textContent = "Start";
    } else {
        timer = true;
        startPauseButton.textContent = "Pause";
        interval = setInterval(stopWatch, 10);
    }
});

resetButton.addEventListener('click', function () {
    clearInterval(interval);
    timer = false;
    hour = 0;
    minute = 0;
    second = 0;
    count = 0;
    lapCount = 0;
    document.getElementById('hour').innerHTML = "00";
    document.getElementById('minute').innerHTML = "00";
    document.getElementById('second').innerHTML = "00";
    document.getElementById('count').innerHTML = "00";
    document.getElementById('laps').innerHTML = ""; // Clear laps
    startPauseButton.textContent = "Start";
});

lapButton.addEventListener('click', function () {
    lapCount++;
    let lapTime = document.createElement('div');
    lapTime.className = 'lap-time';
    lapTime.innerHTML = `
        <span>Lap ${lapCount}: ${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')}:${count.toString().padStart(2, '0')}</span>
        <button class="delete-lap">Delete</button>
    `;
    document.getElementById('laps').appendChild(lapTime);

    lapTime.querySelector('.delete-lap').addEventListener('click', function () {
        lapTime.remove();
    });
});

function stopWatch() {
    count++;
    if (count == 100) {
        second++;
        count = 0;
    }
    if (second == 60) {
        minute++;
        second = 0;
    }
    if (minute == 60) {
        hour++;
        minute = 0;
    }
    document.getElementById('hour').innerHTML = hour.toString().padStart(2, '0');
    document.getElementById('minute').innerHTML = minute.toString().padStart(2, '0');
    document.getElementById('second').innerHTML = second.toString().padStart(2, '0');
    document.getElementById('count').innerHTML = count.toString().padStart(2, '0');
}
