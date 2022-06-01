import Facebook from "../Images/facebook.png";
import Instagram from "../Images/instagram.png";
import Linkdn from "../Images/linkdn.png";
import Whatsup from "../Images/what.jpg";
import GitHub from "../Images/github.png";


export default function Links() {
  return (
    <div className="social">
      <img src={Facebook} alt="facebook" className="social_icons"></img>
      <img src={Instagram} alt="insta" className="social_icons"></img>
      <img src={Linkdn} alt="linkdn" className="social_icons"></img>
      <img src={Whatsup} alt="what" className="social_icons"></img>
      <img src={GitHub} alt="git" className="social_icons"></img>

    </div>
  );
}
