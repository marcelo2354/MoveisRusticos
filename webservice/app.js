/* LIBRARIES */
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const routers = require('./src/routers/router.js');

/* CONFIG */
const port = 3030;

const app = express();

/* MIDDLEWARE */
app.use(cors());
app.use(morgan('dev'));
app.use(routers);

/* RUN SERVER */

app.listen(port, () => {
	console.log(`Running application on port:  http://localhost:${port}`);
});