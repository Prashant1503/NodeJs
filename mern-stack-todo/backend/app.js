const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();


// middleware
require('dotenv').config();
require('./db');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());


// routes.
const taskRoute = require('./routes/task.routes');

app.use('/api',taskRoute);


// server part
app.listen(process.env.PORT,() => {
    console.log(`Server started listening on port : ` + process.env.PORT);
});