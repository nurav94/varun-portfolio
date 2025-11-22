// src/pages/Resume.jsx
import "./Resume.css";

function Resume() {
  return (
    <main className="resume-page">
      <section className="resume-hero">
        <h1>Resume</h1>
        <p>
          Download my resume for a quick overview of my experience, automation expertise,
          and accomplishments.
        </p>

        <a
          href="https://drive.google.com/uc?export=download&id=1KxIoXOZSh-z2oIT7AgGw0o-T7gh-Nwom"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-button"
        >
          📄 Download Resume
        </a>
      </section>
    </main>
  );
}

export default Resume;
