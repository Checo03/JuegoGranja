//let puntos = 0;
let tiempo = 0;
let cronometro;

function iniciarCronometro() {
    cronometro = setInterval(function() {
        tiempo++;
        document.getElementById('cronometro').innerText = `${tiempo}`;
        localStorage.setItem("tiempo",tiempo);
    }, 1000);
    
    
  }
  
  function detenerCronometro() {
    clearInterval(cronometro);
  }
  window.onload =function() {
      iniciarCronometro();
  };
  