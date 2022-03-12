function Ball(r, p, v) {
    this.radius = r;
    this.point = p;
    this.vector = v;
    //controls speed
    this.maxVec = 4;
    //controls number of segments. The Segment object represents the points of a path through which its Curve objects pass. 
    this.numSegment = Math.floor(r / 10 + 10);
    this.boundOffset = [];
    this.boundOffsetBuff = [];
    this.sidePoints = [];
    this.path = new Path({
        fillColor: {
            hue: Math.random() > 0.6 ? 90 : 300,
            saturation: 1,
            brightness: Math.random() > 0.7 ? 0 : 1
        },
        strokeWidth: 2,
        blendMode: 'lighter'
    });

    for (var i = 0; i < this.numSegment; i++) {
        this.boundOffset.push(this.radius);
        this.boundOffsetBuff.push(this.radius);
        this.path.add(new Point());
        this.sidePoints.push(new Point({
            angle: 720 / this.numSegment * i,
            length: 1
        }));
    }
}

Ball.prototype = {
    iterate: function () {
        this.checkBorders();
        if (this.vector.length > this.maxVec)
            this.vector.length = this.maxVec;
        this.point += this.vector;
        this.updateShape();
    },

    checkBorders: function () {
        //view is similar to viewPort. Here size has two properties height and width
        var size = view.size;
        if (this.point.x < -this.radius)
            this.point.x = size.width + this.radius;
        if (this.point.x > size.width + this.radius)
            this.point.x = -this.radius;
        if (this.point.y < -this.radius)
            this.point.y = size.height + this.radius;
        if (this.point.y > size.height + this.radius)
            this.point.y = -this.radius;
    },

    updateShape: function () {

        var segments = this.path.segments;
        for (var i = 0; i < this.numSegment; i++)
            segments[i].point = this.getSidePoint(i);

        this.path.smooth();
        for (var i = 0; i < this.numSegment; i++) {
            if (this.boundOffset[i] < this.radius / 4)
                this.boundOffset[i] = this.radius / 4;
            var next = (i + 1) % this.numSegment;
            var prev = (i > 0) ? i - 1 : this.numSegment - 1;
            var offset = this.boundOffset[i];
            offset += (this.radius - offset) / 15;
            offset += ((this.boundOffset[next] + this.boundOffset[prev]) / 2 - offset) / 3;
            this.boundOffsetBuff[i] = this.boundOffset[i] = offset;
        }
    },

    react: function (b) {
        var dist = this.point.getDistance(b.point);
        if (dist < this.radius + b.radius && dist != 0) {
            var overlap = this.radius + b.radius - dist;
            var direc = (this.point - b.point).normalize(overlap * 0.015);
            this.vector += direc;
            b.vector -= direc;

            this.calcBounds(b);
            b.calcBounds(this);
            this.updateBounds();
            b.updateBounds();
        }
    },

    getBoundOffset: function (b) {
        var diff = this.point - b;
        var angle = (diff.angle + 180) % 360;
        return this.boundOffset[Math.floor(angle / 360 * this.boundOffset.length)];
    },

    calcBounds: function (b) {
        for (var i = 0; i < this.numSegment; i++) {
            var tp = this.getSidePoint(i);
            var bLen = b.getBoundOffset(tp);
            var td = tp.getDistance(b.point);
            if (td < bLen) {
                this.boundOffsetBuff[i] -= (bLen - td) / 2;
            }
        }
    },

    getSidePoint: function (index) {
        return this.point + this.sidePoints[index] * this.boundOffset[index];
    },

    updateBounds: function () {
        for (var i = 0; i < this.numSegment; i++)
            this.boundOffset[i] = this.boundOffsetBuff[i];
    }
};

//--------------------- main ---------------------

var balls = [];
var numBalls = 20;

for (var i = 0; i < numBalls; i++) {
    var position = Point.random() * view.size;
    var vector = new Point({
        angle: 360 * Math.random(),
        length: Math.random() * 10 + 10
    });
    var radius = Math.random() * 60 + 60;
    balls.push(new Ball(radius, position, vector));
}



// function onFrame() {

// }


for (var i = 0; i < balls.length - 1; i++) {
    for (var j = i + 1; j < balls.length; j++) {
        balls[i].react(balls[j]);
    }
}
for (var i = 0, l = balls.length; i < l; i++) {
    balls[i].iterate();
}

function onKeyDown(event) {
    if (event.key === "s") {
        downloadAsSVG();
    }
}

function downloadAsSVG(fileName) {
    // use default name if not provided
    fileName = fileName || "output.svg";

    // create a data url of the file
    var svgData = project.exportSVG({ asString: true });
    var url = "data:image/svg+xml;utf8," + encodeURIComponent(svgData);

    // create a link to the data, and "click" it
    var link = document.createElement("a");
    link.download = fileName;
    link.href = url;
    link.click();
}