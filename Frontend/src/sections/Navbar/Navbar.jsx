import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);


  // Close the menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".navbar") && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close the menu when clicking on a link
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar" >
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">MyPortfolio</Link>
        </div>
        <div className={`navbar-menu ${isOpen ? "open" : ""}`}>
          <Link to="/" className="navbar-item">
            Home
          </Link>
          <Link
            to="/projects"
            className="navbar-item"
            smooth={true}
            duration={500}
            onClick={handleLinkClick}
          >
            Projects
          </Link>
          <Link
            to="/skills"
            className="navbar-item"
            smooth={true}
            duration={500}
            onClick={handleLinkClick}
          >
            Skills
          </Link>
          <Link
            to="/contact"
            className="navbar-item"
            smooth={true}
            duration={500}
            onClick={handleLinkClick}
          >
            Contact
          </Link>
          <Link
            to="/about-me"
            className="navbar-item"
            smooth={true}
            duration={500}
            onClick={handleLinkClick}
          >
            About Me
          </Link>
        </div>
        <div className="navbar-toggle" onClick={toggleMenu}>
          <span className="navbar-toggle-icon"></span>
          <span className="navbar-toggle-icon"></span>
          <span className="navbar-toggle-icon"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
