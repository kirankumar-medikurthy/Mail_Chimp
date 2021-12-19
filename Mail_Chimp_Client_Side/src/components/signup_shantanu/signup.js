import "./signup.css";
import axios from "axios";
import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

function Signup() {
  const [tog, settog] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleClick = async () => {
    const data = {
      username: username,
      email: email,
      password: password,
    };
    await axios.post("http://localhost:5000/register", data);
    // <Redirect to="/signup/accsetup" />;
    window.location.href = "http://localhost:3000/signup/accsetup";
  };

  return (
    <div className="mainp">
      <div className="yellowstrip"></div>
      <img
        className="mailchimpimg"
        src="/project_images/shantanu_pics/mailchimp.png"
        alt=""
      />
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
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="emailbox"
            />
          </div>
          <div className="secondbox">
            <label className="userlabel">username</label>
            <input
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              className="userbox"
            />
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
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type={tog === 0 ? "password" : "text"}
              className="passbox"
            />
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
            {/* <Link to="/signup/accsetup"> */}
            <button onClick={handleClick} className="submitbut">
              sign up
            </button>
            {/* </Link> */}
          </div>
        </div>
      </div>
      <div className="yellowrect">
        <img
          className="sidepic2"
          src="/project_images/shantanu_pics/sidepic2.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Signup;
