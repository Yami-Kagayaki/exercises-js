const maxChute = 10000;
let num = Math.floor(Math.random() * maxChute);
let joker = Math.floor(Math.random() * maxChute);
let max = maxChute;
let min = 0;
let tentativas = 1;

console.log("Jogo Iniciado, num máximo é:", maxChute);

while (num != joker) {
  if (num > joker) {
    console.log("digitado:", num);
    max = ++num;
    console.log("Perdeu, é menor, tente dnv");
    num = Math.floor(Math.random() * (max - min) + min);
    tentativas++;
    console.log();
  }
  if (num < joker) {
    console.log("digitado:", num);
    min = ++num;
    console.log("Perdeu, é maior, tente dnv");
    num = Math.floor(Math.random() * (max - min) + min);
    tentativas++;
    console.log();
  }
}

console.log("digitado:", num);
console.log("Vitoria");
console.log("o numero era:", joker);
console.log("total de tentativas:", tentativas);
