let tiempo=localStorage.getItem("tiempo");
    function iniciarCronometro() {
    cronometro = setInterval(function() {
        tiempo++;
        document.getElementById('cronometro').innerText = `${tiempo}`;
    }, 1000);
    localStorage.setItem("tiempo",tiempo);
}
window.onload =function() {
    iniciarCronometro();
};
