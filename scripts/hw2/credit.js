const usdInput = document.getElementById("usd-input");
const currencyTable = document.getElementById("currency-table");

function updateConversion() {
  const usdAmount = parseFloat(usdInput.value) || 0;
  const rows = currencyTable.getElementsByTagName("tr");

  for (let i = 1; i < rows.length; i++) {
    const rate = parseFloat(rows[i].cells[1].textContent);
    const result = (usdAmount * rate).toFixed(2);
    rows[i].cells[2].textContent = result;
  }
}

usdInput.addEventListener("input", updateConversion);
updateConversion(); // Initial conversion
