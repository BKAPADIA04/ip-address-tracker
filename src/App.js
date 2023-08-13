import './App.css';
import IPInput from './components/IPInput';
import IPResult from './components/IPResult';

// import IPTracker from './components/IPTracker';

function App() {
  return (
  <div>
      <IPInput/>
      <IPResult 
        ipColHeading = "IP"
        ipAddress = "--"
        locationColHeading = "Location"
        city = "--"
        region = "--"
        country = "--"
        postalCode = "--"
        timezoneHeading = "Timezone"
        time = "--"
        timezone = "UTC"
        isp = "ISP"
        isProvider = "--"
      />
  </div>
  )
}

export default App; 
