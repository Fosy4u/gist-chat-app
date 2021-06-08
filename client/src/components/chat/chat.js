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
import { useHistory } from "react-router-dom";

/*configuring the param options for the particle component used for the animation on the background*/
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
/*chat component that will display real-time chat in the room*/
let socket;
const Chat = () => {
  const history = useHistory();
  const [name, setName] = useState(""); /*state to hold the user name*/
  const [room, setRoom] = useState(""); /*state to hold the room name*/
  /*state to hold all users in each room*/
  const [users, setUsers] = useState("");
  /*state to hold each input message*/
  const [message, setMessage] = useState("");
  /*state to hold all the messages*/
  const [messages, setMessages] = useState([]);
  /*Endpoint to the server deployed on Heroku*/
  const ENDPOINT = "https://gist-chatter.herokuapp.com/";

  useEffect(() => {
    /*getting the user's name and the room from the url*/
    const { name, room } = queryString.parse(window.location.search);
    /*connecting socket client to the endpoint of the server deployed inn Heroku*/
    socket = io(ENDPOINT);

    setRoom(room);
    setName(name);
    /*connecting user to the chat room if there is no username conflict. if conflict, force the user to choose another username*/
    socket.emit("join", { name, room }, (error) => {
      if (error) {
        alert("username is taken, please choose another name");
        history.goBack();
      }
    });
  }, [ENDPOINT, window.location.search]);

  useEffect(() => {
    /*fetching the real-time messages in the chat room from the server*/
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });
    /*fetching users in the chat room from the server */
    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, []);
  /*fuction to handle send chats*/
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
