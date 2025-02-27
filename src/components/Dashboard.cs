.dashboard-container {
    padding: 20px;
    background: #f4f4f4;
}

/* General Container */
.container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

/* Columns */
.column, .columna {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

/* Cards */
.card {
    background: white;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    width: 250px;
}

.card h3 {
    font-size: 18px;
    color: #333;
}

.fleet_num {
    font-size: 32px;
    font-weight: bold;
    color: #007bff;
}

/* Fleet Images */
.fleet_img_container {
    display: flex;
    justify-content: center;
    margin-top: 10px;
}

.fleet_img {
    width: 50px;
    height: 50px;
}

/* Transaction Section */
.columna h3 {
    font-size: 18px;
    margin-bottom: 10px;
}

.transaction_img {
    width: 100%;
    max-width: 300px;
}

/* Upcoming Maintenance */
#upcoming {
    display: flex;
    justify-content: center;
    gap: 10px;
}

.upcomingImages img {
    width: 100px;
    height: auto;
}
