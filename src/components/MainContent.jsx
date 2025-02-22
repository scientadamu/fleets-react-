import React from "react";
import AddFleet from "./AddFleet";
import FleetList from "./FleetList";
import "./MainContent.css";

const MainContent = ({ selectedMenu }) => {
    const renderContent = () => {
        switch (selectedMenu) {
            case "Add Fleet":
                return <AddFleet />;
            case "Fleet List":
                return <FleetList />;
            case "Fleet Assignments":
                return <div className="content-container"><h2>Fleet Assignments</h2><p>Manage fleet assignments here.</p></div>;
            case "Expense History":
                return <div className="content-container"><h2>Expense History</h2><p>Track expenses for fleets.</p></div>;
            default:
                return <div className="content-container"><h2>Dashboard</h2><p>Welcome to the dashboard.</p></div>;
        }
    };

    return <main className="main-content">{renderContent()}</main>;
};

export default MainContent;
