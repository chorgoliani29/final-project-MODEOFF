// --- Theme Toggle Logic ---
const themeToggle = document.getElementById("themeToggle");
function applyTheme(theme) {
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
    if (themeToggle) themeToggle.textContent = "☀️";
  } else {
    document.documentElement.classList.remove("dark");
    if (themeToggle) themeToggle.textContent = "🌙";
  }
}
const savedTheme = localStorage.getItem("theme") || "light";
applyTheme(savedTheme);
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    let currentTheme = localStorage.getItem("theme") || "light";
    let newTheme = currentTheme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
  });
}

// --- Wall Mode Toggle Logic ---
const wallToggle = document.getElementById("wallToggle");
const wallToggleCircle = document.getElementById("wallToggleCircle");
let passThroughWalls = false;

wallToggle.addEventListener("click", () => {
  passThroughWalls = !passThroughWalls;
  if (passThroughWalls) {
    wallToggleCircle.style.transform = "translateX(20px)";
    wallToggle.classList.add("bg-[#5C7062]");
  } else {
    wallToggleCircle.style.transform = "translateX(0px)";
    wallToggle.classList.remove("bg-[#5C7062]");
  }
});

// --- Snake Game Logic ---
const canvas = document.getElementById("snakeCanvas");
const ctx = canvas.getContext("2d");
const scoreElement = document.getElementById("score");
const highScoreElement = document.getElementById("highScore");
const gameOverlay = document.getElementById("gameOverlay");
const overlayText = document.getElementById("overlayText");
const startBtn = document.getElementById("startBtn");

const gridSize = 20;
const tileCount = canvas.width / gridSize;

let snake = [];
let food = { x: 5, y: 5 };
let dx = 0;
let dy = 0;
let score = 0;
let highScore = localStorage.getItem("snakeHighScore") || 0;
highScoreElement.textContent = highScore;

let gameInterval = null;
let isRunning = false;

function resetGame() {
  snake = [
    { x: 10, y: 10 },
    { x: 9, y: 10 },
    { x: 8, y: 10 },
  ];
  dx = 1;
  dy = 0;
  score = 0;
  scoreElement.textContent = score;
  spawnFood();
}

function spawnFood() {
  food.x = Math.floor(Math.random() * tileCount);
  food.y = Math.floor(Math.random() * tileCount);
  // Ensure food does not spawn on the snake's body
  snake.forEach((part) => {
    if (part.x === food.x && part.y === food.y) {
      spawnFood();
    }
  });
}

function startGame() {
  resetGame();
  gameOverlay.style.opacity = "0";
  gameOverlay.style.pointerEvents = "none";
  if (gameInterval) clearInterval(gameInterval);
  gameInterval = setInterval(main, 100);
  isRunning = true;
}

function main() {
  if (hasGameEnded()) {
    endGame();
    return;
  }
  clearCanvas();
  drawFood();
  moveSnake();
  drawSnake();
}

function clearCanvas() {
  const isDark = document.documentElement.classList.contains("dark");
  ctx.fillStyle = isDark ? "#1E2721" : "#F9FBF9";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawSnake() {
  snake.forEach((part, index) => {
    ctx.fillStyle = index === 0 ? "#3B4A3F" : "#5C7062";
    if (document.documentElement.classList.contains("dark")) {
      ctx.fillStyle = index === 0 ? "#C5D9C3" : "#7A9A83";
    }
    ctx.fillRect(
      part.x * gridSize,
      part.y * gridSize,
      gridSize - 2,
      gridSize - 2,
    );
  });
}

function moveSnake() {
  const head = { x: snake[0].x + dx, y: snake[0].y + dy };

  // Handle wall behavior based on user selection
  if (passThroughWalls) {
    // Wrap-around logic (passes through walls)
    if (head.x < 0) head.x = tileCount - 1;
    else if (head.x >= tileCount) head.x = 0;

    if (head.y < 0) head.y = tileCount - 1;
    else if (head.y >= tileCount) head.y = 0;
  }

  snake.unshift(head);

  // Check if snake eats the food
  if (head.x === food.x && head.y === food.y) {
    score += 10;
    scoreElement.textContent = score;
    if (score > highScore) {
      highScore = score;
      highScoreElement.textContent = highScore;
      localStorage.setItem("snakeHighScore", highScore);
    }
    spawnFood();
  } else {
    snake.pop();
  }
}

function hasGameEnded() {
  const head = snake[0];

  // Check wall collision only if passThroughWalls is turned off
  if (!passThroughWalls) {
    if (
      head.x < 0 ||
      head.x >= tileCount ||
      head.y < 0 ||
      head.y >= tileCount
    ) {
      return true;
    }
  }

  // Check self-collision
  for (let i = 1; i < snake.length; i++) {
    if (head.x === snake[i].x && head.y === snake[i].y) {
      return true;
    }
  }
  return false;
}

function drawFood() {
  ctx.fillStyle = "#E07A5F"; // Pastel red for food
  ctx.fillRect(
    food.x * gridSize,
    food.y * gridSize,
    gridSize - 2,
    gridSize - 2,
  );
}

function endGame() {
  clearInterval(gameInterval);
  isRunning = false;
  overlayText.textContent = `თამაში დასრულდა! ქულა: ${score}`;
  startBtn.textContent = `თავიდან დაწყება`;
  gameOverlay.style.opacity = "1";
  gameOverlay.style.pointerEvents = "auto";
}

startBtn.addEventListener("click", startGame);

// Keyboard event listeners for movement
document.addEventListener("keydown", (e) => {
  if (!isRunning) return;

  const keyPressed = e.keyCode;
  const goingUp = dy === -1;
  const goingDown = dy === 1;
  const goingRight = dx === 1;
  const goingLeft = dx === -1;

  if ((keyPressed === 37 || e.key === "a" || e.key === "ა") && !goingRight) {
    dx = -1;
    dy = 0;
  }
  if ((keyPressed === 38 || e.key === "w" || e.key === "ც") && !goingDown) {
    dx = 0;
    dy = -1;
  }
  if ((keyPressed === 39 || e.key === "d" || e.key === "დ") && !goingLeft) {
    dx = 1;
    dy = 0;
  }
  if ((keyPressed === 40 || e.key === "s" || e.key === "ს") && !goingUp) {
    dx = 0;
    dy = 1;
  }
});
