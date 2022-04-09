function randint(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let num = [];
let block = [];
let block2 = [];
let d = 0;
let pos1 = 0;
let pos2 = 0;
let n = 0;

for (let c = 0; c < 6; c++) {
  pos1 = c - 2;
  pos2 = c - 1;
  console.log("")
  console.log("Print do c :", c)
  console.log("Print do pos1 e 2: ", pos1, pos2)
  n = randint(1, 5);
  console.log("Primeiro n: ", n )
  if (c > 0) {
    block.push(n);
    if (c > 1) {
      while (block[pos1] == block[pos2]) {
        n = randint(1, 5);
        block[pos2] = n;
      }
    }
    console.log("Primeiro Block: ", block)
  }
  if (block.length == 2) {
    block2 = block[0];
  } else if (block.length > 2) {
    block2 = block.slice(0, block.length  - 1);
    console.log("Block2: ", block2)
    while (block2.includes(n)) {
      d = block.indexOf(n);
      n = randint(1, 5);
      block[d] = n;
      console.log("n modificado: ", n)
      console.log("block modificado: ", block)
    }
  }
}
block.sort(function(a, b){return a - b})
console.log('Valor final abaixo:')
console.log(block)