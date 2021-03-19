const express = require('express');
const app = express();

app.use('/api/auth', authRoutes)

module.exports = app;
