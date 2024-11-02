// Census data from July 2019
const stateData = [
  ["AL", "Alabama", "Montgomery", "4,903,185"],
  ["AK", "Alaska", "Juneau", "731,545"],
  ["AZ", "Arizona", "Phoenix", "7,278,717"],
  ["AR", "Arkansas", "Little Rock", "3,017,825"],
  ["CA", "California", "Sacramento", "39,512,223"],
  ["CO", "Colorado", "Denver", "5,758,736"],
];

function searchState() {
  const input = document.getElementById("stateInput").value.trim();
  const resultArea = document.getElementById("resultArea");

  if (!input) {
    showError("Please enter a state name or abbreviation.");
    return;
  }

  // Convert input to lowercase for case-insensitive comparison
  const searchTerm = input.toLowerCase();

  // Search for matching state
  const state = stateData.find(
    (state) =>
      state[0].toLowerCase() === searchTerm ||
      state[1].toLowerCase() === searchTerm
  );

  if (state) {
    showResult(state);
  } else {
    showAvailableStates();
  }
}

function showResult(state) {
  const resultArea = document.getElementById("resultArea");
  resultArea.className = "result-area success";
  resultArea.innerHTML = `
        <strong>Thanks for your inquiry, here is the information you requested:</strong>
        <div class="state-info">
            <p><strong>State Abbreviation:</strong> ${state[0]}</p>
            <p><strong>State Name:</strong> ${state[1]}</p>
            <p><strong>Capital:</strong> ${state[2]}</p>
            <p><strong>Population:</strong> ${state[3]}</p>
        </div>
    `;
}

function showAvailableStates() {
  const resultArea = document.getElementById("resultArea");
  const availableStates = stateData
    .map((state) => `${state[1]} (${state[0]})`)
    .join(", ");

  resultArea.className = "result-area error";
  resultArea.innerHTML = `
        <strong>Sorry, we do not have information about this state!</strong>
        <p>We only have information about: ${availableStates}</p>
    `;
}

function showError(message) {
  const resultArea = document.getElementById("resultArea");
  resultArea.className = "result-area error";
  resultArea.innerHTML = `<strong>${message}</strong>`;
}

function clearResult() {
  const resultArea = document.getElementById("resultArea");
  resultArea.className = "result-area";
  resultArea.innerHTML = "";
}
