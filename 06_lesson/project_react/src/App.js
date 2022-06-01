import React from "react";
import Info from "./Components/Info";
import AboutMe from "./Components/AboutMe";
import Links from "../src/Components/Links";
import Interests from "../src/Components/Interests";

export default function App() {
  return (
    <div className="card">
      <Info />
      <AboutMe />
      <Interests />
      <Links />
    </div>
  );
}
