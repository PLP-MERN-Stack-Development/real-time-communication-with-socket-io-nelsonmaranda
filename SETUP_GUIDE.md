# ⚡ Quick Setup & Startup Guide

## ✅ Setup Complete!

Your Socket.io Chat Application is ready to run. Here's everything that's been configured:

### ✨ What's Been Set Up

- ✅ **Server Dependencies** - Installed (Express, Socket.io, CORS, dotenv)
- ✅ **Client Dependencies** - Installed (React, Vite, Socket.io-client)
- ✅ **Environment Files** - Created (.env files for server and client)
- ✅ **React Components** - Created (App.jsx, Socket hook, styling)
- ✅ **Project Structure** - Organized and ready to use

## 🚀 Starting the Application

### Method 1: Using Two Terminal Windows (Recommended for Development)

**Step 1: Start the Backend Server**
```powershell
cd server
npm run dev
```

You should see:
```
Server running on port 5000
```

**Step 2: Start the Frontend Client** (in a new terminal)
```powershell
cd client
npm run dev
```

You should see:
```
VITE v5.0.0 ready in XXX ms
Local: http://localhost:5173/
```

Then open your browser to **http://localhost:5173** and you're all set! 🎉

### Method 2: For Production

**Build the client:**
```powershell
cd client
npm run build
```

**Start the server (will serve the built client):**
```powershell
cd server
npm start
```

Visit **http://localhost:5000** in your browser

## 🧪 Testing the Application

1. **Open the chat app** in your browser
2. **Enter a username** and click "Join Chat"
3. **Open another browser tab** or window and join with a different username
4. **Send messages** - They should appear in real-time on both tabs
5. **Type to see** the typing indicator appear for other users
6. **Watch the user list** update as people join/leave

## 📁 Project Files

```
Week 5/
├── server/
│   ├── server.js              ← Main server with Socket.io setup
│   ├── package.json           ← Server dependencies
│   ├── .env                   ← Server configuration
│   └── node_modules/
│
├── client/
│   ├── src/
│   │   ├── App.jsx            ← Main chat UI component
│   │   ├── App.css            ← Chat styles
│   │   ├── index.css          ← Global styles
│   │   ├── main.jsx           ← React entry point
│   │   └── socket/
│   │       └── socket.js      ← Socket.io client hook
│   ├── index.html             ← HTML entry point
│   ├── vite.config.js         ← Vite configuration
│   ├── package.json           ← Client dependencies
│   ├── .env                   ← Client configuration
│   └── node_modules/
│
├── README.md                  ← Full documentation
└── Week5-Assignment.md        ← Assignment requirements
```

## 🔧 Configuration

### Server Configuration (.env)
```env
PORT=5000                                    # Server port
CLIENT_URL=http://localhost:5173            # Allowed client origin
NODE_ENV=development                        # Environment type
```

### Client Configuration (.env)
```env
VITE_SOCKET_URL=http://localhost:5000      # Server URL
```

## 🎯 Available Commands

### Server Commands
```bash
npm run dev          # Start development server with auto-reload
npm start            # Start production server
```

### Client Commands
```bash
npm run dev          # Start Vite development server
npm run build        # Build for production
npm run preview      # Preview production build
```

## 🐛 Troubleshooting

### Issue: "Port 5000 already in use"
**Solution:** Change the PORT in `server/.env` to another port like 5001

### Issue: "Client can't connect to server"
**Solution:** Verify both servers are running and check VITE_SOCKET_URL in client/.env

### Issue: "Module not found" errors
**Solution:** Run `npm install` again in the affected directory

### Issue: "ENOENT: no such file or directory"
**Solution:** Make sure you're in the correct directory before running commands

## 📝 Features to Test

1. **Real-time Messaging** ✅
   - Send messages and see them appear instantly
   
2. **User Presence** ✅
   - See online users in the sidebar
   - System messages when users join/leave
   
3. **Typing Indicators** ✅
   - Start typing to see the indicator
   - Other users see you're typing in real-time
   
4. **Connection Status** ✅
   - Green indicator = connected
   - Red indicator = disconnected

## 🚀 Next Steps

### Enhance the Application:

1. **Add Private Messages** - Implement 1-on-1 chat
2. **Create Rooms** - Allow multiple chat rooms
3. **Message History** - Store messages in a database
4. **User Profiles** - Add avatars and user info
5. **Authentication** - Implement JWT login system
6. **File Sharing** - Send images and files
7. **Search Messages** - Find past messages
8. **Sound Alerts** - Notify with audio on new messages

See the main `README.md` for more details about architecture and features!

## 📞 Support

If you encounter issues:
1. Check the browser console for errors (F12)
2. Check the terminal output for server errors
3. Verify both client and server are running
4. Try refreshing the page
5. Clear browser cache if needed

## ✨ You're All Set!

Your real-time chat application is ready to go. Have fun building! 🎉

```bash
# Get started now:
cd server && npm run dev
# In another terminal:
cd client && npm run dev
```

Then visit http://localhost:5173 🚀

