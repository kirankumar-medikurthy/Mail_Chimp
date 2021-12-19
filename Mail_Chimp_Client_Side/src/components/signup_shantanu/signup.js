import "./signup.css";

import React, { useState } from "react";

function Signup() {
  const [tog, settog] = useState(0);

  return (
    <div className="mainp">
      <div className="yellowstrip"></div>
      <img className="mailchimpimg" src="mailchimp.png" alt="" />
      <div className="boxin">
        <div className="headingbox">
          <h2 className="heading1">Wellcome to Mailchimp</h2>
          <h3 className="heading2">
            create account or <span className="logioption">Login</span>{" "}
          </h3>
        </div>
        <div className="formbox">
          <div className="firstbox">
            <label>Email</label>
            <input className="emailbox" />
          </div>
          <div className="secondbox">
            <label className="userlabel">username</label>
            <input className="userbox" />
          </div>
          <div className="thirdbox">
            <div className="showhide">
              <h3 className="paslabel">Password</h3>
              <div className="eyediv">
                <img
                  className="vector"
                  src="/project_images/shantanu_pics/vector.png"
                  onClick={() => (tog === 0 ? settog(1) : settog(0))}
                  alt=""
                />
                <h3
                  className="show"
                  onClick={() => (tog === 0 ? settog(1) : settog(0))}
                >
                  Show
                </h3>
              </div>
            </div>
            <input type={tog === 0 ? "password" : "text"} className="passbox" />
          </div>
          <div className="checkdiv">
            <input className="checkboxl" type="checkbox" />
            <label className="aler">
              I don’t want to receive
              <span className="emailchoice">promotonal emails</span>from
              Mailchimp.
            </label>
          </div>
          <div className="submiting">
            <p className="agremnt">
              By clicking the “Sign Up” button, you are creating a Mailchimp
              account, and you agree
              <br />
              to Mailchimp’s and <span className="terms">Terms and use</span>
            </p>
            <button className="submitbut">sign up</button>
          </div>
        </div>
      </div>
      <div className="yellowrect">
        <img className="sidepic2" src="sidepic2.png" alt="" />
      </div>
    </div>
  );
}

export default Signup;
