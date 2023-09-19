
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

    /*console.log(i);
    console.log(tecla);
    console.log(instrumento);*/
}


