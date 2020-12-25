/* Script que se va a encargar de actualizar el username y la contraseña */ 

const formulario = document.getElementById('update-form')
const usernameUpdate = document.getElementById('username-update')
const password = document.getElementById('password')
const password2 = document.getElementById('password2');
const errorDiv = document.getElementById('error')
const okDiv = document.getElementById('ok-div')
const users = JSON.parse(localStorage.getItem('users'))
const allUsers = JSON.parse(localStorage.getItem('users'));
const localStorageUsername = localStorage.getItem('actualSession');
let userIndex;

allUsers.forEach( (user, index) => {
  if(user.usuario === localStorageUsername){
    userIndex = index;
  }
})


const usuarioActivo = allUsers[userIndex];

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

function updateProfileLocalStorage(newUsername, newPassword) {
  usuarioActivo.usuario = newUsername;
  usuarioActivo.contraseña = newPassword;
  allUsers[userIndex] = usuarioActivo;
  localStorage.setItem('users', JSON.stringify(allUsers))
  localStorage.setItem('actualSession', newUsername)
  location.reload();
}

function checkData(){
  // Verifico las condiciones para que se pueda validar el formulario: el nombre de usuario y la contraseña no deben estar vacios, el nombre de usuario no debe estar vacio, el nombre de usuario debe tener al menos 6 caracteres, la contraseña no debe estar vacia y las dos contraseñas deben coincidir. En caso de que no se cumpla alguna condicion, retorno su respectivo error para hacer una experiencia de usuario más agradable. Si todo va bien, retorno true.
  if (usernameUpdate.value === '' && password.value === '') {
    return 'No ingresaste ni username ni contraseña'
  }
  if (usernameUpdate.value === '') {
    return 'Has ingresado un nombre de usuario invalido';
  }
  if (usernameUpdate.value.length < 6) {
    return 'El nombre de usuario debe tener al menos 6 caracteres';
  }

  if (usernameUpdate.value.length > 18) {
    return 'El nombre de usuario no puede contener más de 18 caracteres'
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
  if (!validarRegistro(usernameUpdate.value)){
    return 'Ese nombre de usuario ya se está utilizando'
  }
  return true;
}

formulario.addEventListener('submit', (e) => {
  e.preventDefault();
  if (typeof checkData() === 'string') {
    errorDiv.innerText = checkData();
  }

  if (checkData() === true) {
    errorDiv.innerText = ''
    okDiv.innerText = 'Todo bien. El usuario y la contraseña fueron cambiados.'
    updateProfileLocalStorage(usernameUpdate.value, password.value)
  }
})