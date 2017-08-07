require('dotenv').config(); 

const users = require('./users');
const contacts = require('./contacts');

const MongoClient = require('mongodb').MongoClient;
const bcrypt = require('bcrypt');

function seedCollection (collectionName, initialRecords) {
    console.log(process.env.DB_CONN);
    MongoClient.connect(process.env.DB_CONN, (err, db) => {
        
        if(err) {
            console.log("connection failed with message");
            console.log(err);
            return;
        }

        const collection = db.collection(collectionName);
        collection.remove();

        initialRecords.forEach( (item) => {
            if(item.password)
                item.password = bcrypt.hashSync(item.password, 10);
        });

        collection.insertMany(initialRecords, function(err, result) {
            console.log(`${result.insertedCount} records inserted`);
            console.log("closing connection");
            db.close();
            console.log("done");
        });
    });
}


seedCollection('users', users);
seedCollection('contacts', contacts);