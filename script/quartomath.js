let armdoor = document.getElementById("armdoor1");

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function randint(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

//aleatorização das posições dos itens principais
let calculadora = document.getElementById("calculadora");
let tabuada = document.getElementById("tabuada");
let snail = document.getElementById("snail");
let calcpos = randint(0, 5);
let tabupos = randint(0, 5);
let snapos = randint(0, 5);
switch (calcpos) {
  case 0:
    calculadora.setAttribute(
      "style",
      "top: 534px; left: 1839px;  width: 90px; "
    );
    break;
  case 1:
    calculadora.setAttribute(
      "style",
      "top: 636px; left: 1343px;  width: 90px; "
    );
    break;
  case 2:
    calculadora.setAttribute(
      "style",
      "top: 618px; left: 821px;  width: 74px; transform: rotate(-14deg);"
    );
    break;
  case 3:
    calculadora.setAttribute(
      "style",
      "top: 699px; left: 1941px;  width: 102px; "
    );
    break;
  case 4 :
    calculadora.setAttribute(
      "style",
      "top: 652px; left: 179px;  width: 74px; "
    );
    break;
  default:
    calculadora.setAttribute(
      "style",
      "top: 534px; left: 1839px;  width: 90px; "
    );
}
switch (tabupos) {
  case 0:
    tabuada.setAttribute("style", "top: 522px; left: 1969px;  width: 50px; ");
    break;
  case 1:
    tabuada.setAttribute(
      "style",
      "top: 587px; left: 998px;  width: 31px; transform: rotate(71deg); z-index: 1; "
    );
    break;
  case 2:
    tabuada.setAttribute(
      "style",
      "top: 488px; left: 1309px; width: 31px; transform: rotate(83deg);"
    );
    break;
  case 3:
    tabuada.setAttribute(
      "style",
      "top: 689px; left: 1016px; width: 42px; transform: rotate(37deg); "
    );
    break;
  case 4:
    tabuada.setAttribute(
      "style",
      "top: 642px; left: 484px; width: 39px;  transform: rotate(84deg);"
    );
    break;
  default:
    tabuada.setAttribute("style", "top: 522px; left: 1969px;  width: 50px; ");
}
switch (snapos) {
  case 0:
    snail.setAttribute(
      "style",
      "top: 574px; left: 2067px;  width: 40px; animation: snapos0 250s linear infinite;"
    );
    break;
  case 1:
    snail.setAttribute(
      "style",
      "top: 632px; left: 1563px;  width: 25px; transform: rotate(90deg); animation: snapos1 250s linear infinite;"
    );
    break;
  case 2:
    snail.setAttribute(
      "style",
      "top: 226px; left: 480px; width: 25px; animation: snapos2 250s linear infinite; "
    );
    break;
  case 3:
    snail.setAttribute(
      "style",
      "top: 669px; left: 1564px; width: 20px; transform: scaleX(-1);  animation: snapos3 250s linear infinite;"
    );
    break;
  case 4:
    snail.setAttribute(
      "style",
      "top: -29px; left: 1550px; width: 50px;transform: scaleY(-1);  animation: snapos4 250s linear infinite;"
    );
    break;
  default:
    alert("algo errado não deu certo");
}

async function slide() {
  armdoor.style.animation = "slide 5s  2 alternate";
  await sleep(10000);
  armdoor.style.animation = "none";
}

// relogio
setInterval(() => {
  let hora = document.getElementById("hora");
  let minutos = document.getElementById("minutos");
  let segundos = document.getElementById("segundos");

  let hh = document.getElementById("hh");
  let mm = document.getElementById("mm");
  let ss = document.getElementById("ss");

  let hr_dot = document.querySelector(".hr_dot");
  let min_dot = document.querySelector(".min_dot");
  let seg_dot = document.querySelector(".seg_dot");

  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let se = new Date().getSeconds();

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  se = se < 10 ? "0" + se : se;

  hora.innerHTML = h + "<span>h</span>";
  minutos.innerHTML =
    m + "<span style='top: 0.1em;  letter-spacing: -0.4em;' >min</span>";
  segundos.innerHTML = se + "<span>s</span>";

  hh.style.strokeDashoffset = 189 - (189 * h) / 24;
  mm.style.strokeDashoffset = 189 - (189 * m) / 60;
  ss.style.strokeDashoffset = 189 - (189 * se) / 60;

  hr_dot.style.transform = `rotate(${-5 + h * 15}deg)`;
  min_dot.style.transform = `rotate(${-5 + m * 6}deg)`;
  seg_dot.style.transform = `rotate(${-5 + se * 6}deg)`;
});

let paisagem = document.getElementById("paisagem");
let janelasbord = document.getElementById("janelasbord");
let h = new Date().getHours();
if (h > 6 && h <= 11) {
  paisagem.style.filter = "brightness(120%)";
  janelasbord.style.backgroundColor = "transparent";
} else if (h > 11 && h <= 16) {
  paisagem.style.filter = "saturate(120%)";
  janelasbord.style.backgroundColor = "#ffa50038";
} else if (h > 16 && h <= 20) {
  paisagem.style.filter = "saturate(120% brightness(60%)";
  janelasbord.style.backgroundColor = "#ffa60010";
} else {
  paisagem.style.filter = "brightness(20%) grayscale(44%)";
  janelasbord.style.backgroundColor = "#16164c14";
}

//iluminação
let ilumin = 1;

function ilumination() {
  ilumin += 1;
  let interruptor = document.getElementById("interruptor");
  let escuro = document.getElementById("escuro");
  let armariobord = document.getElementById("armariobord");
  let olho = document.getElementById("olho");
  let luz = document.getElementById("luz");
  let relogio = document.getElementById("relogio");
  let computador = document.getElementById("computador");
  if (ilumin % 2 == 0) {
    // Luz acesa
    interruptor.style.transform = "scaleY(1)";
    escuro.style.display = "none";
    armariobord.style.background = "transparent";
    olho.style.display = "none";
    luz.style.boxShadow =
      "rgb(255, 255, 255) 0px 0px 20px 0px,inset rgba(0, 0, 0, 0.468) 0px 0px 15px 1px";
    relogio.style.border = "10px solid rgb(65 51 38)";
    computador.style.filter = "brightness(100%)";
  } else {
    // luz apagada
    interruptor.style.transform = "scaleY(-1)";
    escuro.style.display = "block";
    armariobord.style.background = "#000000bf";
    olho.style.display = "block";
    luz.style.boxShadow = "none";
    relogio.style.border = "10px solid #1a1715";
    computador.style.filter = "brightness(40%)";
  }
}
