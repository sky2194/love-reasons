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
