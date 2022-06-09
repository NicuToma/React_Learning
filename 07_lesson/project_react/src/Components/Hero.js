import Hero_gallery from "../Images/hero.png";
export default function Hero() {
  return (
    <section className="hero_content">
      <img src={Hero_gallery} alt="Heroes" className="gallery"></img>
      <h1 className="online_exp">Online Experiences</h1>
      <p className="exp-info">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}
