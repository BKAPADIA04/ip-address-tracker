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
        <div className="data-container">
          <div className="ip-col">
            <div className="upper-text ip-Col">
              IP ADDRESS
            </div>
            <div className="lower-text ip-Col">
              192.212.174.101
            </div>
          </div>
          <div className="vl"></div>
          <div className="location-col">
            <div className="upper-text ">
                LOCATION
            </div>
            <div className="lower-text">
            Brooklyn, NY 10001
            </div>
          </div>
          <div className="vl"></div>
          <div className="timezone-col">
            <div className="upper-text">
                TIMEZONE
            </div>
            <div className="lower-text">
                UTC -05:00
            </div>
          </div>
          <div className="vl"></div>
          <div className="isp-col">
            <div className="upper-text">
              ISP
            </div>
            <div className="lower-text">
            SpaceX
            Starlink
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
