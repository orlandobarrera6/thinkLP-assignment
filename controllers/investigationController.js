const investigationService = require('../services/investigationService');
const {objectInfos} = require('../objectInfos.json');

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

        timeline = processTimeline(timeline);

        res.json(timeline);
    } catch (err) {
        console.error(err);
        res.status(500).json({error: "An error occurred while fetching the timeline"});
    }
};

function processTimeline(timeline) {
    const safeFields = ['event_type', 'event_date', 'record_type'];

    // Remove key-value pairs with null values
    // Loop through each event
    timeline.forEach(event => {
        // Loop through each property in the event
        for (const property in event) {
            // If the property's value is null, delete the property  or key-value pair
            if (event[property] === null) {
                delete event[property];
            }
        }
    });

    // Bonus
    // Loop through each event
    timeline.forEach(event => {
        const recordType = event.record_type;
        if (event.event_type === 'investigation_activity') {
            const fields = objectInfos.Investigation_Activity.recordTypeToFields[recordType];

            if (!fields) {
                return;
            }

            // Loop through the keys of the event
            Object.keys(event).forEach(key => {
                // If the key is not in the list of fields for the record type, delete the key-value pair
                if (!fields.includes(key) && !safeFields.includes(key)) {
                    delete event[key];
                }
            });
        } else {
            const fields = objectInfos.Incident.recordTypeToFields["__Default__"];

            // Loop through the keys of the event
            Object.keys(event).forEach(key => {
                // If the key is not in the list of fields for the record type, delete the key-value pair
                if (!fields.includes(key) && !safeFields.includes(key)) {
                    delete event[key];
                }
            });
        }
    });

    return timeline;
}
