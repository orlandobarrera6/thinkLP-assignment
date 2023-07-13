// Assuming you have a database connection established
const db = require('../db');

exports.getAllInvestigations = async () => {
    // Perform database query to retrieve all investigations
    const query = 'SELECT * FROM investigation';
    const {rows} = await db.query(query);
    return rows;
};

exports.getInvestigationTimeline = async (investigation_id) => {
    // Perform database query to retrieve timeline by investigation_id
    const query = `
        SELECT 'incident'    as event_type,
               incident_id   as event_id,
               incident_date as event_date,
               name,
               record_type,
               status,
               case_value,
               incident_type,
               NULL          as investigation_activity_location,
               NULL          as date_issued,
               NULL          as issued_by,
               NULL          as start_date
        FROM incident
        WHERE investigation_id = '${investigation_id}'
        UNION ALL
        SELECT 'investigation_activity'  as event_Type,
               investigation_activity_id as event_id,
               activity_date             as event_date,
               name,
               record_type,
               status,
               NULL                      as case_value,
               NULL                      as incident_type,
               investigation_activity_location,
               date_issued,
               issued_by,
               start_date
        FROM investigation_activity
        WHERE investigation_id = '${investigation_id}'
        ORDER BY event_date DESC;`

    const {rows} = await db.query(query);
    return rows;
};
