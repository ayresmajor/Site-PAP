const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function randint(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
  /*if(navigator.userAgent.indexOf("Chrome") == -1 || navigator.userAgent.indexOf("Chrome/100") == -1){
    window.alert("Para uma experiência completa utilize um browser de base Chronomiun como: Google Chrome, OperaGX ou Microsoft")}*/
    


let buttoncube = document.getElementById("buttoncube");
window.addEventListener("scroll", function () {
  let value = Number(window.scrollY);
  let gradient = value * (1/1700);
  if (gradient > 1){
    gradient = 1;
  }
  document.body.style.backgroundColor = "rgb(var(--cbranco)," +  gradient + ")";
  if(gradient == 1){
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