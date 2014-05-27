var rasterize = {

    lineB: function(x0, y0, x1, y1) {

        var points = [];

        var dx = Math.abs(x1 - x0);
        var dy = Math.abs(y1 - y0);
        var sx = (x0 < x1) ? 1 : -1;
        var sy = (y0 < y1) ? 1 : -1;
        var err = dx - dy;

        var e2;

        while (true) {

            points.push({
                x: x0,
                y: y0
            });

            if ((x0 == x1) && (y0 == y1)) break;

            e2 = 2 * err;

            if (e2 > -dy) {
                err -= dy;
                x0 += sx;
            }
            if (e2 < dx) {
                err += dx;
                y0 += sy;
            }
        }

        return points;
    },

    lineD: function(x0, y0, x1, y1) {

        var points = [];

        var dx = Math.abs(x1 - x0);
        var dy = Math.abs(y1 - y0);
        var sx = (x0 < x1) ? 1 : -1;
        var sy = (y0 < y1) ? 1 : -1;
        var err = dx - dy;

        var e2;

        while (true) {

            points.push({
                x: x0,
                y: y0
            });

            if ((x0 == x1) && (y0 == y1)) break;

            e2 = 2 * err;

            if (e2 > -dy) {
                err -= dy;
                x0 += sx;
            }
            if (e2 < dx) {
                err += dx;
                y0 += sy;
            }

        }

        return points;
    },

    lineS: function(x0, y0, x1, y1) {
        var points = [];
        if (x0 !== x1) {
            var k = (y0 - y1) / (x0 - x1);
            var b = y0 - k * x0;

            while (true) {
                var y = Math.round(k * x0 + b);
                points.push({
                    x: x0,
                    y: y
                });
                if (x0 === x1) {break;}
                if (x0 < x1) {
                    x0 += 1;
                } else {
                    x0 -= 1;
                }
            }

        } else {
        		
        }
        return points;
    },

    circleB: function(x0, y0, r) {

        var points = [];

        var y = r;
        var x = 0;
        var err = -r;

        points.push({
            x: x0 + x,
            y: y0 + y
        });
        points.push({
            x: x0 + x,
            y: y0 - y
        });
        points.push({
            x: x0 - x,
            y: y0 + y
        });
        points.push({
            x: x0 - x,
            y: y0 - y
        });
        points.push({
            x: x0 + y,
            y: y0 + x
        });
        points.push({
            x: x0 + y,
            y: y0 - x
        });
        points.push({
            x: x0 - y,
            y: y0 + x
        });
        points.push({
            x: x0 - y,
            y: y0 - x
        });

        while (x <= y) {

            points.push({
                x: x0 + x,
                y: y0 + y
            });
            points.push({
                x: x0 + x,
                y: y0 - y
            });
            points.push({
                x: x0 - x,
                y: y0 + y
            });
            points.push({
                x: x0 - x,
                y: y0 - y
            });
            points.push({
                x: x0 + y,
                y: y0 + x
            });
            points.push({
                x: x0 + y,
                y: y0 - x
            });
            points.push({
                x: x0 - y,
                y: y0 + x
            });
            points.push({
                x: x0 - y,
                y: y0 - x
            });

            err += x;
            ++x;
            err += x;
            if (err >= 0) {
                y = y - 1;
                err -= 2 * y;
            }
        }

        return points;
    }

}
