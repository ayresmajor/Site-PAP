const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function randint(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


//Filtro de Browser
let browser = navigator.userAgent.indexOf("Chrome")
let version = navigator.userAgent[browser + 7]
version += navigator.userAgent[browser + 8]
if(version == 10){
  version += navigator.userAgent[browser + 9]
}
if(navigator.userAgent.indexOf("Chrome") == -1 || version < 99){
    window.alert("Para uma experiência completa utilize um browser de base Chromium como: Google Chrome, OperaGX/Opera ou Microsoft Edge. Caso esteja a utilizar um destes atualize para versão mais recente.")}

let buttoncube = document.getElementById("buttoncube");
let foot = document.getElementById("foot");
window.addEventListener("scroll", function () {
  let value = Number(window.scrollY);
  let gradient = value * (1/1700);
  if (gradient > 1){
    gradient = 1;
  }
  foot.style.backgroundImage= `linear-gradient(to bottom,rgba(5, 5, 5,0), rgb(var(--cazules)))`
  document.body.style.backgroundColor = `rgba(var(--cbranco),${gradient})`;
  if(gradient == 1){
    foot.style.backgroundImage= `linear-gradient(to bottom,rgb(5, 5, 5), rgb(var(--cazules)))`
    buttoncube.style.boxShadow= "rgb(var(--cbranco)) 1px -100px 120px 0px";
  }else{
    buttoncube.style.boxShadow= "none";
  }
});

async function prograndom() {
    let cube = document.querySelector(".cube");
    cube.style.animation = "animate 1s linear infinite";
    await sleep(1000);
    cube.style.animation = "animate 0.5s linear infinite";
    await sleep(1000);
    cube.style.animation = "animate 0.2s linear infinite";
    await sleep(500);
    let random = randint(0,3);
    switch (random){
      case 0:
        window.location.href = "programas/jokenpo/index.html";
        break;
      case 1:
        window.location.href = "programas/euromilhões/index.html";
        break;
      case 2:
        window.location.href = "programas/quartomath/index.html";
        break;
    }  
}