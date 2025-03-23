import React from "react";
import Lottie from "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "../Components/Typed.js";
import Tilt from "react-parallax-tilt";
import Avatar from "../images/Avatar.png";
import { CiCoffeeCup } from "react-icons/ci";

const Home = () => {
  return (
    <div>
      <div className="HomePage">
        <div className="HomeText">
          <h1>Hi There!</h1>
          <h1>
            I'M <b>ARPIT JAISWAl</b>
          </h1>
          <Typed />
        </div>

        <Lottie className="illustration" animationData={SpaceBoy} loop={true} />
      </div>

      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Brief <b>introduction</b>
          </h1>
          <p>
            I love transforming raw ideas into impactful applications, whether
            it's a <b>mobile app, website, or backend system.</b> I strive to
            build scalable and efficient solutions that enhance user experiences
            and solve real-world problems.
            <br />
            <br />I am proficient in <b>C++</b>,<b> JavaScript</b>, and{" "}
            <b>Swift</b>, with hands-on experience in the MERN stack, iOS
            development, and microservices architecture. Currently, I’m working
            on iOS development frameworks like <b> UIKit </b> and <b>SwiftUI</b>{" "}
            to build more user-friendly iOS applications. <br />
            <br />
            {/* Also, I love <b>coffee</b> <CiCoffeeCup style={{scale:"1.5", rotate:"15deg"}}/>    */}
          </p>
        </div>
        <Tilt>
          <img className="Avatar" src={Avatar} alt="" />
        </Tilt>
      </div>
    </div>
  );
};

export default Home;
