# 🔄 Real-Time Chat Application with Socket.io

A modern, real-time chat application built with **React**, **Node.js/Express**, and **Socket.io** featuring live messaging, typing indicators, user presence, and a beautiful responsive UI.

## ✨ Features

### Core Features
- ✅ **Real-time Messaging** - Instant message delivery using Socket.io bidirectional communication
- ✅ **User Authentication** - Simple username-based login system
- ✅ **Online Status** - Display of currently connected users
- ✅ **Typing Indicators** - Real-time notification when users are typing
- ✅ **System Messages** - Automatic notifications for user join/leave events
- ✅ **Responsive Design** - Works seamlessly on desktop and mobile devices

### UI/UX Features
- 🎨 Beautiful gradient-based modern design
- 📱 Mobile-responsive layout
- ⚡ Auto-scroll to latest messages
- 🔴🟢 Visual connection status indicator
- ⌨️ Enter key to send messages
- 🚪 Graceful logout functionality

## 🛠️ Tech Stack

### Frontend
- **React 18.2** - UI library
- **Vite 5.0** - Lightning-fast build tool
- **Socket.io-client 4.7** - Real-time client communication
- **Modern CSS3** - Beautiful styling with gradients and animations

### Backend
- **Node.js** - JavaScript runtime
- **Express 4.18** - Web framework
- **Socket.io 4.7** - Real-time bidirectional communication
- **CORS** - Cross-Origin Resource Sharing
- **dotenv** - Environment variable management

## 📂 Project Structure

```
Week 5/
├── client/                          # React Frontend
│   ├── src/
│   │   ├── socket/
│   │   │   └── socket.js           # Socket.io client configuration & custom hook
│   │   ├── App.jsx                 # Main application component
│   │   ├── App.css                 # App-specific styles
│   │   ├── main.jsx                # React entry point
│   │   ├── index.css               # Global styles
│   │   └── package.json
│   ├── index.html                  # HTML entry point
│   ├── vite.config.js             # Vite configuration
│   ├── .env                        # Environment variables
│   └── node_modules/
│
├── server/                          # Node.js Backend
│   ├── server.js                   # Main server file with Socket.io setup
│   ├── package.json                # Dependencies
│   ├── .env                        # Environment variables
│   └── node_modules/
│
├── README.md                        # This file
└── Week5-Assignment.md              # Assignment instructions
```

## 🎬 Screenshots

### Login Screen
The application starts with a clean, modern login interface. Users enter their desired username to join the chat room.

![Socket.io Chat Login Screen](./screenshots/login-screen.png)

### Chat Interface
Once logged in, users can see the real-time chat interface with the online users list on the left, global chat room in the center, and message input at the bottom.

![Socket.io Chat Interface - Active Chat](./screenshots/chat-interface.png)

**Features visible in the chat:**
- 👥 **Users Online** panel showing connected users with online status
- 💬 **Global Chat Room** with messages and timestamps
- 🟢 **Connection Status** indicator (green dot = connected)
- ⌨️ **Message Input** area with Send button
- 🚪 **Logout** button to disconnect from chat

## 🚀 Getting Started

### Prerequisites
- **Node.js** v18 or higher ([Download](https://nodejs.org/))
- **npm** or **yarn** package manager
- A modern web browser (Chrome, Firefox, Safari, Edge)

### Installation

#### 1. **Install Server Dependencies**
```bash
cd server
npm install
```

#### 2. **Install Client Dependencies**
```bash
cd client
npm install
```

### 3. **Environment Setup**

The `.env` files are already configured:

**Server `.env`:**
```env
PORT=5000
CLIENT_URL=http://localhost:5173
NODE_ENV=development
```

**Client `.env`:**
```env
VITE_SOCKET_URL=http://localhost:5000
```

## 🎯 Running the Application

### Option 1: Run Both Servers (Recommended)

**Terminal 1 - Start the Backend:**
```bash
cd server
npm run dev
```
The server will start at `http://localhost:5000`

**Terminal 2 - Start the Frontend:**
```bash
cd client
npm run dev
```
The client will start at `http://localhost:5173`

### Option 2: Production Build

**Build the client:**
```bash
cd client
npm run build
```

**Start the server:**
```bash
cd server
npm start
```

## 💻 Usage Guide

1. **Enter Your Username** - On the login screen, type your desired username and click "Join Chat"
2. **Send Messages** - Type in the message input box and press Enter or click Send
3. **Real-time Updates** - See messages from other users appear instantly
4. **View Online Users** - Check the sidebar to see who's currently connected
5. **Typing Indicator** - When someone is typing, you'll see their name with an animated indicator
6. **Logout** - Click the "Logout" button to disconnect and return to login screen

## 🔌 Socket.io Events

### Client to Server
- `user_join` - Emitted when a user connects with a username
- `send_message` - Emitted when a user sends a message
- `typing` - Emitted when a user starts/stops typing
- `private_message` - Emitted for private messages between users

### Server to Client
- `user_list` - Updated list of connected users
- `user_joined` - Notification when a new user joins
- `user_left` - Notification when a user disconnects
- `receive_message` - Incoming public messages
- `private_message` - Incoming private messages
- `typing_users` - List of users currently typing

## 📊 Features Implementation Details

### Real-time Messaging
Messages are stored in memory on the server (limited to 100 most recent) and broadcast to all connected clients using Socket.io's `emit` method.

### Typing Indicators
When a user starts typing, a `typing` event is sent to the server. The server maintains a list of typing users and broadcasts it to all clients. After 1 second of inactivity, the typing status is cleared.

### User Presence
The server maintains a `users` object tracking all connected clients. When users join or disconnect, the updated user list is broadcast to all clients.

### Private Messaging
Implemented with Socket.io's `socket.to()` method for targeted message delivery between specific users.

## 🎨 Styling

The application features:
- **Gradient UI** - Beautiful purple-blue gradients
- **Smooth Animations** - Typing indicators with bounce animations
- **Dark Sidebar** - Easy-on-the-eyes color scheme for user list
- **Message Bubbles** - Chat message bubbles similar to modern chat apps
- **Mobile Responsive** - Adapts layout for screens under 768px

## 📱 Responsive Breakpoints

- **Desktop** (>768px) - Full layout with sidebar and chat area side-by-side
- **Mobile** (<768px) - Stacked layout with sidebar above messages

## 🚨 Error Handling

- **Connection Status** - Visual indicator shows connection status in user info
- **Reconnection** - Automatic reconnection attempts with exponential backoff
- **Graceful Degradation** - UI updates disabled when not connected
- **Memory Management** - Server limits stored messages to prevent memory issues

## 🔐 Security Considerations

This is a learning project with basic security. For production:
- Implement proper user authentication (JWT tokens)
- Validate and sanitize all user inputs
- Add rate limiting to prevent spam
- Implement proper error handling
- Use HTTPS/WSS for secure connections
- Add message encryption for private messages

## 📚 Learning Resources

- [Socket.io Official Documentation](https://socket.io/docs/)
- [React Documentation](https://react.dev)
- [Express.js Documentation](https://expressjs.com/)
- [Vite Documentation](https://vitejs.dev/)

## 🤝 Contributing

This is an educational project. Feel free to:
- Add new features
- Improve the UI/UX
- Optimize performance
- Fix bugs

## 📝 Assignment Tasks

See `Week5-Assignment.md` for detailed assignment requirements including:
- Task 1: Project Setup ✅
- Task 2: Core Chat Functionality ✅
- Task 3: Advanced Chat Features
- Task 4: Real-Time Notifications
- Task 5: Performance and UX Optimization

## 🎓 Next Steps

### To Enhance This Project:

1. **Add Private Messaging** - Implement one-on-one chat functionality
2. **Create Chat Rooms** - Allow users to create and join multiple channels
3. **Add User Avatars** - Display user profile pictures
4. **Message Reactions** - Allow emoji reactions to messages
5. **Message Search** - Add ability to search message history
6. **File Sharing** - Implement file upload functionality
7. **Sound Notifications** - Add audio alerts for new messages
8. **Message Persistence** - Store messages in a database
9. **User Authentication** - Implement JWT-based authentication
10. **Admin Features** - Moderation and user management

## 🐛 Troubleshooting

### Server won't start
- Check if port 5000 is already in use
- Ensure Node.js is properly installed
- Run `npm install` again in the server directory

### Client can't connect to server
- Verify server is running at `http://localhost:5000`
- Check `VITE_SOCKET_URL` in client `.env`
- Check browser console for error messages

### Messages not appearing
- Ensure both client and server are running
- Check that you're connected (green status indicator)
- Refresh the page and try again

## 📄 License

MIT License - Feel free to use this project for learning and personal use.

---

**Happy Coding! 🚀** Feel free to fork, modify, and improve this project! 