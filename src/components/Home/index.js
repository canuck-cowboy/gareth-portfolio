import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import Sidebar from "../Sidebar";
import StarfieldAnimation from "react-starfield-animation";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  const nameArray = "Gareth A.Nassar".split("");
  const jobArray = "Computer Scientist".split("");
  const interestArray = "".split("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home-main">
      <Sidebar />
      <StarfieldAnimation
        numParticles={500}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          color: "white",
          zIndex: -1,
        }}
      />
      <div className="home-container">
        <span className="tags-top">&lt;body&gt;</span>
        <div className="text-content">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>o</span>
            <span className={`${letterClass} _12`}>w</span>
            <span className={`${letterClass} _12`}>d</span>
            <span className={`${letterClass} _12`}>y,</span>

            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m </span>
            <span className={`${letterClass} _14`}> </span>
            {/* <img src={LogoTitle} alt="Abed Nassar" /> */}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={interestArray}
              idx={22}
            />
          </h1>
          <h2>
            AI Researcher / Lecturer / Network Admin 
          </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <span>
          <span className="tags-top body-tag">&lt;/body&gt;</span>
          <br />
          <span className="tags-bottom html-tag">&lt;/html&gt;</span>
        </span>
      </div>
      <Loader type="pacman" />
    </div>
  );
};

export default Home;
