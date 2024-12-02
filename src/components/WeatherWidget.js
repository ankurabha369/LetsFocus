import React, { useState, useEffect } from "react";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faCloud,
  faCloudRain,
  faSnowflake,
  faCloudShowersHeavy,
  faThunderstorm,
  faSmog,
} from "@fortawesome/free-solid-svg-icons";

function WeatherWidget() {
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = "9285f9de3efe2993233116226c772429"; // Replace with your OpenWeatherMap API key.

  // Fetch weather data based on user location.
  const getWeather = (lat, lon) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => setWeatherData(data))
      .catch((error) => console.error("Error fetching weather data:", error));
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      getWeather(latitude, longitude);
    });
  }, []);

  // Determine the Font Awesome icon based on weather condition
  const getWeatherIcon = (condition) => {
    const weatherIconMap = {
      Clear: faSun,
      Clouds: faCloud,
      Rain: faCloudRain,
      Snow: faSnowflake,
      Drizzle: faCloudShowersHeavy,
      Thunderstorm: faThunderstorm,
      Mist: faSmog,
      // Add more weather conditions as needed
    };

    return weatherIconMap[condition] || faCloud; // Default to cloud icon
  };

  return (
    <div className="p-3 ">
      {weatherData ? (
        <>
          <div className="flex justify-center">
            {/* Render the appropriate Font Awesome icon */}
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={getWeatherIcon(weatherData.weather[0].main)}
                className="h-8 sm:h-10"
              />
            </div>

            <div className="text-xm ml-4 font-bold">
              {weatherData.name}
              <p className="text-left text-xm relative bottom-1">
                {weatherData.weather[0].description}
              </p>
            </div>
            <div className="flex ml-2">
              <p className="text-3xl ml-2">
                {Math.round(weatherData.main.temp)}°C
              </p>
            </div>
          </div>
          <div className="text-sm flex font-semibold justify-end  right-2 gap-3 mt-2 ">
            <p>Humidity: {weatherData.main.humidity} %</p>
            <p>Wind: {weatherData.wind.speed} m/s</p>
          </div>
        </>
      ) : (
        <p className="text-white">
          <FontAwesomeIcon icon={faSpinner} spinPulse />
        </p>
      )}
    </div>
  );
}

export default WeatherWidget;
