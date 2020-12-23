/* Funcion exportada que se encarga de añadir todos los registros al Local Storage. En este momento (22/12/2020), simplemente añade los usuarios registrados */ 

export const añadirUsuarioLocalStorage = (usuario, contraseña) => {
  let usuarios;
  localStorage.getItem('users') === null ? 
    usuarios = [] :
    usuarios = JSON.parse(localStorage.getItem('users'))
  const userInfo = {
    usuario,
    contraseña
  }
  usuarios.push(userInfo)
  localStorage.setItem('users', JSON.stringify(usuarios))
}