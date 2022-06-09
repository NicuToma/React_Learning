import Airbnb from "../Images/airbnb.png";

export default function Navbar() {
  return (
    <nav>
      <img src={Airbnb} alt="Airbnb" className="airbnb_logo"></img>
    </nav>
  );
}
