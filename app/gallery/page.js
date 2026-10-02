export default function Gallery() {
  return (
    <main>
      <section className="page-heading">
        <p className="welcome">MY CREATIVE WORK</p>

        <h1>Gallery</h1>

        <p>
          A collection of my school projects, designs, and creative
          activities.
        </p>
      </section>

      <section className="gallery-grid">
        <div className="gallery-item">
          <div className="gallery-number">01</div>
          <h2>Web Project</h2>
          <p>Website design and development</p>
        </div>

        <div className="gallery-item">
          <div className="gallery-number">02</div>
          <h2>Mobile App</h2>
          <p>Android Studio project</p>
        </div>

        <div className="gallery-item">
          <div className="gallery-number">03</div>
          <h2>Figma Design</h2>
          <p>UI/UX design and prototype</p>
        </div>

        <div className="gallery-item">
          <div className="gallery-number">04</div>
          <h2>School Project</h2>
          <p>Information Technology project</p>
        </div>

        <div className="gallery-item">
          <div className="gallery-number">05</div>
          <h2>Creative Work</h2>
          <p>Digital creative project</p>
        </div>

        <div className="gallery-item">
          <div className="gallery-number">06</div>
          <h2>Future Project</h2>
          <p>More projects coming soon</p>
        </div>
      </section>
    </main>
  );
}