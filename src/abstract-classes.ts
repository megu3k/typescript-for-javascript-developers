export {};
// 親
abstract class Animal {
  abstract cry():string;
}
// 抽象メソッド
class Lion extends Animal {
  cry(){
    return 'roar';
  }
}

// cry()を書かないとエラーになる。
// class Tiger extends Animal{
  // cry(){
  //   return 'grrrr';
  // }
// }
