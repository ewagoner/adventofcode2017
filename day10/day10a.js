// http://adventofcode.com/2017/day/6
// Part Two

var testinput = `3,4,1,5`;
var input = `120,93,0,90,5,80,129,74,1,165,204,255,254,2,50,113`;

var listSize = 256;
var listArray = [];
var lengths = input.split(',');
var skipSize = 0;
var position = 0;

for (i = 0; i < listSize; i++) {
    listArray.push(i);
} 

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
console.log(listArray[0] * listArray[1]);

