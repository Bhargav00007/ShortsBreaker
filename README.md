# 🛑 ShortsBreaker 1.0

**Breaks that scroll addiction.**

ShortsBreaker is a lightweight Chrome extension that helps you control your time spent watching **YouTube Shorts**. Every time you open a Shorts video, the extension gives you 60 seconds — after which it gently reminds you with a message and automatically closes the tab.

---

## Installation

1. **Download or Clone this repository**

   If you’ve downloaded it as a ZIP, extract it to a folder.

2. **Open Google Chrome**

3. Go to:  
   `chrome://extensions/`

4. **Enable Developer Mode**  
   (Top right toggle switch)

5. Click on **“Load unpacked”**

6. Select the folder that contains your extension files (`manifest.json`, `content.js`, etc.)

7. You’ll now see the ShortsBreaker icon in your Chrome toolbar. Done!

---

## How it works

1. Every time you open a link like `https://www.youtube.com/shorts/...`
2. A 1-minute timer starts in the background.
3. Once the minute is up, a message appears
4. After a short pause, the tab is closed automatically.
5. Repeat: If you open Shorts again, the cycle restarts.

---

## Files

- `manifest.json`
- `background.js`
- `content.js`
- `popup.html`
- `icon-*.png`

---
