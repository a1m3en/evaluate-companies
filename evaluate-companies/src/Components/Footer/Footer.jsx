import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
  <footer className="site-footer" data-aos="fade-up">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">arc</div>

          <div className="footer-columns">
            <div className="footer-col">
              <h4>For Companies</h4>
              <ul>
                <li>Business Account</li>
                <li>Treasury Account</li>
                <li>Control Account (DACA)</li>
                <li>Debt Raise</li>
                <li>CFO Agent</li>
              </ul>
              <h4 className="mt-large">For Lenders</h4>
              <ul>
                <li>Capital Markets</li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                <li>Blog</li>
                <li>About</li>
                <li>Careers</li>
                <li>Newsroom</li>
                <li>Partner benefits</li>
                <li>Contact us</li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Resources</h4>
              <ul>
                <li>Case studies</li>
                <li>Startup encyclopedia</li>
                <li>Funding calculator</li>
                <li>Learning center</li>
                <li>Guides</li>
                <li>Pricing for companies</li>
                <li>Treasury investment options</li>
              </ul>
            </div>

            <div className="footer-col newsletter">
              <h4>Sign up for Newsletter</h4>
              <input className="newsletter-input" placeholder="Your email" aria-label="email" />
              <button className="newsletter-btn">Join Newsletter</button>
            </div>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <div className="copyright">© 2025 Arc Technologies Inc. All rights reserved.</div>
          <div className="footer-links">General Disclosures • Terms of Use • Privacy Policy • Referral Agreement • Cookies</div>
          <div className="footer-social">🐦 🔗 📷</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
