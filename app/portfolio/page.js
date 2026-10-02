export default function Portfolio() {
  return (
    <main>
      <section className="page-heading">
        <p className="welcome">MY WORK</p>

        <h1>My Portfolio</h1>

        <p>
          Here are some of the projects and activities I have
          worked on as an Information Technology student.
        </p>
      </section>

      <section className="portfolio-grid">
        <div className="project-card">
          <div className="project-number">01</div>

          <h2>Parking Management System</h2>

          <p>
            A web-based parking management system designed to
            manage parked vehicles, parking spaces, and daily
            income.
          </p>

          <div className="tags">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </div>
        </div>

        <div className="project-card">
          <div className="project-number">02</div>

          <h2>Android Application</h2>

          <p>
            A mobile application project created using Android
            Studio with a simple and user-friendly interface.
          </p>

          <div className="tags">
            <span>Android</span>
            <span>Java</span>
            <span>UI Design</span>
          </div>
        </div>

        <div className="project-card">
          <div className="project-number">03</div>

          <h2>Portfolio Website</h2>

          <p>
            A personal portfolio website created with Next.js to
            showcase my skills, projects, and creative work.
          </p>

          <div className="tags">
            <span>Next.js</span>
            <span>React</span>
            <span>CSS</span>
          </div>
        </div>

        <div className="project-card">
          <div className="project-number">04</div>

          <h2>Figma UI Design</h2>

          <p>
            A user interface design project created in Figma
            focusing on layout, visual design, and interactive
            prototypes.
          </p>

          <div className="tags">
            <span>Figma</span>
            <span>UI/UX</span>
            <span>Prototype</span>
          </div>
        </div>
      </section>
    </main>
  );
}