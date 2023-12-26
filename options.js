document.getElementById('settingsTitle').textContent = chrome.i18n.getMessage("settingsTitle");
document.getElementById('settingsH1').textContent = chrome.i18n.getMessage("settingsTitle");
document.getElementById('recommendedFilterListsText').textContent = chrome.i18n.getMessage("recommendedFilterListsText");
document.getElementById('defaultLists').textContent = chrome.i18n.getMessage("defaultFilterLabel");
document.getElementById('annoyancesLists').textContent = chrome.i18n.getMessage("annoyancesFiltersText");
document.getElementById('miscLists').textContent = chrome.i18n.getMessage("miscellaneousFiltersText");
document.getElementById('languagesLists').textContent = chrome.i18n.getMessage("languagesFiltersText");


const ruleResources = [
  {
    "id": "default",
    "name": "Default"
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



// Функція для відображення всіх правил з чекбоксами
function displayAllRulesWithCheckboxes() {
  const ulElement1 = document.getElementById('defaultLists');
  const ulElement2 = document.getElementById('annoyancesLists');
  const ulElement3 = document.getElementById('miscLists');
  const ulElement4 = document.getElementById('languagesLists');
  ruleResources.forEach((rule, index) => {
    const liElement = document.createElement('li');
    liElement.style.display = 'flex';
    liElement.style.alignItems = 'center';
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = rule.id;
    chrome.storage.local.get([rule.id], function(result) {
      checkbox.checked = !!result[rule.id];
      // Якщо це перший чекбокс, зробити його неактивним для зміни
      // checkbox.disabled = index === 0 ? true : false;
    });
    checkbox.addEventListener('change', function() {
      chrome.storage.local.set({[rule.id]: this.checked}, function() {
        chrome.storage.local.get('blockingEnabled', function(result) {
          if (result.blockingEnabled) {
            if (checkbox.checked) {
              chrome.declarativeNetRequest.updateEnabledRulesets({
                enableRulesetIds: [rule.id]
              });
            } else {
              chrome.declarativeNetRequest.updateEnabledRulesets({
                disableRulesetIds: [rule.id]
              });
            }
          }
        });
      });
    });
    liElement.appendChild(checkbox);
    liElement.appendChild(document.createTextNode((`${rule.name}`).replace("Default", chrome.i18n.getMessage("defaultFilterText")).replace(
      "Annoyances", "").replace(
        "Miscellaneous", "").replace(
          "Regions, languages", "")));
          if (index === 0) {
            ulElement1.appendChild(liElement);
          } else if (index > 0 && index <= 5) {
            ulElement2.appendChild(liElement);
          } else if (index > 5 && index <= 8) {
            ulElement3.appendChild(liElement);
          } else {
            ulElement4.appendChild(liElement);
          }
  });
}

displayAllRulesWithCheckboxes();