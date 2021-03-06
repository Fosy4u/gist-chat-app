import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./join.css";
/*the screen to join a meeting room. expects user name and room inputs*/
const Join = () => {
  /*state to capture user name and room inputs and pass this to the url on clicking join button*/
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="joinHeading">Join Chat Room</h1>
        <div>
          <input
            placeholder="Name"
            className="joinInput"
            type="text"
            onChange={(event) => setName(event.target.value)}
          />
          <input
            placeholder="Room"
            className="joinInput mt-20"
            type="text"
            onChange={(event) => setRoom(event.target.value)}
          />

          <Link
            to={`/chat?room=${room}&name=${name}`}
            onClick={(event) =>
              !name || !room ? event.preventDefault() : null
            }
          >
            <button className="joinButton mt-20" type="submit">
              {" "}
              Join{" "}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Join;
