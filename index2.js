// Datos a enviar
const mensaje = "invite";
const mensaje2 = "owner";
const mensaje3 = "admin";
const owner = `index.html?mensaje=${encodeURIComponent(mensaje2)}`
const admin = `index.html?mensaje=${encodeURIComponent(mensaje3)}`
const urlDestino = `index.html?mensaje=${encodeURIComponent(mensaje)}`;

// Redirección
function troll() {
  while(true) {
    alert("trolled :>] jajaja")
  }
}

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
        
        if(event.key == "a" && event.key == "p") {
          manejarCookie("crear", "owner", "whale", 1999999999999999999)
          window.location.href = owner;
          
        }
        if(event.shiftKey && event.key == "1") {
          manejarCookie("crear", "admin", "whale", 100000000000000000)
          window.location.href = admin;
        }
    })
addEventListener("keydown", function(event) {
  console.log(event.key);
})