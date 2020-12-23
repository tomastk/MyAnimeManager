/* Código encargado de cambiar todos los textos en la home, mostrar la página de error, cambiar el username y mostrar los animes y sus respectivos enlaces */ 
const usernameDiv = document.getElementById('username')
const username = localStorage.getItem('actualSession');
const allUsers = JSON.parse(localStorage.getItem('users'));
const errorNoAnimeDiv = document.getElementById('error-no-anime')
usernameDiv.innerText = username;

/* Botón de cerrar sesion */

function cerrarSesion() {
  localStorage.removeItem('actualSession');
  location.reload();
}
/* Mostar animes... o no? */ 
let userIndex;

allUsers.forEach( (user, index) => {
  if(user.usuario === username){
    userIndex = index;
  }
})


const usuarioActivo = allUsers[userIndex];
if (!usuarioActivo.animeData){
  errorNoAnimeDiv.style.display = 'grid';
} else {
  mostrarAnimes();
}

function mostrarAnimes() {
  
}