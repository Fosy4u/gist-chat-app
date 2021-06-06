import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import queryString from "query-string";
import "./invite.css";
const Invite = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  useEffect(() => {
    const { name, room } = queryString.parse(window.location.search);

    setRoom(room);
  });

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Room {room}</h1>
        <div>
          <input
            placeholder="Enter your Name"
            className="joinInput"
            type="text"
            onChange={(event) => setName(event.target.value)}
          />

          <Link
            to={`/chat?room=${room}&name=${name}`}
            onClick={(event) =>
              !name || !room ? event.preventDefault() : null
            }
          >
            <button className="button mt-20" type="submit">
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