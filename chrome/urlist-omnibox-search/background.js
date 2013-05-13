//Set Text to show for custom suggested URL(s)
chrome.omnibox.setDefaultSuggestion({
    "description": "Search your library for: %s"
});

//Fired when Enter or a suggested Link is selected
chrome.omnibox.onInputEntered.addListener(function (query) {
    //Use your custom URL
    chrome.tabs.update({
        "url": "http://urli.st/search/" + query
    }, function () {
        console.log("Urlist Library Opened");
    });
});
