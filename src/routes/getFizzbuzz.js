const express = require('express');
const {addToStatistics} = require("../utils/redis/stats");
const router = express.Router();
const {checkParams} = require('../utils/fizzbuzz/paramsCheck')
const {fizzbuzz} = require("../utils/fizzbuzz/fizzbuzz");


/**
 * /GET fizzbuzz
 * Takes 5 params: int1, int2, limit, str1, str2
 * Creates a list of strings, from 1 to limit, where all multiples of int1 are replaced by str1,
 * all multiples of int2 are replaced by str2, all multiples of int1 and int 2 replaced by str1str2.
 */
router.get('/fizzbuzz',  (req, res, next) => {
    try {
        //check if params are correct
        checkParams(req.query)
    }

    catch (e) {
        return next(e)
    }

    const { query } = req;

    //add query to redis db.
    addToStatistics(query).then(() => console.log("Successfully saved stat."))

    //call fizzbuzz function and send its response
    const { int1, int2, limit, str1, str2 } = query
    res.send(fizzbuzz(int1, int2, limit, str1, str2));
})

module.exports = router;
