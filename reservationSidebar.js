document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("privateFormSidebar");
  if (!form) return;

  const steps = form.querySelectorAll(".form-step");
  let currentStep = 0;

  // Функция показа текущего шага
  function showStep(step) {
    steps.forEach((s, i) => s.classList.toggle("step-active", i === step));
  }

  showStep(currentStep);

  // Кнопки "Next"
  form.querySelectorAll(".next-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      if (currentStep < steps.length - 1) {
        currentStep++;
        showStep(currentStep);
      }
    });
  });

  // Кнопки "Back"
  form.querySelectorAll(".back-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      if (currentStep > 0) {
        currentStep--;
        showStep(currentStep);
      }
    });
  });

  // === Модальное окно ===
  const modal = document.getElementById("reservation-modal");
  const closeBtn = modal.querySelector(".close");
  const title = document.getElementById("reservation-title");
  const desc = document.getElementById("reservation-description");

  // Закрыть окно
  closeBtn.addEventListener("click", () => modal.classList.remove("show"));
  window.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.remove("show");
  });

  // === Обработка отправки формы ===
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Собираем данные
    const name = form.guestName.value.trim();
    const guests = form.guests.value.trim();
    const occasion = form.occasion.value;

    // Показываем модалку
    title.textContent = "Reservation Submitted!";
    desc.textContent = `Thank you, ${name}! Your reservation for ${guests} guest(s) (${occasion}) has been received.`;
    modal.classList.add("show");

    // Сброс формы
    form.reset();
    currentStep = 0;
    showStep(currentStep);
  });
});
