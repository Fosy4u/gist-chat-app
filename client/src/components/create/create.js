import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./create.css";
const Create = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Create Chat Room</h1>
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
            <button className="button mt-20" type="submit">
              {" "}
              Create{" "}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Create;
