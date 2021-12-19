import React from "react";
import DashboardNavbar from "../DashboardNavbar/DashboardNavbar";
import SideBar from "../SideBar/SideBar";
import "./Dashboard.css";
import DesignEmail from "../DesignEmail/DesignEmail";

import Audience from "../Audience/Audience";

import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const Dashboard = () => {
  const { type } = useParams();
  console.log("boolean", type);
  return (
    <>
      <div className="container-mk">
        <div className="yellow-bar-mk"></div>
        <div>
          <DashboardNavbar />
          <div className="dashbaord-content-mk">
            <SideBar />
            {type === "designemail" ? <DesignEmail /> : <Audience />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
