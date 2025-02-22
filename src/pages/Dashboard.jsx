import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
// import "./Dashboard.css";

const Dashboard = () => {
    const [selectedMenu, setSelectedMenu] = useState("Dashboard");

    return (
        <div className="dashboard">
            <Sidebar onMenuSelect={setSelectedMenu} />
            <div className="main-section">
                <Header selectedMenu={selectedMenu} />
                <MainContent selectedMenu={selectedMenu} />
            </div>
        </div>
    );
};

export default Dashboard;
