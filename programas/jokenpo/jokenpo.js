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

function startgame() {
    loading = document.getElementById('loadingjokenpo');
    button = document.getElementById('startgame')
    button.style.display= 'none'
    loading.style.display= 'grid';
}