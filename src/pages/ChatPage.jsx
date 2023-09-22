import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { io } from "socket.io-client";

const ChatPage = () => {
  const location = useLocation();
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState({ name: "" });
  const socket = useRef(null);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    socket.current = io(`${process.env.REACT_APP_URL}`, {
      transports: ["websocket"],
    });

    const user = localStorage.getItem("userID");
    const roomParam = window.location.href.split(process.env.REACT_APP_ROOM_URL)[1];
    if (roomParam) socket.current.emit("join-room", { room: roomParam, user });
    if (roomParam && user) {
      joinTheChat(roomParam, user);
      fetchMessages(roomParam);
    }
    setUsername(user);

    return () => {
      socket.current.disconnect();
    };
    // eslint-disable-next-line  
  }, [location.search]);

  useEffect(() => {
    socket.current.on("user-connected", (user) => {
      // Display a toast or something
      console.log("=== USER CONNECTED ===", user);
    });
    socket.current.on("chat-message-notify", (newMessage) => {
      const prevMessages = [...messages, newMessage];
      setMessages(prevMessages);
    });
  }, [messages]);

  const fetchMessages = async (roomParam) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/messages/${roomParam}`
      );
      console.log("FETCHED MESSAGES", response);
      if (response.status === 200) {
        setMessages(response.data);
      }
    } catch (error) {
      console.log("ERROR WHILE FETCHING", error);
    }
  };

  const joinTheChat = async (roomParam, user) => {
    if (room.name !== "") {
      return;
    }
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/rooms/${roomParam}/users`,
        {
          userId: user,
        }
      );
      console.log("ROOM CREATED SUCCESSFULLY", response);
      if (response.status === 201) {
        console.log("ROOM CREATED SUCCESSFULLY");
        const data = response.data;
        setRoom(data);
      }
    } catch (error) {
      console.log("ERROR WHILE FETCHING", error);
    }
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();

    const newMessage = { user: username, room: room._id, text: message };
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/messages`,
      newMessage
    );
    if (response.status === 201) {
      socket.current.emit("send-chat-message", newMessage);
    } else {
      toast.error("Message not sent", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
    setMessages((prev) => [...prev, newMessage]);

    setMessage("");

    // Scroll to the bottom after sending a new message
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-900 text-white">
      <div className="md:w-1/4 p-4 bg-gray-800">
        <h2 className="text-2xl font-semibold mb-2">Room: {room.name}</h2>
        <p className="text-gray-400 hidden md:block">Users in this room:</p>
        {/* User list can be displayed here */}
      </div>

      {room ? (
        <div className="md:w-3/4 h-screen md:p-4 relative">
          <div className="mb-4">
            <h1 className="text-3xl font-semibold hidden md:block">Chat Room: {room.name}</h1>
          </div>
          <div
            ref={chatContainerRef}
            className="chat-container h-4/5 bg-gray-800 rounded-lg shadow-md overflow-y-auto p-4"
            style={{ paddingBottom: "20px" }}
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-4 ${
                  msg.user === username ? "self-message" : "other-message"
                }`}
              >
                <div
                  className={`${
                    msg.user === username
                      ? "bg-blue-600 text-white rounded-br-lg ml-auto"
                      : "bg-gray-700 text-white rounded-bl-lg"
                  } p-3 max-w-[50%] md:max-w-[45%] rounded-xl`}
                >
                  <p>{msg.text}</p>
                </div>
                <p
                  className={`text-sm ${
                    msg.user === username ? "py-2 text-right" : "text-left"
                  } text-gray-300 mt-2`}
                >
                  {msg.userName}
                </p>
              </div>
            ))}
          </div>
          <form
            onSubmit={handleSendMessage}
            className="chat-input fixed bottom-0 left-0 right-0 bg-gray-800 px-1 text-sm sm:text-base py-4 sm:p-4"
            style={{ borderTop: "1px solid #444" }}
          >
            <div className="mb-4 flex items-center">
              <input
                type="text"
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-grow p-3 border border-gray-700 bg-gray-700 rounded-l-lg focus:outline-none text-white"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-3 rounded-r-lg hover:bg-blue-600 focus:outline-none"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};

export default ChatPage;
