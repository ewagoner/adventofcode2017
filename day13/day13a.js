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

var turn = 0;
var severity = 0;
var inputArray = input.split("\n");
for (i = 0; i < inputArray.length; i++) {
    inputArray[i] = inputArray[i].split(": ");
}
var lastLayerIndex = parseInt(inputArray[inputArray.length - 1][0]);
var layers = [];
for (i = 0; i < lastLayerIndex + 1; i++) {
    var depth =  null;
    for (j = 0; j < inputArray.length; j++) {
      if (inputArray[j][0] == i) {
          depth = [parseInt(inputArray[j][1]), 0, "+"];
      }
    }
    layers[i] = depth;
}

while (turn <= lastLayerIndex) {
    turn++;
    var position = turn - 1;
    for (i = 0; i < lastLayerIndex + 1; i++) {
        var layer = layers[i];
        //console.log(layer);
        if (layer != null) {
            if ((position == i) && (layer[1] == 0)) {
                severity = severity + (i * layer[0]);
            }
            if (layer[1] == 0) {
                layer[1] = 1;
                layer[2] = "+";
            } else if (layer[1] == (layer[0] - 1)) {
                layer[1] = layer[1] - 1;
                layer[2] = "-";
            } else if (layer[2] == "+") {
                layer[1] = layer[1] + 1;
            } else {
                layer[1] = layer[1] - 1;
            }
            layers[i] = layer;  
        }
    }
    console.log(layers);
}

console.log(severity);


