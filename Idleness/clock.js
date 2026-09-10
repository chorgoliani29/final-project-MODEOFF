function updateClock() {
  const now = new Date();

  // საათი, წუთი, წამი
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  document.getElementById("clock").textContent =
    `${hours}:${minutes}:${seconds}`;

  // ქართული მასივები თვეებისა და კვირის დღეებისთვის
  const daysOfWeek = [
    "კვირა",
    "ორშაბათი",
    "სამშაბათი",
    "ოთხშაბათი",
    "ხუთშაბათი",
    "პარასკევი",
    "შაბათი",
  ];
  const months = [
    "იანვარი",
    "თებერვალი",
    "მარტი",
    "აპრილი",
    "მაისი",
    "ივნისი",
    "ივლისი",
    "აგვისტო",
    "სექტემბერი",
    "ოქტომბერი",
    "ნოემბერი",
    "დეკემბერი",
  ];

  const dayName = daysOfWeek[now.getDay()];
  const dayNum = now.getDate();
  const monthName = months[now.getMonth()];
  const year = now.getFullYear();

  // საბოლოო ფორმატი: ორშაბათი, 10 სექტემბერი, 2026 წელი
  document.getElementById("date").textContent =
    `${dayName}, ${dayNum} ${monthName}, ${year} წელი`;
}

updateClock();
setInterval(updateClock, 1000);

// მხოლოდ დროის ბლოკის სრულ ეკრანზე გაშლის ფუნქცია
function toggleFullscreen() {
  const container = document.getElementById("clockContainer");

  if (!document.fullscreenElement) {
    container.requestFullscreen().catch((err) => {
      alert(`შეცდომა სრულ ეკრანზე გადასვლისას: ${err.message}`);
    });
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

// სრულ ეკრანზე გადასვლისას ვიზუალის ავტომატური კორექტირება
document.addEventListener("fullscreenchange", () => {
  const container = document.getElementById("clockContainer");
  const clockElement = document.getElementById("clock");

  if (document.fullscreenElement === container) {
    container.classList.add(
      "max-w-none",
      "w-full",
      "h-full",
      "rounded-none",
      "border-none",
      "justify-center",
    );
    clockElement.classList.remove("text-7xl", "sm:text-9xl");
    clockElement.classList.add("text-[12vw]");
  } else {
    container.classList.remove(
      "max-w-none",
      "w-full",
      "h-full",
      "rounded-none",
      "border-none",
      "justify-center",
    );
    clockElement.classList.remove("text-[12vw]");
    clockElement.classList.add("text-7xl", "sm:text-9xl");
  }
});
