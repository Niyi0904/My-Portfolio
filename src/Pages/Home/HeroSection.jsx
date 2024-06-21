import image from '../images/myImage.jpg'
import { Link } from "react-scroll";


export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hello World, i am Niyi</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Frontend</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            <br /> Dolorum, quas. Amet soluta assumenda cum?
          </p>
        </div>
        <Link
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="Contact"
              className="navbar--content"
            >
        <button className="btn btn-primary">Get In Touch</button>
            </Link>
      </div>
      <div className="hero--section--img">
        <img src={image} alt="Hero Section" />
      </div>
    </section>
  );
}
