import { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import Sidebar from "../Sidebar";
import "./index.scss";
import WordCloud from "./wordcloud";
import StarfieldAnimation from "react-starfield-animation";
import { TagCloud } from "@frank-mayer/react-tag-cloud";

const Skills = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  const skillsArray = "Skills".split("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const CloudItem = () => {
    const options = {
      radius: 250,
      maxSpeed: "fast",
      initSpeed: "fast",
      direction: 135,
      keep: true,
    };
    return (
      <TagCloud options={options}>
        {[
            'Arduino',
            'Java',
            'Python',
            'OpenCV',
            'Wireshark',
            'SQL', 
            'Pandas',
            'NumPy',
            'CLI',
            'Matplotlib',
            'C#',
            'C++',
            'AD',
            'Keras',
            'Django',
            'Scikit-Learn',
            'TensorFlow'
        ]}
      </TagCloud>
    );
  };

  return (
    <div className="skills-main">
      <Sidebar />
      <StarfieldAnimation
        numParticles={500}
        lineWidth={2.0}
        depth={800}
        alphaFactor={0.6}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
      />
      <div className="skills-container">
        <span className="tags-top">&lt;body&gt;</span>
        <div className="content-div">
          <div className="text-content">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={skillsArray}
                idx={15}
              />
              <br />
            </h1>
            <p>
              Knowledge is a mighty force, and I’m on the trail to be the toughest son of a gun out there. 
              I never stop learning; it keeps my mind sharp and my heart true. The moment you stop ridin’ is
              when you get left in the dust. The best way to learn is by getting your hands dirty; 
              true mastery comes from the grit of the trail.
            </p>
            <p>
              I’ve got a whole bag of skills, and most of ‘em are real useful. I can build just about 
              anything you need.  
              I never stop learnin’—that’s how you stay ahead in this world. I can learn anything you can teach me. 
              And I can teach you a lot. Now, take a look at what I've I have mastered
            </p>
          </div>
          <div className="tagcloud-wrap-mobile">
            <CloudItem />
          </div>
          <div className="pc-tagcloud">
            <WordCloud />
          </div>
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

export default Skills;
