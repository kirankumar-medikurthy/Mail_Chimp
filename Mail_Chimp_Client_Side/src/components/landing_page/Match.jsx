import React from "react";
import Button from "./Button";
import { Button1, Button3 } from "../Buttons/Buttons";
import { Logo, ChevronRight, ChevronLeft } from "../Icons/Icons";
import "./match.css";
import { Link } from "react-router-dom";

const Match = () => {
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
      <div className="cont10">
        <div className="cont101">
          <div className="h101">Match column labels to contact information</div>
          <div className="p101">10 contacts were recognised in this file</div>
          <div className="cont102">
            <div className="cont103">
              <div className="cont104">
                <div className="cont105">
                  <img
                    className="pencil"
                    src={
                      require("../../project_images/landingpage_images/pencil.svg")
                        .default
                    }
                    alt=""
                  />
                  <img
                    className="line"
                    src={
                      require("../../project_images/landingpage_images/line.svg")
                        .default
                    }
                    alt=""
                  />
                </div>
                <div>Email Address</div>
              </div>
              <input className="cont106" type="checkbox" />
            </div>

            <div className="cont103">
              <div className="cont104">
                <div className="cont105">
                  <img
                    className="pencil"
                    src={
                      require("../../project_images/landingpage_images/pencil.svg")
                        .default
                    }
                    alt=""
                  />
                  <img
                    className="line"
                    src={
                      require("../../project_images/landingpage_images/line.svg")
                        .default
                    }
                    alt=""
                  />
                </div>
                <div>First Name</div>
              </div>
              <input className="cont106" type="checkbox" />
            </div>

            <div className="cont103">
              <div className="cont104">
                <div className="cont105">
                  <img
                    className="pencil"
                    src={
                      require("../../project_images/landingpage_images/pencil.svg")
                        .default
                    }
                    alt=""
                  />
                  <img
                    className="line"
                    src={
                      require("../../project_images/landingpage_images/line.svg")
                        .default
                    }
                    alt=""
                  />
                </div>
                <div>Address - ZIP/Postal</div>
              </div>
              <input className="cont106" type="checkbox" />
            </div>
          </div>

          <div className="p102">
            3 columns will be imported.0 columns will not be imported.
          </div>
          <Link to="/dashboard/complete">
            <Button name="Finalize Import" />
          </Link>
          <img
            className="que"
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

export default Match;
