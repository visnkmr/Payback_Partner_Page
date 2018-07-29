function openPage() {
	browser.windows.create({"url": ["https://roobai.com/","https://www.desidime.com/new"], "incognito": true, "state": "maximized"});
  /*
  browser.tabs.create({
    url: "https://roobai.com/"
    });
 */
 /* browser.tabs.create({
    url: "https://www.desidime.com/new"
    });*/
}
browser.browserAction.onClicked.addListener(openPage);