// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

document.addEventListener('DOMContentLoaded', function () {
    chrome.tabs.getSelected(null, function(tab) {
      document.getElementById("tab-url").innerHTML = tab.url;
      console.log(tab.url);
      console.log(tab.title);
    })

    console.log(JSON.parse(chrome.extension.getBackgroundPage().xhr.response));

    var listObject = JSON.parse(chrome.extension.getBackgroundPage().xhr.response).lists;

    for (var i = 0; i < listObject.length; i++) {
      $('#listnames').append('<option>'+listObject[i].title+'</option>');
    }    

});
