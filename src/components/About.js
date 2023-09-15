import React from "react";
import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass";
const About = () => {
  return (
    <>
      <div className="about">
        <div className="about-left">
          <h1>
            Welcome to <br /> The world of <br />{" "}
            <span>Tasty & Fresh Food</span>
          </h1>
          <h4>
            "Better you will feel if you eat a Food<span>Fire</span> healthy
            meal"
          </h4>
        </div>
        <div className="about-right">
          <img
            src="https://foodfire-chapter09.netlify.app/burger-image.ec55d069.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default About;
