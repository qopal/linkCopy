chrome.commands.onCommand.addListener((command) => {
if (command === "copy-mdlink") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const tab = tabs[0];
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: () => {
          const href = decodeURIComponent(location.href).replace(/ /g, '%20');
          const title = prompt('Enter link title', document.title);
          if (title !== null) {
            const textLink = `[${title}](${href})`;
            navigator.clipboard.writeText(textLink).then(() => {
            });
          }
        }
      });
    });
  }
  if (command === "copy-jalink") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const tab = tabs[0];
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: () => {
          const textLink = decodeURIComponent(location.href).replace(/ /g, '%20');
          navigator.clipboard.writeText(textLink).then(() => {
            alert('Link copied to clipboard: ' + textLink);
          });
        }
      });
    });
  }
});
