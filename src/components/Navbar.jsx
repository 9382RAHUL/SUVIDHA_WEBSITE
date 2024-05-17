import React from "react";

import "./nav.css";
const Navbar = () => {
  return (
    <>
      <nav className="fixed-navbar">
        <div>
          <img src="/SuvidhaLogo.png" alt="" className="logo_image" />
        </div>
        <div className="button-top">
          <button className="button">
            <a href="/">Home</a>
          </button>
          <button className="button button2">
            <a href="/events">Events</a>
          </button>
          <button className="button button3">
            <a href="/donar">Donors</a>
          </button>
          <button className="button button4">
            <a href="/contact">Contact</a>
          </button>

          <button className="button button5 btn1">
            <a href="/login">Login/SignUp</a>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
