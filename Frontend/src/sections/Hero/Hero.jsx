import styles from './HeroStyles.module.css';
import heroImg from '../../assets/profile-pic.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import Resume from '../../assets/Arpit_jaiswal_resume.pdf';
import { useTheme } from '../../Components/ThemeContext.jsx';
import { Link } from 'react-router-dom';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Harris Johnsen"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Arpit
          <br />
          Jaiswal
        </h1>
        <h2>Full-Stack Developer</h2>
        <span>
          <Link to="https://x.com/Arpit___Jaiswal" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </Link>
          <Link to="https://github.com/arpitjaiswal12" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </Link>
          <Link to="https://www.linkedin.com/in/arpit-jaiswal-5bb84b247/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </Link>
        </span>
        <p className={styles.description}>
        with a passion for crafting back-end applications.
        </p>
        <a href={Resume} download="Arpit_jaiswal_resume.pdf">
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
