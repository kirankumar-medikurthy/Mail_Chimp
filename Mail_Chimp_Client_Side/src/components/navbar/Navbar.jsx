import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button2, Button1 } from "../Buttons/Buttons";
import { Arrow, Logo, Search } from "../Icons/Icons";
import "./Navbar.css";

const Navbar = () => {
  const [dropdown, setDropDown] = useState(false);
  const [sideBar, setSideBar] = useState(false);

  return (
    <div className="navbar-mk">
      <div className="nav-items-mk">
        <div className="nav-features-mk">
          <p
            onClick={() => {
              setDropDown(!dropdown);
              setSideBar(false);
            }}
          >
            Products
          </p>
          <p>Resources</p>
          <p>Inspiration</p>
          <p>Pricing</p>
        </div>
        <div className="nav-logo-mk">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className="nav-creds-mk">
          <Search />
          <Button2 text="Login" />
          <Button1 text="Sign Up" />
        </div>
      </div>
      {dropdown && (
        <div className="prod-drop-down-mk">
          <div className="prod-list-mk">
            <div className="prod-list-pane-1-mk">
              <div className="prod-list-heading-mk">
                <p>WE’LL HELP YOU </p>
                <div className="prod-list-items-mk">
                  <p>Get Your Business Online</p>
                  <Arrow />
                </div>
                <div className="prod-list-items-mk">
                  <p>Market your Business</p>
                  <Arrow />
                </div>
              </div>
              <div className="prod-list-heading-mk">
                <p>PLATFORM FEATURES</p>
                <div className="prod-list-items-mk">
                  <p
                    onClick={() => {
                      setSideBar(!sideBar);
                    }}
                  >
                    Audience Management
                  </p>
                  <Arrow />
                </div>
                <div className="prod-list-items-mk">
                  <p>Creative Tools</p>
                  <Arrow />
                </div>
                <div className="prod-list-items-mk">
                  <p>Market Automation</p>
                  <Arrow />
                </div>
                <div className="prod-list-items-mk">
                  <p>Insights & Analytics</p>
                  <Arrow />
                </div>
              </div>
              <div className="prod-list-heading-mk">
                <p>NOT SURE WHERE TO START?-</p>
                <div className="prod-list-items-mk">
                  <p>What's Right for Me?</p>
                  <Arrow />
                </div>
              </div>
              <div className="prod-list-heading-mk">
                <p>Product Updates</p>
                <p>
                  Get the latest on new features, product improvements, and
                  other announcements.
                </p>
              </div>
            </div>
          </div>
          {sideBar && (
            <div className="prod-list-mk">
              <div className="prod-list-pane-1-mk">
                <div className="prod-list-heading-mk">
                  <p>WE’LL HELP YOU </p>
                  <div className="prod-list-items-mk audience-side-bar-mk">
                    <Link to="/features/crm">
                      <p style={{ textDecoration: "none" }}>Marketing CRM</p>
                    </Link>
                    <p>
                      Get to know your audience and find new ways to market to
                      them.
                    </p>
                  </div>
                  <div className="prod-list-items-mk audience-side-bar-mk">
                    <p>Signup Forms</p>
                    <p>Grow your audience with a pop-up or embeded form.</p>
                  </div>
                  <div className="prod-list-items-mk audience-side-bar-mk">
                    <p>Segmentation</p>
                    <p>Segmentation your audience based on shared traits.</p>
                  </div>
                  <div className="prod-list-items-mk audience-side-bar-mk">
                    <p>Behavioral Targeting</p>
                    <p>
                      Target your messages based on people’s purchase behaviour,
                      app activity, and more.
                    </p>
                  </div>
                  <div className="prod-list-items-mk audience-side-bar-mk">
                    <p>Predicted Demographics</p>
                    <p>
                      Get predictive insights about your contatcs so you can
                      personalize your marketing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
