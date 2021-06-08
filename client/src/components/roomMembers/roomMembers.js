import React from "react";
import { useState } from "react";
import closeIcon from "../../icon/closeIcon.png";

import "./roomMembers.css";
/*component to display current number of room users*/
const RoomMembers = ({ users, room, close }) => {
  return (
    <div className="roomMembers">
      <div className="close">
        <img src={closeIcon} alt="close" height="" onClick={close} />
      </div>
      {users ? (
        <div className="members">
          <h3 className="blue">Users in the room:</h3>
          <div className="activeContainer">
            <p>
              {users.map(({ name }) => (
                <ul key={name}>
                  <li>{name}</li>
                </ul>
              ))}
            </p>
          </div>
        </div>
      ) : (
        <div>room currently empty</div>
      )}
    </div>
  );
};

export default RoomMembers;
