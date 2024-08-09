import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Nav from './Components/Navbar.js';
import Footer from "./Components/Footer.js";
import Home from "./Pages/Home.js";
import About from "./Pages/About.js";
import Resume from "./Pages/Resume.js";
import Project from "./Pages/Projects.js";
import MoveToTop from "./Components/MoveToTop.js";
import Lottie from  "lottie-react";
import nightsky from "./LottieFiles/night-sky.json";
import HashLoader from "react-spinners/HashLoader";
import ContactPage from "./Pages/ContactPage.js";


function App() {
  const[Loading,SetLoading]=useState(true);

  useEffect(()=>{
    SetLoading(true)

    setTimeout(()=>{
    SetLoading(false)}
    ,1900)
  },[])  
  
  return (
    <>
      {Loading ? (
      <div className="loader"> 
        <HashLoader
          color={'#9067C6'}
          loading={true}
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
      ):(
      <div>
      
      <Lottie className="bg" animationData={nightsky} loop={true} />  
      <Lottie className="bgtwo" animationData={nightsky} loop={true} />   
      <Lottie className="bgtemp" animationData={nightsky} loop={true} /> 

      <Nav/>
      <MoveToTop/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>}/>
        <Route path="/Project" element={<Project/>}/>
        <Route path="/Resume" element={<Resume/>}/>
        <Route path="/Contact" element={<ContactPage/>}/>
      </Routes>
      
      <Footer/>
      </div>
      )}  
    </>
  );
}

export default App;
