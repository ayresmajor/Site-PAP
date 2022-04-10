function randint(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function seqrandom(numl, maxrand) {
  numl += 1;
  maxrand += 1;
  if(maxrand < numl){
    maxrand = numl;
  }
  let num = [];
  let compar = [];
  let d = 0;
  let n = 0;
  for (let c = 0; c < numl; c++) {
    n = randint(1, maxrand);
    if (c > 0) {
      num.push(n);
    }
    if (num.length >= 2) {
      compar = num.slice(0, c - 1);
      while (compar.includes(n)) {
        d = num.indexOf(n);
        n = randint(1, maxrand);
        num[d] = n;
      }
    }
  }
  num.sort(function (a, b) {
    return a - b;
  });
  return num;
}

let numstr = []
for (let i = 0; i < 6; i++) {
 let numeros = seqrandom(5, 51);
 let estrelas = seqrandom(2, 12);
  numstr += numeros.concat(estrelas) +  ',';
}
 jogo = numstr.split(',');
 jogo.pop();

