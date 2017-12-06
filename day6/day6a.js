// http://adventofcode.com/2017/day/6
// Part One

var testinput = `0 2 7 0`;
var input = `4	10	4	1	8	4	9	14	5	1	14	15	0	15	3	5`;

var banks = input.split(/(\s+)/).filter( function(e) { return e.trim().length > 0; } );
for(var i=0; i<banks.length;i++) banks[i] = +banks[i];
var bankCount = banks.length;
var bankHistory = [];

var cycles = 0;
var solved = false;

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
    bankHistory.push(banks.join());
    if (bankHistory.length != new Set(bankHistory).size) {
        solved = true;
    }
}
console.log(cycles);