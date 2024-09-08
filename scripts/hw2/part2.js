function processNumbers() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const num3 = parseFloat(document.getElementById("num3").value);
  const resultArea = document.getElementById("result");

  if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    resultArea.value = "Please enter valid numbers.";
    return;
  }

  const sum = num1 + num2 + num3;
  const average = sum / 3;
  const product = num1 * num2 * num3;
  const smallest = Math.min(num1, num2, num3);
  const largest = Math.max(num1, num2, num3);

  resultArea.value = `Sum: ${sum}\nAverage: ${average}\nProduct: ${product}\nSmallest: ${smallest}\nLargest: ${largest}`;
}
