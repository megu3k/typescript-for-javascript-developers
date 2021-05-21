export {};

class Mahotsukai {

}

class Souryo {

}

// Typescriptでは多重継承はできないが、複数のインターフェースは継承のようなことができる
// class Taro extends Mahotsukai,Souryo {

// }

interface Kenja {
  ionazun(): void;
}

interface Kenshi {
  kougeki(): void;
}
class Jiro implements Kenja, Kenshi {
  ionazun():void {
    console.log('ionazun');
  }
  kougeki():void {
    console.log('kougeki');
  }
}

const jiro = new Jiro();
jiro.ionazun();
jiro.kougeki();