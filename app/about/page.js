export default function About() {
  return (
    <main>
      <section className="page-heading">
        <p className="welcome">GET TO KNOW ME</p>

        <h1>About Me</h1>

        <p>
          I am a college student currently studying Bachelor of
          Science in Information Technology.
        </p>
      </section>

      <section className="about-container">
        <div className="about-card">
          <h2>Who I Am</h2>

          <p>
            Hello! My name is Gion Kirby Toreno. I am an Information
            Technology student who enjoys learning about computers,
            programming, web development, and design.
          </p>

          <p>
            I am continuously improving my technical skills by
            creating school projects and exploring different
            technologies.
          </p>
        </div>

        <div className="about-card">
          <h2>My Skills</h2>

          <div className="skills">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>Next.js</span>
            <span>Java</span>
            <span>Figma</span>
            <span>Microsoft Excel</span>
            <span>PowerPoint</span>
          </div>
        </div>
      </section>
    </main>
  );
}