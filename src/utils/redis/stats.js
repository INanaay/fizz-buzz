const redisClient = require('../../redis')
const {InternalError} = require("../../errors/erros");

/**
 * A funciton that adds a key - value pair to the redis db, or increments
 * its score if it's already present.
 * @param params
 * @returns {Promise<boolean>} - If the key value has successfully been saved.
 */
const addToStatistics = async (params) => {

    //create key from the params (params separated by '-')
    const key = `${params.int1}-${params.int2}-${params.limit}-${params.str1}-${params.str2}`

    //Add or increase the score value of the key
    try {
        await redisClient.zIncrBy("stats", 1, key);
    }
    catch (e) {
        console.log(e)
        //Check if there were any redis errors
        throw new InternalError()
    }

    return true;
}

/**
 * A functions that retrieves the highest key-score value from the redis db.
 * @returns {Promise<{score: *, int2, int1, str1, str2, limit}>} - An object with the keys split, and the score.
 */
const getHighestScore = async () => {
    try {
        // get single highest score from redis.
        const highestScore = await redisClient.zRangeWithScores('stats', '+inf', '-inf', {
            BY: 'SCORE',
            REV: true,
            LIMIT: {
                offset: 0,
                count: 1
            }
        }, 1);

        //if no stats have been saved
        console.log(highestScore)
        if (highestScore.length === 0)
            return {}

        //add the params by spliting them by "-"
        const params = highestScore[0].value.split('-');

        //return response obj with params and score.
        return {
            hits: highestScore[0].score,
            int1: params[0],
            int2: params[1],
            limit: params[2],
            str1: params[3],
            str2: params[4]
        };

    }
    catch (e) {
        console.log(e)
        throw new InternalError(e)
    }
}

module.exports = {
    addToStatistics,
    getHighestScore
}
