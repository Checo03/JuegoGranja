document.addEventListener("DOMContentLoaded", function () {
    const imagenes = document.querySelectorAll('.imagen');
    const canvasList = document.querySelectorAll('.canvas');

    const botonSiguiente = document.getElementById('botonSiguiente'); //comprobar que existe este boton, pues solo se usa en un html
    if (botonSiguiente) {
        botonSiguiente.addEventListener('click', verificarImagenes); //lo mismo que el anterior
    }

    const botonFinalizar = document.getElementById('botonFinalizar');
    if (botonFinalizar) {
        botonFinalizar.addEventListener('click', creditos);
    }

  
    //Seleccionar aleatoriamente 3 imagenes
    const imagenesSeleccionadas = seleccionarAleatoriamente(imagenes, 3);
    console.log(imagenesSeleccionadas);
    shuffleArray(imagenesSeleccionadas);

    //Ordena las imagenes con las que jugara el usuario en orden aleatorio
    imagenesSeleccionadas.forEach((imagen, index) => {
        imagen.style.order = index; // Establecer el orden aleatorio en la pantalla
        imagen.style.display = 'inline-block'; // Asegurarse de que la imagen sea visible
    });
  
    //Se toman las zonas correspondientes a las imagenes seleccionadas
    const canvasSeleccionados = imagenesSeleccionadas.map(imagen => document.getElementById(`zona${imagen.id.slice(-1)}`));
    
  
    // Ocultar las imagenes y zonas no seleccionadas
    ocultarElementos(imagenes, imagenesSeleccionadas);
    ocultarElementos(canvasList, canvasSeleccionados);

    
  
    // Asignar event listeners a las imagenes y zonas seleccionadas
    imagenesSeleccionadas.forEach(imagen => {
      imagen.addEventListener('dragstart', iniciarArrastre);
    });
  
    canvasSeleccionados.forEach(canvas => {
      canvas.addEventListener('dragover', permitirSoltar);
      canvas.addEventListener('drop', soltar);
    });

    let imagenesEnZonas = 0;
    let puntos = localStorage.getItem('puntosJ') ? parseInt(localStorage.getItem('puntosJ')) : 0; // Inicializar puntos desde localStorage
   
  
  function seleccionarAleatoriamente(array, cantidad) {
    const imagenesLocalStorage = JSON.parse(localStorage.getItem('imagenesSeleccionadas')) || [];
    if (imagenesLocalStorage.length === 6) {
      localStorage.removeItem('imagenesSeleccionadas');
  }
    const imagenesDisponibles = [];

    // Agrega las imagenes al arreglo si no estan en el localStorage
    array.forEach(imagen => {
        if (!imagenesLocalStorage.includes(imagen.id)) {
            imagenesDisponibles.push(imagen);
        }
    });

    const imagenesSeleccionadas = [];
    while (imagenesSeleccionadas.length < cantidad && imagenesDisponibles.length > 0) {
        const indice = Math.floor(Math.random() * imagenesDisponibles.length);
        const imagenSeleccionada = imagenesDisponibles.splice(indice, 1)[0];
        imagenesSeleccionadas.push(imagenSeleccionada);
    }
    
    return imagenesSeleccionadas;
  }
  
  function ocultarElementos(elementos, seleccionados) {
    elementos.forEach(elemento => {
      if (!seleccionados.includes(elemento)) {
        elemento.style.display = 'none';
      } 
    });
  }
  
  
    function iniciarArrastre(e) {
      e.dataTransfer.setData('text/plain', e.target.id);
    }
  
    function permitirSoltar(e) {
      e.preventDefault();
    }
  
    function soltar(e) {
      e.preventDefault(); //previene el comportamiento por default del navegador
      const data = e.dataTransfer.getData('text/plain'); //obtiene los datos de la funcion arrastre, en este caso el id de la imagen que se esta arrastrando
      const imagen = document.getElementById(data); //se obtiene la imagen proveniente del id recuperado
      const zona = e.target; //target obtiene el elemento que esta disparando el evento, en este caso drop que proviene del canvas, entonces se almacena el canvas sobre el que se esta soltando la imagen
  
      if (zona.id === `zona${data[data.length - 1]}`) { //compara la zona con la imagen, zona con zona, pues solo se extrae el ultimo elemento de la imagen para que coincida con el del canvas en caso de que sea la zona correspondiente, y concatena ese elemento extraido con el prefijo zona
            const ctx = zona.getContext('2d'); //obtiene el contexto que necesita cada canvas
            const escala = 1; // Factor de escala para reducir la imagen a la mitad
            const anchoI = imagen.width * escala;
            const alturaI = imagen.height * escala;
            const x = (zona.width - anchoI) / 2;
            const y = (zona.height - alturaI) / 2;
            ctx.drawImage(imagen, x, y, anchoI, alturaI); //dibuja la imagen en el contexto
            imagen.style.visibility = 'hidden'; //desaparece la imagen de su posicion inicial en caso de que sea arrastrada
            imagenesEnZonas++; // Incrementar el contador de las imagenes correctas
            const nombreI = imagen.src.split('/').pop(); // Obtener solo el nombre de archivo de la URL de la imagen
            const nombreC = nombreI.split('.')[0]; // Obtener el nombre sin la extensión
            const nombreImagen = nombreC;
            const nombreImagenDiv = document.getElementById(`nombreImagen${data[data.length - 1]}`);
            let valorAsignado;
            if (nombreImagen === 'imagen1') { //comparar el valor de la imagen segun corresponda y asignar los valores correspondientes
                valorAsignado = 'abeja';
                const sonido1 = document.getElementById('sonido1');
                sonido1.play();
            }  
            if (nombreImagen === 'imagen2') { //comparar el valor de la imagen segun corresponda y asignar los valores correspondientes
                valorAsignado = 'caballo';
                const sonido2 = document.getElementById('sonido2');
                sonido2.play();
            }  
            if (nombreImagen === 'imagen3') { //comparar el valor de la imagen segun corresponda y asignar los valores correspondientes
                valorAsignado = 'cerdo';
                const sonido3 = document.getElementById('sonido3');
                sonido3.play();
            }  
            if (nombreImagen === 'imagen4') { //comparar el valor de la imagen segun corresponda y asignar los valores correspondientes
                valorAsignado = 'conejo';
                const sonido4 = document.getElementById('sonido4');
                sonido4.play();
            }  
            if (nombreImagen === 'imagen5') { //comparar el valor de la imagen segun corresponda y asignar los valores correspondientes
                valorAsignado = 'gallina';
                const sonido5 = document.getElementById('sonido5');
                sonido5.play();
            }  
            if (nombreImagen === 'imagen6') { //comparar el valor de la imagen segun corresponda y asignar los valores correspondientes
                valorAsignado = 'oveja';
                const sonido6 = document.getElementById('sonido6');
                sonido6.play();
            }  
            if (nombreImagen === 'imagen7') { //comparar el valor de la imagen segun corresponda y asignar los valores correspondientes
                valorAsignado = 'pato';
                const sonido7 = document.getElementById('sonido7');
                sonido7.play();
            }  
            if (nombreImagen === 'imagen8') { //comparar el valor de la imagen segun corresponda y asignar los valores correspondientes
                valorAsignado = 'perro';
                const sonido8 = document.getElementById('sonido8');
                sonido8.play();
            }  
            if (nombreImagen === 'imagen9') { //comparar el valor de la imagen segun corresponda y asignar los valores correspondientes
                valorAsignado = 'vaca';
                const sonido9 = document.getElementById('sonido9');
                sonido9.play();
            } 
             
            nombreImagenDiv.textContent = valorAsignado;
            nombreImagenDiv.style.visibility = 'visible';
        
            puntos++; // Incrementar los puntos
            document.getElementById('contador').innerText = `${puntos}`;
            localStorage.setItem('puntosJ', puntos); 
            let imagenesSeleccionadas = JSON.parse(localStorage.getItem('imagenesSeleccionadas')) || []; //se recupera lo que tenga la variable localstorage
            imagenesSeleccionadas.push(imagen.id); //se agrega la siguiente imagen arrastrada
            localStorage.setItem('imagenesSeleccionadas', JSON.stringify(imagenesSeleccionadas));

            if (imagenesEnZonas == 3) { // Verificar si las tres imagenes estan en zonas correctas
                //botonSiguiente.disabled = false; // Habilitar el boton
                if(botonSiguiente) {
                  botonSiguiente.disabled=false;
              }
              if(botonFinalizar) {
                    botonFinalizar.disabled=false;
                }
            }
      } else {
        alert('Animal en cas equivocada');
        const sonidoError = document.getElementById('sonidoError');
        sonidoError.play();
        puntos--;
        document.getElementById('contador').innerText = `${puntos}`;
        localStorage.setItem('puntosJ', puntos);
        
      }
    }
    function verificarImagenes() {
      if (imagenesEnZonas === 3) {
        alert('Felicidades, has entrado al nivel 2');
        window.location.href = 'juego2.html';
    } else {
        alert('No se puede pasar de pantalla aun, completa todas las imagens');
    }
    }
    function creditos() {
      if (imagenesEnZonas === 3) {
        alert('Juego terminado, felicidades');
        window.location.href = 'felicitacion.html';
      } else {
          alert('No se puede pasar de pantalla aun, completa todas las imagens');
      }
    }
    
    
   
  });
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

