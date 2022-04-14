let armdoor = document.getElementById("armdoor1");

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function slide(){
    armdoor.style.animation = "slide 5s  2 alternate";
    await sleep(10000)
    armdoor.style.animation = "none";
}