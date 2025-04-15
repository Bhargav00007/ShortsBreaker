chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "close_tab" && sender.tab?.id) {
    chrome.tabs.remove(sender.tab.id);
  }
});
