import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./create.css";
const Create = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  return (
    <div className="createOuterContainer">
      <div className="createInnerContainer">
        <h1 className="createHeading">Create Chat Room</h1>
        <div>
          <input
            placeholder="Name"
            className="createInput"
            type="text"
            onChange={(event) => setName(event.target.value)}
          />
          <input
            placeholder="Room"
            className="createInput mt-20"
            type="text"
            onChange={(event) => setRoom(event.target.value)}
          />

          <Link
            to={`/chat?room=${room}&name=${name}`}
            onClick={(event) =>
              !name || !room ? event.preventDefault() : null
            }
          >
            <button className="createButton mt-20" type="submit">
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
