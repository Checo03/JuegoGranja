function guardarPuntaje() {
    var alias = document.getElementById('alias').value;
    var cronometro = document.getElementById('cronometro').value;
    var puntaje = document.getElementById('puntaje').value;

    // Crear una tabla HTML con los datos recopilados
    var tablaHTML = '<table border="1"><tr><th>Alias</th><th>Cronómetro</th><th>Puntaje</th></tr>';
    tablaHTML += '<tr><td>' + alias + '</td><td>' + cronometro + '</td><td>' + puntaje + '</td></tr>';
    tablaHTML += '</table>';

    // Convertir la tabla HTML en texto y guardarla en un archivo
    var contenidoArchivo = 'data:text/html;charset=utf-8,' + encodeURIComponent(tablaHTML);
    var enlaceDescarga = document.createElement('a');
    enlaceDescarga.setAttribute('href', contenidoArchivo);
    enlaceDescarga.setAttribute('download', 'PUNTAJES.html');
    enlaceDescarga.click();
}
