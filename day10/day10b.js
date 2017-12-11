// http://adventofcode.com/2017/day/6
// Part Two

var testinput = `1,2,3`;
var input = `120,93,0,90,5,80,129,74,1,165,204,255,254,2,50,113`;

var listSize = 256;
var listArray = [];
var lengths = [];
var skipSize = 0;
var position = 0;

for (i = 0; i < input.length; i++) {
    var char = 0;
    if (input[i] == ",") {
        char = 44;
    } else if (input[i] == "0") {
        char = 48;
    } else if (input[i] == "1") {
        char = 49;
    } else if (input[i] == "2") {
        char = 50;
    } else if (input[i] == "3") {
        char = 51;
    } else if (input[i] == "4") {
        char = 52;
    } else if (input[i] == "5") {
        char = 53;
    } else if (input[i] == "6") {
        char = 54;
    } else if (input[i] == "7") {
        char = 55;
    } else if (input[i] == "8") {
        char = 56;
    } else if (input[i] == "9") {
        char = 57;
    }
    lengths.push(char);
} 
lengths = lengths.concat([17, 31, 73, 47, 23]);

for (i = 0; i < listSize; i++) {
    listArray.push(i);
} 

for (r = 0; r < 64; r++) {
    for (j = 0; j < lengths.length; j++) {
        var l = parseInt(lengths[j]);
        var endPosition = position + l;
        var wrap = false;
        if (endPosition > listArray.length) {
            wrap = true;
            endPosition = endPosition - listArray.length;
        }
        var piece = []
        if (wrap == false) {
            piece = listArray.slice(position, position + l);
        } else {
            piece = listArray.slice(position).concat(listArray.slice(0, endPosition));
        }
        piece = piece.reverse();
        if (wrap == false) {
            for (k = 0; k < piece.length; k++) {
                listArray[position + k] = piece[k];
            }
        } else {
            for (k = 0; k < piece.length; k++) {
                if ((position + k) < listArray.length) {
                    listArray[position + k] = piece[k];
                } else {
                    listArray[(position + k) - listArray.length] = piece[k];
                }
            }
        }
        position = position + l + skipSize;
        skipSize++;
        while (position > listArray.length) {
            position = position - listArray.length;
        }
    }
}

var denseHash = [];
var denseHashHex = "";

for (i = 0; i < 16; i++) {
    var hash = listArray[(i * 16)];
    for (j = 1; j < 16; j++) {
        hash = hash ^ listArray[(i * 16) + j]
    }
    denseHash.push(hash);
    if (hash < 10) {
        denseHashHex = denseHashHex + "0" + hash.toString(16);
    } else {
        denseHashHex = denseHashHex + hash.toString(16);
    }

}

console.log(denseHashHex);

