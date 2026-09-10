// burger menu
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");
const mobileLinks = document.querySelectorAll(".mobile-link");

menuBtn.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.toggle("opacity-0");
  mobileMenu.classList.toggle("pointer-events-none");
  mobileMenu.classList.toggle("-translate-y-full");

  // აიქონების შეცვლა (ჰამბურგი / ჯვარი)
  menuIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
});

// მობილურ მენიუში ლინკზე დაჭერისას მენიუს დაკეცვა
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
