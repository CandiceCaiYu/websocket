var WebSocket = require('ws');
var uuid = require('uuid/v3')
var wss = new WebSocket.Server({ port: 8081 });
wss.on('connection', function(ws) {
  console.log('Server connecting')
  ws.send(uuid('ws://localhost:8081', uuid.DNS))
  ws.on('message',function(message) {
    console.log(message)
  })
})