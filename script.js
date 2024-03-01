function updateCountdown() {
    // Target date: May 27, 2024
    var targetDate = new Date('2024-05-27').getTime();

    var currentDate = new Date().getTime();

    var timeDifference = targetDate - currentDate;

    var daysLeft = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    var hoursLeft = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutesLeft = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    var secondsLeft = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Display the countdown
    var daysElement = document.getElementById('days');
    var hoursElement = document.getElementById('hours');
    var minutesElement = document.getElementById('minutes');
    var secondsElement = document.getElementById('seconds');

    daysElement.innerHTML = daysLeft;
    hoursElement.innerHTML = ('0' + hoursLeft).slice(-2);
    minutesElement.innerHTML = ('0' + minutesLeft).slice(-2);
    secondsElement.innerHTML = ('0' + secondsLeft).slice(-2);
}

// Update countdown every second
setInterval(updateCountdown, 1000);

// Initial update
updateCountdown();
