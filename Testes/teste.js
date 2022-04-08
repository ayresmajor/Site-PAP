function randint(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
let njogos = 1;
let numeros = [];
let block = [];
let block2 = [];
let n = 0;
for (var c = 1; c <= njogos; c++) {
  for (cont = 0; c <= 7; c++) {
    n = randint(1, 51);
    if (block.length == 0) {
      block.push(n);
    } else {
      for (pos in block) {
        if (block[pos] == n) {
          n = randint(1, 51);
        }
      }
    }
  }
  numeros.push(block)
}
