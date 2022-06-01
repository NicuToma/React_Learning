import React from "react";
import logo from "./logo.svg";
export default function Navbar() {
  return (
    <nav className="navbar_menu">
      <div className="titleLogo">
        <img src={logo} alt="logo" className="react_logo"></img>
        <h3 className="react_facts">ReactFacts</h3>;
      </div>
      <h4 className="react_course">React course - Project 1</h4>
    </nav>
  );
}
