# adventofcode2017

Day One
=======

Both of these solutions are in node.js, converting the captcha string into an array, and then iterating through the array converting the chars to integers and perfoming a sum if one interger matches the next (part one) or the intewger "opposite" it in the circular array (part two).


Day Two
=======

Both of these solutions are in node.js, converting the sheet first into an array of lines, splitting the array on whitespace into an array of cells, then iterating through the cells converting the chars to integers. For the first part, it finds the high and low for each line and takes the difference, adding that to the sheet's checksum. For day two, it loops through the line twice, trying all iterations of dividing one cell into another (excepting for dividing into itsel) looking for a result with no remainder. It adds that quotient to the sheet's checksum.
