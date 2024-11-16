function processNumber() {
  const input = document.getElementById("decimalNumber");
  const resultArea = document.getElementById("resultArea");
  const number = input.value;

  // Check if it's a valid number with at least 4 decimal places
  const decimalPart = number.split(".")[1];
  if (!decimalPart || decimalPart.length < 4 || isNaN(parseFloat(number))) {
    resultArea.className = "error";
    resultArea.textContent =
      "You need to type a number with at least 4 decimals, please try again";
    return;
  }

  // Parse the number and perform calculations
  const num = parseFloat(number);

  const roundedInteger = Math.round(num);
  const sqrtRounded = Math.round(Math.sqrt(num));
  const roundedTenths = num.toFixed(1);
  const roundedHundredths = num.toFixed(2);
  const roundedThousandths = num.toFixed(3);

  // Format the output
  const output = `You typed number ${number}
Rounded to the nearest integer = ${roundedInteger}
Square root rounded to integer = ${sqrtRounded}
Rounded to the nearest 10th position = ${roundedTenths}
Rounded to the nearest 100th position = ${roundedHundredths}
Rounded to the nearest 1000th position = ${roundedThousandths}`;

  resultArea.className = "success";
  resultArea.textContent = output;
}

function clearForm() {
  document.getElementById("decimalNumber").value = "";
  document.getElementById("resultArea").className = "";
  document.getElementById("resultArea").textContent = "";
}
