import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const LeafletXReact = () => {
  useEffect(() => {
    // Crear el mapa y configurar las opciones iniciales
    const map: any = L.map(`map`, {
      center: [19.026319, -70.147792],
      zoom: 9,
      zoomControl: false,
    });

    // Agregar la capa de azulejos (tiles)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);


    // Limpiar el mapa cuando el componente se desmonta
    return () => {
      map.remove();
    };
  }, []);

  return <div id="map" style={{ height: '100vh', width: '100%' }}></div>;
};

export default LeafletXReact;