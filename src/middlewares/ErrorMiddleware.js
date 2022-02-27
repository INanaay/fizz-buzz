
//Simple error logger with colors for error.
const errorLogger = (err, req, res, next) => {
    //pretty log
    console.error('\x1b[31m', err);
    next(err);
}

//Handles responding with the error.
const errorResponder = (err, req, res, next) => {
    res.header("Content-Type", 'application/json');
    res.status(err.status).send(err.message);
}

//Handles unknown routes.
const invalidPathHandler = (req, res) => {
    res.status(404).send("The URL you are trying to reach does not exist.")

}

module.exports = { errorLogger, errorResponder, invalidPathHandler }
