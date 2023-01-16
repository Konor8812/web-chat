var wsURI = "ws://" + document.location.host + document.location.pathname + "chat";

var websocket = new WebSocket(wsURI);

function send() {
    var username = document.getElementById("username").value;
    var message = document.getElementById("message").value;
    var json = {
        "content": message,
        "userName": username
    };
    websocket.send(JSON.stringify(json));
}

websocket.onmessage = function(event) {
    onMessage(event);
};

function onMessage(event) {
    display(event.data);
}

function display(dataString) {
    var data = JSON.parse(dataString);
    var contentMessage = "<span style='color:mediumvioletred'>" + data.userName + "</span> : " + data.content + "</p>";
    document.getElementById("output").innerHTML += contentMessage + "</br>";
}
