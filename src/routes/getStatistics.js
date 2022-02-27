const express = require('express');
const {checkQueryEmpty} = require("../utils/shared/checkQueryEmpty");
const {getHighestScore} = require("../utils/redis/stats");
const router = express.Router();

/**
 * /GET Statistics
 * Takes no params
 * Returns the most used request with the number of hits
 */
router.get('/statistics', async (req, res, next) => {

    //check if there are any params
    try {
        console.log(req.query)
        checkQueryEmpty(req.query)
    } catch (e) {
        return next(e)
    }

    //get highestScore saved in redis.
    const highestScore = await getHighestScore();

    //send response.
    res.send(JSON.stringify(highestScore));
})

module.exports = router;
