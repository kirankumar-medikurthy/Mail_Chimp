import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./singup.css";
export const Signup5 = () => {
  return (
    <div id="singup4layout">
      <div className="horizantalline"></div>
      <div className="middleboxes">
        <div className="accountsetup">Account Set Up</div>
        <div className="planprofileicons">
          <div className="plan">
            Plan <span className="greaterthan">{">"}</span>{" "}
          </div>
          <div className="profile">
            Profile <span className="greaterthan">{">"}</span>
          </div>
          <div className="Address">
            Address <span className="greaterthan">{">"}</span>
          </div>
          <div className="contact">
            Contacts <span className="greaterthan">{">"}</span>
          </div>
          <div className="customize">
            Customize <span className="greaterthan">{">"}</span>
          </div>
          <div className="finish">Finish</div>
        </div>
        <div>
          <div className="tellusaboutcontact">Tell us about your contacts</div>
          <div className="includepeoples">
            This can include people who signed up to receive marketing emails
            from your organization, or those who solely receive transactional
            emails. Learn more about{" "}
            <span className="contacttypecolor">Mailchimp contact types</span>.
          </div>
          <div className="contracthaveany">Do you have any contracts?</div>
          <div>
            <div className="contractyes">
              <input type="radio" />
              <label>Yes</label>
            </div>
            <div className="contractno">
              <input type="radio" />
              <label>No</label>
            </div>
            <div className="contractsure">
              <input type="radio" />
              <label>I’m not sure...</label>
            </div>
          </div>
          <Link to="/signup/customize">
            <button className="continuebtnsignup5">Continue</button>
          </Link>
        </div>
        <div className="rightsreserved">
          2001-2021 All Rights Reserved. Mailchimp is a registered trademark of
          The Rocket Science Group, LLC. Cookie Preferences, Privacy, and Terms.
        </div>
      </div>
      <div className="flowerlayoutsignup4">
        <img
          className="flowerimagelayoutsingup4"
          src="/project_images/signup_images/flowerentireimage.png"
          alt="flowerimage.png"
        />
      </div>
    </div>
  );
};
