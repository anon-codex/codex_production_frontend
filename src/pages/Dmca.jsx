import React from 'react';
import './dmca.css';

const Dmca = () => {
  return (
    <div className="dmca-container">
      <h1 className="dmca-title">DMCA Policy</h1>

      <p>
        We respect the intellectual property rights of others. If you believe that any content available on or through our website infringes upon your copyright, you may submit a notification pursuant to the Digital Millennium Copyright Act (DMCA).
      </p>

      <h2 className="dmca-subtitle">How to File a DMCA Complaint</h2>
      <p>
        To file a DMCA takedown request, please contact us through the <strong>Contact Page</strong> on this website with the following information:
      </p>

      <ul>
        <li>Your full name, address, and contact information.</li>
        <li>The URL(s) of the infringing material you want removed.</li>
        <li>A detailed description of the copyrighted work you claim has been infringed.</li>
        <li>A statement that you have a good faith belief the use is not authorized by the copyright owner.</li>
        <li>A statement, under penalty of perjury, that the information you provide is accurate and that you are authorized to act on behalf of the copyright owner.</li>
        <li>Your physical or electronic signature.</li>
      </ul>

      <p>
        Upon receiving a valid DMCA request, we will act expeditiously to remove or disable access to the allegedly infringing content as required by law and notify the user responsible.
      </p>

      <h2 className="dmca-subtitle">Counter-Notice</h2>
      <p>
        If you believe that your content was removed in error, you may file a counter-notice by contacting us via the <strong>Contact Page</strong> and providing similar information as above.
      </p>

      <p className="dmca-updated">Last updated: July 29, 2025</p>
    </div>
  );
};

export default Dmca;
