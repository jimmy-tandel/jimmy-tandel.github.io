let popupWindow = null;

function searchCharacter() {
  const content = document.getElementById("content").value;
  const searchChar = document.getElementById("searchChar").value;
  const resultArea = document.getElementById("resultArea");

  // Validate input
  if (!searchChar) {
    resultArea.className = "error";
    resultArea.textContent = "Please enter a character to search";
    return;
  }

  if (searchChar.length > 1) {
    resultArea.className = "error";
    resultArea.textContent = "Please enter only one character";
    return;
  }

  // Count occurrences (case-sensitive)
  const count = content.split(searchChar).length - 1;

  if (count > 0) {
    // Character found - display result in the result area
    resultArea.className = "success";
    resultArea.textContent = `The character '${searchChar}' appears ${count} time(s) in the content.`;

    // Close any existing popup window
    if (popupWindow && !popupWindow.closed) {
      popupWindow.close();
    }
  } else {
    // Character not found - show popup window
    resultArea.className = "";
    resultArea.textContent = ""; // Clear the result area

    // Close previous popup if exists
    if (popupWindow && !popupWindow.closed) {
      popupWindow.close();
    }

    // Define desired popup content dimensions
    const popupWidth = 300;
    const popupHeight = 100;

    // Estimate window chrome size (can vary by browser)
    const chromeWidth = 16; // Approximate horizontal chrome (borders, scrollbar)
    const chromeHeight = 39; // Approximate vertical chrome (title bar, borders)

    // Calculate total window size to achieve desired content area
    const windowWidth = popupWidth + chromeWidth;
    const windowHeight = popupHeight + chromeHeight;

    // Calculate position for popup (top-right corner with margin)
    const left = window.screen.width - windowWidth - 20; // 20px margin from the right edge
    const top = 20; // 20px from the top

    // Define window features to minimize browser chrome
    const features =
      `width=${windowWidth},height=${windowHeight},left=${left},top=${top},` +
      `resizable=no,toolbar=no,menubar=no,scrollbars=no,location=no,status=no`;

    // Create popup window
    popupWindow = window.open("", "CharacterNotFound", features);

    if (popupWindow) {
      // Return focus to the original window
      window.focus();

      // Write content to popup
      popupWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>Character Not Found</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              padding: 1rem;
              margin: 0;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              height: 100%;
              box-sizing: border-box;
            }
            .popup-content {
              text-align: center;
            }
            button {
              padding: 0.5rem 1rem;
              background-color: #2563eb;
              color: white;
              border: none;
              border-radius: 4px;
              cursor: pointer;
              margin-top: 1rem;
            }
            button:hover {
              background-color: #1d4ed8;
            }
          </style>
        </head>
        <body>
          <div class="popup-content">
            <p>Search character '${sanitizeInput(
              searchChar
            )}' not found in the content you typed.</p>
            <button onclick="window.close()">Close</button>
          </div>
        </body>
        </html>
      `);
      popupWindow.document.close(); // Ensure the document is fully loaded
    } else {
      // Handle popup blocker
      resultArea.className = "error";
      resultArea.textContent =
        "Popup was blocked! Please allow popups for this website.";
    }
  }
}

function clearForm() {
  document.getElementById("content").value = "";
  document.getElementById("searchChar").value = "";
  document.getElementById("resultArea").className = "";
  document.getElementById("resultArea").textContent = "";

  // Close popup if open
  if (popupWindow && !popupWindow.closed) {
    popupWindow.close();
  }
}

// Close popup when the main window is closed
window.onunload = function () {
  if (popupWindow && !popupWindow.closed) {
    popupWindow.close();
  }
};

function sanitizeInput(input) {
  const div = document.createElement("div");
  div.textContent = input;
  return div.innerHTML;
}
