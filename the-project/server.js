var WebSocket = require('ws');
var uuid = require('uuid/v4')
var wss = new WebSocket.Server({ port: 8081 });
var msg = {};
var index = 0;
var friends = [];
var clients = [];
wss.on('connection', function(ws) {
  console.log('Server connecting')
  ws.on('message',function(message) {
    var detail = JSON.parse(message);
    var theId = uuid();
    msg = {
      name:detail.loginInfo.name ,
      id: theId,
    }
    clients.push({
      id: theId,
      ws: ws
    })
    friends.push(msg)
    var data = {
      user: msg,
      friends: friends
    }
    ws.send(JSON.stringify({
      user: msg
    }))
    sendMsg(friends,clients)
  })
  
})

// 群发消息
function sendMsg(friends,clients,ws) {
  for(let i=0, len=clients.length; i<len; i++) {
    let clientSocket = clients[i].ws;
    if(clientSocket.readyState === WebSocket.OPEN){
      clientSocket.send(JSON.stringify( {friends : friends} ))
    }
  }
}

