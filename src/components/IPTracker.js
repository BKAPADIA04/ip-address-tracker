import React from 'react'
import './Global.css';
import './IPTracker.css';
import backgroundImage from './images/backgroundDesktop.png'


export default function IPTracker() {
  return (
    <>
      <div className="container">
        <img src={backgroundImage} alt="" style = {{width : "100%",height : "70%",position : "relative"}}/>
        <div className="header-text">
          <h1>IP Address Tracker</h1>
        </div>
        <form className="ip-input">
          <input type="text" id="ip-input-text" name="ip-address" placeholder="Search for any IP address or domain" autoComplete='off'></input>
          <input type="submit" value="&#9655;" id="ip-input-submit"></input>
        </form>
      </div>
    </>
  )
}
