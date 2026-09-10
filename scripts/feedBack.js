// burger menu
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuIcon = document.getElementById("menu-icon");
  const closeIcon = document.getElementById("close-icon");

  if (!menuBtn || !mobileMenu || !menuIcon || !closeIcon) return;

  function toggleMenu() {
    // ვამოწმებთ მენიუ გახსნილია თუ არა (თუ შეიცავს -translate-y-full-ს, ე.ი. დაკეტილია)
    const isClosed = mobileMenu.classList.contains("-translate-y-full");

    if (isClosed) {
      // მენიუს გახსნა
      mobileMenu.classList.remove(
        "-translate-y-full",
        "opacity-0",
        "pointer-events-none",
      );
      menuIcon.classList.add("hidden");
      closeIcon.classList.remove("hidden");
    } else {
      // მენიუს დახურვა
      mobileMenu.classList.add(
        "-translate-y-full",
        "opacity-0",
        "pointer-events-none",
      );
      menuIcon.classList.remove("hidden");
      closeIcon.classList.add("hidden");
    }
  }

  menuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  // გარეთ დაკლიკებისას დახურვა
  document.addEventListener("click", (e) => {
    if (
      !mobileMenu.classList.contains("-translate-y-full") &&
      !mobileMenu.contains(e.target) &&
      !menuBtn.contains(e.target)
    ) {
      toggleMenu();
    }
  });

  // ლინკზე დაჭერისას ავტომატურად დახურვა
  const mobileLinks = mobileMenu.querySelectorAll("a");
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add(
        "-translate-y-full",
        "opacity-0",
        "pointer-events-none",
      );
      menuIcon.classList.remove("hidden");
      closeIcon.classList.add("hidden");
    });
  });
});
