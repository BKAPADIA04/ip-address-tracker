import React from 'react';
import './Background.css';
import desktopDesign from './images/backgroundDesktop.png';
import Leaflet from './Leaflet';

export default function Background(props) {
  return (
    <>
    <div className="container">
        <div className="ip-section">
            <img src={desktopDesign} alt="Desktop" style={{width:'100%',height:'100%'}}/>
        </div>
        <Leaflet className = "map-section" lat={props.lat} lng = {props.lng}/>
    </div>
    </>
  )
}
