let puntos = 0;
let tiempo = 0;
let cronometro;

function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}
function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    const draggedElement = document.getElementById(data);
    const target = event.target;

    if (target.tagName === 'IMG') {
        target.parentNode.appendChild(draggedElement);
        verificarRespuesta(target.parentNode.id, data);
    } else {
        target.appendChild(draggedElement);
        verificarRespuesta(target.id, data);
    }
}

function verificarRespuesta(casaId, imagenId) {
    const casaNumero = casaId.slice(-1);
    const imagenNumero = imagenId.slice(-1);

    if (casaNumero === imagenNumero) {
        puntos++;
        document.getElementById('contador').innerText = `${puntos}`;
        // Reproducir sonido del animal
        const sonidos = {
             'imagen1': 'Media/Audio/SonidosAnimales/vaca.mp3',
             'imagen2': 'Media/Audio/SonidosAnimales/SonidoPerro.wav',
             'imagen3': 'Media/Audio/SonidosAnimales/SonidoAbeja.mp3'
        };
         const audio = new Audio(sonidos[imagenId]);
         audio.play();
    } else {
        puntos--;
        document.getElementById('contador').innerText = `${puntos}`;
        // Reproducir sonido de error
        const audio = new Audio('Media/Audio/SonidosAnimales/error.mp3');
        audio.play();

        // Regresar la imagen a su posición inicial
        const initialContainer = document.getElementById(`animal-container2-${imagenNumero}`);
        initialContainer.appendChild(document.getElementById(imagenId));
    }
}

function iniciarCronometro() {
    cronometro = setInterval(function() {
        tiempo++;
        document.getElementById('cronometro').innerText = `${tiempo}`;
    }, 1000);
}

function detenerCronometro() {
    clearInterval(cronometro);
}

window.onload = function() {
    iniciarCronometro();
};