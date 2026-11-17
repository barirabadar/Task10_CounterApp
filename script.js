let count = 0;
const countDisplay = document.getElementById("count");
const message = document.getElementById("message");
function updateDisplay() {
    countDisplay.textContent = count;
    if (count > 0) {
       countDisplay.style.color = "#22a06b";
       message.textContent = "Great! Your counter is positive.";
    } 
    else if (count < 0) {
       countDisplay.style.color = "#e05252";
       message.textContent = "Your counter is negative.";
    } 
    else {
       countDisplay.style.color = "#64748b";
       message.textContent = "Your counter is at zero.";
    }
}
function increaseCount() {
    count++;
    updateDisplay();
}
function decreaseCount() {
    if (count > 0) {
       count--;
       updateDisplay();
    } else {
       message.textContent = "Counter cannot go below zero!";
    }
}
function resetCount() {
    count = 0;
    updateDisplay();
}
function increaseByFive() {
    count += 5;
    updateDisplay();
}
updateDisplay();
