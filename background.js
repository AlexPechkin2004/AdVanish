chrome.declarativeNetRequest.setExtensionActionOptions({ displayActionCountAsBadgeText: true });

chrome.runtime.onInstalled.addListener(function(details) {
    if (details.reason == "install") {
        chrome.storage.local.set({ blockingEnabled: true });
        chrome.storage.local.set({["default"]: true});
    }
});