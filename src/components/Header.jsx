import React, { useState, useEffect } from "react";
import "./Header.css";
const Header = ({ selectedMenu, userName }) => {
    const [greeting, setGreeting] = useState("");

    useEffect(() => {
        const hour = new Date().getHours();
        if (hour < 12) setGreeting("Good morning");
        else if (hour < 18) setGreeting("Good afternoon");
        else setGreeting("Good evening");
    }, []);

    return (
        <header className="header">
            <div className="header-left">
                <h1>{selectedMenu || "Dashboard"}</h1>
                <small>Viewing {selectedMenu || "Dashboard"} details</small>
            </div>
            <div className="profile-menu">
                <span>{greeting}, {userName}</span>
            </div>
        </header>
    );
};

export default Header;
