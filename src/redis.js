const redis = require('redis');

let client;

/**
 * Init the redis connection.
 */
(async () => {

    client = redis.createClient({
        url: 'redis://redis:6379'
    });

    client.on('connect', (resp) => console.log("Redis client connected"))

    client.on('error', (err) => console.log('Redis Client Error', err));

    await client.connect();


})();

module.exports = client
