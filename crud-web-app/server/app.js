const expres = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = expres();


// middleware
require('dotenv').config();
require('./db');
app.use(bodyParser.json());
app.use(cors());


// route.
const postRoute = require('./routes/post.route');


app.use('/api',postRoute);


// server.
app.listen(process.env.PORT,() => {
    console.log(`Server started on port : ${process.env.PORT}`);
});