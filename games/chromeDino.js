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

// --- Dino Game Logic ---
const canvas = document.getElementById("dinoCanvas");
const ctx = canvas.getContext("2d");
const scoreEl = document.getElementById("score");
const highScoreEl = document.getElementById("high-score");
const gameOverScreen = document.getElementById("game-over");
const startBtn = document.getElementById("start-btn");

let score = 0;
let highScore = 0;
let isPlaying = false;
let frameCount = 0;
let baseSpeed = 7;
let gameSpeed = 7;
let nextSpawnTime = 0;

let dino = {
  x: 70,
  y: 220,
  width: 40,
  height: 48,
  vy: 0,
  gravity: 0.95,
  jumpPower: -15,
  isJumping: false,
};

let obstacles = [];
let clouds = [
  { x: 200, y: 80, speed: 1.5 },
  { x: 500, y: 120, speed: 1.5 },
];

window.addEventListener("keydown", (e) => {
  if (e.code === "Space" || e.key === "ArrowUp") {
    e.preventDefault();
    jump();
  }
});

canvas.addEventListener("click", jump);

function jump() {
  if (!isPlaying) {
    resetGame();
  } else if (!dino.isJumping) {
    dino.vy = dino.jumpPower;
    dino.isJumping = true;
  }
}

function resetGame() {
  dino.y = 220;
  dino.vy = 0;
  dino.isJumping = false;
  obstacles = [];
  score = 0;
  frameCount = 0;
  gameSpeed = baseSpeed;
  nextSpawnTime = 0;
  scoreEl.textContent = "00000";
  gameOverScreen.classList.add("hidden");
  startBtn.classList.add("hidden");
  isPlaying = true;
  loop();
}

function update() {
  dino.vy += dino.gravity;
  dino.y += dino.vy;

  if (dino.y > 220) {
    dino.y = 220;
    dino.vy = 0;
    dino.isJumping = false;
  }

  gameSpeed = baseSpeed + score / 35;

  clouds.forEach((cloud) => {
    cloud.x -= cloud.speed;
    if (cloud.x + 50 < 0) {
      cloud.x = canvas.width + 50;
      cloud.y = Math.floor(Math.random() * 80) + 50;
    }
  });

  if (frameCount >= nextSpawnTime) {
    let randomHeight = Math.random() > 0.4 ? 38 : 52;
    let yPos = 268 - randomHeight;

    obstacles.push({
      x: canvas.width,
      y: yPos,
      width: 24,
      height: randomHeight,
    });

    let minWait = Math.max(25, 55 - gameSpeed * 2);
    let maxWait = Math.max(50, 110 - gameSpeed * 3);
    nextSpawnTime =
      frameCount + Math.floor(Math.random() * (maxWait - minWait)) + minWait;
  }

  for (let i = obstacles.length - 1; i >= 0; i--) {
    obstacles[i].x -= gameSpeed;

    if (
      dino.x + 6 < obstacles[i].x + obstacles[i].width &&
      dino.x + dino.width - 6 > obstacles[i].x &&
      dino.y + 4 < obstacles[i].y + obstacles[i].height &&
      dino.y + dino.height > obstacles[i].y
    ) {
      endGame();
    }

    if (obstacles[i].x + obstacles[i].width < 0) {
      obstacles.splice(i, 1);
      score += 10;
      scoreEl.textContent = String(score).padStart(5, "0");
      if (score > highScore) {
        highScore = score;
        highScoreEl.textContent = "HI " + String(highScore).padStart(5, "0");
      }
    }
  }

  frameCount++;
}

function draw() {
  const isDark = document.documentElement.classList.contains("dark");

  // Canvas Background
  ctx.fillStyle = isDark ? "#1E2721" : "#F9FBF9";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Clouds
  ctx.fillStyle = isDark ? "#2D3B31" : "#E3EBE1";
  clouds.forEach((cloud) => {
    ctx.fillRect(cloud.x, cloud.y, 40, 12);
    ctx.fillRect(cloud.x + 10, cloud.y - 6, 20, 8);
  });

  // Ground Line
  ctx.strokeStyle = isDark ? "#42574A" : "#D8E2D6";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(0, 268);
  ctx.lineTo(canvas.width, 268);
  ctx.stroke();

  // Dino
  ctx.fillStyle = isDark ? "#C5D9C3" : "#3B4A3F";
  ctx.fillRect(dino.x + 8, dino.y + 12, 24, 30);
  ctx.fillRect(dino.x + 22, dino.y, 18, 20);

  // Dino Eye
  ctx.fillStyle = isDark ? "#1E2721" : "#F9FBF9";
  ctx.fillRect(dino.x + 32, dino.y + 4, 3, 3);

  // Dino Legs
  ctx.fillStyle = isDark ? "#C5D9C3" : "#3B4A3F";
  if (dino.isJumping) {
    ctx.fillRect(dino.x + 10, dino.y + 42, 6, 6);
    ctx.fillRect(dino.x + 24, dino.y + 42, 6, 6);
  } else {
    let legOffset = Math.floor(frameCount / 3) % 2 === 0;
    ctx.fillRect(dino.x + 10, dino.y + 42, 6, legOffset ? 6 : 3);
    ctx.fillRect(dino.x + 24, dino.y + 42, 6, legOffset ? 3 : 6);
  }

  // Obstacles (Cactuses)
  ctx.fillStyle = isDark ? "#7A9A83" : "#5C7062";
  obstacles.forEach((obs) => {
    ctx.fillRect(obs.x + 6, obs.y, 12, obs.height);
    ctx.fillRect(obs.x, obs.y + 10, 6, 12);
    ctx.fillRect(obs.x + 18, obs.y + 14, 6, 12);
  });
}

function loop() {
  if (!isPlaying) return;
  update();
  draw();
  requestAnimationFrame(loop);
}

function endGame() {
  isPlaying = false;
  gameOverScreen.classList.remove("hidden");
  startBtn.classList.remove("hidden");
  startBtn.textContent = "თავიდან დაწყება";
}
