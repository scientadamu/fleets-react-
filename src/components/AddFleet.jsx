import React from "react";
import { useNavigate } from "react-router-dom";
import "./AddFleet.css";

const AddFleet = () => {
    const navigate = useNavigate(); // Ensure useNavigate is initialized

    const handleClose = () => {
        navigate("/dashboard", { replace: true }); // Ensure this path matches your route
    };

    return (
        <div className="add-fleet-container">
            <div className="add-fleet-header">
                <h2>Add New Fleet</h2>
                <button className="close-btn" onClick={handleClose}>❌ Close</button>
            </div>
            <form>
                <div className="form-group">
                    <label>Fleet Name</label>
                    <input type="text" placeholder="Enter fleet name" />
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label>Fleet Group</label>
                        <input type="text" placeholder="Enter fleet group" />
                    </div>
                    <div className="form-group">
                        <label>Fleet Type</label>
                        <input type="text" placeholder="Enter fleet type" />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label>Date Founded</label>
                        <input type="date" />
                    </div>
                    <div className="form-group">
                        <label>Contact Person</label>
                        <input type="text" placeholder="Enter contact person" />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label>Contact Phone</label>
                        <input type="text" placeholder="Enter contact phone" />
                    </div>
                    <div className="form-group">
                        <label>Contact Email</label>
                        <input type="email" placeholder="Enter contact email" />
                    </div>
                </div>

                <div className="form-group">
                    <label>Tax ID</label>
                    <input type="text" placeholder="Enter Tax ID" />
                </div>

                <div className="fleet-owner">
                    <h4>Select Fleet Owner</h4>
                    <p><strong>Mohammed Lawal Abubakar</strong></p>
                    <small>softdiddy@gmail.com | 09000000000</small>
                </div>

                <button type="submit" className="add-fleet-btn">ADD FLEET</button>
            </form>
        </div>
    );
};
// fgfdf
export default AddFleet;
