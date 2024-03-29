import "./Weather.css";
import { useState, useEffect } from "react";
// weather backgrounds
import Clear from "../../assets/weather/clear.jpg";
import Cloud from "../../assets/weather/cloud.jpg";
import Drizzle from "../../assets/weather/drizzle.jpg";
import Haze from "../../assets/weather/haze.jpg";
import Rainy from "../../assets/weather/rainy.jpg";
import Snowy from "../../assets/weather/snowy.jpg";
import Thunder from "../../assets/weather/thunder.jpg";
// weather icons
import ClearIcon from "../../assets/wIcons/clear.svg";
import CloudIcon from "../../assets/wIcons/rain.svg";
import DrizzleIcon from "../../assets/wIcons/drizzle.svg";
import HazeIcon from "../../assets/wIcons/haze.svg";
import RainyIcon from "../../assets/wIcons/rain.svg";
import SnowyIcon from "../../assets/wIcons/snow.svg";
import ThunderIcon from "../../assets/wIcons/thunder.svg";
//animation
import Aos from "aos";
import "aos/dist/aos.css";

const api = {
  key: "eb473732e24481d7bac93821748b9733",
  base: "https://api.openweathermap.org/data/2.5/",
  geo: "https://api.openweathermap.org/geo/1.0/",
};

export default function Weather() {
  // eslint-disable-next-line
  const [ query,setQuery] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  //weather from user query
  const [weather, setWeather] = useState({});
  // hourly weather
  // const [hourlyWeather, setHourlyWeather] = useState({});
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [condition, setCondition] = useState();

  // const search = (evt) => {
  //   try {
  //     if (evt.key === "Enter") {
  //       fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
  //         .then((res) => res.json())
  //         .then((result) => {
  //           setWeather(result);
  //           setQuery("");
  //           try {
  //             setCondition(result?.weather[0]?.id);
  //           } catch (error) {
  //             console.log(error);
  //           }

  //           // console.log(result);
  //         });
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     setErrorMessage(error.message);
  //   }
  // };

  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  // Weather on first load without user query
  const successfulLookup = (position) => {
    const { latitude, longitude } = position.coords;
    const geoUrl = `${api.geo}reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${api.key}`;

    fetch(geoUrl)
      .then((response) => response.json())
      .then((geoData) => {
        const city = geoData[0]?.name || "";
        const country = geoData[0]?.country || "";
        setCity(city);
        setCountry(country);
      })
      .catch((error) => {
        console.log("Error while fetching geolocation data", error);
      });

    const weatherUrl = `${api.base}onecall?lat=${latitude}&lon=${longitude}&units=metric&exclude=minutely,daily&appid=${api.key}`;
    fetch(weatherUrl)
      .then((response) => response.json())
      .then((result) => {
        setWeather(result.current);
        setQuery("");
        try {
          setCondition(result?.current?.weather[0].id);
        } catch (error) {
          console.log(error);
        }
      })
      .catch((error) => {
        console.log("Error while fetching weather data", error);
      });
  };


  useEffect(() => {
    const getWeather = () => {
      try {
        if (window.navigator.geolocation) {
          // Geolocation available
          window.navigator.geolocation.getCurrentPosition(
            successfulLookup,
            console.log("Fetching location...")
          );
        }
      } catch (error) {
        console.log(error);
        setErrorMessage(error.message);
      }
    };
    getWeather();
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <main>
        {/* <div id="location-search">
          <h2>Weather</h2>
          <input
            type="text"
            id="location-in"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
          {query.length > 0 && <p id="hint-text">Press enter to search.</p>}
        </div> */}
        {typeof weather.temp != "undefined" ? (
          errorMessage > 1 ? (
            <div className="content-wrap">
              <h1>We couldn't track weather for that place. Sorry!</h1>
            </div>
          ) : (
            <div
              className="content-wrap"
              style={{
                backgroundImage: `url(${
                  condition > 800
                    ? Cloud
                    : condition > 790
                    ? Clear
                    : condition > 700
                    ? Haze
                    : condition > 590
                    ? Snowy
                    : condition > 390
                    ? Rainy
                    : condition > 290
                    ? Drizzle
                    : Thunder
                })`,
              }}
            >
              <div className="weather-wrap" data-aos="fade-up">
              <h2 id="weather-place">{city}, {country}</h2>
                <h3 id="weather-date">{dateBuilder(new Date())}</h3>
                <div id="weather-details">
                  <img
                    src={`${
                      condition > 800
                        ? CloudIcon
                        : condition > 790
                        ? ClearIcon
                        : condition > 700
                        ? HazeIcon
                        : condition > 590
                        ? SnowyIcon
                        : condition > 390
                        ? RainyIcon
                        : condition > 290
                        ? DrizzleIcon
                        : ThunderIcon
                    }`}
                    alt="cloud"
                    id="weather-icon"
                  />
                  <h1 id="weather-degree">{Math.round(weather.temp)}</h1>
                  <span id="weather-unit">°C</span>
                </div>
                <h2 id="weather-info">{weather.weather[0].description}</h2>
              </div>
            </div>
          )
        ) : (
          ""
        )}
      </main>
    </div>
  );
}
