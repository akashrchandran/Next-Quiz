const express = require('express');
const router = express.Router();
const Word = require('../model/word');


// 
// see https://docs.mongodb.com/manual/meta/aggregation-quick-reference/index.html
router.get('/word',function(req,res,next){
    Word.aggregate([{ $sample: { size: 4 } }]).then(function(word){
        res.send(word);
    }).catch(next);
});

module.exports = router;