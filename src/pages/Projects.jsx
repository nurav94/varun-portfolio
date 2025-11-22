// src/pages/Projects.jsx
import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "Mobile Automation Framework – Samco Trading App",
      company: "Samco Securities",
      period: "Dec 2024 – Present",
      domain: "Trading & Investment – Mobile (Android & iOS)",
      summary:
        "Designed and developed a cross-platform mobile automation framework for the Samco Trading App (Play Store & App Store), supporting Android and iOS execution with CI/CD and reporting integrations.",
      tech: [
        "Java",
        "Appium",
        "Selenium",
        "TestNG",
        "Maven",
        "Jenkins",
        "Allure Reports",
        "Slack API",
        "Git",
        "Android Emulator",
        "iOS Simulator",
        "ADB"
      ],
      highlights: [
        "Built a reusable mobile automation framework using Appium + TestNG, designed for both Android and iOS app versions.",
        "Implemented custom test lifecycle management (suite/method level) to handle driver setup, screen recording, log capture, and teardown cleanly.",
        "Used ThreadLocal driver management to keep executions isolated and stable across different runs.",
        "Created adaptive locators and helper methods that handle platform differences and dynamic elements driven by live market data.",
        "Integrated ADB-based log monitoring, device unlock flows, deep linking, and app state handling for more realistic test coverage.",
        "Added visual verification using image similarity matching to validate real-time market streaming behaviour.",
        "Configured Jenkins jobs to run the suite on a schedule, publishing Allure reports and sharing execution summaries and report links to Slack automatically."
      ],
      impact: [
        "Reduced manual effort for high-risk mobile trading workflows.",
        "Improved confidence in releases by running scheduled automation before deployments.",
        "Provided better visibility to the team through structured reports and Slack notifications."
      ]
    },
    {
  title: "Google EMM Automation & Policy Validation",
  company: "Novatium Solutions & TransNodes",
  period: "Feb 2021 – Nov 2023",
  domain: "Android Enterprise Mobility Management",
  summary:
    "Worked on testing and automating key workflows of Google's Enterprise Mobility Management (EMM) platform. Covered device policy enforcement, provisioning, and admin console control for Android corporate devices.",
  tech: [
    "Java",
    "Selenium",
    "Postman",
    "Jira",
    "ADB",
    "Manual Testing"
  ],
  highlights: [
    "Automated web-based admin console flows using Selenium (Java).",
    "Validated policy workflows on real Android devices manually, including provisioning, kiosk mode restrictions, remote wipe, and compliance enforcement.",
    "Used ADB commands and device policy controls to simulate real device management conditions.",
    "Performed API workflow validation using Postman collections.",
    "Proactively identified application crash risk during Android 11 rollout and temporarily blocked OS updates using EMM policy rules until the fix was available.",
    "After stabilization, re-enabled update delivery via controlled release."
  ],
  impact: [
    "Prevented widespread device crash during OS update.",
    "Improved stability of device management workflows before rollout releases.",
    "Received 100% salary hike for contributions to platform stability."
  ]
}
  ];

  return (
    <main className="projects-page">
      <section className="projects-hero">
        <h1>Projects & Case Studies</h1>
        <p>
          A closer look at some of the automation work I&apos;ve done, with focus on
          framework design, stability, and real-world impact on releases.
        </p>
      </section>

      <section className="projects-list">
        {projects.map((project, index) => (
          <article key={index} className="project-card">
            <header className="project-header">
              <div>
                <h2>{project.title}</h2>
                <p className="project-company">
                  {project.company}{" "}
                  {project.period && <span>· {project.period}</span>}
                </p>
              </div>
              {project.domain && (
                <p className="project-domain">{project.domain}</p>
              )}
            </header>

            <p className="project-summary">{project.summary}</p>

            <div className="project-section">
              <h3>Key Highlights</h3>
              <ul>
                {project.highlights.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="project-section">
              <h3>Impact</h3>
              <ul>
                {project.impact.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="project-tech">
              {project.tech.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Projects;
