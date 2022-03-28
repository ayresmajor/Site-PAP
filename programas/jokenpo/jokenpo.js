const sleep = (ms) =>
  new Promise(resolve => setTimeout(resolve, ms));
  function randint(min, max){
    return Math.floor(Math.random() * (max - min)) + min;  
}
function fechar(){
    document.getElementById('fundo').style.display= 'none';
    location.reload();
}

function iniciar() {
    document.getElementById('fundo').style.display= 'block';
    document.getElementById('euroiniciar').style.display = 'none';
}

async function startgame() {
    let loading = document.getElementById('loadingjokenpo');
    button = document.getElementById('startgame');
    let intrucoes = document.getElementById('intrucoes');
    button.style.display= 'none';
    await sleep(500);
    intrucoes.style.display ='block';
    await sleep(1500);
    intrucoes.innerText = '2';
    await sleep(1500);
    intrucoes.innerText = '1';
    await sleep(1500);
    const styles = {
        fontSize:'3em', 
        top: '30px', 
        left: '10px',
        animation: 'none',
        textShadow: '#000000 3px -2px 2px, #a10a7e42 -4px -5px 20px, #ffc10940 5px 4px 20px'
    }
    Object.assign(intrucoes.style, styles);
    intrucoes.innerText='Escolha uma das opções acima';
    loading.style.display= 'grid';
}