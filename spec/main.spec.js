const Main = require('../lib/Main');

describe("main", function () {
    it("returns same Number", function () {
        let main = new Main();
        let result = main.test(1);
        expect(result).toBe(1);
    });
});

