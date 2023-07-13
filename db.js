const {Pool} = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'thinklp_assignment_db',
    password: 'password',
    port: 5434,
});

module.exports = {
    query: (text, params) => pool.query(text, params),
};
