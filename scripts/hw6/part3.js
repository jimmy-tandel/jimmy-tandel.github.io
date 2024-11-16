function validatePhone() {
  const phoneInput = document.getElementById("phoneNumber");
  const resultArea = document.getElementById("resultArea");
  const phoneNumber = phoneInput.value;

  // Regular expression for format (999) 999-9999
  const phoneRegex = /^\(\d{3}\)\s\d{3}-\d{4}$/;

  if (phoneRegex.test(phoneNumber)) {
    resultArea.className = "success";
    resultArea.textContent =
      "Thank you for providing your phone number. One of our agents will contact you soon.";
  } else {
    resultArea.className = "error";
    resultArea.textContent =
      "Please enter the phone number in the correct format: (999) 999-9999";
  }
}

function clearForm() {
  document.getElementById("phoneNumber").value = "";
  document.getElementById("resultArea").className = "";
  document.getElementById("resultArea").textContent = "";
}
