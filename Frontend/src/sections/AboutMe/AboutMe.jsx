import styles from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <section className={styles.container} id="about">
      <div>
        <h1>About Me</h1>
        <div className={styles.content}>
          <div className={styles.textcontainer}>
            <p>
              Hello! I&apos;m Arpit Jaiswal, a passionate MERN stack developer
              with a love for developing backend applications. I am currently
              pursuing a B.Tech in Computer Science and Engineering from
              Acropolis Institute of Technology and Research. My expertise lies
              in creating efficient, scalable, and robust applications using
              MongoDB, Express.js, React, and Node.js.
            </p>
            <div className={styles.contactSection}>
              <h3>Contact Information</h3>
              <p>
                <strong>Email:</strong> jaiswalarpit419@gmail.com
                <br />
                <strong>Phone:</strong> +123 456 7890
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
