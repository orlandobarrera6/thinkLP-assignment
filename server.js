const express = require('express');
const app = express();

// Routes
const investigationRoutes = require('./routes/investigationRoutes');
const incidentRoutes = require('./routes/incidentRoutes');

// Middleware
app.use(express.json());

// Routes
app.use('/incidents', incidentRoutes);
app.use('/investigations', investigationRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({error: 'Internal server error'});
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
