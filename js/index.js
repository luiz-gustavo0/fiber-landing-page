const btnMenu = document.querySelector('.btn--menu');
const menu = document.querySelector('.header__menu');

btnMenu.onclick = () => {
  menu.classList.toggle('active');
};
