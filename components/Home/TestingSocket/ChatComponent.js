import { useState, useEffect } from "react";
import io from "socket.io-client";

export default function ChatComponent() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const socket = io("http://localhost:3000/api/socket.io"); // Replace with your server URL

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to socket server");
    });

    socket.on("message-broadcast", (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    // Cleanup function to disconnect from socket on component unmount
    return () => socket.disconnect();
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (message) {
      socket.emit("message", message);
      setMessage("");
    }
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
    </div>
  );
}
