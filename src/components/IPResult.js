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
            {props.city},{props.region},{props.country}
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
  ipAddress : "--",
  locationColHeading : "Location",
  city : "--",
  region : "--",
  country : "--",
  timezoneHeading : "Timezone",
  time : "--",
  timezone : "UTC",
  isp : "ISP",
  isProvider : "--"
}

IPResult.propTypes = {
  ipColHeading : PropTypes.string,
  ipAddress : PropTypes.string,
  locationColHeading : PropTypes.string,
  city : PropTypes.string,
  region : PropTypes.string,
  country : PropTypes.string,
  timezoneHeading : PropTypes.string,
  time : PropTypes.string,
  timezone : PropTypes.string,
  isp : PropTypes.string,
  isProvider : PropTypes.string
}