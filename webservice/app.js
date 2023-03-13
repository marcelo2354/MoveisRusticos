/* DOTENV */
require('dotenv').config();

/* LIBRARIES */
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./src/routes.js');

/* CONFIG */
const app = express();
const port = process.env.PORT || 3030;
const dbConnString = process.env.DB_CONNECTION_STRING;

/* MIDDLEWARE */
app.use(cors());
app.use(morgan('dev'));
app.use('/', routes);

/* RUN DATABASE AND SERVER */
mongoose.connect(dbConnString).then(() => {
    console.log(`Connected to ${dbConnString} successfully...`);
    app.listen(port, () => {
        console.log(`Running application on port:  http://localhost:${port}`);
    });
});
