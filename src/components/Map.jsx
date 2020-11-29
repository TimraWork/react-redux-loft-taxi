import React, {useEffect, useRef} from 'react';
import mapboxgl from 'mapbox-gl';

const Map = () => {
  let mapRef = useRef();

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoidGltcmF3b3JrMTIzIiwiYSI6ImNraHhoZjB6ODAxMnQycnM3b2lvcWlwemYifQ.vsaprJd2gGI-DvkUfwxDeA';
    const map = new mapboxgl.Map({
      container: mapRef.current,
      style: 'mapbox://styles/timrawork123/ckhxhn8r30ukv19khb7ah55qr',
      center: [30.3056504, 59.9429126],
      zoom: 10,
    });

    return () => {
      map.remove();
    };
  }, []);

  return <div className="map" ref={mapRef} />;
};

export default Map;
