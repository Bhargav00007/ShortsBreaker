console.log("YouTube Shorts Timer started.");

// Create the message banner
function showMessage() {
  const message = document.createElement("div");
  message.innerText = "Enough shorts buddy 👋....get back to work!!!!";
  message.style.position = "fixed";
  message.style.top = "20px";
  message.style.left = "50%";
  message.style.transform = "translateX(-50%)";
  message.style.zIndex = "9999";
  message.style.backgroundColor = "#ff4d4d";
  message.style.color = "white";
  message.style.padding = "15px 25px";
  message.style.borderRadius = "8px";
  message.style.fontSize = "20px";
  message.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.3)";
  message.style.fontWeight = "bold";
  message.style.fontFamily = "Arial, sans-serif";
  document.body.appendChild(message);
}

// Start 1-minute timer
let timerId = setTimeout(() => {
  showMessage();
  setTimeout(() => {
    chrome.runtime.sendMessage({ action: "close_tab" });
  }, 5000);
}, 60 * 1000);
