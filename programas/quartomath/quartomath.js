let armdoor = document.getElementById("armdoor1");

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function randint(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

//aleatorização das posições dos itens principais
let calculadora = document.getElementById("calculadora");
let tabuada = document.getElementById("tabuada");
let snail = document.getElementById("snail");
let num = [randint(0, 5), randint(0, 5), randint(0, 5)];
let calcpos = num[0].toString();
let tabupos = num[1].toString();
let snapos = num[2].toString();
switch (calcpos) {
  case "0":
    calculadora.setAttribute(
      "style",
      "top: 534px; left: 1839px;  width: 90px; "
    );
    break;
  case "1":
    calculadora.setAttribute(
      "style",
      "top: 636px; left: 1343px;  width: 90px; "
    );
    break;
  case "2":
    calculadora.setAttribute(
      "style",
      "top: 612px; left: 821px;  width: 74px; "
    );
    break;
  case "3":
    calculadora.setAttribute(
      "style",
      "top: 699px; left: 1941px;  width: 102px; "
    );
    break;
  case "4":
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
  case "0":
    tabuada.setAttribute("style", "top: 522px; left: 1969px;  width: 50px; ");
    break;
  case "1":
    tabuada.setAttribute(
      "style",
      "top: 587px; left: 998px;  width: 31px; transform: rotate(71deg); z-index: 30; "
    );
    break;
  case "2":
    tabuada.setAttribute(
      "style",
      "top: 488px; left: 1309px; width: 31px; transform: rotate(83deg);"
    );
    break;
  case "3":
    tabuada.setAttribute(
      "style",
      "top: 689px; left: 1016px; width: 42px; transform: rotate(37deg); "
    );
    break;
  case "4":
    tabuada.setAttribute(
      "style",
      "top: 642px; left: 484px; width: 39px;  transform: rotate(84deg);"
    );
    break;
  default:
    tabuada.setAttribute("style", "top: 522px; left: 1969px;  width: 50px; ");
}

switch (snapos) {
  case "0":
    snail.setAttribute(
      "style",
      "top: 574px; left: 2067px;  width: 40px; animation: snapos0 250s linear infinite;"
    );
    break;
  case "1":
    snail.setAttribute(
      "style",
      "top: 632px; left: 1563px;  width: 25px; transform: rotate(90deg); animation: snapos1 250s linear infinite;"
    );
    break;
  case "2":
    snail.setAttribute(
      "style",
      "top: 226px; left: 480px; width: 25px; animation: snapos2 250s linear infinite; "
    );
    break;
  case "3":
    snail.setAttribute(
      "style",
      "top: 669px; left: 1564px; width: 20px; transform: scaleX(-1);  animation: snapos3 250s linear infinite;"
    );
    break;
  case "4":
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

let hr_dot = document.querySelector('.hr_dot')
let min_dot = document.querySelector('.min_dot')
let seg_dot = document.querySelector('.seg_dot')

  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let se = new Date().getSeconds();

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  se = se < 10 ? "0" + se : se;

  hora.innerHTML = h + "<span>h</span>";
  minutos.innerHTML = m + "<span style='top: 0.1em;  letter-spacing: -0.4em;' >min</span>";
  segundos.innerHTML = se + "<span>s</span>";

  hh.style.strokeDashoffset = 189 - (-189 * h) / 12; // 12horas
  mm.style.strokeDashoffset = 189 - (189 * m) / 60;
  ss.style.strokeDashoffset = 189 - (189 * se) / 60;

  hr_dot.style.transform = `rotate(${-4.5 + (-h * 30)}deg)`;
  min_dot.style.transform = `rotate(${-4.5 + (m * 6)}deg)`;
  seg_dot.style.transform = `rotate(${-4.5 + (se * 6)}deg)`;
});

$('.cube-switch .switch').click(function() {
  if ($('.cube-switch').hasClass('active')) {
      $('.cube-switch').removeClass('active');
  } else {
      $('.cube-switch').addClass('active');
  }
});