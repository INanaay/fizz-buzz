const express = require('express')
const redis = require('redis');
const fizzbuzz = require('./src/routes/getFizzbuzz');
const stats = require('./src/routes/getStatistics');

const { errorLogger, errorResponder, invalidPathHandler } = require('./src/middlewares/ErrorMiddleware');
const { PORT = '3000' } = process.env
const app = express()

// routers
app.use(fizzbuzz)
app.use(stats)
app.get("/", (req, res) => {
    res.status(200).send("Hello World!");
});

// middlewares
app.use(errorLogger)
app.use(errorResponder)
app.use(invalidPathHandler)




//init server
module.exports = app.listen(PORT, () => {
    console.log("Server listening on port ", PORT)
})


