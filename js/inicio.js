function inicioSesion() {
    var sesion = localStorage.getItem('sesion')
    sesion = JSON.parse(sesion)
    const dir = (window.location.pathname).includes('login.html')
    if (dir == false) {
        if (sesion.log == true) {
            try {
                let alerta = document.getElementById('user')
                mensaje = sesion.usuario
                alerta.innerHTML = mensaje
            } catch {
                //window.location.assign("./index.html")
            }
            let signOut = document.getElementById('signOut')
            mensaje = "Cerrar Sesion"
            signOut.innerHTML = mensaje
        }
    } else {
        if (sesion.log == true) {
            try {
                window.location.assign("./index.html")
            } catch {

            }
            let signOut = document.getElementById('signOut')
            mensaje = "Cerrar Sesion"
            signOut.innerHTML = mensaje
        }
    }

}





function botonSesion() {
    var sesion = localStorage.getItem('sesion')
    sesion = JSON.parse(sesion)

    const dir = (window.location.pathname).includes('login.html')
    if (dir == false) {
        if (sesion.log == true) {
            try {
                let sesion = {
                    log: false,
                    usuario: ''
                }
                localStorage.setItem('sesion', JSON.stringify(sesion))
                let alerta = document.getElementById('user')
                mensaje = 'Entrar'
                alerta.innerHTML = mensaje
            } catch {

            }
            let signOut = document.getElementById('signOut')
            mensaje = "Registrate"
            signOut.innerHTML = mensaje
            window.location.assign("./login.html")
        } else {
            window.location.assign("./login.html")
        }
    } else {
        window.location.assign("./index.html")
    }
}