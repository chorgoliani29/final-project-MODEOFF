// --- Tic-Tac-Toe Game Logic ---
let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let isGameActive = true;
let gameMode = "pvp";
let autoResetTimeout = null;

let scores = { X: 0, O: 0, tie: 0 };

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const statusText = document.getElementById("statusText");
const cells = document.querySelectorAll(".cell");

function setGameMode(mode) {
  gameMode = mode;
  const pvpBtn = document.getElementById("modePvP");
  const pvaiBtn = document.getElementById("modePvAI");
  const labelO = document.getElementById("labelO");

  if (mode === "pvp") {
    pvpBtn.className =
      "flex-1 sm:flex-initial px-4 py-2 rounded-xl text-xs font-semibold transition cursor-pointer bg-[#3B4A3F] dark:bg-[#5C7062] text-white shadow-sm";
    pvaiBtn.className =
      "flex-1 sm:flex-initial px-4 py-2 rounded-xl text-xs font-semibold transition cursor-pointer text-[#5C6B5E] dark:text-[#C5D9C3] hover:text-[#2C3E2B]";
    labelO.textContent = "მოთამაშე O";
  } else {
    pvaiBtn.className =
      "flex-1 sm:flex-initial px-4 py-2 rounded-xl text-xs font-semibold transition cursor-pointer bg-[#3B4A3F] dark:bg-[#5C7062] text-white shadow-sm";
    pvpBtn.className =
      "flex-1 sm:flex-initial px-4 py-2 rounded-xl text-xs font-semibold transition cursor-pointer text-[#5C6B5E] dark:text-[#C5D9C3] hover:text-[#2C3E2B]";
    labelO.textContent = "კომპიუტერი (AI)";
  }
  if (autoResetTimeout) clearTimeout(autoResetTimeout);
  resetGame();
}

function makeMove(index) {
  if (board[index] !== "" || !isGameActive) return;

  board[index] = currentPlayer;
  updateUI();

  if (checkWin(currentPlayer)) {
    endGame(false);
    return;
  } else if (board.every((cell) => cell !== "")) {
    endGame(true);
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
  updateStatusMessage();

  if (gameMode === "pvai" && currentPlayer === "O" && isGameActive) {
    isGameActive = false;
    setTimeout(() => {
      if (!isGameActive && board.every((c) => c === "")) return;
      let aiMove = bestSpot();
      if (aiMove !== undefined) {
        board[aiMove] = "O";
      }
      isGameActive = true;
      updateUI();

      if (checkWin("O")) {
        endGame(false);
      } else if (board.every((cell) => cell !== "")) {
        endGame(true);
      } else {
        currentPlayer = "X";
        updateStatusMessage();
      }
    }, 300);
  }
}

function updateUI() {
  cells.forEach((cell, index) => {
    cell.textContent = board[index];
    if (board[index] === "X") {
      cell.className =
        "cell bg-[#F9FBF8] dark:bg-[#232F27] border-2 border-[#8FA38D] text-[#3B4A3F] dark:text-[#F0F4F0] rounded-2xl text-4xl font-bold flex items-center justify-center shadow-sm";
    } else if (board[index] === "O") {
      cell.className =
        "cell bg-[#F9FBF8] dark:bg-[#232F27] border-2 border-[#D8E2D6] text-[#6C7A6A] dark:text-[#C5D9C3] rounded-2xl text-4xl font-bold flex items-center justify-center shadow-sm";
    } else {
      cell.className =
        "cell bg-[#F9FBF8] dark:bg-[#232F27] border-2 border-[#D8E2D6] dark:border-[#42574A] rounded-2xl text-4xl font-bold flex items-center justify-center hover:bg-[#EAEFE9] dark:hover:bg-[#2B3A30] cursor-pointer shadow-sm";
    }
  });
}

function updateStatusMessage() {
  if (gameMode === "pvai" && currentPlayer === "O") {
    statusText.textContent = "კომპიუტერი ფიქრობს...";
  } else {
    statusText.textContent = `სვლა: ${currentPlayer} მოთამაშე`;
  }
}

function checkWin(player) {
  return winningConditions.some((condition) => {
    return condition.every((index) => board[index] === player);
  });
}

function getWinningLine() {
  for (let condition of winningConditions) {
    let [a, b, c] = condition;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return condition;
    }
  }
  return null;
}

function endGame(isTie) {
  isGameActive = false;
  if (isTie) {
    statusText.textContent = "თამაში დასრულდა ფრედ!";
    scores.tie++;
    document.getElementById("scoreTie").textContent = scores.tie;
  } else {
    statusText.textContent = `გაიმარჯვა ${currentPlayer} მოთამაშემ! 🎉`;
    scores[currentPlayer]++;
    document.getElementById("scoreX").textContent = scores.X;
    document.getElementById("scoreO").textContent = scores.O;

    let winningLine = getWinningLine();
    if (winningLine) {
      winningLine.forEach((index) => {
        cells[index].classList.add("bg-[#D8E2D6]", "dark:bg-[#42574A]");
      });
    }
  }

  // Automatically restart the game in exactly 1.5 seconds
  autoResetTimeout = setTimeout(() => {
    resetGame();
  }, 1500);
}

function resetGame() {
  if (autoResetTimeout) clearTimeout(autoResetTimeout);
  board = ["", "", "", "", "", "", "", "", ""];
  isGameActive = true;
  currentPlayer = "X";
  updateStatusMessage();
  updateUI();
}

function resetScores() {
  if (autoResetTimeout) clearTimeout(autoResetTimeout);
  scores = { X: 0, O: 0, tie: 0 };
  document.getElementById("scoreX").textContent = 0;
  document.getElementById("scoreO").textContent = 0;
  document.getElementById("scoreTie").textContent = 0;
  resetGame();
}

// --- Minimax Algorithm for AI ---
function bestSpot() {
  let bestScore = -Infinity;
  let move;
  for (let i = 0; i < 9; i++) {
    if (board[i] === "") {
      board[i] = "O";
      let score = minimax(board, 0, false);
      board[i] = "";
      if (score > bestScore) {
        bestScore = score;
        move = i;
      }
    }
  }
  return move;
}

const scoresMap = {
  O: 10,
  X: -10,
  tie: 0,
};

function minimax(newBoard, depth, isMaximizing) {
  let result = checkAIWinState();
  if (result !== null) {
    return scoresMap[result];
  }

  if (isMaximizing) {
    let bestScore = -Infinity;
    for (let i = 0; i < 9; i++) {
      if (newBoard[i] === "") {
        newBoard[i] = "O";
        let score = minimax(newBoard, depth + 1, false);
        newBoard[i] = "";
        bestScore = Math.max(score, bestScore);
      }
    }
    return bestScore;
  } else {
    let bestScore = Infinity;
    for (let i = 0; i < 9; i++) {
      if (newBoard[i] === "") {
        newBoard[i] = "X";
        let score = minimax(newBoard, depth + 1, true);
        newBoard[i] = "";
        bestScore = Math.min(score, bestScore);
      }
    }
    return bestScore;
  }
}

function checkAIWinState() {
  for (let condition of winningConditions) {
    let [a, b, c] = condition;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  if (board.every((cell) => cell !== "")) {
    return "tie";
  }
  return null;
}
