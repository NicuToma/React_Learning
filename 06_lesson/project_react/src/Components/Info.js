import Photo from "../Images/5.png";

export default function Info() {
  return (
    <div className="titles">
      <img src={Photo} alt="my_photo" className="my_photo"></img>;
      <h1 className="my_name">Nicolae Marian Toma</h1>
      <h2 className="job_title">Junior Frontend Developer</h2>
      <a href="https://github.com/NicuToma" className="site_link">
        <h4 className="github">GitHub Toma Nicolae</h4>
      </a>
      <button className="email">
        <i class="fa fa-envelope"></i>
        e-mail
      </button>
    </div>
  );
}
