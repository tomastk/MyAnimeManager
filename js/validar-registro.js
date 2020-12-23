/* Script que se va a encargar de validar el registro en javascript para ver si todos los datos ingresados por el usuario están correctos */

/* Importar la función de añadir registro, para hacer el código más legible */

import {añadirUsuarioLocalStorage} from './añadir-registro.js'


/* Declaración de las variables */

const formulario = document.getElementById('sign-up-form')
const username = document.getElementById('username')
const password = document.getElementById('password')
const password2 = document.getElementById('password2');
const errorDiv = document.getElementById('error')
const okDiv = document.getElementById('ok-div')
const users = JSON.parse(localStorage.getItem('users'))



/* Declaración de las funciones */

function validarRegistro(usuarioIngresado){
  const localStorageUsers = JSON.parse(localStorage.getItem('users'));
  const usuarios = [];
  if (!localStorageUsers) {
    return true;
  }
  localStorageUsers.forEach(user => {
    usuarios.push(user.usuario)
  })
  if (usuarios.includes(usuarioIngresado)){
    return false;
  } else {
    return true;
  }
}

function checkData(){
  // Verifico las condiciones para que se pueda validar el formulario: el nombre de usuario y la contraseña no deben estar vacios, el nombre de usuario no debe estar vacio, el nombre de usuario debe tener al menos 6 caracteres, la contraseña no debe estar vacia y las dos contraseñas deben coincidir. En caso de que no se cumpla alguna condicion, retorno su respectivo error para hacer una experiencia de usuario más agradable. Si todo va bien, retorno true.
  if (username.value === '' && password.value === '') {
    return 'No ingresaste ni username ni contraseña'
  }
  if (username.value === '') {
    return 'Has ingresado un nombre de usuario invalido';
  }
  if (username.value.length < 6) {
    return 'El nombre de usuario debe tener al menos 6 caracteres';
  }
  if (password.value === '') {
    return 'Debes ingresar una contraseña correcta.'
  }
  if (password.value.length < 6) {
    return 'La contraseña debe tener al menos 6 caracteres';
  }
  if (password.value != password2.value) {
    return 'Las contraseñas no coinciden';
  }
  if (!validarRegistro(username.value)){
    return 'Ese nombre de usuario ya se está utilizando'
  }
  return true;
}

/* Event Listeners */ 


formulario.addEventListener('submit', (e) => {
  // Detengo el envio del formulario

  e.preventDefault()
  // Declaro la variable error, para que sea reasignada en caso de que exista alguno
  
  let error;

  // Si al comprobar el formulario obtengo un string (es decir, un error), entonces reasigno la variable error a lo que recibo y lo muestro en el DOM (en un elemento previamente creado en el HTML)

  if (typeof checkData() === 'string') {
    error = checkData();
    errorDiv.innerText = error;
  }

  // Si todo ha ido bien, vacio el contenedor del error (por si habia alguno) y añado el texto en el HTML (en un elemento previamente creado). Luego de un segundo y medio, redirigo al usuario al index.html

  if (checkData() === true) {
    errorDiv.innerText = '';
    okDiv.innerText = 'Usuario creado. Redirigiendo a la home...'
    localStorage.setItem('actualSession', username.value)
    setTimeout(() => {
      document.location = '../index.html'
    }, 500)
    añadirUsuarioLocalStorage(username.value, password.value)
  } else {
    okDiv.innerText = '';
  }

})