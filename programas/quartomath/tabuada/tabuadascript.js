const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

let num = document.getElementById("num");
window.addEventListener("click", async function () {
  if (document.activeElement.id == "operadores") {
    num.blur();
  }else{
    num.focus();
  }
});
window.addEventListener("keyup", async function (event) {
  if (event.key === "Enter") {
    let operador = document.getElementById("operadores").value;
    let tabuada = document.getElementById("tabuada");
    let a = Number(num.value);
    let simbolo = "&#215;";
    let res = 0;
    let resfinal = 0;
    tabuada.innerHTML = "";
    for (var i = 1; i <= 10; i++) {
      if (operador == "somar") {
        res = a + i;
        simbolo = "+";
      } else if (operador == "subtrair") {
        res = a - i;
        simbolo = "-";
      } else if (operador == "dividir") {
        res = a / i;
        simbolo = "&#247;";
      } else {
        res = a * i;
      }
      if (Number.isInteger(res)) {
        resfinal = res;
      } else {
        resfinal = res.toFixed(2);
      }
      tabuada.innerHTML += `<p>${a}  ${simbolo} ${i} = ${resfinal}`;
    }
    num.blur();
  }
});
