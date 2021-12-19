import React from "react";
import { Link } from "react-router-dom";
import { Button1 } from "../Buttons/Buttons";
import "./Audience.css";

const Audience = () => {
  return (
    <div className="audience-page-mk">
      <h1>Grow Your Mailchimp Audience</h1>
      <p>
        Your audience is where you’ll store and manage your contacts. Once you
        add your contacts. you’ll be able to send your first campaign.we’ll walk
        you through the process.
      </p>
      <Link to="/dashboard/choosemethod">
        <Button1 text="Add Your Contacts" />
      </Link>
    </div>
  );
};

export default Audience;
