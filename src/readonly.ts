export {};

class VisaCard {
// この時は、publicが消せるが可読性をあげるためにあえて書くほうがよいという人もいる
// readonlyのみの場合
  constructor(public readonly owner: string){
    //this.owner = owner;
  }
}
let myVisaCard = new VisaCard('meg');

console.log(myVisaCard.owner);
// myVisaCard.owner = 'megan'