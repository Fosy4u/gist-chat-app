import React from "react";
import "./messages.css";
import ScrollToBottom from "react-scroll-to-bottom";
import Message from "../components/message/message";
/*component gathering whole messages in the room*/
const Messages = ({ messages, name }) => {
  
  return (
    /*using scrollToBottom to make the chat scrollable*/
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
