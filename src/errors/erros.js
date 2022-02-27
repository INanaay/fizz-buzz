/**
 * Parent class (Interface) for fizzbuzz params errors.
 */
class InvalidFizzBuzzArgs extends Error {
    /**
     * Takes the key and the value of the wrong param and sets the status code to 400.
     * @param key
     * @param value
     */
    constructor(key, value) {
        super();
        this.name = this.constructor.name;
        this.message = `Value: ${value} for param: ${key} is invalid.`
        this.status = 400;
    }

}

//Child classed, more precise.
class InvalidIntArg extends InvalidFizzBuzzArgs {}
class InvalidStringArg extends InvalidFizzBuzzArgs {}

/**
 * Simple Internal error.
 */
class InternalError extends Error {
    constructor() {
        super();
        this.name = this.constructor.name;
        this.message = `Server Internal Error.`
        this.status = 500;
    }
}

/**
 * An error if query params obj is not empty.
 */
class statisticsParamsError extends Error {
    constructor() {
        super();
        this.name = this.constructor.name;
        this.message = `Route does not accept params.`
        this.status = 400;
    }
}

module.exports = {
    InvalidFizzBuzzArgs,
    InvalidIntArg,
    InvalidStringArg,
    InternalError,
    statisticsParamsError
}

