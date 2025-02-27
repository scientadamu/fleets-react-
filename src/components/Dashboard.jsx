import React from "react";
import "./Dashboard.css";
import fleetIcon from "./assets/Icon.png";
import driverIcon from "./assets/Icon2.png";
import serviceImg from "./assets/service.PNG";
import transactionImg from "./assets/transaction.PNG";
import service1Img from "./assets/service1.png";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Cards Section */}
      <div className="container">
        {/* Column 1 */}
        <div className="column" id="column1">
          <div className="card" id="card_totalFleet">
            <h3>Total No of Fleet</h3>
            <h1 className="fleet_num">45</h1>
            <div className="fleet_img_container">
              <img className="fleet_img" src={fleetIcon} alt="Total no of fleet" />
            </div>
          </div>

          <div className="card" id="card_totalDrivers">
            <h3>Total Drivers</h3>
            <h1 className="fleet_num">40</h1>
            <div className="fleet_img_container">
              <img className="fleet_img" src={driverIcon} alt="Total drivers" />
            </div>
          </div>

          <div className="card yellow-card" id="service">
            <img className="service_img" src={serviceImg} alt="Service" />
          </div>
        </div>

        {/* Column 2 */}
        <div className="columna" id="transactionColumn">
          <h3>Transaction Status</h3>
          <img className="transaction_img" src={transactionImg} alt="Transaction Status" />
        </div>

        {/* Column 3 */}
        <div className="column" id="upcoming">
          <div className="upcomingImages">
            <img src={service1Img} alt="Upcoming Maintenance 1" />
            <img src={serviceImg} alt="Upcoming Maintenance 2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
