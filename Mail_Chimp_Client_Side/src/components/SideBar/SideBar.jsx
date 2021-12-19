import React from "react";
import { useState } from "react/cjs/react.development";
import {
  Create,
  Websites,
  Automations,
  Bell,
  AudienceIcon,
  ChevronUp,
  ChevronDown,
  Profile,
  Search,
  PaintBucket,
  Integration,
} from "../Icons/Icons";
import "./SideBar.css";

const SideBar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="side-bar-mk">
      <div className="side-bar-items-mk">
        <Create />
        <p>Create</p>
        <div></div>
      </div>
      <div className="side-bar-items-audience-mk">
        <div className="side-bar-items-mk">
          <AudienceIcon />
          <p>Audience</p>
          <p onClick={handleClick}>{open ? <ChevronUp /> : <ChevronDown />}</p>
        </div>
        {open && (
          <div className="audience-items-mk">
            <p>Audience dashboard</p>
            <p>All contacts</p>
            <p>Signup forms</p>
            <p>Tags</p>
            <p>Segments</p>
            <p>Surveys</p>
            <p>Preferenes center</p>
            <p>Inbox</p>
          </div>
        )}
      </div>
      <div className="side-bar-items-mk">
        <Bell />
        <p>Campaigns</p>
        <ChevronDown />
      </div>
      <div className="side-bar-items-mk">
        <Automations />
        <p>Automations</p>
        <ChevronDown />
      </div>
      <div className="side-bar-items-mk">
        <Websites />
        <p>Websites</p>
        <ChevronDown />
      </div>
      <div className="side-bar-items-mk">
        <PaintBucket />
        <p>Content Studio</p>
        <ChevronDown />
      </div>
      <div className="side-bar-items-mk">
        <Integration />
        <p>Intergrations</p>
        <ChevronDown />
      </div>
      <div className="side-bar-items-mk">
        <Search />
        <p>Search</p>
        <ChevronDown />
      </div>
      <p className="upgrade-mk">Upgrade</p>
      <div className="profile-mk">
        <Profile />
        <div className="profile-items-mk">
          <p>BSL</p>
          <p>Freelancing</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
