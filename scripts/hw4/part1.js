function calculateResults() {
  const resultArea = document.getElementById("resultArea");

  // Calculate product and sum for every fourth integer from 5 to 25
  let productFourth = 1;
  let sumFourth = 0;

  for (let i = 5; i <= 25; i += 4) {
    productFourth *= i;
    sumFourth += i;
  }

  // Calculate product and sum for every third integer from 3 to 18 using while loop
  let productThird = 1;
  let sumThird = 0;

  let j = 3;

  while (j <= 18) {
    productThird *= j;
    sumThird += j;
    j += 3;
  }

  // Display results with formatted numbers
  resultArea.innerHTML = `
        The result of 5 * 9 * 13 * 17 * 21 * 25 is ${productFourth.toLocaleString()}<br>
        The result of 5 + 9 + 13 + 17 + 21 + 25 is ${sumFourth.toLocaleString()}<br><br>
        The result of 3 * 6 * 9 * 12 * 15 * 18 is ${productThird.toLocaleString()}<br>
        The result of 3 + 6 + 9 + 12 + 15 +18 is ${sumThird.toLocaleString()}
    `;
}
