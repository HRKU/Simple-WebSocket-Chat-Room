const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const uuid = require('uuid');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.use(express.static('public'));

const clients = {};

wss.on('connection', (ws) => {
  const userId = uuid.v4();
  ws.id = userId;
  clients[userId] = { ws, username: '' };
  console.log(`New client connected: ${userId}`);

  ws.on('message', (message) => {
    console.log(`Received message from ${userId}: ${message}`);
    const parsedMessage = JSON.parse(message);

    if (parsedMessage.type === 'username') {
      clients[userId].username = parsedMessage.username;
      console.log(`Username set for ${userId}: ${parsedMessage.username}`);
    } else if (parsedMessage.type === 'message') {
      const broadcastMessage = JSON.stringify({
        type: 'message',
        userId: userId,
        username: clients[userId].username,
        text: parsedMessage.text,
      });

      wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(broadcastMessage);
        }
      });
    } else if (parsedMessage.type === 'typing') {
      const typingMessage = JSON.stringify({
        type: 'typing',
        userId: userId,
        username: clients[userId].username,
        stop: parsedMessage.stop || false,
      });

      wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(typingMessage);
        }
      });
    }
  });

  ws.on('close', () => {
    console.log(`Client disconnected: ${userId}`);
    delete clients[userId];
  });
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
