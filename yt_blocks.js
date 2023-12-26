// "tvcap" та "bottomads" - це ідентифікатори рекламних блоків у пошуку Google
let Google_ResultAd = document.getElementById("tvcap");
let Google_ResultAdBottom = document.getElementById("bottomads");

// Отримання значення blockingEnabled з chrome.storage.local
chrome.storage.local.get('blockingEnabled', function (result) {
    let blockingEnabled = result.blockingEnabled;

    // Перевірка, чи ввімкнено блокування
    if (blockingEnabled) {
        // Перевірка наявності та приховання рекламних блоків у пошуку Google
        if (Google_ResultAd != undefined && Google_ResultAd.length != 0) {
            Google_ResultAd.style.display = "none";
        }
        if (Google_ResultAdBottom != undefined && Google_ResultAdBottom.length != 0) {
            Google_ResultAdBottom.style.display = "none";
        }

        // Періодична перевірка та автоматичне закриття рекламних відео на YouTube
        setInterval(function () {
            let YT_skipButton = document.getElementsByClassName("ytp-ad-skip-button");
            if (YT_skipButton != undefined && YT_skipButton.length > 0) {
                YT_skipButton[0].click();
            }
        }, 7);

        // Виконується після завантаження сторінки
        window.addEventListener("load", function () {
            // Періодична перевірка та приховання різних типів рекламних блоків на YouTube
            setInterval(() => {
                // Пошук та приховання рекламних елементів на головній сторінці YouTube
                let YT_companion = document.getElementById("player-ads");
                let YT_homepgAd = document.getElementsByClassName("style-scope ytd-display-ad-renderer");
                let YT_homepgAd_A = document.getElementsByClassName("style-scope ytd-ad-slot-renderer");
                let YT_homepgAd_B = this.document.getElementsByClassName('style-scope ytd-video-masthead-ad-v3-renderer');
                let YT_searchAd = document.getElementsByClassName("style-scope ytd-promoted-sparkles-text-search-renderer");
                let YT_searchAd_A = document.getElementsByClassName("style-scope ytd-promoted-sparkles-web-renderer");
                let YT_searchAd_B = this.document.getElementsByClassName("style-scope ytd-in-feed-ad-layout-renderer");
                let YT_overlayAd = document.getElementsByClassName('video-ads ytp-ad-module')[0];

                // Приховання знайдених рекламних елементів
                if (YT_companion != undefined) {
                    YT_companion.style.display = "none";
                }
                if (YT_homepgAd != undefined && YT_homepgAd.length != 0) {
                    YT_homepgAd[0].style.display = "none";
                }
                if (YT_homepgAd_A != undefined && YT_homepgAd_A.length != 0) {
                    YT_homepgAd_A[0].style.display = "none";
                }
                if (YT_homepgAd_B != undefined && YT_homepgAd_B.length != 0) {
                    YT_homepgAd_B[0].style.display = "none";
                }
                if (YT_searchAd != undefined && YT_searchAd.length != 0) {
                    for (let i = 0; i < YT_searchAd.length; i++) {
                        YT_searchAd[i].style.display = "none";
                    }
                }
                if (YT_searchAd_A != undefined && YT_searchAd_A.length != 0) {
                    for (let i = 0; i < YT_searchAd_A.length; i++) {
                        YT_searchAd_A[i].style.display = "none";
                    }
                }
                if (YT_searchAd_B != undefined && YT_searchAd_B.length != 0) {
                    for (let i = 0; i < YT_searchAd_B.length; i++) {
                        YT_searchAd_B[i].style.display = "none";
                    }
                }
                if (YT_overlayAd != undefined && YT_overlayAd.length > 0) {
                    YT_overlayAd.style.display = "none";
                }

                // Приховання додаткових рекламних елементів
                let adUnbreak2 = document.getElementsByClassName("mrec-scrollable-cont");
                let adUnbreak4 = document.getElementsByClassName("clmb_eoa");
                if ((adUnbreak2 != undefined && adUnbreak2.length != 0) || (adUnbreak4 != undefined && adUnbreak4.length != 0)) {
                    for (let i = 0; i < adUnbreak2.length; i++) {
                        adUnbreak2[i].style.display = "none";
                    }
                    for (let i = 0; i < adUnbreak4.length; i++) {
                        adUnbreak4[i].style.display = "none";
                    }
                }
            }, 700);
        });
    }
});
