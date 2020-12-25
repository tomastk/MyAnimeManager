/* Código para el header del sitio web. */

/* Botón de cerrar sesion */

function cerrarSesion() {
  localStorage.removeItem('actualSession');
  location.reload();
}

/* Añadir username */ 

const usernameDiv = document.getElementById('username')
const username = localStorage.getItem('actualSession');
usernameDiv.innerText = username;

