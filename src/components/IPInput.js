import { React, useState } from "react";
import "./IPInput.css";

export default function IPInput({onSubmitToApp}) {
  const [ipAddress, setIpAddress] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isValid) 
      onSubmitToApp(ipAddress);
        // onSubmitToFinal(ipAddress);
  };

  const handleChange = (event) => {
    let inputIp = event.target.value;
    if (inputIp === " ") {
      setIsValid(false);
      return;
    }
    setIpAddress(inputIp);
    setIsValid(validCheck(inputIp));
  };
  function validCheck(ipAddress) {
    const ipFormat =
      /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return ipFormat.test(ipAddress);
  }

  return (
    <>
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
        <input type = "submit" disabled = {!isValid} value="&#9655;" id="ip-input-submit"></input>
      </form>
    </>
  );
}
