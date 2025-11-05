document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("modeToggle");
  const body = document.body;

  // Проверяем сохранённую тему
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "night") {
    body.classList.add("night-mode");
    toggleBtn.textContent = "Switch to Day Mode ☀️";
  } else {
    body.classList.remove("night-mode");
    toggleBtn.textContent = "Switch to Night Mode 🌙";
  }

  // Переключатель темы
  toggleBtn.addEventListener("click", () => {
    body.classList.toggle("night-mode");

    if (body.classList.contains("night-mode")) {
      localStorage.setItem("theme", "night");
      toggleBtn.textContent = "Switch to Day Mode ☀️";
    } else {
      localStorage.setItem("theme", "day");
      toggleBtn.textContent = "Switch to Night Mode 🌙";
    }
  });
});
