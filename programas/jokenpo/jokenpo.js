const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function randint(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

async function jokenpo(computer, user, selected) {
  await sleep(5);
  titulo.style.visibility = "hidden";
  loading.style.display = "none";
  if (selected == "pedra") {
    pedraimg.style.animation =
      "shadowout 1500ms forwards, selectedrotation 1s forwards, slidepedra 2s forwards, roda 2s alternate infinite";
    papelimg.style.animation = "fadeout 1500ms forwards";
    tesouraimg.style.animation = "fadeout 1500ms forwards";
  } else if (selected == "papel") {
    papelimg.style.animation =
      "shadowout 1500ms forwards, selectedrotation 1s forwards, slidepapel 2s forwards, roda 2s alternate infinite";
    pedraimg.style.animation = "fadeout 1500ms forwards";
    tesouraimg.style.animation = "fadeout 1500ms forwards";
  } else {
    tesouraimg.style.animation =
      "shadowout 1500ms forwards, selectedrotation 1s forwards, slidetesoura 2s forwards, roda 2s alternate infinite";
    papelimg.style.animation = "fadeout 1500ms forwards";
    pedraimg.style.animation = "fadeout 1500ms forwards";
  }
  // pedra -> 0   papel -> 1  tesoura -> 2
  if (computer == user) {
    window.alert("empate");
  } else {
    if (user == 0) {
      if (computer == 1) {
        window.alert("Derrota Computador jogou papel");
      } else if (computer == 2) {
        window.alert("Vitoria Computador jogou tesoura");
      }
    } else if (user == 1) {
      if (computer == 0) {
        window.alert("Vitoria Computador jogou pedra");
      } else if (computer == 2) {
        window.alert("Derrota Computador jogou tesoura");
      }
    } else if (user == 2) {
      if (computer == 0) {
        window.alert("Derrota Computador jogou pedra");
      } else if (computer == 1) {
        window.alert("Vitoria Computador jogou papel");
      }
    }
  }
}

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
let escolhauto = ""
var jogador = 7;
let computador = randint(0, 2);
var jogavel = false;
var t = 0;

function fechar() {
  document.getElementById("fundo").style.display = "none";
  location.reload();
}

function iniciar() {
  document.getElementById("fundo").style.display = "block";
  document.getElementById("euroiniciar").style.display = "none";
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
  let algo = document.getElementById(clickedid);
  algo.style.color = "red";
  algo.setAttribute("onmouseout", "");
  jokenpo(computador, jogador,clickedid);
}

async function start() {
  button.style.display = "none";
  await sleep(500);
  fundo.style.animation = "escurecer 3000ms forwards";
  intrucoes.style.display = "block";
  await sleep(1500);
  intrucoes.innerText = "2";
  await sleep(1500);
  intrucoes.innerText = "1";
  await sleep(1500);
  menu.style.animation = "crescer 1.5s forwards";
  const styles = {
    fontSize: "3em",
    top: "65px",
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
    if(t == 20){
      break;}
    t = c;
    await sleep(1000);
  }
  if (t == 15) {
    jogador = randint(0, 2);
    if (jogador ==0){
      escolhauto = 'pedra'
    }else if (jogador ==1){
      escolhauto = 'papel'
    }else{
      escolhauto = 'tesoura'
    }
    jokenpo(computador, jogador,escolhauto)
  }
}
