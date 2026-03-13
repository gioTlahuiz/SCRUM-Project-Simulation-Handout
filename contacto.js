// codigo para el formulario 
document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita envío automático

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Por favor completa todos los campos.");
    return;
  }

  if (!email.includes("@")) {
    alert("Por favor ingresa un correo válido.");
    return;
  }

  alert("¡Gracias por tu mensaje, " + name + "! Nos pondremos en contacto pronto.");
});
// Efectos 
const inputs = document.querySelectorAll("input, textarea");

inputs.forEach(input => {
  input.addEventListener("focus", () => {
    input.style.border = "2px solid #4a2c2a";
    input.style.backgroundColor = "#fdf0e6";
  });
  input.addEventListener("blur", () => {
    input.style.border = "1px solid #ccc";
    input.style.backgroundColor = "white";
  });
});