var API_ROOT = "http://urli.st/api/",
    lists;

function sendMessage(message) {
    return $.ajax({
        url: API_ROOT + "motherbrain",
        type: "POST",
        data: JSON.stringify( message ),
        contentType: "application/json",
        dataType: "json"
    });
}

function updateLists () {
    $.get(API_ROOT + "profile/~").done( function (data) {
        lists = data.lists;
    } );
}

function saveLink (listHash, url, title) {
    sendMessage([null, "add-url", { list_hash: listHash }, { url: url, title: title }, null]);
}

updateLists();

