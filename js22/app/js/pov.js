/**
 * Created by apple on 14.03.16.
 */

// POV

var app = {
    pov: function (number, degree) {
        var result = 1;
        for (var i = 0; i < degree; i++) {
            result = result * number;
        }
        return result;
    }
};

module.exports = app;