// src/pages/Frameworks.jsx
import "./Frameworks.css";

function Frameworks() {
  return (
    <main className="frameworks-page">
      {/* Intro */}
      <section className="fw-section">
        <h1>Frameworks & Architecture</h1>
        <p>
          A high-level overview of how I design automation frameworks,
          particularly for complex enterprise applications. Below is the
          architecture of a mobile trading application framework I built,
          supporting both Android and iOS.
        </p>
      </section>

      {/* Framework Overview */}
      <section className="fw-section">
        <h2>Mobile Automation Framework (Trading App)</h2>
        <p>
          Cross-platform Appium-based framework for Android and iOS, designed to
          run on local emulators/simulators. Integrated with Jenkins, Allure, and
          Slack for CI execution and reporting.
        </p>

        <div className="fw-diagram">
          <div className="fw-layer">
            <h3>Test Layer</h3>
            <p>
              TestNG test classes defining functional flows such as login,
              trade placement, funds transfer, and watchlist validations.
            </p>
          </div>

          <div className="fw-layer">
            <h3>Business & Helper Layer</h3>
            <p>
              Reusable methods for app launch, navigation, data interaction,
              order placement, market condition handling, and UI validations.
            </p>
          </div>

          <div className="fw-layer">
            <h3>Base & Driver Layer</h3>
            <p>
              ThreadLocal driver management, platform-specific capabilities,
              Appium server configuration, video logging, log capture, and cleanup.
            </p>
          </div>

          <div className="fw-layer">
            <h3>Utility Layer</h3>
            <p>
              Custom waits, dynamic locator strategies, configuration loader,
              ADB integration, deep linking, visual comparison utilities, and
              validation helpers.
            </p>
          </div>

          <div className="fw-layer">
            <h3>Integration Layer</h3>
            <p>
              Allure report generation, Slack-based notifications,
              Jenkins pipeline execution, and publishing of artefacts (logs,
              videos, screenshots).
            </p>
          </div>
        </div>
      </section>

      {/* Key Design Choices */}
      <section className="fw-section">
        <h2>Key Design Choices</h2>
        <ul className="fw-list">
          <li>
            <strong>Multi-platform support:</strong> One framework handles both
            Android and iOS using abstracted helpers and capability models.
          </li>
          <li>
            <strong>Parallel execution:</strong> Built to run tests simultaneously
            on multiple virtual devices using TestNG, reducing execution time.
          </li>
          <li>
            <strong>Thread-safe drivers:</strong> Driver lifecycle is handled using
            ThreadLocal to avoid interference during parallel executions.
          </li>
          <li>
            <strong>Dynamic UI handling:</strong> Locator strategies consider live
            market data and runtime changes instead of relying on static text.
          </li>
          <li>
            <strong>Lifecycle management:</strong> Framework manages app launch,
            teardown, logging, and navigation via suite and method level hooks.
          </li>
          <li>
            <strong>Reporting & feedback:</strong> All execution artefacts are sent
            through Allure and Slack for immediate visibility.
          </li>
        </ul>
      </section>

      {/* Future Enhancements */}
      <section className="fw-section">
        <h2>Planned Enhancements</h2>
        <ul className="fw-list">
          <li>Module-level abstraction for improved reusability.</li>
          <li>Evaluating Playwright integration for web-based flows.</li>
        </ul>
      </section>
    </main>
  );
}

export default Frameworks;
