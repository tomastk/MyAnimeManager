/* Código que se va a encargar de validar el usuario y la contraseña obtenidos en el Local Storage, para verificar si esos registros ya existen. En caso de que no exista, deberá mostrar un error */

const formulario = document.getElementById('login-form')
const username = document.getElementById('username')
const password = document.getElementById('password')
const localStorageUsers = JSON.parse(localStorage.getItem('users'));
const errorDiv = document.getElementById('div-error')
const okDiv = document.getElementById('div-ok')
// Validación sobre si hay usuarios en el Local Storage

if (!localStorageUsers) {
  errorDiv.textContent = 'No hay ningún usuario registrado. Registra uno.'
}

function validarLogin(usuarioIngresado, contraseñaIngresada){
  const usuarios = [];
  const passwords = [];
  if (!localStorageUsers) {
    return false;
  }
  localStorageUsers.forEach(user => {
    usuarios.push(user.usuario)
    passwords.push(user.contraseña)
  })
  if (usuarios.includes(usuarioIngresado) && passwords.includes(contraseñaIngresada)){
    return true;
  } else {
    return false;
  }
}

formulario.addEventListener('submit', (e) => {
  e.preventDefault();
  if(validarLogin(username.value, password.value)){
    errorDiv.innerText = ''
    document.location = '../index.html'
    localStorage.setItem('actualSession', username.value)
  } else {
    okDiv.innerText = ''
    errorDiv.innerText = 'El nombre de usuario o la contraseña son incorrectos.'
  }
})