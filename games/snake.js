// burger menu
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");
const mobileLinks = document.querySelectorAll(".mobile-link");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("opacity-0");
  mobileMenu.classList.toggle("pointer-events-none");
  mobileMenu.classList.toggle("-translate-y-full");

  menuIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
});

mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add(
      "opacity-0",
      "pointer-events-none",
      "-translate-y-full",
    );
    menuIcon.classList.remove("hidden");
    closeIcon.classList.add("hidden");
  });
});

// --- Wall Mode Toggle Logic (Default: Enabled) ---
const wallToggle = document.getElementById("wallToggle");
const wallToggleCircle = document.getElementById("wallToggleCircle");
let passThroughWalls = true;

wallToggleCircle.style.transform = "translateX(20px)";
wallToggle.classList.add("bg-[#5C7062]");

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

// Overall High Score
let highScore = localStorage.getItem("snakeHighScore") || 0;
highScoreElement.textContent = highScore;

let gameInterval = null;
let isRunning = false;
let isPaused = false;
let isCountdown = false;

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
  isPaused = false;
  spawnFood();
}

function spawnFood() {
  food.x = Math.floor(Math.random() * tileCount);
  food.y = Math.floor(Math.random() * tileCount);
  snake.forEach((part) => {
    if (part.x === food.x && part.y === food.y) {
      spawnFood();
    }
  });
}

function startGame() {
  if (isCountdown) return;
  isCountdown = true;
  resetGame();

  startBtn.style.display = "none";
  overlayText.innerHTML = "მზადება... 1";
  gameOverlay.style.opacity = "1";
  gameOverlay.style.pointerEvents = "auto";

  setTimeout(() => {
    isCountdown = false;
    startBtn.style.display = "block";
    gameOverlay.style.opacity = "0";
    gameOverlay.style.pointerEvents = "none";
    if (gameInterval) clearInterval(gameInterval);
    gameInterval = setInterval(main, 100);
    isRunning = true;
    isPaused = false;
  }, 1000);
}

function main() {
  if (isPaused) return;
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

  if (passThroughWalls) {
    if (head.x < 0) head.x = tileCount - 1;
    else if (head.x >= tileCount) head.x = 0;

    if (head.y < 0) head.y = tileCount - 1;
    else if (head.y >= tileCount) head.y = 0;
  }

  snake.unshift(head);

  if (head.x === food.x && head.y === food.y) {
    score += 10;
    scoreElement.textContent = score;

    // Check Global High Score
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

  for (let i = 1; i < snake.length; i++) {
    if (head.x === snake[i].x && head.y === snake[i].y) {
      return true;
    }
  }
  return false;
}

function drawFood() {
  ctx.fillStyle = "#E07A5F";
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
  isPaused = false;
  overlayText.innerHTML = `თამაში დასრულდა!<br>ქულა: ${score}<br>დააჭირეთ SPACE`;
  startBtn.textContent = `თავიდან დაწყება`;
  gameOverlay.style.opacity = "1";
  gameOverlay.style.pointerEvents = "auto";
}

startBtn.addEventListener("click", startGame);

// Keyboard event listeners
document.addEventListener("keydown", (e) => {
  if (!isRunning && !isCountdown && (e.key === " " || e.code === "Space")) {
    e.preventDefault();
    startGame();
    return;
  }

  if (!isRunning) return;

  if (e.key === " " || e.code === "Space") {
    e.preventDefault();
    isPaused = !isPaused;
    if (isPaused) {
      overlayText.innerHTML = "პაუზა<br>გაგრძელებისთვის დააჭირეთ SPACE";
      gameOverlay.style.opacity = "1";
      gameOverlay.style.pointerEvents = "auto";
    } else {
      gameOverlay.style.opacity = "0";
      gameOverlay.style.pointerEvents = "none";
    }
    return;
  }

  if (isPaused) return;

  const key = e.key.toLowerCase();
  const keyPressed = e.keyCode;
  const goingUp = dy === -1;
  const goingDown = dy === 1;
  const goingRight = dx === 1;
  const goingLeft = dx === -1;

  if ((keyPressed === 37 || key === "a" || key === "ა") && !goingRight) {
    dx = -1;
    dy = 0;
    e.preventDefault();
  }
  if ((keyPressed === 38 || key === "w" || key === "წ") && !goingDown) {
    dx = 0;
    dy = -1;
    e.preventDefault();
  }
  if ((keyPressed === 39 || key === "d" || key === "დ") && !goingLeft) {
    dx = 1;
    dy = 0;
    e.preventDefault();
  }
  if ((keyPressed === 40 || key === "s" || key === "ს") && !goingUp) {
    dx = 0;
    dy = 1;
    e.preventDefault();
  }
});
