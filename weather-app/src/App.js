import React, { useState } from "react";
import axios from "axios";

export default function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=0c9c556f1c5bae07978a22aace01a306`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };

  // const convertToCelsius = (fahrenheit) => {
  //   return ((fahrenheit - 32) * 5) / 9;
  // };

  // const kilometers = (miles) => {
  //   return miles * 1.6;
  // };

  /*  const weatherSky = () => {
    switch (data.weather[0].main) {
      case "Rain":
        return (
          <img src={require("./assets/rain.jpg")} style={{ height: "250px" }} />
        );
      case "Clear":
        return (
          <img src={require("./assets/sun.jpg")} style={{ height: "250px" }} />
        );
      case "Clouds":
        return (
          <img
            src={require("./assets/cloud.jpg")}
            style={{ height: "250px" }}
          />
        );

      default:
        return <h1>data.weather</h1>;
    }
  };  */

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Kërko"
          type="text"
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? (
              // <h1>{convertToCelsius(data.main.temp.toFixed()).toFixed()}°C</h1>
              <h1>{data.main.temp.toFixed()}°C</h1>
            ) : null}
          </div>
        </div>
        <div className="weather-sky">
          {/* {data.weather ? <p>{data.weather[0].main}</p> : null} */}
          {/* {data.weather ? weatherSky() : null} */}
          {data.weather ? (
            <img
              src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
              style={{ height: "350px" }}
            />
          ) : null}
        </div>

        {data.name !== undefined && (
          <div className="bottom">
            <div className="feels">
              {data.main ? (
                <p className="bold">
                  {/* {convertToCelsius(data.main.feels_like.toFixed()).toFixed()}°C */}
                  {data.main.feels_like.toFixed()}°C
                </p>
              ) : null}
              <p>Ndjesia</p>
            </div>
            <div className="humidity">
              {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
              <p>Lagështia</p>
            </div>
            <div className="wind">
              {data.wind ? (
                <p className="bold">{data.wind.speed.toFixed()} KM</p>
              ) : null}
              <p>Shpejtësia e erës</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
