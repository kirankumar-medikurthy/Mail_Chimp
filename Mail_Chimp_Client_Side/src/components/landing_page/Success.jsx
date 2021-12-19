import React from "react";
import Button from "./Button";
import Button1 from "./Button1";
import { Button3 } from "../Buttons/Buttons";
import { Logo, ChevronRight, ChevronLeft } from "../Icons/Icons";
import "./success.css";
import { Link } from "react-router-dom";

const Success = () => {
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
      <div className="cont12">
        <div className="cont121">
          <div className="cont122">
            <div>
              <div className="h121">Your Import was successful</div>
              <div className="p121">
                We’ve updated 0 contacts in your “Freelancing” audience
              </div>
              <div className="cont124">
                <Link to="/dashboard/page/designemail">
                  <Button name="Start a Campaign" />
                </Link>
                <Button1 name1="View contacts" />
              </div>
            </div>

            <img
              className="im39"
              src={
                require("../../project_images/landingpage_images/image 39.svg")
                  .default
              }
              alt=""
            />
          </div>

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

export default Success;
