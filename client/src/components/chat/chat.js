import react from "react";
import { useState, useEffect } from "react";
import queryString from "query-string";
import { io } from "socket.io-client";
import "./chat.css";
import InfoBar from "../infoBar/infoBar";
import Input from "../input/input";
import Messages from "../../messages/messages";
import TextContainer from "../textContainer/textContainer";

import { useHistory } from "react-router-dom";
import RoomMembers from "../roomMembers/roomMembers";
import InviteLink from "../inviteLink/inviteLink";

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
  const [roomMembers, setRoomMembers] = useState(false);
  const [invite, setInvite] = useState(false);
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
  const roomMembersHandler = (event) => {
    event.preventDefault();
    setInvite(false);
    setRoomMembers(true);
  };

  const inviteHandler = (event) => {
    event.preventDefault();
    setRoomMembers(false);
    setInvite(true);
  };
  return (
    <div className="outerContainer">
      <div className="container">
        <InfoBar
          room={room}
          roomMembers={roomMembersHandler}
          invite={inviteHandler}
        />
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>

      {roomMembers === true ? (
        <div className="textSide">
          <RoomMembers
            users={users}
            room={room}
            close={() => setRoomMembers(false)}
          />
        </div>
      ) : null}
      {invite === true ? (
        <div className="textSide">
          <InviteLink room={room} close={() => setInvite(false)} />
        </div>
      ) : null}
    </div>
  );
};

export default Chat;
