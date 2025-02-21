import React, { useEffect } from "react";
import "./sidebar.css";

const Sidebar = () => {
  useEffect(() => {
    const menuItems = document.querySelectorAll(".menu-item.has-sub");
    menuItems.forEach((item) => {
      item.addEventListener("mouseenter", function () {
        this.querySelector(".submenu").style.display = "block";
      });
      item.addEventListener("mouseleave", function () {
        this.querySelector(".submenu").style.display = "none";
      });
    });

    const menuLinks = document.querySelectorAll(".menu-item");
    menuLinks.forEach((menu) => {
      menu.addEventListener("click", function () {
        document.querySelectorAll(".menu-item").forEach((item) => item.classList.remove("active"));
        this.classList.add("active");
      });
    });

    const fleetSection = document.getElementById("addFleetSection");
    const openFormBtn = document.getElementById("openAddFleetForm");
    const closeFormBtn = document.getElementById("closeFleetForm");

    if (openFormBtn && closeFormBtn && fleetSection) {
      openFormBtn.addEventListener("click", () => {
        fleetSection.style.display = "block";
        document.body.style.overflow = "hidden";
      });

      closeFormBtn.addEventListener("click", () => {
        fleetSection.style.display = "none";
        document.body.style.overflow = "auto";
      });
    }

    const fleetForm = document.getElementById("addFleetForm");
    if (fleetForm) {
      fleetForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const fleetData = {
          fleetName: document.getElementById("fleetName").value,
          fleetGroup: document.getElementById("fleetGroup").value,
          fleetType: document.getElementById("fleetType").value,
          dateFounded: document.getElementById("dateFounded").value,
          contactPerson: document.getElementById("contactPerson").value,
          contactPhone: document.getElementById("contactPhone").value,
          contactEmail: document.getElementById("contactEmail").value,
          taxID: document.getElementById("taxID").value,
        };
        console.log("Fleet Data Submitted:", fleetData);
        alert("Fleet Added Successfully!");
        fleetSection.style.display = "none";
        fleetForm.reset();
        document.body.style.overflow = "auto";
      });
    }
  }, []);

  return (
    <div className="sidebar">
      <div className="logo">
        <img src="/logo.png" alt="AL-AFIYAH" />
      </div>
      <ul className="menu">
        <li className="menu-item active">Dashboard</li>

        <li className="menu-item has-sub">
          <span>Fleet Management</span>
          <ul className="submenu">
            <li>
              <button id="openAddFleetForm" className="btn">
                Add Fleet
              </button>
            </li>
            <li>Fleet List</li>
            <li>Fleet Assignments</li>
            <li>Expense History</li>
          </ul>
        </li>

        <li className="menu-item has-sub">
          <span>
            Reminders <span className="badge">5</span>
          </span>
          <ul className="submenu">
            <li>Service Reminder</li>
            <li>Add Service Reminder</li>
            <li>Service Items</li>
          </ul>
        </li>

        <li className="menu-item has-sub">
          <span>Employee Management</span>
          <ul className="submenu">
            <li>Manage Employee</li>
            <li>Positions</li>
            <li>Departments</li>
            <li>Manage Drivers</li>
            <li>Driver Performance</li>
            <li>Fleet Owners</li>
          </ul>
        </li>

        <li className="menu-item">Get Help</li>
        <li className="menu-item">Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;
