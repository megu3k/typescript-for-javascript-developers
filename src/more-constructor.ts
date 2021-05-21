export {};

class Person {
  // 削除
  // public name: string;
  // protected age : number;
  // 引数にアクセス修飾子をつけると最初と同じ結果を得られる
  constructor(public name:string, protected age:number){
    // 削除
    // this.name = name;
    // this.age = age;
  }
}

const me = new Person ('meg', 20);
console.log(me);
// 初期化処理をしない場合Person {} になる