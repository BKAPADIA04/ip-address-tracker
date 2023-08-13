import { React, useState } from "react";
import "./IPInput.css";

export default function IPInput() {
  const [ipAddress, setIpAddress] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isValid) console.log("entered");
        // onSubmitToFinal(ipAddress);
  };

  const handleChange = (event) => {
    let inputIp = event.target.value;
    setIpAddress(inputIp);
    if (inputIp === "") {
      setIsValid(false);
      return;
    }
    setIsValid(validCheck(inputIp));
  };
  function validCheck(ipAddress) {
    const ipFormat =
      /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return ipFormat.test(ipAddress);
  }

  return (
    <>
    <div className="container">
      <div className="header-text">
        <h1>IP Address Tracker</h1>
      </div>
      <form className="ip-input" onSubmit={handleSubmit}>
          <input
            type="text"
            id="ip-input-text"
            name="ip-address"
            placeholder="Search for any IP address or domain"
            autoComplete="off"
            value={ipAddress}
            onChange={handleChange}
          ></input>
        <input type="submit" disabled = {!isValid}value="&#9655;" id="ip-input-submit"></input>
      </form>
    </div>
    </>
  );
}
