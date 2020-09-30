const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser : true,
    useUnifiedTopology : true,
    useCreateIndex : true,

}).then(() => {
    return console.log(`Connected to mongdb`);
}).catch((err) => {
    return console.log(`Connection err : ${err}`);
});