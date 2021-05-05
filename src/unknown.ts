export {};

const kansu = ()  : number => 43;

let numberAny  :any  = kansu();
let numberUnknown  :unknown = kansu();


let sumAny = numberAny + 10;
// 型が何か見るときは下のコードで確認可能
//console.log(typeof numberUnknown);

// 下記の書き方をすることで型ガードができる
if(typeof numberUnknown === 'number'){
  let sumUnknown = numberUnknown + 10;
}
//let sumUnknown = numberUnknown + 10;