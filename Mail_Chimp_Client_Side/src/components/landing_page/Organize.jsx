import React from "react";
import Button from "./Button";
import { Button3 } from "../Buttons/Buttons";
import { Logo, ChevronRight, ChevronLeft } from "../Icons/Icons";
import "./organize.css";
import { Link } from "react-router-dom";

const Organize = () => {
  return (
    <>
      <div className="import-contact-container-mk">
        <div className="import-contact-nav-mk">
          <div className="import-contact-nav-item-mk">
            <ChevronLeft />
            <Logo />
            <div className="import-contact-items-mk">
              <p className="import-contact-heading-mk">Import Contacts</p>
              <div className="breadcrumbs">
                <p>Choose Method</p>
                <ChevronRight />
                <p>Import</p>
                <ChevronRight />
                <p>Organise</p>
                <ChevronRight />
                <p>Tag</p>
                <ChevronRight />
                <p>Match</p>
                <ChevronRight />
                <p>Complete</p>
              </div>
            </div>
          </div>
          <div>
            <Button3 text="Exit" />
          </div>
        </div>
      </div>
      <div className="cont8">
        <div className="cont81">
          <div className="h81">Organize your contacts</div>
          <div className="p81">Select a status</div>

          <div className="cont811">
            <select name="status" id="status">
              <option value="Subscribed">Subscribed</option>
              <option value="Unsubscribed">Unsubscribed</option>
              <option value="free">Free</option>
              <option value="Select">Select</option>
            </select>
          </div>

          <div className="cont812">
            <div className="p82">
              When you choose the ‘Subscribed’ status for your contacts, it
              indicates that you’ve gained permission to market to them. Learn
              more about the
            </div>
            <div className="p83">Importance of Permission.</div>
          </div>

          <div className="cont813">
            <input type="checkbox" />
            <div className="p84">Update any existing contacts</div>
          </div>

          <div className="p85">
            If any imported contacts are already in your audience, we’ll
            automatically replace their information with the data from your
            import.This option may make the import process take longer.
          </div>

          <Link to="/dashboard/tag">
            <Button name="Continue to Tag" />
          </Link>
          <img
            className="q"
            src={
              require("../../project_images/landingpage_images/ques.svg")
                .default
            }
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Organize;
