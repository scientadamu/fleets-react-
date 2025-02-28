import React, { useState } from "react";
import "./Sidebar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Sidebar = ({ onMenuSelect }) => {
    const [activeMenu, setActiveMenu] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const toggleSubmenu = (menu) => {
        setActiveMenu(activeMenu === menu ? null : menu);
    };

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <button className="menu-toggle" onClick={toggleSidebar}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </button>
            <nav className={`sidebar ${isOpen ? "open" : ""}`}>
                {/* Logo Section */}
                <div className="logo">
                    <img src="./logo.png" alt="AL-AFIYAH" />
                </div>

                {/* Menu Section */}
                <ul className="menu">
                    <li className="menu-item" onClick={() => { onMenuSelect("Dashboard"); setIsOpen(false); }}>Dashboard</li>

                    <li className={`menu-item has-sub ${activeMenu === "Fleet Management" ? "active" : ""}`} onClick={() => toggleSubmenu("Fleet Management")}>
                        <span>Fleet Management</span>
                        <ul className={`submenu ${activeMenu === "Fleet Management" ? "open" : ""}`}>
                            <li onClick={() => { onMenuSelect("Add Fleet"); setIsOpen(false); }}>Add Fleet</li>
                            <li onClick={() => { onMenuSelect("Fleet List"); setIsOpen(false); }}>Fleet List</li>
                            <li onClick={() => { onMenuSelect("Fleet Assignments"); setIsOpen(false); }}>Fleet Assignments</li>
                            <li onClick={() => { onMenuSelect("Expense History"); setIsOpen(false); }}>Expense History</li>
                        </ul>
                    </li>
                    
                    <li className={`menu-item has-sub ${activeMenu === "Reminders" ? "active" : ""}`} onClick={() => toggleSubmenu("Reminders")}>
                        <span>Reminders <span className="badge">5</span></span>
                        <ul className={`submenu ${activeMenu === "Reminders" ? "open" : ""}`}>
                            <li onClick={() => { onMenuSelect("Service Reminder"); setIsOpen(false); }}>Service Reminder</li>
                            <li onClick={() => { onMenuSelect("Add Service Reminder"); setIsOpen(false); }}>Add Service Reminder</li>
                            <li onClick={() => { onMenuSelect("Service Items"); setIsOpen(false); }}>Service Items</li>
                        </ul>
                    </li>

                    <li className={`menu-item has-sub ${activeMenu === "Employee Management" ? "active" : ""}`} onClick={() => toggleSubmenu("Employee Management")}>
                        <span>Employee Management</span>
                        <ul className={`submenu ${activeMenu === "Employee Management" ? "open" : ""}`}>
                            <li onClick={() => { onMenuSelect("Manage Employee"); setIsOpen(false); }}>Manage Employee</li>
                            <li onClick={() => { onMenuSelect("Positions"); setIsOpen(false); }}>Positions</li>
                            <li onClick={() => { onMenuSelect("Departments"); setIsOpen(false); }}>Departments</li>
                            <li onClick={() => { onMenuSelect("Manage Drivers"); setIsOpen(false); }}>Manage Drivers</li>
                            <li onClick={() => { onMenuSelect("Driver Performance"); setIsOpen(false); }}>Driver Performance</li>
                            <li onClick={() => { onMenuSelect("Fleet Owners"); setIsOpen(false); }}>Fleet Owners</li>
                        </ul>
                    </li>

                    <li className="menu-item" onClick={() => { onMenuSelect("Get Help"); setIsOpen(false); }}>Get Help</li>
                    <li className="menu-item" onClick={() => { onMenuSelect("Settings"); setIsOpen(false); }}>Settings</li>
                </ul>
            </nav>
        </>
    );
};

export default Sidebar;
