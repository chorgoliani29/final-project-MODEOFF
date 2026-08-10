/*
==================================
MODE:OFF
Main JavaScript
==================================
*/

document.addEventListener("DOMContentLoaded", () => {
  console.log("MODE:OFF homepage loaded successfully.");

  const header = document.getElementById("siteHeader");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
});
