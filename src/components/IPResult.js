import React from "react";
import './IPResult.css';
import PropTypes from 'prop-types';

export default function IPResult(props) {
  return (
    <>
      <div className="data-container">
        <div className="ip-col">
          <div className="upper-text ip-Col">{props.ipColHeading}</div>
          <div className="lower-text ip-Col">{props.ipAddress}</div>
        </div>
        <div className="vl"></div>
        <div className="location-col">
          <div className="upper-text ">{props.locationColHeading}</div>
          <div className="lower-text">
            {props.city} {props.region} {props.country} {props.postalCode}
          </div>
        </div>
        <div className="vl"></div>
        <div className="timezone-col">
          <div className="upper-text">{props.timezoneHeading}</div>
          <div className="lower-text">{props.timezone}   {props.time}</div>
        </div>
        <div className="vl"></div>
        <div className="isp-col">
          <div className="upper-text">{props.isp}</div>
          <div className="lower-text">{props.isProvider}</div>
        </div>
      </div>
    </>
  );
}
IPResult.defaultProps = {
  ipColHeading : "IP",
  locationColHeading : "Location",
  timezoneHeading : "Timezone",
  timezone : "UTC",
  isp : "ISP"
}

IPResult.propTypes = {
ipColHeading: PropTypes.string,
locationColHeading : PropTypes.string,
timezoneHeading : PropTypes.string,
timezone : PropTypes.string,
isp : PropTypes.string
}