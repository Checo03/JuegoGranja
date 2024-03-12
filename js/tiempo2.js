let tiempo=localStorage.getItem("tiempo");
function iniciarCronometro() {
    cronometro = setInterval(function() {
        tiempo++;
        document.getElementById('cronometro').innerText = `${tiempo}`;
        localStorage.setItem("tiempo",tiempo);
    }, 1000);
}
window.onload =function() {
    iniciarCronometro();
};
