function updateCountdown() {
    // Target date: May 27, 2024
    var targetDate = new Date('2024-06-01').getTime();

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

// Function to create the weight chart
function createWeightChart() {
    // Assume you have data for the weight of the cat for each week
    const weightData = [
	{ month: '02.03', weight: 4.45 },
	{ month: '09.03', weight: 4.50 },    
        { month: '16.03', weight: 4.55 },
        { month: '23.03', weight: 4.60 },
	{ month: '30.03', weight: 4.65 },
	{ month: '06.04', weight: 4.70 },
	{ month: '13.04', weight: 4.65 },
	{ month: '20.04', weight: 4.70 },
	{ month: '27.04', weight: 4.75 },
	{ month: '04.05', weight: 4.80 },
	{ month: '11.05', weight: 4.85 },
	{ month: '18.05', weight: 4.80 },
	{ month: '25.05', weight: 4.75 },
	{ month: '01.06', weight: 4.80 }
        // Add more data here...
    ];

    // Extracting week numbers and weights for the chart
    const monthNumbers = weightData.map(data => data.month);
    const weights = weightData.map(data => data.weight);
	
    // Get the canvas element
    const ctx = document.getElementById('weightChart').getContext('2d');

    // Create the chart
    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: monthNumbers,
            datasets: [{
                label: 'Вес',
                data: weights,
                borderColor: 'blue',
                backgroundColor: 'rgba(0, 0, 255, 0.1)', // Optional: fill color under the line
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: false,
					min: 3,
					max: 6,
					stepSize: 0.05,
					precision: 2,
					title: {
						display: true,
						text: 'Вес (кг)'
					}
				}
			}
		}
    });
}

// Update countdown every second
setInterval(updateCountdown, 1000);

// Initial update
updateCountdown();

// Create weight chart
createWeightChart();
