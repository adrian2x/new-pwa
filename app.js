// Register the service worker if supported
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register("./sw.js")
}
