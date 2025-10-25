import { useState, useEffect, useRef } from 'react'
import { useSocket } from './socket/socket'
import './App.css'

function App() {
  const [username, setUsername] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [messageInput, setMessageInput] = useState('')
  const messagesEndRef = useRef(null)

  const {
    isConnected,
    messages,
    users,
    typingUsers,
    connect,
    disconnect,
    sendMessage,
    setTyping,
  } = useSocket()

  // Auto-scroll to latest message
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Handle typing indicator
  const handleTyping = (e) => {
    setMessageInput(e.target.value)
    setTyping(true)
    
    // Reset typing indicator after 1 second of inactivity
    clearTimeout(window.typingTimeout)
    window.typingTimeout = setTimeout(() => {
      setTyping(false)
    }, 1000)
  }

  // Handle login
  const handleLogin = (e) => {
    e.preventDefault()
    if (username.trim()) {
      connect(username)
      setIsLoggedIn(true)
    }
  }

  // Handle send message
  const handleSendMessage = (e) => {
    e.preventDefault()
    if (messageInput.trim() && isConnected) {
      sendMessage(messageInput)
      setMessageInput('')
      setTyping(false)
    }
  }

  // Handle logout
  const handleLogout = () => {
    disconnect()
    setIsLoggedIn(false)
    setUsername('')
    setMessageInput('')
  }

  if (!isLoggedIn) {
    return (
      <div className="login-container">
        <div className="login-form">
          <h1>💬 Socket.io Chat</h1>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <button type="submit">Join Chat</button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="app-container">
      <div className="chat-container">
        <div className="sidebar">
          <h2>Users Online</h2>
          <div className="user-info">
            <strong>{username}</strong>
            <p>{isConnected ? '🟢 Connected' : '🔴 Disconnected'}</p>
          </div>
          <div className="users-list">
            {users.map((user) => (
              <div key={user.id} className="user-item online">
                {user.username}
              </div>
            ))}
          </div>
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>

        <div className="main-chat">
          <div className="chat-header">
            <h1>Global Chat Room</h1>
          </div>

          <div className="messages-container">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`message ${msg.sender === username ? 'own' : ''} ${
                  msg.system ? 'system-message' : ''
                }`}
              >
                {msg.system ? (
                  <div>{msg.message}</div>
                ) : (
                  <>
                    <div className="message-bubble">
                      <div>
                        <strong>{msg.sender}</strong>
                      </div>
                      <div>{msg.message}</div>
                      <div className="message-meta">
                        {new Date(msg.timestamp).toLocaleTimeString()}
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}

            {typingUsers.length > 0 && (
              <div className="typing-indicator">
                <strong>
                  {typingUsers.join(', ')} {typingUsers.length === 1 ? 'is' : 'are'} typing
                </strong>
                <span></span>
                <span></span>
                <span></span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <div className="input-area">
            <input
              type="text"
              placeholder="Type a message..."
              value={messageInput}
              onChange={handleTyping}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleSendMessage(e)
                }
              }}
              disabled={!isConnected}
            />
            <button onClick={handleSendMessage} disabled={!isConnected}>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
