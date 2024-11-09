function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000)); // Expiración en días
    const expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Función para obtener el valor de una cookie por su nombre
function getCookie(name) {
    const cookieArr = document.cookie.split(';');
    for (let i = 0; i < cookieArr.length; i++) {
        let cookie = cookieArr[i].trim();
        if (cookie.startsWith(name + '=')) {
            return cookie.substring(name.length + 1);
        }
    }
    return null;
}

// Detectar cuando se presionan las teclas Ctrl + Alt
document.addEventListener('keydown', function(event) {

    if (event.shiftKey && event.ctrlKey) {
        setCookie("blacklist_perm", 1, 100000)
        window.location.href = 'index2.html';
    }
    if (event.ctrlKey && event.altKey) {
        setCookie("blacklist", 1, 2)
        window.location.href = 'index2.html';
    }
});

// Comprobar si el usuario está baneado (si tiene la cookie 'blacklist')
window.onload = function() {
    if (getCookie('blacklist')) {
        // Si el usuario está en la blacklist, redirigirlo automáticamente a index2.html
        window.location.href = 'index2.html';
    }
    else if (getCookie('blacklist_perm')) {
        window.location.href = 'index2.html';
    }
};