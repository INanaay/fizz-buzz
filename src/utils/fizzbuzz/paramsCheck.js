const {InvalidStringArg, InvalidIntArg} = require("../../errors/erros");

/**
 * A function that check if a variable is a positive integer.
 * @param params - The query params obj
 * @param key - The key to check
 * @returns {boolean}
 */
const isPositiveInteger = (params, key) => {
    const value = params[key]

    if (!value || typeof value !== 'string') {
        throw new InvalidIntArg(key, value)
    }

    const num = Number(value);

    if (Number.isInteger(num) && num > 0) {
        return true;
    }
    throw new InvalidIntArg(key, value)
}

/**
 * A function that checks if a variable is a valid string.
 * @param params - The query params obj
 * @param key - The key to check
 * @returns {boolean}
 */
const isStringValid = (params, key) => {
    //check if not null and type is of string.
    if (!params[key] || typeof params[key] !== 'string')
        throw new InvalidStringArg(key, params[key]);
    return true;
}

/**
 * A function that checks if all the query params of a fizzbuzz request are valid.
 * @param params - the query params.
 * @returns {boolean}
 */
const checkParams = (params) => {
    isPositiveInteger(params, 'int1');
    isPositiveInteger(params, 'int2');
    isPositiveInteger(params, 'limit');
    isStringValid(params, 'str1');
    isStringValid(params, 'str2');

    return true;
}

module.exports = {
    checkParams
}
