import { Link } from 'react-router-dom';
import  "./ProjectCard.module.css"

function ProjectCard({ src, link, h3, p }) {
  return (
    <Link to={link} target="_blank" >
      <img className="projectCard" src={src} alt={`${h3} logo`} />
      <h3>{h3}</h3>
      <p>{p}</p>
    </Link>
  );
}

export default ProjectCard;
