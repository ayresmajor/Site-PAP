function iniciar() {
    document.getElementById('fundo').style.visibility='visible';
}
const sleep = (ms) =>
  new Promise(resolve => setTimeout(resolve, ms));

  function randint(min, max){
    return Math.floor(Math.random() * (max - min)) + min;  
}

window.addEventListener('keyup', async function(event) {
    if (event.key === 'Enter') {
        let palpite = Number(euroinput.value)
        if (palpite >=1 && palpite <= 5){
           eurotexto.style.display= 'none'
           await sleep(1000)
           euroloading.style.display= 'block'
           await sleep(6000)
           euroloading.style.display= 'none'
           await sleep(1000)
           estrelas.style.visibility='visible'
            let numeros = [randint(1,10),randint(1,51), randint(1,51), randint(1,51),randint(1,51), randint(1,51),randint(1,51)]
            for(c = 0; c<= 6; c++){
                if(numeros[c]<10){
                    numeros[c] = '0' + numeros[c]
                }
                this.window['bola' + c ].innerHTML =`${numeros[c]}`
            }            
        } else {
            euroinfo.innerHTML += `<br>Valor inválido tente novamente`
            euroinput.value = ''
            await sleep(2000);
            euroinfo.innerHTML =`Pressione a tecla "Enter" &#x21B5; para continuar`
        }
    }
  });