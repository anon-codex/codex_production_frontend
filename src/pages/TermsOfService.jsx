import React from "react";
import "./terms.css";

const TermsOfService = () => {
  return (
    <div className="terms-container">
      <h1 className="terms-title">Terms of Service</h1>

      <p>
        Welcome to <strong>GrabShort</strong>. By accessing and using our website, you agree to comply with the following terms and conditions.
      </p>

      <h2 className="terms-subtitle">1. Acceptance of Terms</h2>
      <p>
        By using this website, you confirm that you understand and agree to be bound by these Terms of Service and our Privacy Policy.
      </p>

      <h2 className="terms-subtitle">2. User Responsibilities</h2>
      <ul>
        <li>You must be at least 13 years old to use this service.</li>
        <li>You agree not to use the website for illegal purposes.</li>
        <li>You agree not to abuse or misuse the site to download copyrighted or private content without permission.</li>
      </ul>

      <h2 className="terms-subtitle">3. Intellectual Property</h2>
      <p>
        We do not host any copyrighted material. All video and media content is fetched from third-party publicly accessible platforms.
      </p>

      <h2 className="terms-subtitle">4. Limitation of Liability</h2>
      <p>
        We are not responsible for any damages that may occur from the use or misuse of this website.
      </p>

      <h2 className="terms-subtitle">5. Changes to Terms</h2>
      <p>
        We may update these Terms of Service at any time without prior notice. Continued use of the site means you accept the new terms.
      </p>

      <h2 className="terms-subtitle">6. Contact</h2>
      <p>
        For any queries regarding these terms, please contact us at <strong>contactgrabshort@gmail.com</strong>.
      </p>

      <p className="terms-updated">Last updated: August 2, 2025</p>
    </div>
  );
};

export default TermsOfService;
