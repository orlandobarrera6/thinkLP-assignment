// Assuming you have a database connection established
const db = require('../db');

const knex = require('knex');
const knexConfig = require('../Knexfile.js');

const dbKnex = knex(knexConfig.development);

exports.getAllIncidents = async () => {
    try {
        return await dbKnex('incident').select('*');
    } catch (error) {
        console.error(error);
        throw error;
    }
};

