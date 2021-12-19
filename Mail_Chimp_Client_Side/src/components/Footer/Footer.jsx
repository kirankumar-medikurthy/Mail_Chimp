import React from "react";
import { Logo, Pinterest, Youtube, Facebook, Twitter } from "../Icons/Icons";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-mk">
      <div className="related-links-mk">
        <p>Related Links</p>
        <p>Audience Analytics Dashboard</p>
        <p>Customer Realtionship Management (CRM)</p>
        <p>HubSpot vs MailChimp</p>
      </div>
      <div className="footer-item-mk">
        <div className="footer-item-list-mk">
          <h4>Product</h4>
          <p>Why Mailchimp?</p>
          <p>Product Updates</p>
          <p>Email marketing</p>
          <p>Website</p>
          <p>Transactional Email</p>
          <p>How we Compare</p>
          <p>GDPR Compliance</p>
          <p>Security</p>
          <p>Status</p>
          <p>Mobile App</p>
        </div>
        <div className="footer-item-list-mk">
          <h4>Resources</h4>
          <p>Why Mailchimp?</p>
          <p>Product Updates</p>
          <p>Email marketing</p>
          <p>Website</p>
          <p>Transactional Email</p>
          <p>How we Compare</p>
          <p>GDPR Compliance</p>
          <p>Security</p>
          <p>Status</p>
          <p>Mobile App</p>
        </div>
        <div className="footer-item-list-mk">
          <h4>Community</h4>
          <p>Agenices & Freelancers</p>
          <p>Developers</p>
          <p>Events</p>
        </div>
        <div className="footer-item-list-mk">
          <h4>Comapny</h4>
          <p>Our Story</p>
          <p>Newsroom</p>
          <p>Annual Report</p>
          <p>Careers</p>
        </div>
        <div className="footer-item-list-mk">
          <h4>Help</h4>
          <p>Contact Us</p>
          <p>Hire an Expert</p>
        </div>
        <div className="footer-item-list-mk">
          <div className="f-item-1-mk">
            <div className="footer-img-mk">
              <Logo />
            </div>
            <p>
              Films, podcats, and original series that celebrate the
              entrepreneurial spirit.
            </p>
            <p>Check it out</p>
          </div>
          <div className="f-item-1-mk">
            <img
              src="https://eep.io/images/yzco4xsimv0y/5itQmdXHB6vMuAcvyWp5MR/ef5cd2cecd4c92b7029a22ec67585c65/Courier.svg?w=260&fm=webp&q=80"
              alt=""
            />
            <p>
              Expert insights, industry trends, and inspiring stories that help
              you live and work on your own terms.
            </p>
            <p>Learn more</p>
          </div>
        </div>
      </div>
      <div className="footer-social-mk">
        <div className="footer-social-link-mk">
          <img
            src="https://eep.io/images/yzco4xsimv0y/1u3hha7FE0Q402e2qsMu6a/5e403548149c1618b64034284f692ff1/icon-ios.svg?w=320&fm=webp&q=80"
            alt=""
          />
          <img
            src="https://eep.io/images/yzco4xsimv0y/64EpnI4RsQI66c2y2O60G2/4c34d7bc4dd7a4362c7e19a06c109e21/icon-android.svg?w=320&fm=webp&q=80"
            alt=""
          />
        </div>
        <div className="footer-social-list-mk">
          <Facebook />
          <Youtube />
          <Pinterest />
          <Twitter />
        </div>
      </div>
    </div>
  );
};

export default Footer;
