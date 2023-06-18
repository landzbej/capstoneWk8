console.log("Server started");
port = 8010
var Msg = 'hi there';
// var WebSocketServer = require('ws').Server
//     , wss = new WebSocketServer({port: 8010});
//     wss.on('connection', function(ws) {
//         ws.on('message', function(message) {
//         console.log('Received from client: %s', message);
//         ws.send('Server received from client: ' + message);
//     });
//  })
var WebSocketServer = require('ws').Server
    , wss = new WebSocketServer({port});
    wss.on('connection', function(ws) {
        ws.on('message', function(message) {
        console.log('Received from client: %s', message);
        ws.send('Server received from client: ' + message);
    });
 });
console.log("Websocket Server started on port " + port);