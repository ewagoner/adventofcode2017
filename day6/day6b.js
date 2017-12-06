// http://adventofcode.com/2017/day/6
// Part Two

var testinput = `0 2 7 0`;
var input = `4	10	4	1	8	4	9	14	5	1	14	15	0	15	3	5`;

var banks = input.split(/(\s+)/).filter( function(e) { return e.trim().length > 0; } );
for(var i=0; i<banks.length;i++) banks[i] = +banks[i];
var bankCount = banks.length;
var bankHistory = [];
var loopStart = "";

var cycles = 0;
var solved = false;
var foundLoop = false;

while (solved == false) {
    var maxBank = Math.max.apply(Math, banks);
    var index = banks.indexOf(maxBank);
    banks[index] = 0;
    for (var i = maxBank; i > 0; i--) {
        index++;
        if (index == bankCount) {
            index = 0;
        }
        banks[index] = banks[index] + 1;
    }
    cycles++;
    newValues = banks.join();
    bankHistory.push(newValues);
    if (foundLoop == true && newValues == loopStart) {
        solved = true;
    } else if (foundLoop == true) {
        loopSize++;
    }
    if (bankHistory.length != new Set(bankHistory).size && foundLoop == false) {
        foundLoop = true;
        loopStart = newValues;
        var loopSize = 1;
    }
}
console.log(loopSize);