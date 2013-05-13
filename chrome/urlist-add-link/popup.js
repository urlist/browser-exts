// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

document.addEventListener('DOMContentLoaded', function () {
    chrome.tabs.getSelected(null, function(tab) {
      document.getElementById("urlist").prepend = tab.title;
      console.log(tab.url);
      console.log(tab.title);
    

    var listObject = chrome.extension.getBackgroundPage().lists;

    for (var i = 0; i < listObject.length; i++) {
        var currentList = listObject[i];
        var html = $("<option/>", { text: currentList.title, value: currentList.hash });
        $('#listnames').append(html);
    }

    $('#listnames').on("change", function (e) { console.log($(e.target).val()); });

    $('#urlist').submit(function() {
      var newTitle = $('#newtitle').val();

      var listName = function() {
        if ($('#newlist').val() === "") {
          return $('#listnames').val();
        }
        else {
          return $('#newlist').val();
        }
      }();

      var description = $('#description').val();

      var promise = chrome.extension.getBackgroundPage().saveLink(listName,tab.url,newTitle);

      promise.done(function () {
        document.body.innerHTML = "Link saved!";
        window.setTimeout(window.close,1000);
      });

      promise.fail(function() {
        document.body.innerHTML = "Whoops, fail. Try again.";
        window.setTimeout(window.close,1000);
      }); 

      return false;
    });
  })
});
