let puntos = localStorage.getItem("puntosJ");
let tiempo = localStorage.getItem("tiempo");
document.getElementById('puntaje').innerText = `Puntaje obtenido: ${puntos}`;
document.getElementById('Tiempo').innerText = `Tiempo obtenido: ${tiempo}`;


var jugadores=localStorage.getItem("jugadores");
jugadores=JSON.parse(jugadores);
var jugador2=localStorage.getItem("jugadorEN");
jugador2=JSON.parse(jugador2);

for(var i in jugadores){
    var jugador = JSON.parse(jugadores[i]);
    if(jugador.nombre === jugador2.nombre){
        jugador.contP = parseInt(jugador.contP) + parseInt(puntos);
        if(jugador.mejorT === 0){
            jugador.mejorT = tiempo;
        }
        if(jugador.mejorT > tiempo){
            jugador.mejorT = tiempo;
        }
        var nuevo = JSON.stringify({
            nombre:jugador.nombre,
            contP:jugador.contP,
            mejorT:jugador.mejorT,
        });
        jugadores.splice(i,1);
        jugadores.push(nuevo);
        localStorage.setItem("jugadores",JSON.stringify(jugadores));
    }
}