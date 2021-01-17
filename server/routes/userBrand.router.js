const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');


router.get('/', (req, res) => {
    let queryText = 'SELECT * FROM brand ORDER BY name'
    pool.query(queryText)
        .then(result => {
            res.send(result.rows);
        })
        .catch(error => {
            console.log('Error in ALL BRAND GET', error)
        })
})

router.get('/:id', rejectUnauthenticated, (req, res) => {
    console.log('is authenticated?', req.isAuthenticated());
    console.log('user', req.user);
    let queryText = `SELECT brand.id, brand."name", brand.logo FROM brand
                     JOIN user_brand AS ub ON brand.id = ub.brand_id 
                     JOIN "user" ON "user".id = ub.user_id WHERE "user".id=$1;`;
    pool.query(queryText, [req.user.id]).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error in USER brand router GET', error);
        res.sendStatus(500);
    });
});


router.post('/:id', (req, res) => {
    let brandId = req.body.bId
    let userId = req.params.id
    let queryText = `INSERT INTO "user_brand" ("user_id", "brand_id")
    VALUES ($1, $2);`
    pool.query(queryText, [userId, brandId])
        .then(result => {
            res.sendStatus(201)
        })
        .catch(error => {
            console.log('Error in add brand post', error)
            res.sendStatus(500)
        })
});

router.delete('/:id', (req, res) => {
    let brandId = req.params.id
    let userId = req.user.id
    const queryText = 'DELETE FROM user_brand WHERE brand_id=$1 AND user_id=$2';
    pool.query(queryText, [brandId, userId])
        .then((result) => {
            res.sendStatus(200)
        })
        .catch((err) => {
            console.log('Error in delete brand router', err);
            res.sendStatus(500);
        });
})

module.exports = router;