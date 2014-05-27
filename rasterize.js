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
		if(x0 == x1 && y0 == y1) {
			return [{x: x0, y: y0}];
		}
	    var points = [];
		var L = Math.max(Math.abs(x0-x1), Math.abs(y0-y1));
		var dX = (x1-x0) / L;
		var dY = (y1-y0) / L;
		var t1 = x0, t2 = y0;
		points.push({x: x0, y: y0});
		for(var i = 1; i <= L; ++i)
		{
			t1 += dX;
			t2 += dY;
			points.push({
			x: Math.round(t1),
			y: Math.round(t2)});
		}
		return points;
    },

    lineS: function(x0, y0, x1, y1) {
        if(x0 == x1 && y0 == y1) {
			return [{x: x0, y: y0}];
		}
		var points = [];
		if (Math.abs(x0 - x1) >= Math.abs(y0 - y1)) {
            var k = (y0 - y1) / (x0 - x1);
            var b = y0 - k * x0;
			var dx = (x1 > x0 ? 1 : -1);

            while (x0 - dx != x1) {
                var y = Math.round(k * x0 + b);
                points.push({
                    x: x0,
                    y: y
                });
                x0 += dx;
            }

        } else {
            var k = (x0 - x1) / (y0 - y1);
            var b = x0 - k * y0;
			var dy = (y1 > y0 ? 1 : -1);

            while (y0 - dy != y1) {
                var x = Math.round(k * y0 + b);
                points.push({
                    x: x,
                    y: y0
                });
                y0 += dy;
            }
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
