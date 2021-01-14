const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/:id', (req, res) => {
    // GET route code here
    let queryText = 'SELECT * FROM clothing WHERE brand_id=$1 AND user_id=$2;'
    let userId = req.user.id
    let brandId = req.params.id
    pool.query(queryText, [brandId, userId])
        .then(result => {
            res.send(result.rows)
        })
        .catch(error => {
            console.log('Error in clothing GET', error)
        })
});


router.post('/', (req, res) => {
    // POST route code here
});

module.exports = router;
