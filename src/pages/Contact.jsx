import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-card">
        <h1>Contact Us</h1>
        <p>
          If you have any questions, suggestions, or business inquiries, feel
          free to reach out to us. We're here to help!
        </p>
        <a
          href="mailto:contactgrabshort@gmail.com"
          className="contact-email"
        >
          📧 contactgrabshort@gmail.com
        </a>
      </div>
    </div>
  );
};

export default Contact;
