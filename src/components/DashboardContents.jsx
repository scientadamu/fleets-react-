import React from "react";
import { useNavigate } from "react-router-dom";
import "./DashboardContents.css";
import dsocIcon from "../images/docIcon.png";
import driverImg from "../images/driverImg.png";
import totalBalance from "../images/totalBalance.PNG";
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
            <div className="upcoming-card">
                <h3>Upcomming Maintenance</h3>
                <p>Today, <span id="todayDay">26 </span><span id="todayMonth">November</span></p>
                <div className="allMaintenace">
                    <div className="maintenace"><p className="timeStart" ><span id="timeStart">10:00 AM</span><hr/></p></div>            
                    <div className="maintenace"><p className="timeStart" ><span id="time">10:00 AM</span><div className="maintainerBox">
                        <div className="maitainaceSmallCircle"/>
                        <p className="mainainBy">
                            <span className="maintainer" id="maintainer">Aliyu Hassan</span>
                            <span className="maintainer">maintainer</span>
                        </p>
                    </div>
                    </p></div>            
                    <div className="maintenace"><p className="timeStart" ><span id="timeEnd">10:40 AM</span><hr/></p></div>            
            
                 </div>            
            </div>
            {/* tracsaction card */}
               

               <div className="upcoming"></div>
            </div>
            
            <div className="fleetSummary">
            <div className="transaction-summary">
      {/* Service Reminders */}
      <div className="serviceReminder">
      {/* Circular Progress */}
      <div className="progress-circle">
        <svg viewBox="0 0 36 36" className="progress-circular-chart">
          <path
            className="circle-bg"
            d="M18 2.0845
               a 15.9155 15.9155 0 0 1 0 31.831
               a 15.9155 15.9155 0 0 1 0 -31.831"/>
          <path
            className="circle"
            strokeDasharray="64, 100"
            d="M18 2.0845
               a 15.9155 15.9155 0 0 1 0 31.831
               a 15.9155 15.9155 0 0 1 0 -31.831"
          />
        </svg>
        <span className="percentage">64%</span>
      </div>

      {/* Service Reminder Text */}
      <h3>Service Reminders</h3>

      {/* Overdue & Due Soon */}
      <div className="reminder-details">
        <p><span className="overdue">5</span> Overdue</p>
        <p><span className="due-soon">8</span> Due Soon</p>
      </div>

      {/* Button */}
      <button className="details-btn">View Details</button>
    </div>

      {/* Total Balance */}
      <div className="total-balance">
        <h2 className="totalBalance">Total Balance</h2  >
        <div className="amount">
        <h2 id="amounts">#240,399</h2>
        <span>All Accounts</span>
        </div>
        <img className="totalBalanceImg" src={totalBalance} alt="docIcon" />
      </div>

      {/* Goals */}
      <div className="goals">
        <div className="goal-header">
          <h3>Goals</h3>
          <h1>₦20,000</h1>
          <p>May, 2023</p>
        </div>
        <div className="goal-details">
          <p> Target Achieved: <strong>₦12,500</strong></p>
          <p> This Month Target: <strong>₦20,000</strong></p>
        </div>
        <div className="progress-meter">
          <div className="gauge">
            <span className="gauge-needle"></span>
          </div>
          <p>Target vs Achievement</p>
        </div>
      </div>
    </div>
            </div>
        </div>
    );
};

export default DashboardContents;
