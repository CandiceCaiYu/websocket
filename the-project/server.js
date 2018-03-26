var WebSocket = require('ws');
var wss = new WebSocket.Server({ port: 8081 });
wss.on('connection', function(ws) {
  console.log('Server connecting')
  ws.send('hi')
})