const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');



router.get('/', rejectUnauthenticated, (req, res) => {
    let queryText = `SELECT "user".id, "user".f_name, "user".l_name  FROM "user" WHERE searchable=true;`
    pool.query(queryText)
        .then(result => {
            res.send(result.rows)
        })
        .catch(err => {
            console.log('Error in user friend GET', err)
        })
});


router.post('/', (req, res) => {
    // POST route code here
});

module.exports = router;