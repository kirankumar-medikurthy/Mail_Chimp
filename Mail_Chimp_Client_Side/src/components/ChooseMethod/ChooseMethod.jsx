import React from "react";
import { Link } from "react-router-dom";
import { Button1, Button3 } from "../Buttons/Buttons";
import { Logo, ChevronRight, ChevronLeft } from "../Icons/Icons";
import "./ChooseMethod.css";

const ChooseMethod = () => {
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
      <div className="import-content-mk">
        <div>
          <h1>How would you like to import your contacts?</h1>
          <p className="import-sub-heading-mk">
            No sure how to format your file?
          </p>
        </div>
        <div className="import-options-mk">
          <div className="import-options-items-mk">
            <input type="radio" />
            <div className="import-option-desc-mk">
              <p>Upload file</p>
              <p>Upload a CSV or tab-delimited TXT file.</p>
            </div>
          </div>
          <div className="import-options-items-mk">
            <input type="radio" />
            <div className="import-option-desc-mk">
              <p>Upload file</p>
              <p>Upload a CSV or tab-delimited TXT file.</p>
            </div>
          </div>
        </div>
        <Link to="/dashboard/import">
          <Button1 text="Conitnue to Upload" />
        </Link>
      </div>
    </>
  );
};

export default ChooseMethod;
