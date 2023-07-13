const incidentService = require('../services/incidentService');

exports.getAllIncidents = async (req, res) => {
    try {
        const incidents = await incidentService.getAllIncidents();
        res.json(incidents);
    } catch (err) {
        console.error(err);
        res.status(500).json({error: 'An error occurred while fetching users'});
    }
};
