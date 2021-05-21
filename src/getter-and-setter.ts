export {};

// owner 
// 初期化時に設定できる
// 変更できない
// 参照できる

// secretNumber
// 初期化時に設定できる
// 変更できる
// 参照できない

class MyNumberCard {
  private _owner :string;
  private _secretNumber :number;

  constructor(owner: string , secretNumber: number){
    this._owner = owner;
    this._secretNumber = secretNumber;
  }

  get owner () {
    return this._owner;
  }
  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber;
  }
  debugPrint() {
    return `secretNumber : ${this._secretNumber}`;
  }

}

let card = new MyNumberCard('meg',12345678910);
console.log(card.debugPrint());
// card.owner = 'Megumi';
// card._secretNumber;
card.secretNumber =7777777777;
console.log(card.debugPrint());
console.log(card.owner);
console.log(card.secretNumber);