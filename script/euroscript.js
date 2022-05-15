let modo = "";
let cont = 0;
let cont2 = 0;
var tempo = 1000;

function fechar() {
  document.getElementById("fundo").style.display = "none";
  location.reload();
}


function iniciar() {
  document.getElementById("fundo").style.display = "block";
  fundo.scrollIntoView(true);
  document.getElementById("euroinput").focus();
  document.getElementById("head").style.position="static";
  document.getElementById("iniciar").style.display = "none";
}

function fecharinfo() {
  cont2 += 1;
  if (cont2 % 2 == 0) {
    infoicon.style.color = "white";
    eurodescriauto.style.display = "none";
  } else {
    infoicon.style.color = "black";
    eurodescriauto.style.display = "block";
  }
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function randint(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function automatizar() {
  cont += 1;
  if (cont % 2 == 0) {
    euroauto.value = "Modo Automático*: OFF";
    euroauto.style.color = "gray";
    return (modo = "");
  } else {
    euroauto.value = "Modo Automático*: ON";
    euroauto.style.color = "white";
    document.getElementById("euroinput").focus();
    return (modo = "automatico");
  }
}
function topo(){
  window.scrollTo({
    top: 0,
    left: 100,
    behavior: 'smooth'
  });
}
window.addEventListener("keyup", async function (event) {
  if (event.key === "Enter" || modo == "automatico") {
    let topo =  document.getElementById("topo");
    topo.style.display="none";
    euroinput = document.getElementById("euroinput");
    modo == "automatico"? tempo = 0 : tempo = 1000
    for (c = 1; c <= 5; c++) {
      this.window["estrelas" + c].style.display = "none";
    }
    let palpite = Number(euroinput.value);
    euroinput.value = "";
    if (palpite >= 1 && palpite <= 5) {
      if(modo != "automatico"){
      document.getElementById("euroinput").blur();
      }
      function seqrandom(numl, maxrand) {
        maxrand += 1;
        if( ! Number.isInteger(numl)){
          numl = 2
        }
        if(maxrand < numl  || ! Number.isInteger(maxrand)){
          maxrand = numl;
        }
        let num = new Set();
        while(num.size < numl){
            num.add(randint(1, maxrand));
        }
        let numArr = Array.from(num)
        numArr.sort(function (a, b) {return a - b;});
        return numArr;
      }
      
      let numstr = [];
      for (let i = 0; i < palpite; i++) {
        let numeros = seqrandom(5, 50);
        let estrelas = seqrandom(2, 12);
        numstr += numeros.concat(estrelas) + ",";
      }
      let jogo = numstr.split(",");
      jogo.pop();
      for (c = 0; c <= 34; c++) {
        if (jogo[c] < 10) {
          jogo[c] = "0" + jogo[c];
        }
        window["bola" + c].innerText = jogo[c];
      }
      euroloading.style.display = "block";
      euroloading.scrollIntoView({ behavior: "smooth" });
      await sleep(tempo);
      euroloading.style.display = "none";
      fundo.style.height = "auto";
      for (c = 1; c <= palpite; c++) {
        this.window["estrelas" + c].style.display = "grid";
        this.window["estrelas" + c].scrollIntoView({ behavior: "smooth" });
        c == palpite? await sleep(500): await sleep(tempo * 2)
      }
      topo.style.display="grid";
      topo.scrollIntoView({ behavior: "smooth" });
    } else {
      fundo.style.height = "100vh";
      euroinfo.innerHTML += `<br>Valor inválido tente novamente`;
      euroinput.value = "";
      await sleep(2000);
      euroinfo.innerHTML = `Pressione a tecla "Enter" &#x21B5; para continuar`;
    }
  }
});
