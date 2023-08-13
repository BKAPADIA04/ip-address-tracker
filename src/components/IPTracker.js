import React, { useState, useEffect } from "react";
import "./Global.css";
import "./IPTracker.css";
import backgroundImage from "./images/backgroundDesktop.png";

//https:geo.ipify.org/api/v2/country,city,vpn?apiKey=at_JB6Ym6fogehLNDhrkJ0EJlz0nMfZz&ipAddress=223.237.219.156
export default function IPTracker() {
  //State Assignment
  const [ipAddress, setIpAddress] = useState();
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [region, setRegion] = useState("");
  const [lat, setLat] = useState("19.07283");
  const [lng, setLng] = useState("72.88261");
  const [postalCode, setPostalCode] = useState("");
  const [timezone, setTimezone] = useState("");
  const [isp, setIsp] = useState(
    ""
  );
  const [proxy, setProxy] = useState(false);
  const [vpn, setVpn] = useState(false);
  const [tor, setTor] = useState(false);
  const [error, setError] = useState("");

  const apiUrl = "https:geo.ipify.org/api/v2/country,city,vpn?apiKey=";
  const apiKey = process.env.REACT_APP_IPGeolocation_API_KEY;

  const updateDetails = async () => {
    let url = `${apiUrl}${apiKey}&ipAddress=${ipAddress}`;
    try {
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      // setIpAddress(parsedData.ip);
      setCountry(parsedData.location.country);
      setCity(parsedData.location.city);
      setRegion(parsedData.location.region);
      setLat(parsedData.location.lat);
      setLng(parsedData.location.lng);
      // setPostalCode(parsedData.location.geonameId);
      setTimezone(parsedData.location.timezone);
      setIsp(parsedData.isp);
      setProxy(parsedData.proxy.proxy);
      setVpn(parsedData.proxy.vpn);
      setTor(parsedData.proxy.tor);
      setError("");
    } 
    catch (error) {
      setError("Something went wrong. Please try again.");
      console.log(error);
    }
  };

  const handleSubmit = (event) =>
  {
    alert('An ip-address was submitted: ' + ipAddress);
    // setIpAddress(event.target.value);
    event.preventDefault();
  }

  // const handleChange = (event) => {
  //   setIpAddress(event.target.value);
  // }

  useEffect(() => {
    updateDetails();
  });

  return (
    <>
      <div className="container">
        <img
          src={backgroundImage}
          alt=""
          style={{ width: "100%", height: "70%", position: "relative" }}
        />
        <div className="header-text">
          <h1>IP Address Tracker</h1>
        </div>
        <form className="ip-input" onSubmit={handleSubmit}>
          <label>
          <input
            type="text"
            id="ip-input-text"
            name="ip-address"
            placeholder="Search for any IP address or domain"
            autoComplete="off"
            value={ipAddress}
            onChange={(e) => setIpAddress(e.target.value)}
          ></input>
          </label>
          <input type="reset" value="&#9655;" id="ip-input-submit"></input>
        </form>
        <div className="data-container">
          <div className="ip-col">
            <div className="upper-text ip-Col">IP ADDRESS</div>
            <div className="lower-text ip-Col">{ipAddress}</div>
          </div>
          <div className="vl"></div>
          <div className="location-col">
            <div className="upper-text ">LOCATION</div>
            <div className="lower-text">
              {city}, {region},{country} {postalCode}
            </div>
          </div>
          <div className="vl"></div>
          <div className="timezone-col">
            <div className="upper-text">TIMEZONE</div>
            <div className="lower-text">UTC {timezone}</div>
          </div>
          <div className="vl"></div>
          <div className="isp-col">
            <div className="upper-text">ISP</div>
            <div className="lower-text">{isp}</div>
          </div>
        </div>
      </div>
    </>
  );
}
