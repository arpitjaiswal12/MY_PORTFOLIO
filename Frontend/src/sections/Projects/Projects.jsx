import styles from './ProjectsStyles.module.css';
import youtube_twitter from '../../assets/yt-twitter-img.png';
import bookbazaar from '../../assets/bookbazzar-img.png';
import chatApp from '../../assets/chat_app_logo.png';
import WatchNet from '../../assets/watchNet.png';
import ProjectCard from '../../Components/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={youtube_twitter}
          link="https://github.com/arpitjaiswal12/detailed-backend"
          h3="YouTube Twitter App"
          p="Backend Application"
        />
        <ProjectCard
          src={bookbazaar}
          link="https://bookbazaar-mnfw.onrender.com/"
          h3="BookBazaar"
          p="Book Purchasing Application"
        />
        <ProjectCard
          src={chatApp}
          link="https://mern-chat-app-wd8c.onrender.com/"
          h3="LetsChat"
          p="RealTime Chat Application "
        />
        <ProjectCard
          src={WatchNet}
          link="https://movie-app-latest.vercel.app/"
          h3="WatchNet"
          p="Movie Search Application"
        />
      </div>
    </section>
  );
}

export default Projects;
