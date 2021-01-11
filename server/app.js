const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const dbConfig = require('./config/db');
const cors = require('cors');
const app = express();

// cors option
const corsOption = {
    origin : 'http://localhost:4000/',
    optionSuccessStatus : 200
};


// middleware
dbConfig();
require('dotenv').config();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use(cors(corsOption));


// has route
const userRoute = require('./routes/user.route');
const employeeRoute = require('./routes/employee');
const adminRoute = require('./routes/admin');
const managerRoute = require('./routes/manager');




// routes
app.use('/api/user/',userRoute);
app.use('/api/employee/',employeeRoute);
app.use('/api/admin/',adminRoute);
app.use('/api/manager/',managerRoute);



const port = process.env.PORT || 4001;

// server listening
app.listen(port,() => console.log(`Server running on port : ${port}`));