const investigationService = require('../services/investigationService');


exports.getAllInvestigations = async (req, res) => {
    try {
        const investigations = await investigationService.getAllInvestigations();
        res.json(investigations);
    } catch (err) {
        console.error(err);
        res.status(500).json({error: "An error occurred while fetching the timeline"});
    }
};

exports.getInvestigationTimeline = async (req, res) => {
    const investigation_id = req.params.investigation_id;

    try {
        let timeline = await investigationService.getAllInvestigationTimeline(investigation_id);

        // Loop through each result
        timeline = timeline.map(result => {
            // Loop through each property in the result
            for (const property in result) {
                // If the property's value is null, delete the property
                if (result[property] === null) {
                    delete result[property];
                }
            }
            return result;
        });

        // Bonus

        res.json(timeline);
    } catch (err) {
        console.error(err);
        res.status(500).json({error: "An error occurred while fetching the timeline"});
    }
};


// TODO: look into joins
// TODO: look into coalesce
// TODO: ORDER BY COALESCE (Incident_Date, Activity_Date, Investigation_Date) DESC; --> for join
// TODO: switch is better here with accesible interfaces for each record type  for bonus
