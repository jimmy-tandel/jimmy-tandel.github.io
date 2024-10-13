function calculateEarnings() {
  const itemPrices = [20.99, 12.75, 9.95, 35.89];
  let totalAmountSold = 0;
  let hasError = false;

  // Clear any previous error messages
  document.getElementById("error").innerHTML = "";

  // Get the quantity of each item sold
  const item1Qty = parseInt(document.getElementById("item1Qty").value);
  const item2Qty = parseInt(document.getElementById("item2Qty").value);
  const item3Qty = parseInt(document.getElementById("item3Qty").value);
  const item4Qty = parseInt(document.getElementById("item4Qty").value);

  // Validate that the input is a non-negative number
  if (isNaN(item1Qty) || item1Qty < 0) {
    document.getElementById("error").innerHTML +=
      "Please enter a valid non-negative number for Item 1.<br>";
    hasError = true;
  }
  if (isNaN(item2Qty) || item2Qty < 0) {
    document.getElementById("error").innerHTML +=
      "Please enter a valid non-negative number for Item 2.<br>";
    hasError = true;
  }
  if (isNaN(item3Qty) || item3Qty < 0) {
    document.getElementById("error").innerHTML +=
      "Please enter a valid non-negative number for Item 3.<br>";
    hasError = true;
  }
  if (isNaN(item4Qty) || item4Qty < 0) {
    document.getElementById("error").innerHTML +=
      "Please enter a valid non-negative number for Item 4.<br>";
    hasError = true;
  }

  // If there's an error, stop the calculation
  if (hasError) {
    resetTable();
    return;
  }

  // Function to reset the table values
  function resetTable() {
    document.getElementById("item1Sold").value = "";
    document.getElementById("item1Total").value = "";

    document.getElementById("item2Sold").value = "";
    document.getElementById("item2Total").value = "";

    document.getElementById("item3Sold").value = "";
    document.getElementById("item3Total").value = "";

    document.getElementById("item4Sold").value = "";
    document.getElementById("item4Total").value = "";

    document.getElementById("totalAmountSold").value = "";
    document.getElementById("totalWeeklyEarnings").value = "";
  }

  // Calculate total sales for each item
  const item1Total = item1Qty * itemPrices[0];
  const item2Total = item2Qty * itemPrices[1];
  const item3Total = item3Qty * itemPrices[2];
  const item4Total = item4Qty * itemPrices[3];

  // Calculate total amount sold
  totalAmountSold = item1Total + item2Total + item3Total + item4Total;

  // Calculate weekly earnings
  const baseSalary = 250;
  const commission = totalAmountSold * 0.09;
  const totalEarnings = baseSalary + commission;

  // Display results in the table
  document.getElementById("item1Sold").value = item1Qty;
  document.getElementById("item1Total").value = item1Total.toFixed(2);

  document.getElementById("item2Sold").value = item2Qty;
  document.getElementById("item2Total").value = item2Total.toFixed(2);

  document.getElementById("item3Sold").value = item3Qty;
  document.getElementById("item3Total").value = item3Total.toFixed(2);

  document.getElementById("item4Sold").value = item4Qty;
  document.getElementById("item4Total").value = item4Total.toFixed(2);

  // Display total amount sold and weekly earnings
  document.getElementById("totalAmountSold").value = totalAmountSold.toFixed(2);
  document.getElementById("totalWeeklyEarnings").value =
    totalEarnings.toFixed(2);
}
