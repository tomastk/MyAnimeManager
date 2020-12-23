/* Código Javascript para el menú desplegable que tiene la aplicación */

const menu = document.getElementById('menu-bar')
const lineas = document.getElementsByClassName('linea');
menu.addEventListener('click', () => {
  for (let i = 0; i < lineas.length; i++) {
    lineas[i].classList.toggle('clicked')
  }
  document.querySelector('.menu-items').classList.toggle('desplegado')
})