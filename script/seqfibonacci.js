
var lista = [0, 1];
var lista2 = [];
let form= 0;
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
let pular = document.getElementById("pular");
let background = document.getElementById("background");
var tempo = 2000;
var temfolha = 500;
function skip(){
    tempo = 0;
    temfolha =0;
    pular.innerText="Aguarde..."
}
async function sequenciar() {
  let num = document.getElementById("num");
  let quanterm = Number(num.value);
  if (quanterm > 2 && Number.isInteger(quanterm)) {
    let snail = document.getElementById("snail");
    let slime = document.getElementById("slime");
    let titulo = document.getElementById("titulo");
    let menu = document.getElementById("menu");
    let lgbtsnail = document.getElementById("lgbtsnail");
    let simbolo = document.getElementById("simbolo");
    let folha1 = document.getElementById("folha1");
    let folha2 = document.getElementById("folha2");
    let resultado = document.getElementById("resultado");
    let numesq = document.getElementById("numesq");
    let numdir = document.getElementById("numdir");
    let bolinha = document.getElementById("bolinha");
    let t1 = 0;
    let t2 = 1;
    let cont = 3;
    titulo.style.animation = "fadeout 1500ms forwards";
    menu.style.animation = "fadeout 1500ms forwards";
    await sleep(1500);
    resultado.style.display = "grid";
    resultado.style.animation =
      "fadein 1500ms forwards, desce2 5s forwards linear alternate infinite";
    titulo.style.visibility = "hidden";
    menu.style.visibility = "hidden";
    snail.style.display = "block";
    slime.style.display = "block";
    simbolo.style.display = "block";
    if(navigator.userAgent.indexOf("Mac") !== -1){
      simbolo.style.display = "none";
    }
    lgbtsnail.style.animation = "desce 2s forwards linear alternate infinite";
    pular.style.visibility="visible";
    pular.style.animation =
      "fadein 15000ms forwards, bounce 4s  infinite"
      bolinha.style.animation ="addlr 2.4s infinite cubic-bezier(1, 0.02, 0.72, -0.14)"
    while (cont <= quanterm) {
      folha1.style.animation = "none";
      folha2.style.animation = "none";
      folha2.style.background="#47b813";
      folha1.style.background="#47b813";
      let t3 = t1 + t2;
      lista.push(t3);
      t1 = t2;
      t2 = t3;
      if (cont % 2 == 0) {
        numdir.innerHTML= t2
        numesq.innerHTML = t1;
        bolinha.className = "numberesq"
        folha2.style.animation = "fadeout 150ms 2";
        folha2.style.background = "yellow"
      }else if(cont % 2 != 0) {
        numesq.innerHTML= t2
        numdir.innerHTML = t1;
        bolinha.className = "numberdir"
        folha1.style.animation = "fadeout 150ms 2";
        folha1.style.background = "yellow"
      }
      resultado.innerHTML = t3;
      await sleep(temfolha);
      folha2.style.background="#47b813";
      folha1.style.background="#47b813";
      await sleep(tempo);
      bolinha.style.animation ="addlr 2.5s infinite cubic-bezier(1, 0.02, 0.72, -0.14) 2.5s"
      cont += 1;
    }
    let background = document.getElementById("background");
    let styles = {
        fontFamily: 'consolas, "Courier New", monospace',
        fontSize: "2em",
        fontWeight: "bold",
        color: "black",
        textShadow: "white 0px 0px 6px",
        wordBreak: "break-word",
        textAlingn: "center",
        height: "100%",
        padding: "2em"
      };
      Object.assign( background.style, styles);
      background.innerHTML ="";
      for(let pos in lista){
        background.innerHTML+= `${lista[pos]} , `
        await sleep(100)
       }
       background.innerHTML += ` Fim da sequência  &#128012;<button id="voltar" class="button-29" role="button"  onclick="history.back()">VOLTAR</button> <button id="formato" class="button-29" role="button"  onclick="format()" style="  display: grid;">Mudar formato: &#x2192; </button> `
  } else {
    num.value = "";
    window.alert("Somente números inteiros a partir de 3");
  }
}

async function format(){
  form += 1;
  background.innerHTML ="";
  if(form %  2 == 0){
    for(let pos in lista){
      background.innerHTML+= `${lista[pos]} , `
     }
     background.innerHTML += ` Fim da sequência  &#128012;<button id="voltar" class="button-29" role="button"  onclick="history.back()">VOLTAR</button> <button id="formato" class="button-29" role="button"  onclick="format()" style="  display: grid;">Mudar formato: ,&nbsp;</button> `
     let formato = document.getElementById("formato");
     formato.style.backgroundImage=" linear-gradient(to right, #000000 0%, #434343  51%, #000000  100%)"
     formato.style.boxShadow="rgb(0 0 0 / 87%) 0 2px 20px 0px "
     formato.style.color="white"
     formato.innerHTML="Mudar formato: &#x2192; &nbsp;"
   }else{
    for(let pos in lista){
      background.innerHTML+= `${lista[pos]} &#x2192; `
     }
     background.innerHTML += ` Fim da sequência  &#128012;<button id="voltar" class="button-29" role="button"  onclick="history.back()">VOLTAR</button> <button id="formato" class="button-29" role="button"  onclick="format()" style="  display: grid;">Olá</button> `
     let formato = document.getElementById("formato");
     formato.style.backgroundImage=" linear-gradient(to right, #ffffff 0%, #cecece 51%, #ffffff 100%)"
     formato.style.boxShadow="inset rgb(0 0 0) 0 2px 3px 0px "
     formato.style.color="black"
    formato.innerHTML="Mudar formato: ,&nbsp;"
   }
 }