const ruleResources = [
  {
    "id": "default",
    "name": "Default (1/1) Ads, trackers, miners, and more"
  },
  {
    "id": "annoyances-cookies",
    "name": "Annoyances (1/5) EasyList/uBO – Cookie Notices"
  },
  {
    "id": "annoyances-overlays",
    "name": "Annoyances (2/5) AdGuard/uBO – Overlays"
  },
  {
    "id": "annoyances-social",
    "name": "Annoyances (3/5) AdGuard – Social Media"
  },
  {
    "id": "annoyances-widgets",
    "name": "Annoyances (4/5) AdGuard – Widgets"
  },
  {
    "id": "annoyances-others",
    "name": "Annoyances (5/5) AdGuard – Other Annoyances"
  },
  {
    "id": "dpollock-0",
    "name": "Miscellaneous (1/3) Dan Pollock’s hosts file"
  },
  {
    "id": "stevenblack-hosts",
    "name": "Miscellaneous (2/3) Steven Black's hosts file"
  },
  {
    "id": "stevenblack-porn-hosts",
    "name": "Miscellaneous (3/3) Steven Black's adult content hosts file"
  },
  {
    "id": "alb-0",
    "name": "Regions, languages (1/33) Adblock List for Albania"
  },
  {
    "id": "bgr-0",
    "name": "Regions, languages (2/33) Bulgarian Adblock list"
  },
  {
    "id": "chn-0",
    "name": "Regions, languages (3/33) AdGuard Chinese (中文)"
  },
  {
    "id": "cze-0",
    "name": "Regions, languages (4/33) EasyList Czech and Slovak"
  },
  {
    "id": "deu-0",
    "name": "Regions, languages (5/33) EasyList Germany"
  },
  {
    "id": "fin-0",
    "name": "Regions, languages (6/33) Adblock List for Finland"
  },
  {
    "id": "fra-0",
    "name": "Regions, languages (7/33) AdGuard Français"
  },
  {
    "id": "grc-0",
    "name": "Regions, languages (8/33) Greek AdBlock Filter"
  },
  {
    "id": "hrv-0",
    "name": "Regions, languages (9/33) Dandelion Sprout's Serbo-Croatian filters"
  },
  {
    "id": "hun-0",
    "name": "Regions, languages (10/33) hufilter"
  },
  {
    "id": "idn-0",
    "name": "Regions, languages (11/33) ABPindo"
  },
  {
    "id": "ind-0",
    "name": "Regions, languages (12/33) IndianList"
  },
  {
    "id": "irn-0",
    "name": "Regions, languages (13/33) PersianBlocker"
  },
  {
    "id": "isl-0",
    "name": "Regions, languages (14/33) Icelandic ABP List"
  },
  {
    "id": "isr-0",
    "name": "Regions, languages (15/33) EasyList Hebrew"
  },
  {
    "id": "ita-0",
    "name": "Regions, languages (16/33) EasyList Italy"
  },
  {
    "id": "jpn-1",
    "name": "Regions, languages (17/33) AdGuard Japanese"
  },
  {
    "id": "kor-1",
    "name": "Regions, languages (18/33) List-KR"
  },
  {
    "id": "ltu-0",
    "name": "Regions, languages (19/33) EasyList Lithuania"
  },
  {
    "id": "lva-0",
    "name": "Regions, languages (20/33) Latvian List"
  },
  {
    "id": "mkd-0",
    "name": "Regions, languages (21/33) Macedonian adBlock Filters"
  },
  {
    "id": "nld-0",
    "name": "Regions, languages (22/33) EasyDutch"
  },
  {
    "id": "nor-0",
    "name": "Regions, languages (23/33) Dandelion Sprouts nordiske filtre"
  },
  {
    "id": "pol-0",
    "name": "Regions, languages (24/33) Oficjalne Polskie Filtry do uBlocka Origin"
  },
  {
    "id": "rou-1",
    "name": "Regions, languages (25/33) Romanian Ad (ROad) Block List Light"
  },
  {
    "id": "rus-0",
    "name": "Regions, languages (26/33) RU AdList"
  },
  {
    "id": "spa-0",
    "name": "Regions, languages (27/33) AdGuard Spanish/Portuguese"
  },
  {
    "id": "spa-1",
    "name": "Regions, languages (28/33) Easylist Spanish"
  },
  {
    "id": "svn-0",
    "name": "Regions, languages (29/33) Slovenian List"
  },
  {
    "id": "swe-1",
    "name": "Regions, languages (30/33) Frellwit's Swedish Filter"
  },
  {
    "id": "tha-0",
    "name": "Regions, languages (31/33) EasyList Thailand"
  },
  {
    "id": "tur-0",
    "name": "Regions, languages (32/33) AdGuard Turkish"
  },
  {
    "id": "vie-1",
    "name": "Regions, languages (33/33) ABPVN List"
  }
];

// Функція для вимкнення всіх наборів правил
function disableAllRulesets() {
const disableRulesetIds = ruleResources.map((rule) => rule.id);
chrome.declarativeNetRequest.updateEnabledRulesets({
  disableRulesetIds
});
}

// Функція для увімкнення всіх наборів правил, якщо відповідний чекбокс встановлено
function enableAllRulesets() {
  chrome.storage.local.get(null, function(items) {
    const enableRulesetIds = Object.keys(items).filter(id => items[id] === true);
    // Додати ID першого набору правил до списку
    // enableRulesetIds.push(ruleResources[0].id);
    chrome.declarativeNetRequest.updateEnabledRulesets({
      enableRulesetIds
    });
  });
}



document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('toggleButton');
  const settingsButton = document.getElementById('settingsButton');
  const descriptionText = document.getElementById('description');

  chrome.storage.local.get(['blockingEnabled', 'blockRecommended'], function (result) {
    const blockingEnabled = result.blockingEnabled !== undefined ? result.blockingEnabled : true;

    toggleButton.textContent = blockingEnabled ? chrome.i18n.getMessage("disableAdBlockingPopup") : chrome.i18n.getMessage("enableAdBlockingPopup");
	  settingsButton.textContent = chrome.i18n.getMessage("settingsButtonTextPopup");
    descriptionText.textContent = chrome.i18n.getMessage("shortDescriptionPopup");
  });

  toggleButton.addEventListener('click', function () {
    chrome.storage.local.get('blockingEnabled', function (result) {
      const blockingEnabled = result.blockingEnabled !== undefined ? result.blockingEnabled : true;
      const newBlockingState = !blockingEnabled;

      if (!newBlockingState) {
        disableAllRulesets();
      }
      if (newBlockingState) {
        enableAllRulesets();
      }


      chrome.storage.local.set({ blockingEnabled: newBlockingState }, function () {
        toggleButton.textContent = newBlockingState ? chrome.i18n.getMessage("disableAdBlockingPopup") : chrome.i18n.getMessage("enableAdBlockingPopup");
      });
    });
  });

  settingsButton.addEventListener('click', function () {
    let optionsUrl = 'options.html';
  
    // Перевіряємо, чи вкладка вже відкрита
    chrome.tabs.query({}, function(tabs) {
      let tabExists = false;
  
      for (let i=0; i<tabs.length; i++) {
        if (tabs[i].url.includes(optionsUrl)) {
          tabExists = true;
          chrome.tabs.update(tabs[i].id, {active: true}); // Переключаємося на вкладку
          chrome.tabs.reload(tabs[i].id); // Перезавантажуємо вкладку
          break;
        }
      }
  
      // Якщо вкладка не відкрита, відкриваємо її
      if (!tabExists) {
        chrome.tabs.create({ url: optionsUrl });
      }
    });
  });
  
});





