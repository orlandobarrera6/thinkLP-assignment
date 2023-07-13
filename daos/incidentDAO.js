// Assuming you have a database connection established
const db = require('../db');


exports.getAllIncidents = async () => {
    // Perform database query to retrieve all incidents
    const query = 'SELECT * FROM incident';
    const {rows} = await db.query(query);
    return rows;
};
