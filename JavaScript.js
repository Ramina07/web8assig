document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("myForm");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // предотвращаем стандартную отправку

    let isValid = true;

    // Удаляем старые ошибки
    document.querySelectorAll(".error").forEach(msg => msg.remove());

    // === Проверка имени ===
    let name = document.getElementById("resName");
    let nameRegex = /^[a-zA-Z\s]+$/;
    if (name.value.trim() === "") {
      showError(name, "Name is required");
      isValid = false;
    } else if (!nameRegex.test(name.value)) {
      showError(name, "Please enter a valid name (only letters and spaces)");
      isValid = false;
    }

    // === Проверка email ===
    let email = document.getElementById("resEmail");
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email.value.trim() === "") {
      showError(email, "Email is required");
      isValid = false;
    } else if (!emailRegex.test(email.value)) {
      showError(email, "Please enter a valid email address");
      isValid = false;
    }

    // === Проверка телефона ===
    let phone = document.getElementById("phone");
    let phoneRegex = /^7\d{10}$/;
    if (phone.value.trim() === "") {
      showError(phone, "Phone number is required");
      isValid = false;
    } else if (!phoneRegex.test(phone.value)) {
      showError(phone, "Please enter a valid phone number (11 digits, starting with 7)");
      isValid = false;
    }

    // === Проверка даты ===
    let date = document.getElementById("date");
    let dateRegex = /^\d{2}\.\d{2}\.\d{4}$/;
    if (date.value.trim() === "") {
      showError(date, "Reservation date is required");
      isValid = false;
    } else if (!dateRegex.test(date.value)) {
      showError(date, "Please enter a valid date in the format DD.MM.YYYY");
      isValid = false;
    } else {
      let [day, month, year] = date.value.split(".").map(Number);
      if (month < 1 || month > 12) {
        showError(date, "Month must be between 01 and 12");
        isValid = false;
      } else {
        let daysInMonth = new Date(year, month, 0).getDate();
        if (day < 1 || day > daysInMonth) {
          showError(date, `Day must be between 01 and ${daysInMonth}`);
          isValid = false;
        }
      }
    }

    // === Проверка времени ===
    let time = document.getElementById("time");
    let timeRegex = /^[0-2][0-9]:[0-5][0-9]$/;
    if (time.value.trim() === "") {
      showError(time, "Reservation time is required");
      isValid = false;
    } else if (!timeRegex.test(time.value)) {
      showError(time, "Please enter a valid time in the format HH:MM");
      isValid = false;
    }

    // === Если форма невалидна ===
    if (!isValid) {
      if (!document.getElementById("formErrorAlert")) {
        const alertBox = document.createElement("div");
        alertBox.id = "formErrorAlert";
        alertBox.textContent = "Please correct the highlighted errors.";
        alertBox.style.color = "red";
        alertBox.style.fontWeight = "bold";
        alertBox.style.marginTop = "10px";
        form.appendChild(alertBox);
      }
      return;
    }

    // === Если форма валидна ===
    const existingAlert = document.getElementById("formErrorAlert");
    if (existingAlert) existingAlert.remove();

    form.classList.add("validated");
    form.dispatchEvent(new Event("validatedSubmit", { bubbles: true }));
  });

  // === Функция вывода ошибок ===
  function showError(input, message) {
    if (!input.nextElementSibling || !input.nextElementSibling.classList.contains("error")) {
      const error = document.createElement("div");
      error.classList.add("error");
      error.style.color = "red";
      error.textContent = message;
      input.insertAdjacentElement("afterend", error);
    }
  }
});
