// Script for the mini-game
document.getElementById("startGame").addEventListener("click", startGame);

function startGame() {
  const gameArea = document.getElementById("gameArea");
  gameArea.style.display = "block"; // Show game area
  gameArea.innerHTML = "<p>Click the box!</p>"; // Initial game instructions

  // Create a clickable box
  const box = document.createElement("div");
  box.style.width = "50px";
  box.style.height = "50px";
  box.style.backgroundColor = "red";
  box.style.position = "absolute";

  // Position box randomly inside the game area
  moveBox(box, gameArea);

  // Add box to game area
  gameArea.appendChild(box);

  // Click event for the box
  box.addEventListener("click", () => {
    alert("You got it!");
    moveBox(box, gameArea); // Move the box again
  });
}

function moveBox(box, gameArea) {
  const maxWidth = gameArea.clientWidth - 50;
  const maxHeight = gameArea.clientHeight - 50;

  const randomX = Math.random() * maxWidth;
  const randomY = Math.random() * maxHeight;

  box.style.left = randomX + "px";
  box.style.top = randomY + "px";
}
