/* Código encargado de cambiar todos los textos en la home, mostrar la página de error, cambiar el username y mostrar los animes y sus respectivos enlaces */ 
const allUsers = JSON.parse(localStorage.getItem('users'));
const errorNoAnimeDiv = document.getElementById('error-no-anime')
const localStorageUsername = localStorage.getItem('actualSession');
const animeDIV = document.getElementById('animes-dom')
const localStorageUsers = JSON.parse(localStorage.getItem('users'));

let userIndex;

localStorageUsers.forEach( (user, index) => {
  if(user.usuario === localStorageUsername){
    userIndex = index;
  }
})

const usuarioActivo = localStorageUsers[userIndex];

/* Mostar animes... o no? */ 


if (!usuarioActivo.animeData){
  errorNoAnimeDiv.style.display = 'grid';
} else {
  mostrarAnimes();
}

function mostrarAnimes() {
  const animes = usuarioActivo.animeData;
  animes.forEach(anime => {
    const animeDOM = document.createElement('div');
    animeDOM.classList.add('anime');
    
    animeDOM.innerHTML = `
    <h3>${anime.animeName}</h3>
    <a href="#" class="anime-ancla">Administrar</a>
    `
    animeDIV.appendChild(animeDOM)
  })
}