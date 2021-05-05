export {};

enum Month {
  January =1,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  Octorber,
  November,
  December
}

console.log(Month.January);
console.log(Month.March);

enum COLORS {
  RED ='#FF0000',
  WHITE = '#FFFFFF',
  GREEN = '#008000'
}
let greeen = COLORS.GREEN;
console.log({greeen});

enum COLORS {
  YELLOW = '#FFFF00'
}
COLORS.YELLOW;