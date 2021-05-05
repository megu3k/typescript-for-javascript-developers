export {};

type Pitcher1 = {
  thowingSpped:number;
}

type Batter1 = {
  battingAvarage:number;
}

const Ichiro :Pitcher1 = {
  thowingSpped: 154
}

const Jiro :Batter1 = {
  battingAvarage:0.357
}

// 既存の型をうまく活用した書き方に変更
// type twowayPlayer = {
//   thowingSpped:number;
//   battingAvarage:number;
// }

type twowayPlayer = Pitcher1 & Batter1;

const Otani : twowayPlayer = {
  thowingSpped: 154,
  battingAvarage:0.357
};