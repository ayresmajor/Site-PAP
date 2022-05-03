const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

let num = document.getElementById("num");
window.addEventListener("click", function () {
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
    let calc = 0;
    tabuada.innerHTML = "";
    for (var i = 1; i <= 10; i++) {
      if (operador == "somar") {
        res = a + i;
        simbolo = "+";
      } else if (operador == "subtrair") {
        calc = a + i
        res = calc - a;
        simbolo = "-";
      } else if (operador == "dividir") {
        calc = i * a
        res = calc  / a
        simbolo = "&#247;";
      } else {
        res = a * i;
      }
      if(operador=="somar" || operador=="multiplicar"){
      tabuada.innerHTML += `<p>${a}  ${simbolo} ${i} = ${res}`;
      } else{
        tabuada.innerHTML += `<p>${calc}  ${simbolo} ${a} = ${res}`;
      }
      await sleep(250);
    }
    num.blur();
  }
});
