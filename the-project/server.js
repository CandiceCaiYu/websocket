var WebSocket = require('ws');
var uuid = require('uuid/v3')
var wss = new WebSocket.Server({ port: 8081 });
var msg = {};
var index = 0;
wss.on('connection', function(ws) {
  console.log('Server connecting')
  // ws.send(uuid('ws://localhost:8081', uuid.DNS))
  ws.on('message',function(message) {
    var detail = JSON.parse(message)
    msg = {
      name:detail.loginInfo.name ,
      uid:uuid('ws://localhost:8081', uuid.DNS),
      id: index++
    }
    console.log(message)
    ws.send(JSON.stringify(msg))
  })
  
})

