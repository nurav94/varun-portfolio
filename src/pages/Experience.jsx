// src/pages/Experience.jsx
import "./Experience.css";

function Experience() {
  const experiences = [
    {
      company: "Samco Securities",
      role: "Senior QA Automation Engineer",
      period: "Dec 2024 – Present",
      domain: "Trading & Investment Platform (Mobile)",
      responsibilities: [
        "Design and implement automation for the Samco Trading App using Appium (Java).",
        "Build a scalable mobile automation framework focusing on login, order placement, portfolio validation, and funds flow.",
        "Installed and configured Jenkins locally, created Maven automation jobs, and scheduled regular execution.",
        "Integrated Slack API with Allure reports to send automated execution summaries.",
        "Worked closely with developers and backend teams to validate high-risk trading workflows."
      ],
      tech: ["Java", "Appium", "Selenium", "TestNG", "Allure", "Slack API", "Jenkins", "Jira"]
    },
    {
      company: "CanVendor (Client: Chola MS)",
      role: "QA Automation Engineer",
      period: "Feb 2024 – Nov 2024",
      domain: "Insurance – Health, Motor, Marine & Commercial Claims",
      responsibilities: [
        "Performed web, mobile, and API testing of insurance claim systems.",
        "Executed both manual and automation scenarios for multiple insurance verticals.",
        "Designed API validation tests using RestAssured.",
        "Automated major flows using Selenium (Java + TestNG) and integrated via Jenkins.",
        "Generated detailed execution reports using Allure reports."
      ],
      tech: ["Java", "Selenium", "RestAssured", "TestNG", "Allure", "Jenkins", "Git"]
    },
    {
      company: "TransNodes Pvt Ltd",
      role: "QA Automation Engineer",
      period: "May 2022 – Nov 2023",
      domain: "Google Enterprise Mobility Management (EMM)",
      responsibilities: [
        "Performed both manual and automation testing across mobile and admin web portal.",
        "Validated device provisioning, kiosk mode, policy enforcement, and remote actions such as device lock and wipe.",
        "Conducted API & backend testing using Postman and RestAssured.",
        "Automated admin web workflows using Selenium (Java) and tested real device flows via ADB commands.",
        "Contributed to stabilizing policy upgrade testing cycles."
      ],
      tech: ["Java", "Selenium", "Appium", "RestAssured", "Postman", "Allure", "ADB", "Jira"]
    },
    {
      company: "Novatium Solutions Pvt Ltd",
      role: "QA Engineer",
      period: "Feb 2021 – May 2022",
      domain: "Google Enterprise Mobility Management (EMM)",
      responsibilities: [
        "Performed manual testing of enterprise device management features.",
        "Validated device enrollment, policy restrictions, and compliance enforcement on Android devices.",
        "Supported functional test design and automation planning."
      ],
      tech: ["Manual Testing", "ADB Commands", "Jira", "Basic Java & Selenium"]
    },
    {
      company: "Orchestrate HR (Leap Associate)",
      role: "Software Testing Trainee",
      period: "Sep 2016 – Mar 2018",
      responsibilities: [
        "Completed structured training in Manual Testing and basic Selenium (Java).",
        "Learned test case design, defect tracking, and QA principles.",
        "Actively transitioned toward an IT career path."
      ],
      tech: ["Manual Testing", "Basic Selenium", "Test Case Design"]
    },
    {
      company: "Hapag Lloyd",
      role: "Customer Service Coordinator",
      period: "Jan 2015 – Mar 2016",
      responsibilities: [
        "Handled client communication regarding logistics operations and documentation.",
        "Developed strong customer handling and problem-solving skills under time constraints.",
        "Improved communication effectiveness leading to smoother resolution cycles."
      ],
      tech: ["Client Management", "Issue Resolution", "Business Communication"]
    }
  ];

  return (
    <main className="experience-page">
      <section className="experience-hero">
        <h1>Experience</h1>
        <p>
          My professional journey from non-IT to Senior QA Automation Engineer. I’ve worked across trading, insurance and mobility technology domains, growing through both manual and automation roles.
        </p>
      </section>

      <section className="experience-timeline">
        {experiences.map((exp, index) => (
          <article key={index} className="experience-card">
            <div className="experience-header">
              <div>
                <h2>{exp.role}</h2>
                <h3>{exp.company}</h3>
              </div>
              <div className="experience-meta">
                <span>{exp.period}</span>
              </div>
            </div>

            {exp.domain && <p className="experience-domain">{exp.domain}</p>}

            <div className="experience-section">
              <h4>Responsibilities</h4>
              <ul>
                {exp.responsibilities.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="experience-tech">
              {exp.tech.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Experience;
