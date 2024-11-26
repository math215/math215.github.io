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
if (manejarCookie("leer", "admin") == null) {
    if (manejarCookie("leer", "invite") == "whale") {
        window.location.href = 'index.html?mensaje=invite'
    }
    else if(manejarCookie("leer", "owner") == "whale") {
        window.location.href = 'owner.html'
    }
    else {
        window.location.href = 'index2.html'
    }
}