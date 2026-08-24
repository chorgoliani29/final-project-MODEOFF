// 1. Check saved theme on page load and apply it
const themeToggle = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.style.backgroundColor = "#1A211C";
  document.body.style.color = "#E2E8E0";
  if (themeToggle) themeToggle.textContent = "☀️";
} else {
  document.body.style.backgroundColor = "#F4F6F4";
  document.body.style.color = "#2C3E50";
  if (themeToggle) themeToggle.textContent = "🌙";
}

// 2. Handle theme toggle click event
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    let currentTheme = localStorage.getItem("theme");

    if (currentTheme === "dark") {
      // Switch to Light mode
      localStorage.setItem("theme", "light");
      document.body.style.backgroundColor = "#F4F6F4";
      document.body.style.color = "#2C3E50";
      themeToggle.textContent = "🌙";
    } else {
      // Switch to Dark mode
      localStorage.setItem("theme", "dark");
      document.body.style.backgroundColor = "#1A211C";
      document.body.style.color = "#E2E8E0";
      themeToggle.textContent = "☀️";
    }
  });
}
