import React from "react";
import { useState } from "react";

import closeIcon from "../../icon/closeIcon.png";
import onlineIcon from "../../icon/onlineIcon.png";

import "./textContainer.css";
/*component displayed on the chat screen. it describes the purpose of this application, list current users in the room and a link to invite others*/
const TextContainer = ({ users, room }) => {
  /*a state to check if invitation button is clicked*/
  const [invite, setInvite] = useState(false);
  const inviteLink = `${window.location.origin}/invite?room=${room}`;
  return (
    <div className="textContainer">
      <div className="text">
        <h1>
          Gist-Chatter Application{" "}
          <span role="img" aria-label="emoji">
            💬
          </span>
        </h1>
        <h2>
          A real-time chat application to test Socket.IO{" "}
          <span role="img" aria-label="emoji">
            ❤️
          </span>
        </h2>
      </div>

      {invite === true ? (
        <div className="invite">
          <div className="link">
            <p>{inviteLink}</p>
          </div>
          <div>
            <img
              className="close"
              src={closeIcon}
              alt="close"
              height=""
              onClick={() => {
                setInvite(false);
              }}
            />
          </div>
        </div>
      ) : (
        <div>
          <p>
            Add participants?{" "}
            <button onClick={() => setInvite(true)} className="addButton">
              Click here to get link
            </button>
          </p>
        </div>
      )}
      {users ? (
        <div>
          <h3 className="green">People currently in the room:</h3>
          <div className="activeContainer">
            <p>
              {users.map(({ name }) => (
                <ul key={name} className="activeItem">
                  <li>{name}</li>
                </ul>
              ))}
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default TextContainer;
