  // Set the countdown duration in seconds
const targetDate = new Date(2024, 09, 16, 18, 30, 00);
let timeRemaining = Math.floor((targetDate - new Date()) / 1000);

function updateCountdown() {
const days = Math.floor(timeRemaining / (24 * 60 * 60));
const hours = Math.floor((timeRemaining % (24 * 60 * 60)) / (60 * 60));
const minutes = Math.floor((timeRemaining % (60 * 60)) / 60);
const seconds = timeRemaining % 60;

document.getElementById('days-value').textContent = days;
document.getElementById('hours-value').textContent = hours;
document.getElementById('minutes-value').textContent = minutes;
document.getElementById('seconds-value').textContent = seconds;

    // Check if the countdown has reached zero
    if (timeRemaining > 0) {
        timeRemaining--; // Decrement time remaining
    } else {
        clearInterval(countdownInterval); // Stop the countdown
        // Optionally, you can display a message or take action when the countdown ends
        document.getElementById('countdown-finished').textContent = "Link has ended!";
    }
}

// Update the countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);

updateCountdown();