import react from "react";
import { useState, useEffect } from "react";
import queryString from "query-string";
import { io } from "socket.io-client";
import "./chat.css";
import InfoBar from "../infoBar/infoBar";
import Input from "../input/input";
import Messages from "../../messages/messages";
import TextContainer from "../textContainer/textContainer";
import Particles from "react-particles-js";

const particlesOptions = {
  particles: {
    number: {
      value: 400,
      density: {
        enable: true,
        value_area: 800,
      },
    },
  },
};

let socket;
const Chat = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const ENDPOINT = "https://gist-chatter.herokuapp.com/";

  useEffect(() => {
    const { name, room } = queryString.parse(window.location.search);

    socket = io(ENDPOINT);

    setRoom(room);
    setName(name);

    socket.emit("join", { name, room }, (error) => {
      if (error) {
        alert(error);
      }
    });
  }, [ENDPOINT, window.location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });
    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, []);

  const sendMessage = (event) => {
    console.log(message);
    event.preventDefault();
    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };
  return (
    <div className="outerContainer">
      <Particles params={particlesOptions} />
      <div className="container">
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
      <TextContainer users={users} room={room} />
    </div>
  );
};

export default Chat;
