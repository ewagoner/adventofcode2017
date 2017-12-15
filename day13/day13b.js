// http://adventofcode.com/2017/day/11
// Part One

var testinput = `0: 3
1: 2
4: 4
6: 4`;
var input = `0: 3
1: 2
2: 4
4: 4
6: 5
8: 6
10: 6
12: 8
14: 6
16: 6
18: 8
20: 12
22: 8
24: 8
26: 9
28: 8
30: 8
32: 12
34: 20
36: 10
38: 12
40: 12
42: 10
44: 12
46: 12
48: 12
50: 12
52: 12
54: 14
56: 14
58: 12
62: 14
64: 14
66: 14
68: 14
70: 14
72: 14
74: 14
76: 14
78: 14
80: 18
82: 17
84: 14`;

var delay = 0;
var caught = true;
var inputArray = input.split("\n");
var layers = [];
for (i = 0; i < inputArray.length; i++) {
    layers[i] = inputArray[i].split(": ");
}

while (caught == true) {
    var spotted = false;
    for (i = 0; i < layers.length; i++) {
        ticks = delay + parseInt(layers[i][0]) + 1;
        if (((ticks - 1) % (2 * (parseInt(layers[i][1]) - 1))) == 0) {
            spotted = true;
            i = layers.length;         
        }
    } 

    if (spotted == false) {
        caught = false;
    } else {
        delay++;
    }
}

console.log(delay);


