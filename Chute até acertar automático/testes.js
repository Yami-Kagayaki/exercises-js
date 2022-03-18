const min = 1990;
const max = 2000;

let joker = Math.floor(Math.random() * (max - min) + min);

for (let index = 0; index < 100; index++) {
  joker = Math.floor(Math.random() * (max - min) + min);
  console.log(joker);
}
