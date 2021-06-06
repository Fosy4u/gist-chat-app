import React from "react";
import "./messages.css";
import ScrollToBottom from "react-scroll-to-bottom";
import Message from "../components/message/message";

const Messages = ({ messages, name }) => {
  console.log(messages);
  return (
    <ScrollToBottom className="messages">
      {messages.map((message, i) => (
        <div key={i}>
          <Message message={message} name={name} />
        </div>
      ))}
    </ScrollToBottom>
  );
};

export default Messages;
