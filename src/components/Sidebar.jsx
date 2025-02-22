import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = ({ onMenuSelect }) => {
    const [activeMenu, setActiveMenu] = useState(null);

    const toggleSubmenu = (menu) => {
        setActiveMenu(activeMenu === menu ? null : menu);
    };

    return (
        <nav className="sidebar">
            {/* Logo Section */}
            <div className="logo">
                <img src="./logo.png" alt="AL-AFIYAH" />
            </div>

            {/* Menu Section */}
            <ul className="menu">
                <li className="menu-item" onClick={() => onMenuSelect("Dashboard")}>
                    Dashboard
                </li>

                {/* Fleet Management */}
                <li className={`menu-item has-sub ${activeMenu === "Fleet Management" ? "active" : ""}`} onClick={() => toggleSubmenu("Fleet Management")}>
                    <span>Fleet Management</span>
                    <ul className={`submenu ${activeMenu === "Fleet Management" ? "open" : ""}`}>
                        <li onClick={() => onMenuSelect("Add Fleet")}>Add Fleet</li>
                        <li onClick={() => onMenuSelect("Fleet List")}>Fleet List</li>
                        <li onClick={() => onMenuSelect("Fleet Assignments")}>Fleet Assignments</li>
                        <li onClick={() => onMenuSelect("Expense History")}>Expense History</li>
                    </ul>
                </li>

                {/* Reminders */}
                <li className={`menu-item has-sub ${activeMenu === "Reminders" ? "active" : ""}`} onClick={() => toggleSubmenu("Reminders")}>
                    <span>Reminders <span className="badge">5</span></span>
                    <ul className={`submenu ${activeMenu === "Reminders" ? "open" : ""}`}>
                        <li onClick={() => onMenuSelect("Service Reminder")}>Service Reminder</li>
                        <li onClick={() => onMenuSelect("Add Service Reminder")}>Add Service Reminder</li>
                        <li onClick={() => onMenuSelect("Service Items")}>Service Items</li>
                    </ul>
                </li>

                {/* Employee Management */}
                <li className={`menu-item has-sub ${activeMenu === "Employee Management" ? "active" : ""}`} onClick={() => toggleSubmenu("Employee Management")}>
                    <span>Employee Management</span>
                    <ul className={`submenu ${activeMenu === "Employee Management" ? "open" : ""}`}>
                        <li onClick={() => onMenuSelect("Manage Employee")}>Manage Employee</li>
                        <li onClick={() => onMenuSelect("Positions")}>Positions</li>
                        <li onClick={() => onMenuSelect("Departments")}>Departments</li>
                        <li onClick={() => onMenuSelect("Manage Drivers")}>Manage Drivers</li>
                        <li onClick={() => onMenuSelect("Driver Performance")}>Driver Performance</li>
                        <li onClick={() => onMenuSelect("Fleet Owners")}>Fleet Owners</li>
                    </ul>
                </li>

                <li className="menu-item" onClick={() => onMenuSelect("Get Help")}>Get Help</li>
                <li className="menu-item" onClick={() => onMenuSelect("Settings")}>Settings</li>
            </ul>
        </nav>
    );
};

export default Sidebar;
