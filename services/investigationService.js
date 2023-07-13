// Assuming you have a database connection established
const investigationDAO = require('../daos/investigationDAO');

exports.getAllInvestigations = async () => {
    return investigationDAO.getAllInvestigations();
};

exports.getAllInvestigationTimeline = async (investigation_id) => {
    return investigationDAO.getInvestigationTimeline(investigation_id);
};