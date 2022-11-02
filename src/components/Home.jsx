import React from "react";
import "../styles/Home.css";
import AltSchoolLogo from "../images/AltSchoolLogo.png";

const Home = () => {
  return (
    <div className="home">
      <div className="logo">
        <img alt="AltSchool-Logo" src={AltSchoolLogo} />
      </div>
      <div className="center">
        <div className="home__card">
          <h1>WELCOME</h1>
          <p>
            This is a presentation of AltSchool's second semester exam project.
            It is a simple custom counter hook with properties like; increment,
            decrement, reset and setValue functions. It was implemented using
            react and useReducer hook.
          </p>
          <button>Check it out!</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
