import "./Weather.css";
export default function Weather() {
  return (
    <div className="content-wrap">
      <img src="/images/weather/cloud.jpg" alt="weather" id="weather-bg" />
      <div className="weather-wrap">
        <h2 id="weather-place">New Delhi</h2>
        <h3 id="weather-date">Sunday 15th August 2021</h3>
        <div id="weather-details">
          <img src="/icons/weather/cloud.svg" alt="cloud" id="weather-icon" />
          <h1 id="weather-degree">28</h1>
          <span id="weather-unit">°C</span>
        </div>
        <h2 id="weather-info">Partly Cloudy</h2>
      </div>
    </div>
  );
}
