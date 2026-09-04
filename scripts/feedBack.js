let submitted = false;
const form = document.getElementById("feedbackForm");
const messageInput = document.getElementById("messageInput");
const errorText = document.getElementById("errorText");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function (e) {
  // Validation: Let's check only the last point ('What would you tell us')
  if (messageInput.value.trim() === "") {
    e.preventDefault(); // Stop the submission
    errorText.classList.remove("hidden");
    messageInput.classList.add("border-red-400", "bg-red-50/30");
    messageInput.focus();
    return;
  }

  // If filled, clear the error and proceed
  errorText.classList.add("hidden");
  messageInput.classList.remove("border-red-400", "bg-red-50/30");
  submitted = true;
});

function showSuccess() {
  form.classList.add("hidden");
  successMessage.classList.remove("hidden");
}

function resetForm() {
  form.reset();
  form.classList.remove("hidden");
  successMessage.classList.add("hidden");
  submitted = false;
}
