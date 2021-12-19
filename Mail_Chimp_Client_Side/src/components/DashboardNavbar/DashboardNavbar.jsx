import React from "react";
import "./DashboardNavbar.css";
import axios from "axios";
import { Logo, Email } from "../Icons/Icons";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const DashboardNavbar = () => {
  const { type } = useParams();
  console.log("boolean", type);
  const sendMail = async () => {
    await axios.get("http://localhost:5000/users");
  };
  return (
    <>
      <div className="nav-items-mk">
        <div className="logo-mk">
          <Logo />
        </div>
        {type !== "designemail" && <p>Audience Dashboard</p>}
        {type === "designemail" && (
          <>
            <div className="design-email-nav-mk">
              <Email />
              <div className="design-email-items-nav-mk">
                <p>Keep it up!</p>
                <p>Draft email</p>
              </div>
              <p>Draft</p>
            </div>
            <div className="design-email-btn-mk">
              <p className="finish-later-mk" style={{ fontSize: "16px" }}>
                Finish Later
              </p>
              <div className="design-email-btn-1-mk">
                <p>Schedule</p>
              </div>
              <div className="design-email-btn-2-mk">
                <p onClick={sendMail}>Send</p>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default DashboardNavbar;
