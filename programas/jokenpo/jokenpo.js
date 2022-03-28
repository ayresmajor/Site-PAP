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
    loading.style.display= 'grid';
}