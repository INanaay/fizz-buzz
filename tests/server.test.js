const server = require('../server')
const request = require("supertest");
const redisClient = require('../src/redis')

const emptyReqMock = () => {
    return {}
}

const correctFizzBuzzMock = {
        int1: 2,
        int2: 5,
        limit: 100,
        str1: 'foo',
        str2: 'bar'
}

describe("Test Endpoints", () => {
    test("Simple / test", () => {
        return request(server)
            .get("/")
            .expect(200);
    });

    test("Simple statistics", () => {
        return request(server)
            .get("/statistics")
            .expect(200);
    });

    test("fizzbuzz", () => {
        return request(server)
            .get("/fizzbuzz").query(correctFizzBuzzMock)
            .expect(200);
    });

    test("wrong route", () => {
        return request(server).get("/plplpl").expect(404);
    });


});

afterAll(async () => {
    const quit = await redisClient.quit()
});

