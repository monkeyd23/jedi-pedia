const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const checkJWT = require('express-jwt');

function apiRouter (database) {

    const router = express.Router();

    router.use(
        checkJWT({secret: process.env.JWT_SECRET}).unless({path: '/api/authenticate'})
    );

    router.use((err, req, res, next) => {
        if (err.name === 'UnauthorizedError')
            return res.status(401).json({error: err.message});
    });

    router.get('/jedis', (req, res) => {
        const jedisCollection = database.collection('jedis');
        jedisCollection.find({}).toArray( (err, docs) => {
            if (err)
                return res.status(500).json({"error" : err});
            return res.status(200).json(docs);
        });
    });

    router.post('/jedi', (req, res) => {
        const jedi = req.body;
        const jedisCollection = database.collection('jedis');
        jedisCollection.findOne(jedi, (err, docs) => {
            if (err)
                return res.status(500).json({"error" : err});
            return res.status(200).json(docs);
        });
    });

    router.post('/updatejedi', (req, res) => {
        const jedisCollection = database.collection('jedis');
        delete req.body.newvalue._id;
        jedisCollection.updateOne(req.body.query, {$set: req.body.newvalue}, (err, docs) => {
            if (err)
                return res.status(500).json({"error" : err});
            return res.status(200).json(docs);
        });
    });

    router.post('/jedis', (req, res) => {
        const jedi = req.body;
        const jedisCollection = database.collection('jedis');
        jedisCollection.insertOne(jedi, (err, records) => {
            if (err)
                return res.status(500).json({error: err});

            const newJedi = records.ops[0];
            return res.status(201).json(newJedi);
        });
    });

    router.post('/authenticate', (req, res) => {
        const user = req.body;
        const usersCollection = database.collection('users');

        usersCollection.findOne({ username: user.username }, (err, result) => {
            if (!result)
                return res.status(400).json({error: "user not found"});

            if (!bcrypt.compareSync(user.password, result.password))
                return res.status(401).json({error: "incorrect password"});

            const payload = {
                username: result.username,
                admin: result.admin
            };

            const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: '4h'});

            return res.json({
                message: "authenticated",
                token: token
            });
        });

    });


    return router;
}

module.exports = apiRouter;
