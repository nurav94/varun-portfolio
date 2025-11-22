// src/pages/About.jsx
import "./About.css";

function About() {
  return (
    <main className="about-page">
      {/* Intro Section */}
      <section className="about-section">
        <h1>About Me</h1>
        <p>
          I’m a <strong>Senior QA Automation Engineer</strong>, focused on building reliable
          automation solutions for web, mobile, and API platforms. My work revolves around
          improving release confidence, designing scalable test frameworks, and identifying
          high-risk areas before users do.
        </p>
      </section>

      {/* Journey Section */}
      <section className="about-section">
        <h2>My Journey</h2>
        <p>
          I didn’t start my career in IT. I worked in non-technical roles initially but
          soon realised I was more interested in technical problem solving. I was drawn
          to software testing because I enjoy understanding how systems work — and more
          importantly, how to break them efficiently.
        </p>
        <p>
          I began with manual testing and started learning automation from day one. Over
          the years, I shifted into full automation engineering and gradually expanded
          into framework development and CI/CD integration.
        </p>
      </section>

      {/* Philosophy Section */}
      <section className="about-section">
        <h2>My Testing Philosophy</h2>
        <blockquote>
          “If something can fail, I’d rather make it fail inside testing than let users find it.”
        </blockquote>
        <ul>
          <li>Testing should simulate real risks, not just pass test cases.</li>
          <li>Automation should speed up releases, not slow teams down.</li>
          <li>I focus on clarity, maintainability, and testing what actually matters.</li>
        </ul>
      </section>

      {/* Personal */}
      <section className="about-section">
        <h2>Outside Work</h2>
        <p>I recharge by:</p>
        <ul>
          <li>Watching movies</li>
          <li>Watching cricket</li>
          <li>Going on long bike rides</li>
        </ul>
      </section>

      {/* Future */}
      <section className="about-section">
        <h2>Looking Ahead</h2>
        <p>
          I’m working towards building automation solutions and systems that deliver
          value even without constant manual effort — moving beyond traditional job roles.
        </p>
      </section>
    </main>
  );
}

export default About;
