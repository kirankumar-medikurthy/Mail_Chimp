import React from "react";
import "./DesignEmail.css";
import { CheckCircle, CheckCircle2 } from "../Icons/Icons";
import { useState } from "react/cjs/react.development";

const DesignEmail = () => {
  const [email, setEmail] = useState(true);
  const [from, setFrom] = useState(false);
  const [subject, setSubject] = useState(true);

  const showEmailIncomplete = () => {
    return (
      <>
        <div className="email-to-mk">
          <div className="email-to-section1-mk">
            <p>To</p>
            <p>Who are you sending this campaign to</p>
          </div>
          <div className="email-to-section2-mk">
            <div className="email-to-section2-audience-mk">
              <p>Audience</p>
              <select className="dropdown-email-section2-mk" name="" id="">
                <option value="">Freelancing</option>
              </select>
            </div>
            <div className="email-to-section2-segment-mk">
              <p>Segment or Tag</p>
              <select className="dropdown-email-section2-mk" name="" id="">
                <option value="">All subcriber in audience</option>
              </select>
            </div>
          </div>
          <div className="email-to-section3-mk">
            <p>Personalize the “To” field</p>
            <p>
              Add merge tags to display your recipient’s name to make it more
              personal and help avoid spam filters. For example, *Fname* *Lname*
              will show as “To: Bob Smith” instead of “To:bob@example.com.”
            </p>
          </div>
          <div className="email-to-section4-mk">
            <p>Merge Tag</p>
            <select className="dropdown-email-section4-mk" name="" id="">
              <option value="">*FNAME*</option>
            </select>
          </div>
          <div className="email-to-section5-mk">
            <p
              onClick={() => {
                setEmail(false);
              }}
            >
              Save
            </p>
            <p>Cancel</p>
          </div>
        </div>
      </>
    );
  };

  const showEmailComplete = () => {
    return (
      <>
        <div className="email-to-mk margin-right">
          <div className="email-to-section1-mk">
            <p>To</p>
            <p>
              All subscribe contacts in the audience Freelancing.
              <span>1 recipient</span>
            </p>
          </div>
        </div>
        <div className="edit-recipients-mk">
          <p onClick={() => setEmail(true)}>Edit Recipients</p>
        </div>
      </>
    );
  };

  const fromIncomplete = () => {
    return (
      <>
        <div className="from-content-mk">
          <div className="email-to-section1-mk">
            <p>From</p>
            <p>Who is seeing this campaign</p>
          </div>
          <div className="email-to-section2-mk">
            <div className="email-to-section2-audience-mk">
              <p>Name</p>
              <input className="dropdown-email-section2-mk" name="" id="" />
              <p className="from-name-para-mk">
                Use something subscribers will intantly recognize, like your
                company name.
              </p>
            </div>
            <div className="email-to-section2-segment-mk">
              <p>Email address</p>
              <input className="dropdown-email-section2-mk" name="" id="" />
            </div>
          </div>
          <div className="email-to-section5-mk">
            <p
              onClick={() => {
                setFrom(true);
              }}
            >
              Save
            </p>
            <p>Cancel</p>
          </div>
        </div>
      </>
    );
  };

  const fromComplete = () => {
    return (
      <>
        <div className="email-to-mk margin-right-from">
          <div className="email-to-section1-mk">
            <p>From</p>
            <p>BSL uxtremeteam@gmail.com</p>
          </div>
        </div>
        <div className="edit-recipients-mk">
          <p onClick={() => setFrom(false)}>Edit Form</p>
        </div>
      </>
    );
  };

  const subjectIncomplete = () => {
    return (
      <>
        <div className="subject-content-mk">
          <div className="email-to-section2-mk">
            <div className="email-to-section2-audience-mk subject-section2-mk">
              <div className="sub-left-pane-mk">
                <p>Subject</p>
                <input className="dropdown-email-section2-mk" name="" id="" />
                <p className="from-name-para-mk">
                  See how your recent subject lines performed. View our subject
                  line guide
                </p>
                <p>Preview Text</p>
                <input className="dropdown-email-section2-mk" name="" id="" />
                <p className="from-name-para-mk">
                  Preview text appers in the inbox after the subject line.
                </p>
              </div>
              <div className="sub-right-pane-mk">
                <p className="subject-line-mk">
                  A great subject line gives your audience a reason to open your
                  email.
                </p>
                <p className="best-practice-mk">Based on best practices</p>
                <div className="right-pane-mk">
                  <CheckCircle2 />
                  <div className="right-pane-items-mk">
                    <p>Space is limited</p>
                    <p>Great job staying under 60 characters</p>
                  </div>
                </div>
                <div className="right-pane-mk">
                  <CheckCircle2 />
                  <div className="right-pane-items-mk">
                    <p>Emojis are great...in small quantities</p>
                    <p>We suggest using no more than 1</p>
                  </div>
                </div>
                <div className="right-pane-mk">
                  <CheckCircle2 />
                  <div className="right-pane-items-mk">
                    <p>It's short and Sweet</p>
                    <p>Fewer is better</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="email-to-section5-mk">
            <p
              onClick={() => {
                setSubject(true);
              }}
            >
              Save
            </p>
            <p>Cancel</p>
          </div>
        </div>
      </>
    );
  };

  const subjectComplete = () => {
    return (
      <>
        <div className="email-to-mk margin-right-subject">
          <div className="email-to-section1-mk">
            <p>Subject</p>
            <p>Test Subject</p>
            <p>Preview Text, Test preview Text</p>
          </div>
        </div>
        <div className="edit-recipients-mk">
          <p onClick={() => setSubject(false)}>Edit Subject</p>
        </div>
      </>
    );
  };

  return (
    <div className="design-email-container-mk">
      <div className="edit-subject-mk">
        <input
          className="edit-subject-input-mk"
          type="text"
          placeholder="Test Subject"
        />
        <label>Edit Name</label>
      </div>
      <div className="content-container-mk">
        <div className="email-container-mk">
          <div>
            <CheckCircle />
          </div>
          {email ? showEmailIncomplete() : showEmailComplete()}
        </div>
        <div className="from-container-mk">
          <div>
            <CheckCircle />
          </div>
          {from ? fromComplete() : fromIncomplete()}
        </div>
        <div className="subject-container-mk">
          <div>
            <CheckCircle />
          </div>
          {subject ? subjectComplete() : subjectIncomplete()}
        </div>
        <div className="design-content-container-mk">
          <div>
            <CheckCircle />
          </div>
          <div className="design-content-mk">
            <p>Content</p>
            <div></div>
            <div className="design-content-middle-mk">
              <div className="design-content-items-mk">
                <CheckCircle2 />
                <p>
                  We automatically add a required Referal badge to your email
                  footer. To remove the badge, upgrade your account.
                </p>
              </div>
              <div className="design-content-items-mk">
                <CheckCircle2 />
                <p>
                  A plain-text version of this email will be include
                  automatically. Edit
                </p>
              </div>
              <div className="design-content-items-mk">
                <CheckCircle2 />
                <p>
                  We recommend settings a default logo to make sure all your
                  emails are branded. Lear how
                </p>
              </div>
            </div>
            <div>
              <p>Edit Design</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignEmail;
