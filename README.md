# adventofcode2017

Day One
=======

Both of these solutions are in node.js, converting the captcha string into an array, and then iterating through the array converting the chars to integers and perfoming a sum if one interger matches the next (part one) or the intewger "opposite" it in the circular array (part two).


Day Two
=======

Both of these solutions are in node.js, converting the sheet first into an array of lines, splitting the array on whitespace into an array of cells, then iterating through the cells converting the chars to integers. For the first part, it finds the high and low for each line and takes the difference, adding that to the sheet's checksum. For day two, it loops through the line twice, trying all iterations of dividing one cell into another (excepting for dividing into itsel) looking for a result with no remainder. It adds that quotient to the sheet's checksum.


Day Three
=========

Both of these solutions are in node.js. The first day is finding boundaries, determining which ring a number is on, then how close to a corner it is (and thus how close to the middle of the side) and then adding the two together to get the number of steps back to the center. The second day... I mathmatically defined the spiral's rules and solved it through brute force.


Day Four
========

Both of these solutions are in node.js. The first day, I turned each phrase into an array of words and a set of words and checked to see if the length of the array matched the length of the set. The second day, I did the same thing but first sorted the characters in each word.


Day Five
========

Both of these solutions are in node.js. The solutions were both extremely straightforward: convert the list of instructions into an array, and hop through it. I counted the hops and changed the values in the array as I went based on the challenge's instructions (add one in part one, and add or subtract one based on the current value for part two).


Day Six
========

Both of these solutions are in node.js. The first day, I wrote the banks as an array of integers, and looped through them re-allocating as described. After an allocation, I wrote a string representation of the bank state to a history array. Once that history containmed a duplicate, it stopped and returned the cycle count. For part two, I note the value of the array state and then kept it running, looking for that state to come up again.