// import Wisker from "../Images/mr-whiskerson.png";
 import Mail from "../Images/mail-icon.png";
 import Phone from "../Images/phone-icon.png";


export default function Card(props) {
  return (
    <div className="contacts">
       <div className="contact-card">
                <img src={props.img} alt="user"/>
                <h3>{props.name}</h3>
                <div className="info-group">
                    <img src={Phone} alt="phone" />
                    <p>{props.phone}</p>
                </div>
                <div className="info-group">
                    <img src={Mail} alt="mail" />
                    <p>{props.mail}</p>
                </div>
            </div>
    </div>
  );
}
/* <img src={Wisker} alt="cat"/>
<h3>Mr. Whiskerson</h3>
<div className="info-group">
    <img src={Phone} alt="phone" />
    <p>(212) 555-1234</p>
</div>
<div className="info-group">
    <img src={Mail} alt="mail" />
    <p>mr.whiskaz@catnap.meow</p>
</div> */