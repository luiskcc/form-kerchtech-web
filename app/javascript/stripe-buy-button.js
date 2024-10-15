  // Set the countdown duration in seconds
const countdownDuration = 24 * 60 * 60;
let timeRemaining = countdownDuration;

function updateCountdown() {
const days = Math.floor(timeRemaining / (24 * 60 * 60));
const hours = Math.floor((timeRemaining % (24 * 60 * 60)) / (60 * 60));
const minutes = Math.floor((timeRemaining % (60 * 60)) / 60);
const seconds = timeRemaining % 60;

document.getElementById('days-value').textContent = days;
document.getElementById('hours-value').textContent = hours;
document.getElementById('minutes-value').textContent = minutes;
document.getElementById('seconds-value').textContent = seconds;

if (timeRemaining > 0) {
    timeRemaining--;
} else {
    clearInterval(countdownInterval);
}
}

// Update the countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);