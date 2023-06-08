// Apply stored settings or default settings on page load
window.addEventListener("DOMContentLoaded", function() {
  var storedTitle = localStorage.getItem("websiteTitle");
  var storedFavicon = localStorage.getItem("websiteFavicon");

  if (storedTitle) {
    document.title = storedTitle;
  }

  if (storedFavicon) {
    var favicon = document.querySelector("link[rel='icon']");
    favicon.href = storedFavicon;
  }
});

// Store settings before navigating away from the page
window.addEventListener("beforeunload", function() {
  var currentTitle = document.title;
  var currentFavicon = document.querySelector("link[rel='icon']").href;

  localStorage.setItem("websiteTitle", currentTitle);
  localStorage.setItem("websiteFavicon", currentFavicon);
});

function changeSettings() {
  var newTitle = document.getElementById("titleInput").value;
  var newFavicon = document.getElementById("faviconInput").value;
  var presetSelect = document.getElementById("presetSelect");
  var selectedPreset = presetSelect.value;

  // Change the title and favicon based on the selected preset
  if (selectedPreset === "canvas") {
    newTitle = "Dashboard";
    newFavicon = "https://du11hjcvx0uqb.cloudfront.net/dist/images/favicon-e10d657a73.ico";
  } else if (selectedPreset === "classes") {
    newTitle = "Classes";
    newFavicon = "https://gointerstellar.xyz/resources/images/favicon/favicon.png";
  }

  // Change the title
  document.title = newTitle;
  localStorage.setItem("websiteTitle", newTitle);

  // Change the favicon
  var favicon = document.querySelector("link[rel='icon']");
  favicon.href = newFavicon;
  localStorage.setItem("websiteFavicon", newFavicon);
}

function disableSettings() {
  // Remove the stored settings
  localStorage.removeItem("websiteTitle");
  localStorage.removeItem("websiteFavicon");

  // Reset to default settings
  document.title = "nate-games";
  var favicon = document.querySelector("link[rel='icon']");
  favicon.href = "/assets/img/favicon.png";
}
