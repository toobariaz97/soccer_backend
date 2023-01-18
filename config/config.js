const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;


const mongoDB = async () => {
    MongoClient.connect(process.env.MONGOOSE_URI, function (err, db) {

        if (db) {
            mongoose.set('debug', true);
            console.log("Connected");
        }
        else {
            console.log(err);
        }
    });

};

module.exports = mongoDB;