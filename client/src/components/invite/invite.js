import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import queryString from "query-string";
import "./invite.css";

/*handles invitation to a chat room*/
const Invite = () => {
  /*using state to capture user name and room respectively*/
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  useEffect(() => {
    const { name, room } = queryString.parse(window.location.search);

    setRoom(room);
  });

  return (
    <div className="inviteOuterContainer">
      <div className="inviteInnerContainer">
        <h1 className="inviteHeading">Room {room}</h1>
        <div>
          <input
            placeholder="Enter your Name"
            className="inviteInput"
            type="text"
            onChange={(event) => setName(event.target.value)}
          />

          <Link
            to={`/chat?room=${room}&name=${name}`}
            onClick={(event) =>
              !name || !room ? event.preventDefault() : null
            }
          >
            <button className="inviteButton mt-20" type="submit">
              {" "}
              Join{" "}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Invite;
