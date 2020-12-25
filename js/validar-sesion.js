/* Script encargado de validar la sesión actual del usuario para determinar si debe redirigirlo al login o no. */ 

const actualSession = localStorage.getItem('actualSession');
const path = location.pathname;

if (!actualSession) {
  if (path.includes('pages')) {
    location = '/pages/login.html'
  } else {
    location = 'pages/login.html'
  }
}