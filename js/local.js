var jugadores=localStorage.getItem("jugadores");
let puntos = 0;
jugadores=JSON.parse(jugadores);
if(jugadores==null) jugadores=[];
localStorage.setItem("puntosJ",puntos);

function lista(){
    var aLength = jugadores.length;
    
    var tabla="<tr><th>Jugador</th><th>Contador de Puntos</th><th>Mejor Tiempo</th></tr>";
    
    for(var i in jugadores){
        var jugador = JSON.parse(jugadores[i]);
        document.getElementById("Agregados").innerHTML="";
        
        tabla += "<tr><td>"+jugador.nombre+"</td>";
        tabla += "<td> "+jugador.contP+"</td>";
        tabla += "<td> "+jugador.mejorT+"</td>";
        tabla += "</tr>";
    }
    
    document.getElementById("Agregados").innerHTML=tabla;
}
function guardarDatos(contP, mejorT){
    var nombre = document.getElementById("nombre").value;

    for(var i in jugadores){
        var jugador = JSON.parse(jugadores[i]);
        if(jugador.nombre === nombre){
            alert("El nombre del jugador ya existe. Contador de puntos: "+jugador.contP+"  Mejor Tiempo: "+jugador.mejorT);
            localStorage.setItem("jugadorEN",JSON.stringify(jugador));
            return;
        }
    }
    var nuevo = JSON.stringify({
        nombre:nombre,
        contP:contP,
        mejorT:mejorT,
    });

    if(confirm("¿Deseas agregar nuevo jugador: "+nombre+"?")){
        document.getElementById("nombre").innerHTML=" ";
        jugadores.push(nuevo);
        localStorage.setItem("jugadores",JSON.stringify(jugadores));
        localStorage.setItem("jugadorEN",JSON.stringify(nuevo));
    }
    
}