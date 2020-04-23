var navList = document.querySelector('.main-menu__list');
var navToggle = document.querySelector('.main-menu__toggle');
var mapPicture = document.querySelector('.map__picture');

navToggle.classList.remove('main-menu__toggle--nojs');
navList.classList.add('main-menu__list--closed');
mapPicture.classList.remove('map__picture--nojs');

navToggle.addEventListener('click', function() {
    if (navToggle.classList.contains('main-menu__toggle--closed')) {
      navToggle.classList.remove('main-menu__toggle--closed');
      navToggle.classList.add('main-menu__toggle--opened');
    } else {
      navToggle.classList.add('main-menu__toggle--closed');
      navToggle.classList.remove('main-menu__toggle--opened');
    }

    if (navList.classList.contains('main-menu__list--closed')) {
      navList.classList.remove('main-menu__list--closed');
      navList.classList.add('main-menu__list--opened');
    } else {
      navList.classList.add('main-menu__list--closed');
      navList.classList.remove('main-menu__list--opened');
    }
  });
