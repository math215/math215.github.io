// Datos a enviar
const mensaje = "invite";
const mensaje2 = "owner";
const owner = `index.html?mensaje=${encodeURIComponent(mensaje2)}`
const urlDestino = `index.html?mensaje=${encodeURIComponent(mensaje)}`;

// Redirección


function manejarCookie(accion, nombre, valor = "", diasDeExpiracion) {
    if (accion === "crear") {
      // Crear una cookie
      const fechaExpiracion = new Date();
      fechaExpiracion.setTime(fechaExpiracion.getTime() + (diasDeExpiracion * 24 * 60 * 60 * 1000));
  
      document.cookie = `${nombre}=${valor}; expires=${fechaExpiracion.toUTCString()}; path=/`;
    }
    else if (accion === "leer") {
      // Leer una cookie
      const nombreEQ = nombre + "=";
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
        let c = cookies[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nombreEQ) == 0) return c.substring(nombreEQ.length, c.length);
      }
      return null;
    }
    else if (accion === "borrar") {
      // Borrar una cookie
      document.cookie = `${nombre}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
    }
    else {
      console.log("Acción no válida. Usa 'crear', 'leer' o 'borrar'.");
    }
  }




addEventListener("keydown", function(event) {
        if (event.shiftKey && event.altKey) {
            manejarCookie("crear", "invite", "whale", 10000000000000000000000);
            window.location.href = urlDestino;
            
        }
        console.log(event.key);
        if(event.key == "," && event.key == "p") {
          this.window.location.href = owner;
        }
    })
