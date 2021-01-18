const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');



router.get('/', rejectUnauthenticated, (req, res) => {
    let queryText = `SELECT "user".id, "user".username  FROM "user" WHERE searchable=true;`
    pool.query(queryText)
        .then(result => {
            res.send(result.rows)
        })
        .catch(err => {
            console.log('Error in user friend GET', err)
        })
});

router.get('/:id', rejectUnauthenticated, (req, res) => {
    let userID = req.user.id
    let queryText = `SELECT "user".id, "user".f_name, "user".l_name FROM "user" 
                     JOIN user_friend AS uf ON "user".id = uf.friend_id 
                     WHERE uf.user_id=$1;`;
    pool.query(queryText, [userID])
        .then((result) => {
            res.send(result.rows);
        }).catch((error) => {
            console.log('Error in followed user router GET', error);
            res.sendStatus(500);
        });
});


router.post('/', (req, res) => {
    // POST route code here
});

module.exports = router;