// src/pages/Frameworks.jsx
import "./Frameworks.css";

function Frameworks() {
  return (
    <main className="frameworks-page">
      {/* Intro */}
      <section className="fw-section">
        <h1>Frameworks & Architecture</h1>
        <p>
          A high-level view of how I structure automation frameworks. Below is
          the architecture of the mobile automation framework I built for the
          Samco Trading App.
        </p>
      </section>

      {/* Samco Framework Overview */}
      <section className="fw-section">
        <h2>Samco Mobile Automation Framework</h2>
        <p>
          Cross-platform Appium framework for Android and iOS, designed to run
          on local emulators/simulators, integrated with Jenkins, Allure, and
          Slack for continuous feedback.
        </p>

        <div className="fw-diagram">
          <div className="fw-layer">
            <h3>Test Layer</h3>
            <p>
              TestNG test classes defining test flows for trading scenarios such
              as login, order placement, funds, and watchlists.
            </p>
          </div>
          <div className="fw-layer">
            <h3>Business & Helper Layer</h3>
            <p>
              Reusable methods to perform flows like app launch, navigation,
              search, placing orders, handling market timings, and validations.
            </p>
          </div>
          <div className="fw-layer">
            <h3>Base & Driver Layer</h3>
            <p>
              ThreadLocal driver management, platform-specific setup for Android
              and iOS, Appium server interaction, screen recording, log
              capture, and teardown logic.
            </p>
          </div>
          <div className="fw-layer">
            <h3>Utility Layer</h3>
            <p>
              Custom waits, dynamic locators, configuration handling, ADB
              helpers, deep link handling, image comparison helpers, and
              validation utilities.
            </p>
          </div>
          <div className="fw-layer">
            <h3>Integration Layer</h3>
            <p>
              Allure report generation, Slack notifications, Jenkins job
              integration, and test artefact (logs, screenshots, videos)
              publishing.
            </p>
          </div>
        </div>
      </section>

      {/* Key Design Choices */}
      <section className="fw-section">
        <h2>Key Design Choices</h2>
        <ul className="fw-list">
          <li>
            <strong>Cross-platform support:</strong> Same framework supports
            Android and iOS, with platform-specific capabilities and element
            handling abstracted behind helpers.
          </li>
           <li>
            <strong>Parallel execution:</strong> The framework works
            on multiple emulators executing different tests using TestNG 
            to reduce the execution time.
          </li>
          <li>
            <strong>Thread-safe drivers:</strong> Uses ThreadLocal to keep
            Appium driver instances isolated per thread/run.
          </li>
          <li>
            <strong>Dynamic element handling:</strong> Locators and flows
            account for live market values and UI changes instead of hardcoded
            static text.
          </li>
          <li>
            <strong>Execution lifecycle control:</strong> Suite and method level
            hooks manage start/stop of recording, logs, drivers and navigation.
          </li>
          <li>
            <strong>Visibility & feedback:</strong> All test artefacts are
            collected and pushed through Allure + Slack for easy review after
            runs.
          </li>
        </ul>
      </section>

      {/* Future Enhancements */}
      <section className="fw-section">
        <h2>Planned Improvements</h2>
        <ul className="fw-list">
          <li>Refining module-wise utilities for easier reuse.</li>
          <li>Exploring migration of some flows to Playwright for web parts.</li>
        </ul>
      </section>
    </main>
  );
}

export default Frameworks;
