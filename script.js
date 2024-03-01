function calculateDaysLeft() {
    var targetDate = document.getElementById("targetDate").value;
    var targetDateTime = new Date(targetDate).getTime();
    var currentDateTime = new Date().getTime();
    
    var timeDifference = targetDateTime - currentDateTime;
    var daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "Days left until " + targetDate + ": " + daysLeft;
}
