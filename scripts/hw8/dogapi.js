// Function to fetch a random dog image
function fetchRandomDog() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      if (data.status === "success") {
        document.getElementById("dogImage").src = data.message;
        document.getElementById("dogStatus").textContent =
          "Random Dog Image Loaded!";
      } else {
        document.getElementById("dogStatus").textContent =
          "Failed to load dog image.";
      }
    })
    .catch((error) => {
      document.getElementById("dogStatus").textContent = "Error: " + error;
    });
}

// Function to load breed list
function loadDogBreeds() {
  fetch("https://dog.ceo/api/breeds/list/all")
    .then((response) => response.json())
    .then((data) => {
      if (data.status === "success") {
        const breeds = data.message;
        const breedSelect = document.getElementById("breedSelect");
        breedSelect.innerHTML = '<option value="">Select a Breed</option>';

        Object.keys(breeds).forEach((breed) => {
          const option = document.createElement("option");
          option.value = breed;
          option.textContent = breed;
          breedSelect.appendChild(option);
        });

        document.getElementById("breedStatus").textContent =
          "Breed List Loaded!";
      } else {
        document.getElementById("breedStatus").textContent =
          "Failed to load breed list.";
      }
    })
    .catch((error) => {
      document.getElementById("breedStatus").textContent = "Error: " + error;
    });
}

// Function to fetch a specific breed image
function fetchBreedImage() {
  const breed = document.getElementById("breedSelect").value;
  if (!breed) {
    alert("Please select a breed");
    return;
  }

  fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then((response) => response.json())
    .then((data) => {
      if (data.status === "success") {
        document.getElementById("breedImage").src = data.message;
        document.getElementById(
          "breedImageStatus"
        ).textContent = `Random ${breed} Image Loaded!`;
      } else {
        document.getElementById("breedImageStatus").textContent =
          "Failed to load breed image.";
      }
    })
    .catch((error) => {
      document.getElementById("breedImageStatus").textContent =
        "Error: " + error;
    });
}

// Load breeds when the page loads
window.onload = loadDogBreeds;
