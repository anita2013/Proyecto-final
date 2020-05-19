function validarLogin() {
    let validado = true
    let mensaje = 'Su usuario o contrasena son erroneos <br>'
    let alerta = document.getElementById('mensaje-modal')
    let usuarios = document.forms['login']

    const personas = {}

    for (let element of usuarios.elements) {
        if (element.id) {
            personas[element.id] = element.value
        }
    }
    if (usuarios.usuario.value == '') {
        validado = false
    }
    if (usuarios.contrasena.value.length < 8) {
        validado = false
    }
    if (!validado) {
        let alerta = document.getElementById('mensaje-modal')
        alerta.innerHTML = mensaje
        $('#alerta').modal('show')
    } else {
        var user = localStorage.getItem(personas.usuario)
        user = JSON.parse(user)
        if (user.usuario == personas.usuario && user.contrasena == personas.contrasena) {
            let alerta = document.getElementById('mensaje-modal')
            let sesion = true
            mensaje = "Inicio de sesion correcto!"
            alerta.innerHTML = mensaje
            $('#alerta').modal('show')
            localStorage.setItem('sesion', JSON.stringify(sesion))
        } else {
            let alerta = document.getElementById('mensaje-modal')
            alerta.innerHTML = mensaje
            $('#alerta').modal('show')
        }
    }
    return validado
}