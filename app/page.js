export default function Home() {
  return (
    <main>
      <section className="hero">
        <p className="welcome">WELCOME TO MY PORTFOLIO</p>

        <h1>Hi, I'm Gion Kirby Toreno</h1>

        <p className="hero-text">
          I am an Information Technology student interested in
          web development, UI design, and creative digital projects.
        </p>

        <div className="hero-buttons">
          <a href="/portfolio" className="primary-button">
            View My Work
          </a>

          <a href="/about" className="secondary-button">
            About Me
          </a>
        </div>
      </section>

      <section className="services">
        <h2>What I Do</h2>

        <p className="section-description">
          Here are some of the areas I am interested in and continue
          to develop my skills in.
        </p>

        <div className="cards">
          <div className="card">
            <div className="card-icon">💻</div>
            <h3>Web Development</h3>
            <p>
              I create modern and functional websites using
              different web technologies.
            </p>
          </div>

          <div className="card">
            <div className="card-icon">🎨</div>
            <h3>UI Design</h3>
            <p>
              I enjoy designing simple, clean, and user-friendly
              interfaces.
            </p>
          </div>

          <div className="card">
            <div className="card-icon">🚀</div>
            <h3>Creative Projects</h3>
            <p>
              I enjoy building digital projects that allow me to
              practice and improve my skills.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}