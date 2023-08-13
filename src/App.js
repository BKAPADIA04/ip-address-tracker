import "./App.css";
import IPInput from "./components/IPInput";
import IPResult from "./components/IPResult";
import {
  getInfoForCurrentIP,
  getInfoForRequestIP,
} from "./components/Geolocation";
import React, { useState, useEffect } from "react";

// import IPTracker from './components/IPTracker';

function App() {
  document.title = 'IP ADDRESS TRACKER';
  const [ipAddress, setIpAddress] = useState();
  const [city, setCity] = useState();
  const [region, setRegion] = useState();
  const [country, setCountry] = useState();
  const [timezone, setTimezone] = useState();
  const [isp, setIsp] = useState();
  const [latlong, setLatLong] = useState([0, 0]);

  const ipSubmitHandler = async (ipAddress) => {
    await getInfoByAPI({ ipAddress: ipAddress, useCurrentRequest: false });
  };

  let geoInfo;
  const getInfoByAPI = async ({ ipAddress, useCurrentRequest }) => {
    if (useCurrentRequest) {
      geoInfo = await getInfoForCurrentIP();
    } else {
      geoInfo = await getInfoForRequestIP(ipAddress);
    }
    console.log(geoInfo);
    if (geoInfo.isOK) {
      setIpAddress(geoInfo.data.ip);
      setCity(geoInfo.data.location.city);
      setRegion(geoInfo.data.location.region);
      setCountry(geoInfo.data.location.country);
      setTimezone(geoInfo.data.location.timezone);
      setIsp(geoInfo.data.isp);
      setLatLong([geoInfo.data.location.lat, geoInfo.data.location.lng]);
    } else {
      console.log("An error has occurred ", geoInfo.error);
    }
  };
  // console.log(geoInfo);
  const getInfoDefault = () => {
    getInfoByAPI({ useRequestAddress: true, ipAddress: "" });
  };

  useEffect(getInfoDefault, []);

  return (
    <div>
      <IPInput onSubmitToApp={ipSubmitHandler} />
      <IPResult
        ipAddress={ipAddress}
        city={city}
        region={region}
        country={country}
        time={timezone}
        isProvider={isp}
      />
    </div>
  );
}

export default App;
