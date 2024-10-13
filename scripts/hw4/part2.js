document.addEventListener("DOMContentLoaded", function () {
  const tablesContainer = document.getElementById("tablesContainer");

  const interestRates = [0.05, 0.06, 0.07];
  const principal = 1000;
  const years = 5;

  interestRates.forEach((rate) => {
    const table = document.createElement("table");
    const headerRow = table.insertRow();

    ["Year", "Amount on Deposit", "Interest Rate"].forEach((text) => {
      const th = document.createElement("th");
      th.textContent = text;
      headerRow.appendChild(th);
    });

    for (let year = 1; year <= years; year++) {
      const amount = principal * Math.pow(1 + rate, year);
      const row = table.insertRow();

      row.insertCell().textContent = year;
      row.insertCell().textContent = amount.toFixed(2).toLocaleString();
      row.insertCell().textContent = rate.toFixed(2);
    }

    tablesContainer.appendChild(table);
  });
});
