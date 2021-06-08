import React from "react";
import { useState } from "react";
import closeIcon from "../../icon/closeIcon.png";

import "./inviteLink.css";
/*component to display room invitation link*/
const InviteLink = ({ room, close }) => {
  /*To get the url link */
  const Link = `${window.location.origin}/invite?room=${room}`;
  return (
    <div className="linkContainer">
      <div className="linkClose">
        <img src={closeIcon} alt="close" height="" onClick={close} />
      </div>
      <div className="link">
        <p>
          send the following link to the user{" "}
          <div className="linkUrl">{Link} </div>
        </p>
      </div>
    </div>
  );
};

export default InviteLink;
