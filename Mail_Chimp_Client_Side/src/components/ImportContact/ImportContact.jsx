import React from "react";
import { Button1, Button3 } from "../Buttons/Buttons";
import { Logo, ChevronRight, ChevronLeft } from "../Icons/Icons";
import "../ChooseMethod/ChooseMethod";
import "./ImportContact.css";
import { Link } from "react-router-dom";

const ImportContact = () => {
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
          <h1>Copy and paste your contacts</h1>
          <p className="import-sub-heading-mk">
            No sure how to format your file?
          </p>
        </div>
        <p className="contact-paste-mk">
          Paste your contact information into this field
        </p>
        <div className="contact-view-mk">
          <div className="contact-list-mk">
            <p>Email Address</p>
            <p>First Name</p>
            <p>Last Name</p>
            <p>Address</p>
          </div>
          <div className="contact-list-mk">
            <p>madanakrishnan.i@gmail.com</p>
            <p>Madan</p>
            <p>Krishnan</p>
            <p>Near 154 Dr.Apt NC 28762 US</p>
          </div>
          <div className="contact-list-mk">
            <p>kirankumar@gmail.com</p>
            <p>Kiran</p>
            <p>Kumar</p>
            <p>Near 154 Dr.Apt NC 28762 US</p>
          </div>
        </div>
        <div className="import-options-mk"></div>
        <Link to="/dashboard/organise">
          <Button1 text="Conitnue to Upload" />
        </Link>
      </div>
    </>
  );
};

export default ImportContact;
