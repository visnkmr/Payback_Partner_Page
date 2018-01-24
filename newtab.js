function openPage() {
  browser.tabs.create({
    url: "https://shoponline.payback.in/home/onlinestores"
    });
}

browser.browserAction.onClicked.addListener(openPage);