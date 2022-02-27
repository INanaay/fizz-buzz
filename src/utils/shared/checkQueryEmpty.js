const {statisticsParamsError} = require("../../errors/erros");

/**
 * A function that checks if the query has no params.
 * @param query
 * @returns {boolean}
 */
const checkQueryEmpty = (query) => {
    if (Object.keys(query).length !== 0) {
        throw new statisticsParamsError()
    }

    return true;
}

module.exports = {
    checkQueryEmpty
}
