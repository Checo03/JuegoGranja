/* var jugadores=localStorage.getItem("jugadores");
jugadores=JSON.parse(jugadores);
if(jugadores==null) jugadores=[];

function lista(){
    var aLength = jugadores.length;
    
    var tabla="<tr><th>Jugador</th><th>Contador de Puntos</th><th>Mejor Tiempo</th></tr>";    
    for(var i in jugadores){
        var jugador = JSON.parse(jugadores[i]);
        document.getElementById("tablaParticipantes").innerHTML="";
        
        tabla += "<tr><td>"+jugador.nombre+"</td>";
        tabla += "<td> "+jugador.contP+"</td>";
        tabla += "<td> "+jugador.mejorT+"</td>";
        tabla += "</tr>";
    }
    
    document.getElementById("tablaParticipantes").innerHTML=tabla;
}
window.onload = function() {
    lista();
}; */


var jugadores = localStorage.getItem("jugadores");
jugadores = JSON.parse(jugadores);
if (jugadores == null) jugadores = [];

jugadores.sort(function(a, b) {
    return a.contP - b.contP;
});

var tabla = "<tr><th>Jugador</th><th>Contador de Puntos</th><th>Mejor Tiempo</th></tr>";
for (var i = 0; i < jugadores.length; i++) {
    var jugador = JSON.parse(jugadores[i]);

    tabla += "<tr><td>" + jugador.nombre + "</td>";
    tabla += "<td>" + jugador.contP + "</td>";
    tabla += "<td>" + jugador.mejorT + "</td>";
    tabla += "</tr>";
}

document.getElementById("tablaParticipantes").innerHTML = tabla;