const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');


router.get('/:id', rejectUnauthenticated, (req, res) => {
    // GET route code here
    let queryText = `SELECT brand.name, clothing.id, clothing.item_name, clothing.item_size, 
                     clothing.item_note, clothing.brand_id FROM clothing JOIN brand 
                     ON clothing.brand_id = brand.id WHERE brand_id=$1 AND user_id=$2;`
    console.log('Req params', req.params)
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
    console.log('Req body', req.body)
    let item_name = req.body.itemName
    let item_size = req.body.itemSize
    let item_note = req.body.itemNote
    let brand_id = req.body.brandID
    let userId = req.user.id
    let queryText = `INSERT INTO "clothing" (item_name, item_size, item_note, brand_id, user_id)
                     VALUES ($1, $2, $3, $4, $5);`
    pool.query(queryText, [item_name, item_size, item_note, brand_id, userId])
        .then(result => {
            res.sendStatus(201)
        })
        .catch(error => {
            console.log('Error in add brand post', error)
            res.sendStatus(500)
        })
});

router.delete('/:id', (req, res) => {
    console.log('req params in delete route ', req.params)
    let itemId = req.params.id
    let userId = req.user.id
    const queryText = 'DELETE FROM clothing WHERE id=$1 AND user_id=$2;'
    pool.query(queryText, [itemId, userId])
        .then((result) => {
            res.sendStatus(200)
        })
        .catch((err) => {
            console.log('Error in delete brand router', err);
            res.sendStatus(500);
        });
})

router.put('/:id', (req, res) => {
    console.log('Edit req body', req.body)
    let id = req.params.id
    let itemName = req.body.itemName
    let itemSize = req.body.itemSize
    let itemNote = req.body.itemNote
    let queryText = `UPDATE clothing SET item_name=$1, item_size=$2, item_note=$3 WHERE id=$4`
    pool.query(queryText, [itemName, itemSize, itemNote, id])
        .then(() => {
            res.sendStatus(201)
        })
        .catch(err => {
            console.log('Error in closet PUT', err)
        })
})

module.exports = router;
