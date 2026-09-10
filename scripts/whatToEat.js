// burger menu
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuIcon = document.getElementById("menu-icon");
  const closeIcon = document.getElementById("close-icon");

  if (!menuBtn || !mobileMenu) return;

  function toggleMenu() {
    const isOpen = !mobileMenu.classList.contains("hidden");

    if (isOpen) {
      mobileMenu.classList.add("hidden");
      if (menuIcon) menuIcon.classList.remove("hidden");
      if (closeIcon) closeIcon.classList.add("hidden");
    } else {
      mobileMenu.classList.remove("hidden");
      if (menuIcon) menuIcon.classList.add("hidden");
      if (closeIcon) closeIcon.classList.remove("hidden");
    }
  }

  menuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  // გარეთ დაკლიკებისას დახურვა
  document.addEventListener("click", (e) => {
    if (
      !mobileMenu.classList.contains("hidden") &&
      !mobileMenu.contains(e.target) &&
      !menuBtn.contains(e.target)
    ) {
      toggleMenu();
    }
  });

  // ლინკზე დაჭერისას დახურვა
  const mobileLinks = mobileMenu.querySelectorAll("a");
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
      if (menuIcon) menuIcon.classList.remove("hidden");
      if (closeIcon) closeIcon.classList.add("hidden");
    });
  });
});
