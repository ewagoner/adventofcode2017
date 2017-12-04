// http://adventofcode.com/2017/day/3
// Part One

var input = [12, 23, 1024, 312051]

for (var i = 0; i < input.length; i++) {
    var foundRing = false;
    for (var ring = 0; foundRing == false; ring++) {
        var ringWidth = ((2 * ring) + 1);
        var max = (ringWidth ** 2);
        if (max >= input[i]) {
            foundRing = true;
            var foundSide = false;
            var corner = max;
            for (var side = 1; foundSide == false; side++) {
                corner = corner - ringWidth + 1;
                if (corner < input[i]) {
                    foundSide = true;
                    var middle = corner + parseInt(ringWidth / 2);
                    var steps = Math.abs(input[i] - middle);
                    console.log(input[i] + ": " + (ring + steps));
                }
            }   
        }
    }
}

