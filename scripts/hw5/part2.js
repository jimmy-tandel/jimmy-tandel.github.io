// Arrays of website options for each menu
const autoNavigateOptions = [
  { name: "GitHub", url: "https://www.github.com" },
  { name: "Stack Overflow", url: "https://www.stackoverflow.com" },
  { name: "Mozilla", url: "https://www.mozilla.org" },
];

const buttonNavigateOptions = [
  { name: "Google", url: "https://www.google.com" },
  { name: "Wikipedia", url: "https://www.wikipedia.org" },
  { name: "Reddit", url: "https://www.reddit.com" },
];

// Function to populate select elements on page load
window.onload = function () {
  const autoSelect = document.getElementById("autoNavigate");
  const buttonSelect = document.getElementById("buttonNavigate");

  // Populate first menu
  autoNavigateOptions.forEach((option) => {
    const optElement = document.createElement("option");
    optElement.value = option.url;
    optElement.textContent = option.name;
    autoSelect.appendChild(optElement);
  });

  // Populate second menu
  buttonNavigateOptions.forEach((option) => {
    const optElement = document.createElement("option");
    optElement.value = option.url;
    optElement.textContent = option.name;
    buttonSelect.appendChild(optElement);
  });
};

// Function for the first pulldown menu with onchange event
function navigateOnChange(url) {
  if (url) {
    window.open(url, "_blank");
    // Reset the select element to default option
    document.getElementById("autoNavigate").selectedIndex = 0;
  }
}

// Function for the second pulldown menu with onclick event
function navigateOnClick() {
  const select = document.getElementById("buttonNavigate");
  const url = select.value;

  if (url) {
    window.open(url, "_blank");
    // Reset the select element to default option
    select.selectedIndex = 0;
  } else {
    alert("Please select a website first");
  }
}
