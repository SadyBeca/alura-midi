
const listaDeTeclas = document.querySelectorAll('.tecla');

function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}


for ( i = 0; i < listaDeTeclas.length; i += 1) {
    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];

    // TEMPLATE STRING
    const idAudio = `#som_${instrumento}`;
    
    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento){
        let key = evento.code;
        if(key === 'Enter' || key === 'Space'){
            tecla.classList.add('ativa');
        }
            
    }

    tecla.onkeyup = function (evento){
        let key = evento.code;
        if(key === 'Enter' || key === 'Space'){
            tecla.classList.remove('ativa');
        }
    }

}

// Inserção de classes em JS
// Eventos de teclado

