const form = document.getElementById("fsyForm");
const type = document.getElementById("travelRange");
const accessDiv = document.getElementById("accesscode");
const codeLabel = document.getElementById("codeLabel");
const codeInput = document.getElementById("notes");
const eventDate = document.getElementById("eventdate");
const errors = document.getElementById("errors");
const output = document.getElementById("output");

// Mostrar y ocultar el campo
type.addEventListener("change", () => {
  accessDiv.hidden = false;

  if (type.value === "student") {
    codeLabel.textContent = "Student I#";
    codeInput.value = "";
  }

  if (type.value === "guest") {
    codeLabel.textContent = "Access Code";
    codeInput.value = "";
  }

  if (type.value === "") {
    accessDiv.hidden = true;
  }
});

// Validar formulario
form.addEventListener("submit", (event) => {
  event.preventDefault();

  errors.innerHTML = "";
  output.innerHTML = "";

  let errorMessages = [];

  // Fecha futura
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const selectedDate = new Date(eventDate.value);

  if (selectedDate <= today) {
    errorMessages.push("Event date must be later than today.");
  }

  // Validar estudiante
  if (type.value === "student") {
    const studentRegex = /^\d{9}$/;

    if (!studentRegex.test(codeInput.value)) {
      errorMessages.push("Student I# must contain exactly 9 digits.");
    }
  }

  // Validar invitado
  if (type.value === "guest") {
    if (codeInput.value !== "EVENT131") {
      errorMessages.push("Access Code must be EVENT131.");
    }
  }

  // Mostrar errores
  if (errorMessages.length > 0) {
    errors.innerHTML = errorMessages.join("<br>");
    return;
  }

  // Ticket exitoso
  output.innerHTML = `
    <h2>Ticket Created!</h2>
    <p><strong>Name:</strong> ${form.firstName.value} ${form.lastName.value}</p>
    <p><strong>Email:</strong> ${form.email.value}</p>
    <p><strong>Type:</strong> ${type.value}</p>
    <p><strong>Date:</strong> ${eventDate.value}</p>
  `;

  form.reset();
  accessDiv.hidden = true;
});