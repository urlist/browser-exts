console.log("hello, world!");

var xhr = new XMLHttpRequest();
xhr.open("GET", "http://urli.st/api/profile/~", true);
xhr.onreadystatechange = function() {
  if (xhr.readyState == 4) {
    // WARNING! Might be evaluating an evil script!
    console.log(xhr.responseText);
  }
}

xhr.send();

