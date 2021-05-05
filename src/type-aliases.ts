export {};

// 必ず大文字スタートとのこと
type Mojiretsu = string;

const fooString :string = 'Hello';
const fooMojiretsu :Mojiretsu = 'Hello';

type Profile = {
  name: string;
  age: number;
};

const exmple1 = {
  name:'Meg',
  age:20
};

const exmple2: Profile= {
  name:'Meg',
  age:20
};

type Profile2 = typeof exmple1;
