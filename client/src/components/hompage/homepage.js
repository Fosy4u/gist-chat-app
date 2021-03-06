import React from "react";
import Particles from "react-particles-js";
import { Link } from "react-router-dom";
import "./homepage.css";
import image from "../../icon/homepage.jpg";

/*configuring the params for the paricles component used for the animated background*/
const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 1000,
      },
    },
  },
};
/*Home page*/
const Homepage = () => {
  return (
    <div className="homepage">
      <Particles params={particlesOptions} className="particles" />
      <div className="header">
        <h1>Gist-Chat APP</h1>
      </div>
      <div className="main">
        <div className="description">
          <img className="image" src={image} alt="image" />
          <div className="about">
            <h3>
              A Real-Time Chat Application for testing Socket.IO with React and
              Nodejs.
            </h3>
          </div>
        </div>
        <div className="cardContainer">
          <Link to={"/create"}>
            <div className="card create container">Create a Chat Room</div>
          </Link>
          <Link to={"/join"}>
            <div className="card join container">Join a Chat Room</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
