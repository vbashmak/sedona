var myMap;

ymaps.ready(init);

function init () {
  myMap = new ymaps.Map('map', {
    center: [34.771506, -111.697740],
    zoom: 7,
    controls: []
    }, {
        suppressMapOpenBlock: true
  });

  myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
    hintContent: 'Собственный значок метки',
    balloonContent: 'Это красивая метка'
    }, {
      iconLayout: 'default#image',
      iconImageHref: 'img/icon-map-marker.svg',
      iconImageSize: [27, 27],
  });

  myMap.geoObjects.add(myPlacemark);
}
