// Array of form field configurations
const formFields = [
  {
    id: "fullName",
    name: "Full Name",
    validateFn: (value) => value.trim() !== "",
    errorMsg: "Please enter your full name",
  },
  {
    id: "ageGroup",
    name: "Age Group",
    validateFn: () =>
      document.querySelector('input[name="ageGroup"]:checked') !== null,
    errorMsg: "Please select your age group",
  },
  {
    id: "browsers",
    name: "Browsers",
    validateFn: () =>
      document.querySelectorAll('input[name="browsers"]:checked').length > 0,
    errorMsg: "Please select at least one browser",
  },
  {
    id: "moviePreference",
    name: "Movie Preference",
    validateFn: (value) => value !== "",
    errorMsg: "Please select your preferred movie genre",
  },
];

function validateForm() {
  const resultArea = document.getElementById("resultArea");
  const errors = [];

  // Validate all fields using the array configuration
  formFields.forEach((field) => {
    const element = document.getElementById(field.id);
    const value = element ? element.value : "";

    if (!field.validateFn(value)) {
      errors.push(field.errorMsg);
    }
  });

  // Display results
  resultArea.className = errors.length === 0 ? "success" : "error";

  if (errors.length === 0) {
    resultArea.innerHTML = "<strong>Thanks, your data was submitted!</strong>";
  } else {
    resultArea.innerHTML =
      "<strong>Please correct the following:</strong><br>" +
      errors.join("<br>");
  }
}

// Add event listeners for real-time validation feedback
formFields.forEach((field) => {
  const element = document.getElementById(field.id);
  if (element) {
    const eventType = field.id === "browsers" ? "change" : "input";

    if (field.id === "browsers") {
      document
        .querySelectorAll('input[name="browsers"]')
        .forEach((checkbox) => {
          checkbox.addEventListener("change", clearErrors);
        });
    } else if (field.id === "ageGroup") {
      document.querySelectorAll('input[name="ageGroup"]').forEach((radio) => {
        radio.addEventListener("change", clearErrors);
      });
    } else {
      element.addEventListener(eventType, clearErrors);
    }
  }
});

function clearErrors() {
  const resultArea = document.getElementById("resultArea");
  resultArea.className = "";
  resultArea.innerHTML = "";
}
