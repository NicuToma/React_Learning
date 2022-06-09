/*
1.Challenge: Build the Navbar component.
Check the Figma file for the design specifics.
*/
/*
2.Challenge: Build the Hero component.
Check the Figma file for the design specifics.
*/
/*
3.Challenge: Build the Card component
For now, hard-code in the data (like 
the rating, title, price, etc.)

Notes:
- Only render 1 instance (I already did this for you)
- The star icon and photo (katie-zaferes.png) are in the images 
  folder for your use
- Make sure to include:
    - image
    - star icon (star.png), rating, and review count
    - title
    - cost/person
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.
*/

import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Card from "./Components/CardHero";

export default function App() {
  return (
    <div className="card">
      <Navbar />
      <Hero />
      <Card />
    </div>
  );
}
