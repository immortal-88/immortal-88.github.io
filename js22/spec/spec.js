/**
 * Created by apple on 01.06.16.
 */

var app = require('../app/js/pov.js');

describe("app", function() {
    it("it should strictly compare numbers entered and degree", function() {
        // prepare
        var result;

        // act
        result = app.pov(2, 3);

        // assert
        expect(result).toBe(8);
    });
    it("it should compare numbers entered and degree", function() {
        // prepare
        var result;

        // act
        result = app.pov(2, 4);

        // assert
        expect(result).toEqual(16);
    });
    it("it should in 1st degree not be null", function() {
        // prepare
        var result;

        // act
        result = app.pov(2, 0);

        // assert
        expect(result).not.toBeNull();
    });
    it("it should be less then 125", function() {
        // prepare
        var result;

        // act
        result = app.pov(2, 5);

        // assert
        expect(result).toBeLessThan(125);
    });
});