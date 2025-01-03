// src/components/ChatBubble.jsx
import React from "react";

const ChatBubble = ({ message, isUser }) => {
  return (
    <div className={`chat-bubble ${isUser ? "user" : "system"}`}>
      {message}
    </div>
  );
};

export default ChatBubble;
