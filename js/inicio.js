function inicioSesion() {
    var sesion = {
        loggin: false,
        usuario: ''
    }
    console.log(sesion)
    try {
        sesion = localStorage.getItem('sesion')
        sesion = JSON.parse(sesion)
    } catch {
        sesion = {
            loggin: false,
            usuario: ''
        }
    }
    console.log(sesion)
    const dir = (window.location.pathname).includes('login.html')
    if (dir == false) {
        try {
            if (sesion.loggin == true) {
                try {
                    var alerta = document.getElementById('user')
                    mensaje = sesion.usuario
                    alerta.innerHTML = mensaje
                } catch {
                    //window.location.assign("./index.html")
                }
                let signOut = document.getElementById('signOut')
                mensaje = "Cerrar Sesion"
                signOut.innerHTML = mensaje
            }
        } catch {

        }

    } else {
        try {
            if (sesion.loggin == true) {
                try {
                    window.location.assign("./index.html")
                } catch {

                }
                let signOut = document.getElementById('signOut')
                mensaje = "Cerrar Sesion"
                signOut.innerHTML = mensaje
            }
        } catch {}

    }

}

function botonSesion() {
    let sesion = {
        loggin: false,
        usuario: ''
    }
    try {
        sesion = localStorage.getItem('sesion')
        sesion = JSON.parse(sesion)
    } catch {
        sesion = {
            loggin: false,
            usuario: ''
        }
    }
    const dir = (window.location.pathname).includes('login.html')
    if (dir == false) {
        try {
            if (sesion.loggin == true) {
                try {
                    sesion = {
                        loggin: false,
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
        } catch {
            window.location.assign("./login.html")
        }

    } else {
        window.location.assign("./index.html")
    }
}