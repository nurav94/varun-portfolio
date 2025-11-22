// src/pages/Contact.jsx
import "./Contact.css";

function Contact() {
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <h1>Contact</h1>
        <p>
          If you&apos;d like to discuss a role, a project, or anything related to
          QA and automation, feel free to reach out.
        </p>
      </section>

      <section className="contact-grid">
        <div className="contact-card">
          <h2>Email</h2>
          <p>Best way to reach me for opportunities or questions.</p>
          <a
            href="mailto:rajamuruganvarunkumar@gmail.com"
            className="contact-link"
          >
            rajamuruganvarunkumar@gmail.com
          </a>
        </div>

        <div className="contact-card">
          <h2>LinkedIn</h2>
          <p>Connect with me professionally and view my detailed experience.</p>
          <a
            href="https://in.linkedin.com/in/varunkumar-rajamurugan-aa5273203?trk=people-guest_people_search-card"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            View LinkedIn Profile
          </a>
        </div>

      <div className="contact-card">
  <h2>Phone</h2>
  <p>You can reach me directly for roles, interviews and discussions.</p>
  <a href="tel:+918939075708" className="contact-link">
    +91 8939075708
  </a>
</div>

      </section>
    </main>
  );
}

export default Contact;
