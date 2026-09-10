// burger menu
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuIcon = document.getElementById("menu-icon");
  const closeIcon = document.getElementById("close-icon");

  if (!menuBtn || !mobileMenu || !menuIcon || !closeIcon) return;

  function toggleMenu() {
    const isOpen = !mobileMenu.classList.contains("hidden");

    if (isOpen) {
      mobileMenu.classList.add("hidden");
      menuIcon.classList.remove("hidden");
      closeIcon.classList.add("hidden");
    } else {
      mobileMenu.classList.remove("hidden");
      menuIcon.classList.add("hidden");
      closeIcon.classList.remove("hidden");
    }
  }

  menuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  // გარეთ დაწკაპუნებისას მენიუს დახურვა
  document.addEventListener("click", (e) => {
    if (
      !mobileMenu.classList.contains("hidden") &&
      !mobileMenu.contains(e.target) &&
      !menuBtn.contains(e.target)
    ) {
      toggleMenu();
    }
  });

  // მენიუს ლინკზე დაჭერისას ავტომატურად დახურვა
  const mobileLinks = mobileMenu.querySelectorAll("a");
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
      menuIcon.classList.remove("hidden");
      closeIcon.classList.add("hidden");
    });
  });
});
