//Function to extract information from IP Geolocation API

const apiUrl = "https:geo.ipify.org/api/v2/country,city?apiKey=";
const apiKey = process.env.REACT_APP_IPGeolocation_API_KEY;

//https:geo.ipify.org/api/v2/country,city?apiKey=at_JB6Ym6fogehLNDhrkJ0EJlz0nMfZz&ipAddress=223.237.219.156
export function buildUrlForRequestIP (ipAddress) {
  let url = `${apiUrl}${apiKey}&ipAddress=${ipAddress}`;
  return url;
};
export function buildUrlForCurrentIP () {
  let url = `${apiUrl}${apiKey}`;
  return url;
};

export async function getInfoForRequestIP (ipAddress) {
  const url = buildUrlForRequestIP(ipAddress);
  const info = getInfo(url);
  return info;
};

export async function getInfoForCurrentIP () {
  const url = buildUrlForCurrentIP();
  const info = getInfo(url);
  return info;
};

export async function getInfo (url) {
  let info;
  try {
    let data = await fetch(url);
    if (!data.ok) {
      throw new Error(`geolocation request failed with error: ${data.status}`);
    }
    let parsedData = await data.json();
    info = { isOK: true, data: parsedData };
  } catch (err) {
    console.log(err);
    info = { isOK: false, error: err.message };
  }
  return info;
};
