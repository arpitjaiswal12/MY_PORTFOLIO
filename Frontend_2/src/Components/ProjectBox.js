import React from "react";
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import { Link } from "react-router-dom";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    EduNetAIDesc:
      "Led a team of 4 to design DB schemas and UML diagrams. Developed AI-assisted course creation and chatbots with 100MB vector storage. Implemented discussion forums, quiz tests, and personalized profiles. Enabled query resolution through professors and AI chatbots. Conducted extensive testing to boost user experience by 60%.",
    EduNetAIGithub: "https://github.com/DevanshSahni/tindog",
    EduNetAIWebsite: "https://devanshsahni.github.io/tindog/",

    Youtube_TwitterBackendDesc:
      "Implement JWT, Cloudinary (25GB Managed Storage), and Multer for secure file uploads. Utilize advanced MongoDB Aggregation pipeline for detailed CRUD operations and subscriber/channel analysis. Design a well-structured project with response and error-handling utilities.",
    Youtube_TwitterBackendGithub:
      "https://github.com/arpitjaiswal12/YouTube-Twitter-Detailed-Backend",
    Youtube_TwitterBackendWebsite: "https://detailed-backend-chi.vercel.app/",

    BookBazaarDesc:
      "BookBazaar is an innovative e-commerce platform for buying and selling books, developed using the MERN stack. The app allows users to sell and purchase books effortlessly. It features a robust search functionality, enabling users to find books by title, author, or category.",
    BookBazaarGithub: "https://github.com/arpitjaiswal12/BookBazaar_Ecommerce",
    BookBazaarWebsite: "https://bookbazaar-mnfw.onrender.com/",

    Movie_appDesc:
      "Create a movie application integrated with the IMDB API that showcases the latest films. Users can filter and search movies by category and genre, providing a personalized browsing experience. The app delivers real-time movie updates and allows users to explore movies based on their preferences.",
    Movie_appGithub: "https://github.com/arpitjaiswal12/MovieNet_app",
    Movie_appWebsite: "https://movie-app-latest.vercel.app/",
  };

  let show = "";
  if (desc[projectName + "Github"] === "") {
    show = "none";
  }

  return (
    <div className="projectBox">
      <img className="projectPhoto" src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {desc[projectName + "Desc"]}
        <br />

        <Link
          style={{ display: show }}
          to={desc[projectName + "Github"]}
          target="_blank"
        >
          <button className="projectbtn">
            <FaGithub /> Github
          </button>
        </Link>

        <Link to={desc[projectName + "Website"]} target="_blank">
          <button className="projectbtn">
            <CgFileDocument /> Demo
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectBox;
