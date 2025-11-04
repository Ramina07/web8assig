// === Theme Toggle Script ===
document.addEventListener("DOMContentLoaded", () => {
  const themeBtn = document.getElementById("theme-btn");
  const elements = document.querySelectorAll("body, header, main, footer, .sidebar");

  // Проверяем Local Storage при загрузке
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "night") {
    elements.forEach(el => el.classList.add("night-mode"));
    if (themeBtn) themeBtn.textContent = "Switch to Day Mode";
  } else {
    if (themeBtn) themeBtn.textContent = "Switch to Night Mode";
  }

  // Добавляем обработчик клика, только если кнопка есть
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      elements.forEach(el => el.classList.toggle("night-mode"));

      const isNight = document.body.classList.contains("night-mode");
      themeBtn.textContent = isNight
        ? "Switch to Day Mode"
        : "Switch to Night Mode";

      localStorage.setItem("theme", isNight ? "night" : "day");
    });
  }
});
