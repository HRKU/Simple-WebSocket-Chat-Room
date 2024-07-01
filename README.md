# Simple WebSocket Chat Room

This project is a basic chat room application built with WebSockets, utilizing HTML, JavaScript, Node.js, and Express. It serves as a learning tool to understand the workings of WebSockets by implementing real-time communication between clients.

## Features

- Real-time messaging between multiple users.
- Typing indicators to show when a user is typing.
- Responsive design to work on both desktop. Testing out for mobile.

## Technologies Used

- HTML
- CSS
- JavaScript
- Node.js
- Express
- WebSocket

## Getting Started

1. Clone the repository:
   ```sh
   git clone https://github.com/hrku/simple-websocket-chat-room.git

2. Install Dependencies:
   ```sh
   npm install

3. Start the server:
   ```sh
   node server.js

4. Open the chat in the application in your browser:
   ```sh
   HTTP://localhost:3000

## Important Note 
  - To see how WebSocket works and why we use it, open the application in multiple tabs.
  - Enter your usernames in those tabs and start sending messages.
  - You'll see that each message sent by different users/clients is broadcasted to everyone present in the chat box.
  - This demonstrates the concept, theory, and practical implementation of WebSockets.

## Learning Outcomes
- Understanding how WebSockets work for real-time communication.
- Implementing a basic chat room with Node.js and Express.
- Making a web application responsive for different devices.
