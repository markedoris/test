  document.addEventListener("DOMContentLoaded", function () {
    console.log("Using cookie-free API for geolocation...");

    const button = document.getElementById("geo-button-header");
    const buttonText = document.getElementById("geo-text-header");

    fetch("https://geolocation-db.com/json/")
      .then(response => {
        console.log("Geolocation-DB API response received.");
        return response.json();
      })
      .then(data => {
        const country = data.country_name || "Unknown";
        console.log(`Detected country: ${country}`);

        if (country === "Norway") {
          button.href = "https://odental.dk/";
          buttonText.textContent = "O Dental";
          console.log("Country is Norway. Updated button to Oris Dental Norway.");
        } else if (country === "Sweden") {
          button.href = "https://orisdental.se/";
          buttonText.textContent = "Oris Dental";
          console.log("Country is Sweden. Updated button to Oris Dental Sweden.");
        } else if (country === "Denmark") {
          button.href = "https://odental.dk/";
          buttonText.textContent = "O Dental";
          console.log("Country is Denmark. Updated button to O Dental Denmark.");
        } else {
          console.warn(`Unhandled country: ${country}. Button link not updated.`);
        }
      })
      .catch(error => {
        console.error("Error while fetching geolocation data:", error);
        buttonText.textContent = "Default Location";
      });
  });