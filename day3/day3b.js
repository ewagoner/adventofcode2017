// http://adventofcode.com/2017/day/3
// Part Two

var rings = [[1]];
var ringValues = [1,2,4,5,10,11,23,25];
var currentValue = 0;
var currentPosition = 0;
var solved = false;
var ringID = 1;
var ringWidth = 1;
var maxCells = 1;

for (var i = 10; solved == false; i++) {
    if (i > maxCells) {
        ringID = ringID + 1;
        ringWidth = ((2 * ringID) + 1);
        maxCells = ringWidth ** 2;
        rings.push(ringValues);
        ringValues = [];
        currentPosition = 0;
        var side = 1;
        var offset = 0;
    }
    if (ringID > 1) {
        var previousRing = rings[ringID - 1];
    }
    // First position
    if (currentPosition == 0) {
        currentValue = currentValue + previousRing[previousRing.length - 1];
        if (ringID > 1) {
            currentValue = currentValue + previousRing[0]; 
        }
    // Next to last position
    } else if (currentPosition + 1 == (ringWidth * 4) - 5) {
        currentValue = currentValue + previousRing[previousRing.length - 1];
        currentValue = currentValue + previousRing[previousRing.length - 2];
        currentValue = currentValue + ringValues[currentPosition - 1];
        currentValue = currentValue + ringValues[0];
    // Last postition
    } else if (currentPosition + 1 == (ringWidth * 4) - 4) {
        currentValue = currentValue + previousRing[previousRing.length - 1];
        currentValue = currentValue + ringValues[currentPosition - 1];
        currentValue = currentValue + ringValues[0];
    } else {
        // First space gets last value for previous row
        if (currentPosition == 1) {
            currentValue = ringValues[0];
            currentValue = currentValue + previousRing[previousRing.length - 1];
            currentValue = currentValue + previousRing[0];
            currentValue = currentValue + previousRing[1];
        } else {
            // Previuos space
            currentValue = ringValues[currentPosition - 1];
            // Sees inner row
            currentValue = currentValue + previousRing[currentPosition - offset];
            currentValue = currentValue + previousRing[currentPosition - offset - 1];
            currentValue = currentValue + previousRing[currentPosition - offset - 2];

            // Before a corner
            if ((currentPosition + side + 2) % ringWidth == 0) {
                currentValue = currentValue - previousRing[currentPosition - offset];
            }
            // At a corner
            if ((currentPosition + side + 1) % ringWidth == 0) {
                side = side + 1;
                currentValue = currentValue - previousRing[currentPosition - offset];
                currentValue = currentValue - previousRing[currentPosition - offset - 1];
                var offset = (side - 1) * 2;
            }
            // After a corner
            if ((currentPosition + side -1) % ringWidth == 0) {
                currentValue = currentValue - previousRing[currentPosition - offset - 2];
                currentValue = currentValue + ringValues[currentPosition - 2];
            }
        }
              
    }

    ringValues.push(currentValue);
    currentPosition = currentPosition + 1;
    if (currentValue > 312051) {
        solved = true;
        console.log(currentValue)
    }  
    currentValue = 0;


}


