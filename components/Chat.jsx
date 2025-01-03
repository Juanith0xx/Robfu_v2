import React, { useState } from "react";
import './css/Chat.css';
import ChatBubble from "./ChatBubble";
import { IoSendSharp } from "react-icons/io5";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim() !== "") {
      // Enviar mensaje del usuario
      setMessages([...messages, { text: input, isUser: true }]);

      // Simular respuesta del sistema
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "Respuesta automática", isUser: false },
        ]);
      }, 1000);

      // Limpiar el campo de entrada
      setInput("");
    }
  };

  return (
    <div className="chat-wrapper">
      <div className="messages-container">
        {messages.map((msg, index) => (
          <ChatBubble key={index} message={msg.text} isUser={msg.isUser} />
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          className="input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
          placeholder="Escribe tu mensaje..."
        />
        <button className="send-button" onClick={handleSendMessage}>
          <IoSendSharp size={20} />
        </button>
      </div>
    </div>
  );
};

export default Chat;
