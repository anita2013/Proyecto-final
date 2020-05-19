function inicio() {
    var sesion = localStorage.getItem('sesion')
    sesion = JSON.parse(sesion)
    console.log(sesion)
    if (sesion.log == true) {
        let alerta = document.getElementById('user')
        mensaje = sesion.usuario
        alerta.innerHTML = mensaje
    }
}