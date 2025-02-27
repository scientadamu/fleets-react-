import React from "react";
import { useNavigate } from "react-router-dom";
import "./DashboardContents.css";
import dsocIcon from "../images/docIcon.png";
import driverImg from "../images/driverImg.png";
const DashboardContents = () => {
    
    return (
        <div className="DashboardContents">
            <div className="fleetAnalysis">
               <div className="fleetsAndDrivers">
                <div className="totalFleets">
                    <p className="title">Total No of Fleet</p>
                    <p className="num">45</p>
                    <img className="fleetIcon" src={dsocIcon} alt="docIcon" />
                </div>
                <div className="totalDrivers">
                <p className="title">Total Driver</p>
                    <p className="num">40</p>
                    <img className="fleetIcon" src={driverImg} alt="docIcon" />
                </div>
               </div>
            {/* tracsaction card */}
            <div className="transaction-card">
      <h3>Transaction Status</h3>
      <div className="chart-container">
        <div className="progress-circle">
          <svg width="100" height="100">
            <circle className="bg-circle" cx="50" cy="50" r="40"></circle>
            <circle className="progress" cx="50" cy="50" r="40"></circle>
          </svg>
        </div>
        <div className="legend">
          <div className="legend-item">
            <span className="color-box completed"></span>
            <span>60% Completed</span>
          </div>
          <div className="legend-item">
            <span className="color-box pending"></span>
            <span>40% Pending</span>
          </div>
        </div>
      </div>
      <div className="view-all">
        <a href="#">View All Transactions →</a>
      </div>
    </div>
            {/* tracsaction card */}
               

               <div className="upcoming"></div>
            </div>
            <div className="fleetSummary">Row2</div>
        </div>
    );
};

export default DashboardContents;
