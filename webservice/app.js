/* eslint-disable linebreak-style */
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const routers = require('./src/routers/router');
const port = 3030;

const app = express();
app.use(cors());
app.use(morgan('dev'));

app.use(routers);



app.listen(port, () => {
	console.log(`Running application on port:  http://localhost:${port}`);
});