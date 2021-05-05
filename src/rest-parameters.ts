export {};

const reducer = (accumulator:number, currentValue:number) => {
  console.log({accumulator,currentValue })
  return accumulator + currentValue;
};

const sum: (...values: number[]) => number = (...values:number[]):number => {
  values.reduce(reducer);
  return 100;
};

console.log(sum(1,2,3,4,5));
//  [1,2,3,4,5].reduce(reducer);