// Variáveis
let loading = document.getElementById("loadingjokenpo");
let button = document.getElementById("startgame");
let intrucoes = document.getElementById("intrucoes");
let fundo = document.getElementById("fundo");
let menu = document.getElementById("menu");
let titulo = document.getElementById("titulo");
let pedraimg = document.getElementById("pedraimg");
let papelimg = document.getElementById("papelimg");
let tesouraimg = document.getElementById("tesouraimg");
let startgame = document.getElementById("startgame");
let win = document.getElementById("win");
let escolhauto = "";
var jogador = 7;
let computador = randint(0, 3);
var jogavel = false;
var t = 0;

function iniciar() {
  document.body.style.aspectRatio =  "16/9";
  fundo.style.display = "block";
  fundo.scrollLeft += 2000;
  document.getElementById("head").style.position="static";
  document.getElementById("iniciar").style.display = "none";  
}

function fechar() {
  document.getElementById("fundo").style.display = "none";
  location.reload();
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function randint(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

async function start() {
  button.style.display = "none";
  await sleep(500);
  fundo.style.backgroundColor = "rgba(0, 0, 0, 1)";
  intrucoes.style.display = "flex";
  await sleep(1500);
  intrucoes.innerText = "PAPEL";
  await sleep(1500);
  intrucoes.innerText = "TESOURA";
  await sleep(1500);
  pedra.setAttribute("onmouseout", "sair(this.id)");
  papel.setAttribute("onmouseout", "sair(this.id)");
  tesoura.setAttribute("onmouseout", "sair(this.id)");
  pedra.setAttribute("onmouseenter", "entrar(this.id)");
  papel.setAttribute("onmouseenter", "entrar(this.id)");
  tesoura.setAttribute("onmouseenter", "entrar(this.id)");
  pedraimg.setAttribute("onmouseout", "sair(this.id)");
  papelimg.setAttribute("onmouseout", "sair(this.id)");
  tesouraimg.setAttribute("onmouseout", "sair(this.id)");
  pedraimg.setAttribute("onmouseenter", "entrar(this.id)");
  papelimg.setAttribute("onmouseenter", "entrar(this.id)");
  tesouraimg.setAttribute("onmouseenter", "entrar(this.id)");
  pedra.setAttribute("onclick", "select(this.id)");
  papel.setAttribute("onclick", "select(this.id)");
  tesoura.setAttribute("onclick", "select(this.id)");
  pedraimg.setAttribute("onclick", "select('pedra')");
  papelimg.setAttribute("onclick",  "select('papel')");
  tesouraimg.setAttribute("onclick",  "select('tesoura')");
  fundo.style.animation = "clarear 1200ms forwards";
  menu.style.animation = "crescer 1.5s forwards";
  let styles = {
    fontSize: "3em",
    top: "10px",
    animation: "none",
    textShadow:
      "#000000 3px -2px 2px, #a10a7e42 -4px -5px 20px, #ffc10940 5px 4px 20px",
  };
  Object.assign(intrucoes.style, styles);
  intrucoes.innerText = "Escolha uma das opções acima";
  loading.style.display = "grid";
  for (c = 1; c <= 15; c++) {
    if (t == 20) {
      break;
    }
    t = c;
    await sleep(1000);
  }
  if (t == 15) {
    jogador = randint(0, 3);
    if (jogador == 0) {
      escolhauto = "pedra";
    } else if (jogador == 1) {
      escolhauto = "papel";
    } else {
      escolhauto = "tesoura";
    }
    jokenpo(computador, jogador, escolhauto);
  }
}

function entrar(clickedid) {
  let algo = document.getElementById(clickedid);
  algo.style.animation = "aumentartxt 1500ms forwards";
  if (clickedid == "pedra" || clickedid == "pedraimg") {
    pedraimg.style.animation =
      "roda 2s alternate infinite, shadowin 1000ms forwards";
  } else if (clickedid == "papel" || clickedid == "papelimg") {
    papelimg.style.animation =
      "roda 2s alternate infinite, shadowin 1000ms forwards";
  } else {
    tesouraimg.style.animation =
      "roda 2s alternate infinite, shadowin 1000ms forwards";
  }
}

function sair(clickedid) {
  let algo = document.getElementById(clickedid);
  algo.style.animation = "diminuirtxt 1500ms forwards";
  if (clickedid == "pedra" || clickedid == "pedraimg") {
    pedraimg.style.animation =
      "roda 2s alternate infinite, shadowout 1500ms forwards";
  } else if (clickedid == "papel" || clickedid == "papelimg") {
    papelimg.style.animation =
      "roda 2s alternate infinite, shadowout 1500ms forwards";
  } else {
    tesouraimg.style.animation =
      "roda 2s alternate infinite, shadowout 1500ms forwards";
  }
}
async function select(clickedid) {
  t = 20;
  pedra.setAttribute("onmouseout", "");
  papel.setAttribute("onmouseout", "");
  tesoura.setAttribute("onmouseout", "");
  pedra.setAttribute("onmouseenter", "");
  papel.setAttribute("onmouseenter", "");
  tesoura.setAttribute("onmouseenter", "");
  pedraimg.setAttribute("onmouseout", "");
  papelimg.setAttribute("onmouseout", "");
  tesouraimg.setAttribute("onmouseout", "");
  pedraimg.setAttribute("onmouseenter", "");
  papelimg.setAttribute("onmouseenter", "");
  tesouraimg.setAttribute("onmouseenter", "");
  if (clickedid == "pedra" || clickedid == "pedraimg") {
    jogador = 0;
  } else if (clickedid == "papel" || clickedid == "papelimg") {
    jogador = 1;
  } else {
    jogador = 2;
  }

  jokenpo(computador, jogador, clickedid);

}

async function jokenpo(computer, user, selected) {
  pedra.setAttribute("onmouseout", "");
  papel.setAttribute("onmouseout", "");
  tesoura.setAttribute("onmouseout", "");
  pedra.setAttribute("onmouseenter", "");
  papel.setAttribute("onmouseenter", "");
  tesoura.setAttribute("onmouseenter", "");
  pedraimg.setAttribute("onmouseout", "");
  papelimg.setAttribute("onmouseout", "");
  tesouraimg.setAttribute("onmouseout", "");
  pedraimg.setAttribute("onmouseenter", "");
  papelimg.setAttribute("onmouseenter", "");
  tesouraimg.setAttribute("onmouseenter", "");
  pedra.setAttribute("onclick", "");
  papel.setAttribute("onclick", "");
  tesoura.setAttribute("onclick", "");
  pedraimg.setAttribute("onclick", "");
  papelimg.setAttribute("onclick", "");
  tesouraimg.setAttribute("onclick", "");
  await sleep(5);
  titulo.style.visibility = "hidden";
  loading.style.display = "none";
  if (selected == "pedra") {
    pedra.style.color = "red";
    pedraimg.style.animation =
      "shadowout 1500ms forwards, selectedrotation 1s forwards, slide 2s forwards, roda 2s alternate infinite";
    papelimg.style.animation = "fadeout 1500ms forwards";
    tesouraimg.style.animation = "fadeout 1500ms forwards";
    papelimg.style.display = "none";
    tesouraimg.style.display = "none";
  } else if (selected == "papel") {
    papel.style.color = "red";
    papelimg.style.animation =
      "shadowout 1500ms forwards, selectedrotation 1s forwards, slidel 2s forwards, roda 2s alternate infinite";
    pedraimg.style.animation = "fadeout 1500ms forwards";
    tesouraimg.style.animation = "fadeout 1500ms forwards";
    pedraimg.style.display = "none";
    tesouraimg.style.display = "none";
  } else {
    tesoura.style.color = "red";
    tesouraimg.style.animation =
      "shadowout 1500ms forwards, selectedrotation 1s forwards, slide 2s forwards, roda 2s alternate infinite";
    papelimg.style.animation = "fadeout 1500ms forwards";
    pedraimg.style.animation = "fadeout 1500ms forwards";
    papelimg.style.display = "none";
    pedraimg.style.display = "none";
  }
  // pedra -> 0   papel -> 1  tesoura -> 2
  titulo.style.visibility = "visible";
  let rescomp = "";
  if (computer == 0) {
    rescomp = 'pedra <i class="pedraico"></i>';
  } else if (computer == 1) {
    rescomp = 'papel <i class="papelico"></i>';
  } else {
    rescomp = 'tesoura<i class="tesouraico"></i>';
  }
  let resultado = ""
  if (computer == user) {
    resultado = 'Empataste'
  } else {
    if (user == 0) {
      if (computer == 1) {
        resultado = 'Perdeste'
      } else if (computer == 2) {
        resultado = 'Venceste'
      }
    } else if (user == 1) {
      if (computer == 0) {
        resultado = 'Venceste'
      } else if (computer == 2) {
        resultado = 'Perdeste'
      }
    } else if (user == 2) {
      if (computer == 0) {
        resultado = 'Perdeste'
      } else if (computer == 1) {
        resultado = 'Venceste'
      }
    }
  }
  if (resultado == "Venceste"){
    win.style.display = 'block'
  }else if(resultado == "Perdeste"){
    fundo.style.animation = "derrota 1200ms forwards";
  }else{
    fundo.style.animation = "empate 1200ms forwards";
  }
  let styles = {
    transition: "all 1s",
    top: "110px"
  };
  Object.assign(intrucoes.style, styles);
  intrucoes.innerHTML = `${resultado}, o Jokenpo jogou ${rescomp}`;
}
