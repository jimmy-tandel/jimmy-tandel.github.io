let num1, num2, correctAnswer;

function generateQuestion() {
  num1 = Math.floor(Math.random() * 10); // Generate a random integer from 0 to 9
  num2 = Math.floor(Math.random() * 10); // Generate another random integer from 0 to 9
  correctAnswer = num1 * num2;
  document.getElementById(
    "question"
  ).innerText = `How much is ${num1} times ${num2}?`;
  document.getElementById("message").innerText = "";
  document.getElementById("answer").value = "";
}

function checkAnswer() {
  const userAnswer = document.getElementById("answer").value.trim();

  // Check if the user input is a valid integer and matches the correct answer
  if (userAnswer === "") {
    document.getElementById("message").innerText = "Please enter a number.";
    return;
  }

  if (!/^\d+$/.test(userAnswer)) {
    document.getElementById("message").innerText =
      "Please enter a valid whole number.";
    return;
  }

  const parsedAnswer = parseInt(userAnswer, 10);

  if (parsedAnswer === correctAnswer) {
    document.getElementById("message").innerText = "Very good!";
    askToContinue();
  } else {
    document.getElementById("message").innerText = "No. Please try again.";
  }
}

function askToContinue() {
  const continueDiv = document.createElement("div");
  continueDiv.innerHTML = `
        <p>Do you want to keep playing?</p>
        <button id="yesBtn">YES</button>
        <button id="noBtn">NO</button>
    `;
  document.getElementById("message").appendChild(continueDiv);
  document.getElementById("yesBtn").onclick = function () {
    generateQuestion();
    continueDiv.remove();
  };
  document.getElementById("noBtn").onclick = function () {
    document.getElementById("message").innerText =
      "Thanks for playing, see you next time!";
    continueDiv.remove();
  };
}

// Start the game
generateQuestion();
