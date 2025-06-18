import { Link, useLocation } from "react-router";
import { fetchWeather, fetchWeatherForecast } from "../services";
import { useCallback, useEffect, useState } from "react";
import { CurrentWeather, WeatherForecast } from "../types";
import CurrentWeatherCard from "../components/CurrentWeatherCard";
import ForecastCard from "../components/ForecastCard";

export default function Home() {
  const [currentWeather, setCurrentWeather] = useState<CurrentWeather | null>(null);
  const [weatherForecast, setWeatherForecast] = useState<WeatherForecast | null>(null);
  const location = useLocation();

  // get weather then get forecast
  const getHomeData = useCallback(async (locationName: string) => {
    try {
      const newCurrentWeather: CurrentWeather =
        await fetchWeather(locationName);
      getForeCast(newCurrentWeather.coord);
      setCurrentWeather(newCurrentWeather);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert("An unexpected error occurred.");
      }
    }
  }, []);

  const getForeCast = async ({ lon, lat }: { lon: number; lat: number }) => {
    try {
      const newWeatherForecast: WeatherForecast = await fetchWeatherForecast({
        lon,
        lat,
      });
      setWeatherForecast(newWeatherForecast);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert("An unexpected error occurred.");
      }
    }
  };

  useEffect(() => {
    const newCurrentWeather: CurrentWeather = location.state?.currentWeather;
    if (newCurrentWeather) {
      setCurrentWeather(newCurrentWeather);
      getForeCast(newCurrentWeather.coord);
    } else {
      getHomeData("singapore");
    }
  }, [location.state?.currentWeather, getHomeData]);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <Link to="/search">Search for a city</Link>
      <CurrentWeatherCard currentWeather={currentWeather} />
      <ForecastCard weatherForecast={weatherForecast} />
    </div>
  );
}
