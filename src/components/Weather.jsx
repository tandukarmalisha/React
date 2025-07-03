import React, { useState } from "react";

export default function WeatherApp() {
  const [city, setCity] = useState("");       // to store user input
  const [data, setData] = useState(null);     // to store weather data

  const api="https://api.openweathermap.org/data/2.5/weather?units=metric&q="
  const apiKey = "6a75b04b1931db9b91d45648f3e5b1f8"; 

  const submitHandler = async (e) => {
    e.preventDefault(); // stops the page from refreshing

    // call the weather API
    const res = await fetch(api,city);

    const json = await res.json(); // convert response to JSON

    // keep only the needed data
    setData({
      temp: json.main.temp,
      condition: json.weather[0].description,
      name: json.name,
    });
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Weather App</h1>

      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)} // update city
          style={{ padding: "8px", marginRight: "10px" }}
        />
        <button type="submit" style={{ padding: "8px" }}>
          Get Weather
        </button>
      </form>

      {data && (
        <div style={{ marginTop: "20px" }}>
          <h2>{data.name}</h2>
          <h3>Temperature: {data.temp}°C</h3>
          <h4>Condition: {data.condition}</h4>
        </div>
      )}
    </div>
  );
}
