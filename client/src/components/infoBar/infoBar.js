import React from "react";
import "./infoBar.css";
import onlineIcon from "../../icon/onlineIcon.png";
import closeIcon from "../../icon/closeIcon.png";

const InfoBar = ({ room }) => {
  return (
    <div className="infoBar">
      <div className="leftInnerContainer">
        <img
          className="onlineIcon"
          src={onlineIcon}
          height="70"
          width="30"
          alt="online"
        />
        <h3>Room {room}</h3>
      </div>
      <div className="rightInnerContainer">
        <a href="/">
          {" "}
          <img src={closeIcon} alt="close" />
        </a>
      </div>
    </div>
  );
};

export default InfoBar;
