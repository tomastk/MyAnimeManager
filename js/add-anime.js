/* Script que se va a encargar de añadir todos los animes al Local Storage */


// Variables del HTML

const formulario = document.getElementById('add-anime-form')
const animeNameDiv = document.getElementById('name')
const episodes = document.getElementById('episodes')
const date = document.getElementById('date')
const dailyEpisodes = document.getElementById('dailyepisodes')
const okDiv = document.getElementById('ok')
const errorDiv = document.getElementById('error')

// Variables del Local Storage

const localStorageUsers = JSON.parse(localStorage.getItem('users'));
const actualUsername = localStorage.getItem('actualSession');
let userIndex;

localStorageUsers.forEach( (user, index) => {
  if(user.usuario === actualUsername){
    userIndex = index;
  }
})

const usuarioActivo = localStorageUsers[userIndex];

const animes = usuarioActivo.animeData;


function añadirAnimeLocalStorage(animeName, episodes, date, dailyepisodes) {
  const anime = {
    animeName,
    episodes,
    date,
    dailyepisodes,
    watched: false
  }

  let animes;

  if (!usuarioActivo.anime) {
    animes = [];
  } else {
    animes = usuarioActivo.animeData;
  }

  if (usuarioActivo.animeData) {
    animes = [...usuarioActivo.animeData] 
  } else {
    animes = [];
  }

  animes.push(anime)

  usuarioActivo.animeData = animes;

  localStorageUsers[userIndex] = usuarioActivo;


  localStorage.setItem('users', JSON.stringify(localStorageUsers))
  console.log('Anime añadido correctamente')


}

/* Función para validar el formulario */ 

function validateAnime() {
  if (animeNameDiv.value.length <= 1) {
    return 'El nombre del anime tiene que tener más de 1 caracter'
  }

  if (isNaN(parseInt(episodes.value))) {
    return 'El número de episodios ingresado no es un número'
  }

  if (isNaN(parseInt(dailyepisodes.value))) {
    return 'El numero de episodios diarios no es un número'
  }

  if (parseInt(episodes.value) <= 0) {
    return 'El anime tiene que tener mínimo 1 episodio.'
  } 
  if (date.value === '') {
    return 'Por favor, escribe una fecha correcta.'
  }

  if (parseInt(dailyepisodes.value) <= 0) {
    return 'La cantidad de episodios diarios debe ser mayor a 0'
  }

  return true;

}

formulario.addEventListener('submit', (e) => {
  e.preventDefault()

  if (typeof validateAnime() === 'string' ) {
    errorDiv.innerText = validateAnime();
  }

  if (validateAnime() === true) {
    errorDiv.innerText = ''
    okDiv.innerHTML = `
      Anime añadido correctamente.
      <a href="/MyAnimeManager/index.html" class="link">Verlo</a>
      `
    añadirAnimeLocalStorage(animeNameDiv.value, episodes.value, date.value, dailyEpisodes.value);
    }


})