import React, { useState } from 'react';
import { FiSun, FiCloud, FiCloudRain, FiCloudSnow, FiCloudLightning } from 'react-icons/fi';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const apiKey = '9ef9b1d5382ea334f38a80e4d20dbf6e';

  // Map weather conditions to icons
  const getWeatherIcon = (condition) => {
    switch (condition) {
      case 'Clear':
        return <FiSun className="text-yellow-500 text-6xl" />;
      case 'Clouds':
        return <FiCloud className="text-gray-500 text-6xl" />;
      case 'Rain':
        return <FiCloudRain className="text-blue-500 text-6xl" />;
      case 'Snow':
        return <FiCloudSnow className="text-blue-400 text-6xl" />;
      case 'Thunderstorm':
        return <FiCloudLightning className="text-purple-500 text-6xl" />;
      default:
        return <FiCloud className="text-gray-500 text-6xl" />;
    }
  };

  const checkWeather = async () => {
    if (!city) {
      setError('Please enter a city name');
      return;
    }
    setError('');
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      );
      const data = await response.json();
      if (data.cod === 200) {
        setWeatherData({
          city: data.name,
          temp: Math.round(data.main.temp) + '°C',
          humidity: data.main.humidity + '%',
          wind: data.wind.speed + ' km/h',
          condition: data.weather[0].main,
        });
      } else {
        setError('City not found');
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setError('Error retrieving weather data');
    }
  };

  return (
    <div className="container mx-auto flex flex-col items-center justify-center h-screen p-8 bg-gray-100">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-green-600 mb-6">
        Find Current Weather Conditions
      </h1>

      <div className="bg-white shadow-lg rounded-lg p-8 text-center max-w-md w-full">
        {!weatherData && !error && (
          <div className="flex flex-col items-center mb-6">
            <FiSun className="text-yellow-500 text-6xl mb-2" />
            <p className="text-xl text-gray-500">Sunny</p>
          </div>
        )}
        <div className="mb-4">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name"
            className="w-full p-3 rounded-md border border-gray-300 text-gray-700"
          />
          <button
            onClick={checkWeather}
            className="w-full mt-2 p-3 bg-blue-500 rounded-md text-white hover:bg-blue-600"
          >
            Search Weather
          </button>
        </div>
        {error && <p className="text-red-500">{error}</p>}
        {weatherData && (
          <div className="weather-data text-center">
            {getWeatherIcon(weatherData.condition)}
            <h1 className="text-3xl font-bold mt-2">{weatherData.city}</h1>
            <p className="text-xl">{weatherData.temp}</p>
            <p>Condition: {weatherData.condition}</p>
            <p>Humidity: {weatherData.humidity}</p>
            <p>Wind Speed: {weatherData.wind}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
