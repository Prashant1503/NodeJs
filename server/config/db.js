const mongoose = require('mongoose');
require('dotenv').config();

const dbConfig = async () => {

    try {
        mongoose.connect(process.env.mongo_uri,{
            useCreateIndex : true,
            useNewUrlParser : true,
            useUnifiedTopology : true,
            useFindAndModify : false
        })
        .then(() => console.log('Database connected successfully'))
        .catch(err => console.log(`Conection failed : ${err}`));

    } catch (err) {
        console.log(`Connection err : ${err}`);
    }

}

module.exports =  dbConfig;