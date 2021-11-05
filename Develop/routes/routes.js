const router = require('express').Router();
const db = require('../db/db.json');

router.use(require('express').json());

router.route('/notes')
    .get((req, res)=>{
        res.json(db);
    })
    .post((req, res) =>{
        db.push(req.body);
        res.json(db);
    });

    
module.exports = router;