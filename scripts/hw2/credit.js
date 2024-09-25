const usdInput = document.getElementById("usd-input");
const currencyTable = document.getElementById("currency-table");
const errorMessage = document.getElementById("error-message");

function updateConversion() {
  const input = usdInput.value;
  if (input === "") {
    errorMessage.style.display = "none";
    performConversion(0);
  } else if (input === "." || isNaN(parseFloat(input)) || !isFinite(input)) {
    errorMessage.style.display = "inline";
    performConversion(0);
  } else {
    errorMessage.style.display = "none";
    const usdAmount = parseFloat(input);
    performConversion(usdAmount);
  }
}

function performConversion(usdAmount) {
  const rows = currencyTable.getElementsByTagName("tr");
  for (let i = 1; i < rows.length - 1; i++) {
    // Exclude the last row (input row)
    const rate = parseFloat(rows[i].cells[1].textContent);
    const result = (usdAmount * rate).toFixed(2);
    rows[i].cells[2].textContent = result;
  }
}

usdInput.addEventListener("input", updateConversion);
updateConversion(); // Initial conversion
