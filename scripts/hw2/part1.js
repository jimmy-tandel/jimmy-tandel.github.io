const contentDiv = document.getElementById("content");

const boldText = document.createElement("strong");
boldText.className = "bold";
boldText.textContent = "xy";

const blueText = document.createElement("span");
blueText.className = "blue";
blueText.textContent = " 12";

const italicText = document.createElement("em");
italicText.className = "italic";
italicText.textContent = " 89";

contentDiv.appendChild(boldText);
contentDiv.appendChild(blueText);
contentDiv.appendChild(italicText);
