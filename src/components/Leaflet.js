import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { Marker } from "react-leaflet/Marker";
import { useMap } from "react-leaflet";
import React from "react";
import './Leaflet.css';
import "leaflet/dist/leaflet.css";
import L from 'leaflet';


const svgIcon = L.divIcon({
    html: `<svg fill="#ff0000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 395.71 395.71" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738 c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388 C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191 c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z"></path> </g> </g></svg>`,
    className: "svg-icon",
    iconSize: [40, 40],
    iconAnchor: [20, 40]
  });

export default function Leaflet(props) {
  const position = [+props.lat, +props.lng];
  return (
    <div className="mapContainer">
      <MapContainer
        style={{ height: "100vh", width: "100vw" }}
        center={position}
        zoom={15}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={svgIcon}></Marker>
        <LeafletMapController targetCenter={position} />
      </MapContainer>
    </div>
  );
}

function LeafletMapController(props) {
  const map = useMap();
  map.removeControl(map.zoomControl);
  map.flyTo(props.targetCenter);
  return null;
}
