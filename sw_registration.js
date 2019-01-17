let staticCacheName = 'restaurant-static-v1';

document.addEventListener("DOMContentLoaded", event => {
    if (navigator.serviceWorker) {
      navigator.serviceWorker
        .register("sw.js")
        .then(registration => console.log("SW registered", registration))
        .catch(e => console.log("Registration failed :(", e));
    }
  });