import React from "react";
import { useState } from "react";
import closeIcon from "../../icon/closeIcon.png";
import onlineIcon from "../../icon/onlineIcon.png";

import "./textContainer.css";

const TextContainer = ({ users, room }) => {
  const [invite, setInvite] = useState(false);
  return (
    <div className="textContainer">
      <div>
        <h1>
          Gist-Chatter Application{" "}
          <span role="img" aria-label="emoji">
            💬
          </span>
        </h1>
        <h2>
          A real-time chat application I created to test Socket.IO{" "}
          <span role="img" aria-label="emoji">
            ❤️
          </span>
        </h2>
      </div>

      {invite === true ? (
        <div className="invite">
          <div className="link">
            <p> http://localhost:3000/invite?room={room}</p>
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
            inviting someone to join the room?{" "}
            <button onClick={() => setInvite(true)} className="button">
              Click here
            </button>
          </p>
        </div>
      )}
      {users ? (
        <div>
          <h1 className="green">People currently chatting:</h1>
          <div className="activeContainer">
            <h2>
              {users.map(({ name }) => (
                <ul key={name} className="activeItem">
                  <li>{name}</li>
                </ul>
              ))}
            </h2>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default TextContainer;
