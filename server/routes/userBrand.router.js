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
    // GET route code here
    console.log('is authenticated?', req.isAuthenticated());
    console.log('user', req.user);
    let queryText = `SELECT brand.id, brand."name", brand.logo FROM brand
                     JOIN user_brand AS ub ON brand.id = ub.brand_id 
                     JOIN "user" ON "user".id = ub.user_id WHERE "user".id=$1;`;
    pool.query(queryText, [req.params.id]).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error in USER brand router GET', error);
        res.sendStatus(500);
    });
});


router.post('/', (req, res) => {
    // POST route code here
});

module.exports = router;