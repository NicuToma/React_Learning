// import Kate from "../Images/kate.png";
import Star from "../Images/star.png";
// 4 Chalange ,adding props
export default function Card(props) {
  return (
    <div className="hero-card">
      <div className="kate-photo">
        <h5 className="status">sold out</h5>
        <img src={props.image} alt="broken" className="main-photo"></img>
      </div>
      <div className="kate-rating">
        <img src={Star} alt="rating missing" className="rating"></img>
        <span>
          {props.rating} {props.reviewCount} {props.country}
        </span>
      </div>
      <div className="kate-info">
        <p className="about">{props.title}</p>
        <p className="price">
          <strong>From ${props.price}</strong> / person
        </p>
      </div>
    </div>
  );
}
