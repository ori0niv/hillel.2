let startTime = 85;

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}

const timerDisplay = document.createElement('div');
timerDisplay.style.fontSize = '65px';
timerDisplay.style.fontWeight = 'bold';
timerDisplay.style.margin = '20px';
document.body.appendChild(timerDisplay);

timerDisplay.textContent = formatTime(startTime);

function startTimer(duration) {
    let timeLeft = duration;

    const timerInterval = setInterval(() => {
        timerDisplay.textContent = formatTime(timeLeft);

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timerDisplay.textContent = "00:00";
            alert("Час вийшов!");
        } else {
            timeLeft--;
        }
    }, 1000);
}

startTimer(startTime);

