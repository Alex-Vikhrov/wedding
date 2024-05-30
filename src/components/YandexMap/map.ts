//@ts-nocheck
const center = [51.533693, 46.009958];

const init = () => {

  const map = new ymaps.Map('map', {
    center: center,
    zoom: 18,
    // controls: ['routePanelControl'],
  });

  const location = ymaps.geolocation.get();

  location.then(function (res) {
    let locationText = res.geoObjects.get(0).properties.get('text');
    console.log(locationText);
  });

  let control = map.controls.get('routePanelControl');

  control.routePanel.state.set({
    type: 'masstransit',
  });

  const placemark = new ymaos.Placemark(center, {}, {});

  map.geoObjects.add(placemark);
};

ymaps.ready(init);
