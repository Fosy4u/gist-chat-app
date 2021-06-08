import React from "react";
import "./infoBar.css";
import onlineIcon from "../../icon/onlineIcon.png";
import closeIcon from "../../icon/closeIcon.png";
import group from "../../icon/group.jpg";
import invitation from "../../icon/invitation.jpg";

/*the inforbar on the chat screen - will show online icon, room name and a close button that disconnects user from the room*/
const InfoBar = ({ room, roomMembers, invite }) => {
  return (
    <div className="infoBar">
      <div className="leftInnerContainer">
        <img className="onlineIcon" src={onlineIcon} width="30" alt="online" />
        <h3 className="room">Room {room}</h3>
        <div>
          <div
            className="groupIcon"
            onClick={(() => console.log(roomMembers), roomMembers)}
          >
            <img src={group} width="30" alt="group" />
          </div>

          <span class="groupIconText">Tooltip text</span>
        </div>
      </div>
      <div className="rightInnerContainer">
        <div>
          <div
            className="inviteIcon"
            onClick={(() => console.log(invite), invite)}
          >
            <img src={invitation} width="30" alt="invitation" />
          </div>
        </div>
        <a href="/" className="inviteClose">
          <img src={closeIcon} alt="close" />
        </a>
      </div>
    </div>
  );
};

export default InfoBar;
