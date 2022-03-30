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

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
function randint(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
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
  let algo = document.getElementById(clickedid);
  algo.style.color = "red";
  await sleep(5);
  titulo.style.visibility = "hidden";
  loading.style.display = "none";
}
async function startgame() {
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
}
