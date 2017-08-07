require('dotenv').config();

const MongoClient = require('mongodb').MongoClient;
const createExpressApp = require('./create-express-app');


MongoClient.connect(process.env.DB_CONN, (err, db) => {
    
    if(err) {
        console.log("connection failed with message");
        console.log(err);
        return;
    }

    console.log("connected to mongodb");

    createExpressApp(db).
    listen(3000, () => {
        database = db;
        console.log("server is listening on port 3000");
    });
});