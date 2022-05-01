const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function randint(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

let buttoncube = document.getElementById("buttoncube");
window.addEventListener("scroll", function () {
  let value = Number(window.scrollY);
  let gradient = value * (1/1700)
  document.body.style.backgroundColor = "rgb(var(--cbranco)," +  gradient + ")";
  if(gradient > 1){
    buttoncube.style.boxShadow= "rgb(var(--cbranco)) 0px -20px 60px 100px"
  }else{
    buttoncube.style.boxShadow= "none"
  }
});

async function prograndom() {
    let cube = document.querySelector(".cube")
    cube.style.animation = "animate 1s linear infinite"
    await sleep(1000)
    cube.style.animation = "animate 0.5s linear infinite"
    await sleep(1000)
    cube.style.animation = "animate 0.2s linear infinite"
    await sleep(500)
    let random = randint(0,2)
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