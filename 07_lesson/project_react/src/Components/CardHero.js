import Kate from "../Images/kate.png";
import Star from "../Images/star.png";

export default function Card() {
  return (
    <div className="hero-card">
      <div className="kate-photo">
        <h5 className="status">sold out</h5>
        <img src={Kate} alt="broken-image" className="main-photo"></img>
      </div>
      <div className="kate-rating">
        <img src={Star} alt="rating missing" className="rating"></img>
        <span>5.0 (6) USA</span>
      </div>
      <div className="kate-info">
        <p className="about">Life lessons with Katie Zaferes</p>
        <p className="price">
          <strong>From $136</strong> / person
        </p>
      </div>
    </div>
  );
}
