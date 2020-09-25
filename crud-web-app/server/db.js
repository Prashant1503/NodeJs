const mongoose = require('mongoose');
require('dotenv').config();


    mongoose.connect(process.env.MONGO_URI,{
        useUnifiedTopology : true,
        useNewUrlParser : true,
        useCreateIndex : true
    })
    .then(() => {
        console.log('Database connected success');
    })
    .catch((err) => {
        console.log(`Connection error : ${err} `);
    });
