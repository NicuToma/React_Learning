/* Challenge:

- Create a Contact.js component in another file
- Move one of the contact card divs below into that file
- import and render 4 instances of that contact card
    - Think ahead: what's the problem with doing it this way?
*/
import Wisker from "./Images/mr-whiskerson.png";
import Flufy from "./Images/flufy.png";

import Felix from "./Images/felix.png";
import Pumpkin from "./Images/pumpkin.png";


import React from "react";
import Card from "./Components/ContactCard";

export default function App() {
  return (
    <div className="card">
      <Card img={Wisker} name="Mr. Whiskerson"
      phone="(212) 555-1234" mail="mr.whiskaz@catnap.meow" />
      <Card img={Flufy} name="Mr. Flufy"
      phone="212) 555-2345<" mail="fluff@me.com<" />
      <Card img={Felix} name="Mr. Felix"
      phone="(212) 555-4567<" mail="thecat@hotmail.com<" />
      <Card img={Pumpkin} name="Mr. Pumpkin"
      phone="(0800) CAT KING<" mail="pumpkin@scrimba.com<" />
    </div>
  );
}
