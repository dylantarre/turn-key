import React from 'react';
import { LegalPage } from '../components/LegalPage';

export function PrivacyPolicy() {
  return (
    <LegalPage
      title="Privacy Policy"
      lastUpdated="March 15, 2025"
    >
      <h2>1. Information We Collect</h2>
      <p>
        We collect information that you provide directly to us, including:
      </p>
      <ul>
        <li>Contact information (name, email address, phone number)</li>
        <li>Business information related to purchases</li>
        <li>Communication preferences</li>
        <li>Transaction history</li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <p>
        We use the information we collect to:
      </p>
      <ul>
        <li>Process your transactions</li>
        <li>Send you important updates about your purchase</li>
        <li>Provide customer support</li>
        <li>Send marketing communications (with your consent)</li>
        <li>Improve our services</li>
        <li>Comply with legal obligations</li>
      </ul>

      <h2>3. Information Sharing</h2>
      <p>
        We do not sell, trade, or rent your personal information to third parties. We may share your information with:
      </p>
      <ul>
        <li>Service providers who assist in our operations</li>
        <li>Professional advisers</li>
        <li>Law enforcement when required by law</li>
      </ul>

      <h2>4. Data Security</h2>
      <p>
        We implement appropriate technical and organizational measures to maintain the security of your personal information, including encryption and secure server infrastructure.
      </p>

      <h2>5. Your Rights</h2>
      <p>
        You have the right to:
      </p>
      <ul>
        <li>Access your personal information</li>
        <li>Correct inaccurate information</li>
        <li>Request deletion of your information</li>
        <li>Object to processing of your information</li>
        <li>Withdraw consent</li>
      </ul>

      <h2>6. Cookies</h2>
      <p>
        We use cookies and similar tracking technologies to track activity on our platform and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
      </p>

      <h2>7. Changes to This Policy</h2>
      <p>
        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "last updated" date.
      </p>

      <h2>8. Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us at privacy@digitalopportunities.com
      </p>
    </LegalPage>
  );
}