export {};

class Animal {
  constructor(public name:string){
  }
  run(): string {
    return 'I can run';
  }
}
class Lion extends Animal {
  public speed :number;
  // super使う
  // 書き方注意　継承元と違う項目は外だし
  constructor( name:string, speed:number){
    super(name);
    this.speed = speed;
  }
  run(): string {
    return `${super.run()} ${this.speed} km`;
  }
}
console.log(new Animal('Mickey').run());
console.log(new Lion('Simba',80).run());

// let animal = new Animal();
// console.log(animal.run());

// let lion = new Lion();
// console.log(lion.run());
