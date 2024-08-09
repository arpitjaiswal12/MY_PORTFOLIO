import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { SiLeetcode } from "react-icons/si";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Arpit Jaiswal</h4>
      <h4>Copyright &copy; 2023 AJ</h4>
      <div className="footerLinks">
        <Link to="https://github.com/arpitjaiswal12" target="_blank">
          <FaGithub />
        </Link>
        <Link
          to="https://www.linkedin.com/in/arpit-jaiswal-5bb84b247/"
          target="_blank"
        >
          <FaLinkedin />
        </Link>
        <Link to="mailTo:jaiswalarpit419@gmail.com" target="_blank">
          <GrMail />
        </Link>
        <Link to="https://leetcode.com/u/arpit_jaiswal_30/" target="_blank">
          <SiLeetcode />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
