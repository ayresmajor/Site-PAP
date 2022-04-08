let modo = "";
let cont = 0;
let cont2 = 0;

function fechar() {
  document.getElementById("fundo").style.display = "none";
  location.reload();
}

function iniciar() {
  document.getElementById("fundo").style.display = "block";
  document.getElementById("euroiniciar").style.display = "none";
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
window.addEventListener("keyup", async function (event) {
  if (event.key === "Enter" || modo == "automatico") {
    euroinput = document.getElementById("euroinput");
    for (c = 1; c <= 5; c++) {
      this.window["estrelas" + c].style.display = "none";
    }
    let palpite = Number(euroinput.value);
    euroinput.value = "";
    if (palpite >= 1 && palpite <= 5) {
      euroloading.style.display = "block";
      await sleep(500);
      euroloading.style.display = "none";
      fundo.style.height = "auto";
      for (c = 1; c <= palpite; c++) {
        this.window["estrelas" + c].style.display = "grid";
      }
      for (c = 0 ; c<= palpite; c++) {
        for(cont = 0;c <=7; c++){
          
        }
      }
      /*
      let numeros = [];
      for (c = 0; c <= palpite * 7; c++) {
        if (
          c == 5 || c == 6 || c == 12 || c == 13 ||c == 19 ||c == 20 ||c == 26 ||c == 27 |c== 33 ||c == 34
        ) {
          numeros.push(randint(1, 13));
        } else {
          numeros.push(randint(1, 51));
        }
      }*/
      for (c = 0; c <= palpite * 7; c++) {
        if (numeros[c] < 10) {
          numeros[c] = "0" + numeros[c];
        }
        window["bola" + c].innerText = numeros[c];
      }
    } else {
      fundo.style.height = "100vh";
      euroinfo.innerHTML += `<br>Valor inválido tente novamente`;
      euroinput.value = "";
      await sleep(2000);
      euroinfo.innerHTML = `Pressione a tecla "Enter" &#x21B5; para continuar`;
    }
  }
});
