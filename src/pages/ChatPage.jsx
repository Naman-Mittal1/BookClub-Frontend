import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ChatPage = () => {
  const location = useLocation();
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [username, setUsername] = useState('');
  const [roomName, setRoomName] = useState('');

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const room = query.get('room');
    const user = query.get('username');
    setUsername(user);
    setRoomName(room);
  }, [location.search, messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();

    const newMessage = { username: username, room: roomName, text: message };

    setMessages([...messages, newMessage]);

    setMessage('');
  };

  return (
    <div className="flex h-screen bg-gray-800 text-white">
      {/* Sidebar */}
      <div className="w-1/4 p-4 bg-gray-700">
        <h2 className="text-xl font-semibold">{roomName}</h2>
        <p className="text-gray-400">Users in this room:</p>
        {/* List of users can be displayed here */}
      </div>

      {/* Chat Section */}
      <div className="w-3/4 p-4">
        <div className="mb-4">
          <h1 className="text-3xl font-semibold">Chat Room: {roomName}</h1>
        </div>
        <div className="flex-grow bg-gray-900 rounded-lg shadow-md overflow-y-auto">
          <div className="p-4">
            {messages.map((msg, index) => (
              <div key={index} className="mb-4">
                <div className="bg-blue-600 text-white p-2 rounded-lg">
                  <p>{msg.text}</p>
                </div>
                <p className="text-sm text-gray-300 mt-1">{msg.username}</p>
              </div>
            ))}
          </div>
        </div>
        <form onSubmit={handleSendMessage} className="mt-4">
          <div className="mb-2">
            <input
              type="text"
              placeholder="Type a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-2 border border-gray-700 bg-gray-700 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex items-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChatPage;
