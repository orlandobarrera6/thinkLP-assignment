module.exports = {
    development: {
        client: 'pg',
        connection: {
            host: 'localhost',
            user: 'postgres',
            password: 'password',
            database: 'thinklp_assignment_db',
            port: 5434,
        },
        migrations: {
            directory: './db/migrations',
        },
        seeds: {
            directory: './db/seeds',
        },
    },
    // Add other environment configurations as needed (e.g., production, testing)
};
