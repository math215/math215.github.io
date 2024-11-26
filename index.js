const params = new URLSearchParams(window.location.search);
const mensaje = params.get("mensaje");
if (mensaje != "invite" && leer("invite") != "whale" && mensaje != "owner") {
    window.location.href = "index2.html";
}
else {
  
}
function leer(nombre = "") {
      // Leer una cookie
      const nombreEQ = nombre + "=";
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
        let c = cookies[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nombreEQ) == 0) return c.substring(nombreEQ.length, c.length);
      }
      return null; 
};