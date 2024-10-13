function generateSquare() {
  const sizeInput = document.getElementById("squareSize");
  const resultDiv = document.getElementById("result");
  const size = parseInt(sizeInput.value, 10);

  if (isNaN(size) || size < 2 || size > 10) {
    resultDiv.innerHTML =
      '<p class="error">Please enter a valid number between 2 and 10.</p>';
    return;
  }

  let square = "";
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (i === 0 || i === size - 1) {
        square += "* ";
      } else if (j === 0 || j === size - 1) {
        square += "* ";
      } else {
        square += "  ";
      }
    }
    square += "\n"; // Use newline instead of <br> for pre element
  }

  resultDiv.innerHTML = `<p>Hollow Square (${size}x${size}):</p><pre>${square}</pre>`;
}

function clearForm() {
  document.getElementById("squareSize").value = "";
  document.getElementById("result").innerHTML = "";
}

// Add event listeners for buttons
document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector("button:nth-of-type(1)")
    .addEventListener("click", generateSquare);
  document
    .querySelector("button:nth-of-type(2)")
    .addEventListener("click", clearForm);
});
