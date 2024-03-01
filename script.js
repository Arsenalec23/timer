function updateCountdown() {
    // Target date: May 27, 2024
    var targetDate = new Date('2024-05-27').getTime();

    var currentDate = new Date().getTime();

    var timeDifference = targetDate - currentDate;

    var daysLeft = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    // Display the countdown
    var daysElement = document.getElementById('days');
    daysElement.innerHTML = daysLeft;
}

// Update countdown every second
setInterval(updateCountdown, 1000);

// Initial update
updateCountdown();
