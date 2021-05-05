export {};

function double(value:number):number;
function double(value:string):string;

function double(value:any):any{
  // console.log(typeof value);
  // 上ですでに定義しているため、numberかstring意外の型はこないため例外処理不要。
  if (typeof value === 'number'){
   return value * 2;
  } else {
  return value + value;
  }
}
console.log(double(100));
console.log(double('GO'));
// function double(value:string):string {
//   return value + value;
// }

//console.log(double('GO'));