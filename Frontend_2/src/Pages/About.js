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
            {/* Hi, my name is <b>Arpit Jaiswal</b>, and I'm from <b>Indore, Madhya Pradesh</b>.
            I'm an <b>iOS Developer Intern</b> at <b>DigiValet</b> and a graduate <b> BTech CSE(Hons) </b>
            student with good academic track record of 8.72 cgpa, passionate about building scalable and impactful
            applications. */}
            Hi, my name is <b>Arpit Jaiswal</b>, and I'm from <b>Indore, Madhya Pradesh</b>. I'm an <b> iOS Developer Intern </b> at <b> DigiValet </b> and a graduate <b> B.Tech CSE(Hons) </b> student with a good academic track record of <b> 8.72 CGPA</b>, passionate about building scalable and impactful applications.
            <br />
            <br />
            I specialize in <b>MERN stack, iOS development (Swift, SwiftUI, UIKit),
            and backend engineering.</b> My projects, such as Arogya and
            CitiesSearch, showcase my ability to create seamless user
            experiences and efficient backend architectures.
            <br />
            <br />
            I love crafting <b>intuitive designs</b> with robust backends and
            continuously seek opportunities to <b>learn, collaborate, and innovate. </b>
            Feel free to connect with me—links are in the footer! 🚀
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
        <Skills skill="Swift" />
        <Skills skill="UIKit" />
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
