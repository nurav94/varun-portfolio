// src/pages/Blog.jsx
import "./Blog.css";

function Blog() {
  return (
    <main className="blog-page">
      <section className="blog-header">
        <h1>Blog & Insights</h1>
        <p>
          I&apos;ll soon be publishing articles on QA automation, framework design, and my experiences transitioning into IT.
          Here are some of the topics I&apos;m planning to share:
        </p>
      </section>

      <section className="blog-topics">
        <div className="blog-card">
          <h3>🚀 Building a Production-Ready Automation Framework</h3>
          <p>
            Key lessons from developing the Appium framework at Samco, including Jenkins integration and reporting via Slack.
          </p>
        </div>

        <div className="blog-card">
          <h3>🔁 From Non-IT to Senior QA Automation Engineer</h3>
          <p>
            My journey moving from a non-IT background into QA automation, challenges faced, and strategies that helped.
          </p>
        </div>

        <div className="blog-card">
          <h3>🧠 Writing Tests That Actually Matter</h3>
          <p>
            Why automation is not about number of scripts but about scalable architecture, business flow coverage, and clarity.
          </p>
        </div>

        <div className="blog-card next">
          <p>More topics coming soon...</p>
        </div>
      </section>
    </main>
  );
}

export default Blog;
