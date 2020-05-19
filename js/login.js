function validarLogin() {
    let validado = true
    let mensaje = ''
    let usuarios = document.forms['login']
    if (usuarios.usuario.value == '') {
        mensaje = 'Su usuario o contrasena son erroneos <br>'
        validado = false
    }
    if (usuarios.contrasena.value.length < 8) {
        mensaje = 'Su usuario o contrasena son erroneos <br>'
        validado = false
    }
    if (!validado) {
        let alerta = document.getElementById('mensaje-modal')
        alerta.innerHTML = mensaje
        $('#alerta').modal('show')
    }
    return validado
}