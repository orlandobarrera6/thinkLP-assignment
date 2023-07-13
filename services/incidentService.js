const incidentDAO = require('../daos/incidentDAO');

exports.getAllIncidents = async () => {
    return incidentDAO.getAllIncidents();
};

