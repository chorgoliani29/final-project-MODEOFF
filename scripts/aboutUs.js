const themeToggle = document.getElementById("themeToggle");
let isDark = false;

themeToggle.addEventListener("click", () => {
  isDark = !isDark;
  if (isDark) {
    document.body.style.backgroundColor = "#1A211C";
    document.body.style.color = "#E2E8E0";
    themeToggle.textContent = "☀️";
  } else {
    document.body.style.backgroundColor = "#F4F6F4";
    document.body.style.color = "#2C3E50";
    themeToggle.textContent = "🌙";
  }
});
