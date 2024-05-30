//@ts-nocheck
const center = [51.533693, 46.009958];
const midiy = [51.53359785768221, 46.01003130258554];

const init = () => {
  const map = new ymaps.Map('map', {
    center: center,
    zoom: 19,
  });

  const placemark = new ymaps.Placemark(midiy, null, {
    preset: 'islands#redIcon',
    // iconLayout: 'default#image',
    // iconImageHref: "/public/placeholder.png",
    // iconImageSize: [30, 30],
    // iconImageOffset: [-14, -32],
  });

  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  map.controls.remove('typeSelector'); // удаляем тип
  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove('rulerControl'); // удаляем контрол правил
  map.geoObjects.add(placemark);

  document.getElementById('openRouteButton').addEventListener('click', () => {
    const destination = `${midiy[0]},${midiy[1]}`;
    const yandexMapsUrl = `https://yandex.ru/maps/?rtext=~${destination}&rtt=auto`;
    window.open(yandexMapsUrl, '_blank');
  });
};

ymaps.ready(init);
