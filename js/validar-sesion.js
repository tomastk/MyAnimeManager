/* Script encargado de validar la sesión actual del usuario para determinar si debe redirigirlo al login o no. */ 

const actualSession = localStorage.getItem('actualSession');

if (!actualSession) {
  document.location = 'pages/login.html'
}