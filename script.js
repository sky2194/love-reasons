const reasons = [
  "You make me smile every day 😊",
  "Your laugh is contagious 😂",
  "You're my safe space 🛏️",
  "You believe in me 💪",
  "You're my best friend 💕",
  // Add more reasons here...
];

function showReason() {
  const randomIndex = Math.floor(Math.random() * reasons.length);
  document.getElementById("reason").textContent = reasons[randomIndex];
}
// 1. Function to show the pop-up
function showPopup() {
  document.getElementById("popup").style.display = "flex"; // Make the pop-up visible
}

// 2. Function to close the pop-up
function closePopup() {
  document.getElementById("popup").style.display = "none"; // Hide the pop-up
}

function showLetter() {
  document.getElementById("loveLetter").style.display = "block";
}

function hideLetter() {
  document.getElementById("loveLetter").style.display = "none";
}
