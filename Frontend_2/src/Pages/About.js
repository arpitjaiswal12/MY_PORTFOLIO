import React from "react";
import Skills from "../Components/Skills.js";
import Tilt from "react-parallax-tilt";
import Lottie from "lottie-react";
import Coder from "../LottieFiles/coder.json";

const About = () => {
  return (
    <>
      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Get to <b>know</b> me!
          </h1>
          <p>
            Hi, my name is <b>Arpit Jaiswal</b> and I am from Indore, Madhya
            Pradesh. I'm a <b>MERN stack web developer</b> and a final year
            college student pursuing <b>BTech in CSE</b>. <br />
            <br />I have done several impactful projects like <b>
              BookBazaar{" "}
            </b>{" "}
            and <b>EduNetAI</b>. I love to create projects with beautiful
            designs with interesting backend, and you can check out some of my
            work in the projects section.
            <br />
            <br />I am <b>open</b> to new collaborations or work where I can
            contribute and grow. Feel free to connect with me, links are in the
            footer.
            <br />
          </p>
        </div>

        <div>
          <Tilt>
            <Lottie
              className="illustration hero"
              animationData={Coder}
              autoplay={true}
            />
          </Tilt>
        </div>
      </div>

      <h1 className="SkillsHeading">Professional Skillset</h1>
      <div className="skills">
        <Skills skill="Javascript" />
        <Skills skill="C++" />
        <Skills skill="Node" />
        <Skills skill="Express" />
        <Skills skill="HTML5" />
        <Skills skill="React" />
        <Skills skill="Bootstrap" />
        <Skills skill="Tailwindcss" />
        <Skills skill="MongoDB" />
        <Skills skill="MySQL" />
        <Skills skill="Git" />
        <Skills skill="Github" />
        <Skills skill="Postman" />
        <Skills skill="Vercel" />
        <Skills skill="Npm" />
      </div>
    </>
  );
};

export default About;
