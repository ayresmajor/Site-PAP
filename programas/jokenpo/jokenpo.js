// Variáveis
let loading = document.getElementById("loadingjokenpo");
let button = document.getElementById("startgame");
let intrucoes = document.getElementById("intrucoes");
let fundo = document.getElementById("fundo");
let menu = document.getElementById("menu");
let block = document.getElementById("block");
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
  document.getElementById("fundo").style.display = "block";
  document.getElementById("euroiniciar").style.display = "none";
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
  block.style.animation = "escurecer 1200ms forwards";
  intrucoes.style.display = "block";
  await sleep(1500);
  intrucoes.innerText = "PAPEL";
  await sleep(1500);
  intrucoes.innerText = "TESOURA";
  await sleep(1500);
  fundo.style.animation = "clarear 1200ms forwards";
  menu.style.animation = "crescer 1.5s forwards";
  const styles = {
    fontSize: "3em",
    top: "10px",
    left: "10px",
    animation: "none",
    textShadow:
      "#000000 3px -2px 2px, #a10a7e42 -4px -5px 20px, #ffc10940 5px 4px 20px",
  };
  Object.assign(intrucoes.style, styles);
  intrucoes.innerText = "Escolha uma das opções acima";
  block.style.display = "none";
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
  if (clickedid == "pedra") {
    pedraimg.style.animation =
      "roda 2s alternate infinite, shadowin 1000ms forwards";
  } else if (clickedid == "papel") {
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
  if (clickedid == "pedra") {
    pedraimg.style.animation =
      "roda 2s alternate infinite, shadowout 1500ms forwards";
  } else if (clickedid == "papel") {
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
  if (clickedid == "pedra") {
    jogador = 0;
  } else if (clickedid == "papel") {
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
  pedra.setAttribute("onclick", "");
  papel.setAttribute("onclick", "");
  tesoura.setAttribute("onclick", "");
  await sleep(5);
  titulo.style.visibility = "hidden";
  loading.style.display = "none";
  if (selected == "pedra") {
    pedra.style.color = "red";
    pedraimg.style.animation =
      "shadowout 1500ms forwards, selectedrotation 1s forwards, slidepedra 2s forwards, roda 2s alternate infinite";
    papelimg.style.animation = "fadeout 1500ms forwards";
    tesouraimg.style.animation = "fadeout 1500ms forwards";
  } else if (selected == "papel") {
    papel.style.color = "red";
    papelimg.style.animation =
      "shadowout 1500ms forwards, selectedrotation 1s forwards, slidepapel 2s forwards, roda 2s alternate infinite";
    pedraimg.style.animation = "fadeout 1500ms forwards";
    tesouraimg.style.animation = "fadeout 1500ms forwards";
  } else {
    tesoura.style.color = "red";
    tesouraimg.style.animation =
      "shadowout 1500ms forwards, selectedrotation 1s forwards, slidetesoura 2s forwards, roda 2s alternate infinite";
    papelimg.style.animation = "fadeout 1500ms forwards";
    pedraimg.style.animation = "fadeout 1500ms forwards";
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
  intrucoes.innerHTML = `${resultado}, o computador jogou ${rescomp}`;
}
