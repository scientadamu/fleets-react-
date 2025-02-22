import React from "react";

const FleetList = () => {
    const fleets = [
        { id: 1, name: "Fleet Alpha", type: "Truck", group: "Heavy Duty" },
        { id: 2, name: "Fleet Beta", type: "Van", group: "Logistics" },
        { id: 3, name: "Fleet Gamma", type: "Sedan", group: "Executive" },
    ];

    return (
        <div className="content-container">
            <h2>Fleet List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Fleet Name</th>
                        <th>Fleet Type</th>
                        <th>Fleet Group</th>
                    </tr>
                </thead>
                <tbody>
                    {fleets.map((fleet) => (
                        <tr key={fleet.id}>
                            <td>{fleet.name}</td>
                            <td>{fleet.type}</td>
                            <td>{fleet.group}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default FleetList;
