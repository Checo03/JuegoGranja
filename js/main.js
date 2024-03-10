document.getElementById('formTabla').addEventListener('submit', function(event) {
    event.preventDefault();

    var nombre = document.getElementById('nombre').value;
    var cronometro = document.getElementById('cronometro').value;
    var puntaje = 10;

    var tabla = document.getElementById('tablaParticipantes');
    var fila = tabla.insertRow(-1);
    var celdaNombre = fila.insertCell(0);
    var celdaCronometro = fila.insertCell(1);
    var celdaPuntaje = fila.insertCell(2);

    celdaNombre.textContent = nombre;
    celdaCronometro.textContent = cronometro;
    celdaPuntaje.textContent = puntaje;
    
    document.getElementById('nombre').value = '';
    document.getElementById('cronometro').value = '';
});
