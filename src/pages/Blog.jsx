// src/pages/Blog.jsx
import "./Blog.css";
import { useNavigate } from "react-router-dom";
import { useRef, useEffect } from "react";

function Blog() {
  const navigate = useNavigate();
  const tapCount = useRef(0);
  const resetTimer = useRef(null);

  useEffect(() => {
    tapCount.current = 0;
  }, []);

  const handleSecretTrigger = () => {
    tapCount.current++;

    clearTimeout(resetTimer.current);
    resetTimer.current = setTimeout(() => (tapCount.current = 0), 1200);

    if (tapCount.current === 2) {
      tapCount.current = 0;
      activateSecrets();
    }
  };

  const activateSecrets = () => {
    const existingOverlay = document.getElementById("craftOverlay");
    if (existingOverlay) existingOverlay.remove();

    const overlay = document.createElement("div");
    overlay.id = "craftOverlay";
    overlay.className = "craft-overlay";
    overlay.style.opacity = "1";
    overlay.style.transition = "opacity 0.4s ease";
    document.body.appendChild(overlay);

    const loader = document.createElement("p");
    loader.className = "craft-loader";
    overlay.appendChild(loader);

    let iterations = 0;
    const finalText = "🚨 UNAUTHORIZED ACCESS DETECTED";

    // Wait to ensure overlay is rendered
    requestAnimationFrame(() => {
      const scrambleInterval = setInterval(() => {
        loader.innerText = finalText
          .split("")
          .map((char, index) =>
            index < iterations
              ? char
              : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#@*&%$!"[
                  Math.floor(Math.random() * 60)
                ]
          )
          .join("");

        iterations += 0.5;

        if (iterations >= finalText.length) {
          clearInterval(scrambleInterval);

          // Enable craft access
          localStorage.setItem("craftAccess", "true");

          // Analytics tracking
          if (window.gtag) {
            gtag("event", "craft_easter_egg_triggered", {
              event_category: "interaction",
              event_label: "More topics triggered",
              value: 1,
            });
          }

          // Delay before redirection
          setTimeout(() => {
            overlay.style.opacity = "0";

            setTimeout(() => {
              if (overlay.parentNode) overlay.remove();
              navigate("/craft", { replace: true });
            }, 400);
          }, 300);
        }
      }, 50);
    });
  };

  return (
    <main className="blog-page">
      <section className="blog-header">
        <h1>Blog & Insights</h1>
        <p>
          I&apos;ll soon be publishing articles about automation, framework design,
          and transitioning into IT.
        </p>
      </section>

      <section className="blog-topics">
        <div className="blog-card">
          <h3>🚀 Building a Production-Ready Automation Framework</h3>
          <p>Lessons from developing the Appium framework at Samco</p>
        </div>

        <div className="blog-card">
          <h3>🔁 From Non-IT to Senior QA Automation Engineer</h3>
          <p>My journey from non-IT to automation</p>
        </div>

        <div className="blog-card">
          <h3>🧠 Writing Tests That Actually Matter</h3>
          <p>Clarity over script count</p>
        </div>

        {/* 🚨 Secret Trigger */}
        <div
          className="blog-card next"
          onClick={handleSecretTrigger}
          style={{ cursor: "pointer", userSelect: "none" }}
        >
          <p>More topics coming soon...</p>
        </div>
      </section>
    </main>
  );
}

export default Blog;
