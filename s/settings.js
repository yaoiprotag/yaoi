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
    document.title = "HOME | nate-games";
    var favicon = document.querySelector("link[rel='icon']");
    favicon.href = "/assets/img/favicon.png";
  }
  