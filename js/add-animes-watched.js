/* Código que se va a encargar de mostrar y filtrar los animes que ya se hayan visto. En caso de que no haya ninguno, va a mostrar el mensaje de error */ 

const actualSessionLS = localStorage.getItem('actualSession');
const users = JSON.parse(localStorage.getItem('users'));
const errorDiv = document.getElementById('error-no-anime')
const animesDiv = document.getElementById('animes-div')
let userIndex;

users.forEach((user, index) =>  {
  if (user.usuario === actualSessionLS) {
    userIndex = index;
  }
})

const userActual = users[userIndex];
let animesWatched = [];

userActual.animeData.forEach(anime => {
  console.log(anime.watched)
  if (anime.watched === true) {
    animesWatched.push(anime)
  }
})

if (animesWatched.length > 0) {
  errorDiv.style.display = 'none'
  añadirAnimeCompleto()
}

function añadirAnimeCompleto() {
  animesWatched.forEach(anime => {
    const animeDOM = document.createElement('div');
    animeDOM.classList.add('anime');
    
    animeDOM.innerHTML = `
    <h3>${anime.animeName}</h3>
    <a href="#" class="anime-ancla">Administrar</a>
    `
    animesDiv.appendChild(animeDOM)
  })
}
