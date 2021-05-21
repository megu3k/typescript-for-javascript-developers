export {};

namespace Japanese {
  // exportをつけることで外からアクセス可能
  export namespace Tokyo {
    export class Person {
      constructor(public name : string){
    
      }
    }
  }
  export namespace Osaka {
    export class Person {
      constructor(public name : string){
    
      }
    }
  }
}

namespace English{
  export class Person {
    constructor(public firstName : string, public middleNmae : string , lastNmae: string){
      
    }
  }
}

const me = new Japanese.Tokyo.Person('meg');
console.log(me.name);

const me2 = new Japanese.Osaka.Person('megyan');
console.log(me2.name);

const him = new English.Person('Michael','Joseph','Jackson');
console.log(him.firstName);