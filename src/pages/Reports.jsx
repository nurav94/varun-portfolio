// src/pages/Reports.jsx
import "./Reports.css";

function Reports() {
  return (
    <main className="reports-page">
      <section className="reports-hero">
        <h1>Reports &amp; Dashboards</h1>
        <p>
          A quick look at how I visualise test execution results using Allure reports,
          Jenkins, and Slack notifications for faster feedback and better release decisions.
        </p>
      </section>

      <section className="reports-grid">
        <article className="report-card">
          <h2>Allure Report – Samco Mobile Suite</h2>
          <p>
            Allure report generated from the Appium-based mobile regression suite for the
            Samco Trading App. Includes environment info, flaky test visibility and trend
            across multiple runs.
          </p>
          {/* Update href later when you put a sample HTML or screenshot in public/ */}
          <a href="#" className="report-link" target="_blank" rel="noreferrer">
            View sample (coming soon)
          </a>
        </article>

        <article className="report-card">
          <h2>Allure Report – Web / EMM Admin Console</h2>
          <p>
            Web automation reports for admin console and policy workflows. Used to track
            stability of critical device and policy management scenarios.
          </p>
          <a href="#" className="report-link" target="_blank" rel="noreferrer">
            View sample (coming soon)
          </a>
        </article>

        <article className="report-card">
          <h2>Slack Execution Summary</h2>
          <p>
            Automation run summaries pushed to a dedicated Slack channel after Jenkins
            completes a build – includes status, counts, and Allure link.
          </p>
          <a href="#" className="report-link" target="_blank" rel="noreferrer">
            Slack screenshot (coming soon)
          </a>
        </article>

        <article className="report-card">
          <h2>Jenkins Job Overview</h2>
          <p>
            Nightly / scheduled automation jobs configured in Jenkins for web and mobile
            suites, with history of pass/fail trends.
          </p>
          <a href="#" className="report-link" target="_blank" rel="noreferrer">
            Jenkins view (coming soon)
          </a>
        </article>
      </section>
    </main>
  );
}

export default Reports;
