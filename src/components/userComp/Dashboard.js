import React from "react";
import LeftNav from "./LeftNav";
import "./cssFiles/Dashboard.css";
import "./cssFiles/LeftNav.css";
function Dashboard(props) {
  return (
    <div className="dashboard-container">
      <LeftNav />
      <div className="right-content">
        <div className="image-container">
          <img src="/Dashboard.jpg" alt="Dashboard" className="dashboard-image" />
        </div>
        <div className="text-container">
          <p className="heading">A global turn-key compliance solution</p>
          <p className="dashboard-text">An all-in-one workflow solution to verify your customers' identities, streamline a KYC on-boarding process and manage the entire customer lifecycle.</p>
          <p className="dashboard-text1">Dashboard</p>
          <p className="dashboard-text2">{props.account_prop}</p>
        </div>
      </div>
    </div>    
  );
}

export default Dashboard;
