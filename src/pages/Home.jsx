// src/pages/Home.jsx
import "./Home.css";
import profileImg from "../assets/varun-profile.jpg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


function Home() {
  const navigate = useNavigate();
  const [showEggMsg, setShowEggMsg] = useState(false);
  const [toastPosition, setToastPosition] = useState({ x: 0, y: 0 });


 const triggerEasterEgg = (e) => {
  setToastPosition({ x: e.clientX, y: e.clientY });
  setShowEggMsg(true);

  // 👇 GA tracking added here
  if (window.gtag) {
    gtag('event', 'easter_egg_triggered', {
      event_category: 'interaction',
      event_label: 'Bruhh clicked image',
      value: 1
    });
  }

  setTimeout(() => setShowEggMsg(false), 2500);
};



  return (
   
    <main className="home-page">
      <div className="home-container">
        {/* LEFT CONTENT */}
        <div className="home-text">
          <div className="home-hero">
            <h1>Varunkumar Rajamurugan</h1>
            <h2>Senior QA Automation Engineer</h2>
            <p className="home-tagline">
              Ensuring quality by building scalable automation systems across web &amp; mobile.
            </p>

            <p className="home-subtext">
              I specialise in building and maintaining automation frameworks for real-world products,
              with hands-on experience across trading platforms, insurance systems, and enterprise
              mobility solutions.
            </p>

            <div className="home-buttons">
              <button onClick={() => navigate("/projects")}>View Projects</button>
              <button onClick={() => navigate("/experience")}>Experience</button>
              <button onClick={() => navigate("/resume")}>Download Resume</button>
            </div>
          </div>

          <div className="home-highlights">
            <ul>
              <li>👨‍💻 5+ years in QA – manual & automation</li>
              <li>📱 Web + Mobile + API test automation</li>
              <li>🚀 Built production-ready frameworks with CI/CD</li>
              <li>📊 Focus on stability, coverage, and fast feedback</li>
            </ul>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        {/* RIGHT VISUAL – PROFILE PHOTO */}
      <div className="home-visual">
        <div className="profile-wrapper">
          <img
              src={profileImg}
              alt="Varun Kumar"
              className="profile-photo"
              onClick={triggerEasterEgg}
              onContextMenu={(e) => {
                e.preventDefault();
                triggerEasterEgg();
              }}
              onTouchStart={(e) => triggerEasterEgg()}
            />
          <div className="profile-tag">QA Automation Engineer</div>
        </div>
      </div>

      </div>

      {/* WHAT I DO SECTION */}
      <section className="home-section">
        <h3>What I do</h3>
        <div className="cards-grid">
          <div className="card">
            <h4>Web Automation</h4>
            <p>
              UI automation using Selenium and TestNG for critical business flows, backed by
              reporting and CI integration.
            </p>
          </div>
          <div className="card">
            <h4>Mobile Automation</h4>
            <p>
              Android &amp; iOS app automation using Appium, with support for emulators,
              real devices, and app lifecycle handling.
            </p>
          </div>
          <div className="card">
            <h4>API &amp; Integration Testing</h4>
            <p>
              API validation using tools like Postman and workflow-level checks across backend,
              UI, and third-party integrations.
            </p>
          </div>
        </div>
      </section>

      {/* JOURNEY SNAPSHOT */}
      <section className="home-section">
        <h3>Journey at a glance</h3>
        <div className="journey-timeline">
          <div className="timeline-item">
            <span className="timeline-year">Now</span>
            <p>
              Senior QA Automation Engineer at <strong>Samco Securities</strong>, working on
              mobile automation framework for a live trading app.
            </p>
          </div>
          <div className="timeline-item">
            <span className="timeline-year">2021 – 2023</span>
            <p>
              QA Engineer / Automation Engineer on <strong>Google EMM</strong> based products at
              Novatium &amp; TransNodes, focusing on device policy &amp; admin console testing.
            </p>
          </div>
          <div className="timeline-item">
            <span className="timeline-year">Before QA</span>
            <p>
              Started in non-IT roles, moved into software testing after structured training
              and self-learning in automation.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="home-section">
        <h3>Featured work</h3>
        <div className="cards-grid">
          <div className="card">
            <h4>Samco Trading App – Mobile Automation</h4>
            <p>
              Built a cross-platform Appium framework for Android &amp; iOS with Jenkins integration,
              Allure reports, and Slack notifications for every scheduled execution.
            </p>
            <button className="link-btn" onClick={() => navigate("/projects")}>
              View project details →
            </button>
          </div>
          <div className="card">
            <h4>Google EMM – Device &amp; Policy Testing</h4>
            <p>
              Worked on enterprise mobility testing: policy enforcement, provisioning, kiosk mode,
              and admin console automation for managed Android devices.
            </p>
            <button className="link-btn" onClick={() => navigate("/projects")}>
              View project details →
            </button>
          </div>
        </div>
      </section>

      {/* TECH STRIP */}
      <section className="home-section tech-strip">
        <h3>Tools I work with</h3>
        <div className="tech-tags">
          <span>Java</span>
          <span>Selenium</span>
          <span>Appium</span>
          <span>TestNG</span>
          <span>Maven</span>
          <span>Jenkins</span>
          <span>Allure Reports</span>
          <span>Postman</span>
          <span>Git</span>
          <span>Jira</span>
          <span>ADB</span>
          <span>Slack API</span>
        </div>
      </section>
      {showEggMsg && (
  <div
    className="easter-toast"
    style={{
      top: toastPosition.y - 40 + "px",
      left: toastPosition.x + "px",
    }}
  >
    Bruhhh… don’t poke me bruhh 😒
  </div>
)}
    </main>
  );
}

export default Home;
