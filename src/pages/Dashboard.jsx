import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import MainContent from "../components/MainContent";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-section">
        <Header />
        <MainContent />
      </div>
    </div>
  );
};

export default Dashboard;
