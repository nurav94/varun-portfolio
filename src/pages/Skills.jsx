// src/pages/Skills.jsx
import "./Skills.css";

function Skills() {
  const skillGroups = [
    {
      title: "Automation & Testing",
      items: [
        "Selenium WebDriver (Java)",
        "Appium (Android & iOS)",
        "API Testing (Postman, RestAssured)",
        "Functional, Regression & Smoke Testing",
        "Mobile App Testing (Real devices & Emulators)",
        "Test case design & execution"
      ]
    },
    {
      title: "Frameworks & Libraries",
      items: [
        "TestNG",
        "Hybrid Automation Frameworks",
        "Page Object Model (POM)",
        "Allure Reports",
        "Extent Reports",
        "Custom utilities (waits, logging, config, helpers)"
      ]
    },
    {
      title: "CI/CD & DevOps",
      items: [
        "Jenkins (job configuration, scheduling)",
        "Maven",
        "Git & GitHub",
        "Slack notifications for automation",
        "Basic pipeline-level integration for tests"
      ]
    },
    {
      title: "Tools & Platforms",
      items: [
        "Android Emulator & iOS Simulator",
        "ADB (Android Debug Bridge)",
        "Jira / Bug tracking",
        "Chrome DevTools (basic debugging)",
        "VS Code / IntelliJ IDEA"
      ]
    },
    {
      title: "Databases & APIs",
      items: [
        "SQL basics for validation",
        "API request/response validation",
        "RESTful services testing",
        "JSON/XML payload understanding"
      ]
    },
   {
  title: "Currently Exploring",
  items: ["Playwright (Java)"]
},
{
  title: "Future Focus",
  items: ["Advanced API Automation Patterns","Performance Testing","Database Testing"]
},
{
  title: "Framework Scaling",
  items: ["Better modularisation & architecture"]
}
  ];

  return (
    <main className="skills-page">
      <section className="skills-hero">
        <h1>Skills & Tools</h1>
        <p>
          A quick overview of the technologies and areas I work with as a
          Senior QA Automation Engineer, across web, mobile, and API testing.
        </p>
      </section>

      <section className="skills-grid">
        {skillGroups.map((group, index) => (
          <article key={index} className="skill-group">
            <h2>{group.title}</h2>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Skills;
