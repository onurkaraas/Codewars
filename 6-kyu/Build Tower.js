function towerBuilder(nFloors) {
  let arr = [];
  for (let i = 1; i < nFloors * 2; i += 2) {
    let space = " ";
    let star = "*";
    let repStar = star.repeat(i);
    let addSpace = space.repeat((nFloors * 2 - i) / 2);
    let addSpaceStar = addSpace + repStar + addSpace;
    arr.push(addSpaceStar);
  }
  return arr;
}

/*
Build Tower
Build Tower by the following given argument:
number of floors (integer and always greater than 0).

Tower block is represented as *

Python: return a list;
JavaScript: returns an Array;
C#: returns a string[];
PHP: returns an array;
C++: returns a vector<string>;
Haskell: returns a [String];
Ruby: returns an Array;
Lua: returns a Table;
Have fun!

for example, a tower of 3 floors looks like below

[
  '  *  ',
  ' *** ',
  '*****'
]
and a tower of 6 floors looks like below

[
  '     *     ',
  '    ***    ',
  '   *****   ',
  '  *******  ',
  ' ********* ',
  '***********'
]
 */
