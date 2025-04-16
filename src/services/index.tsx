import { WeatherResponse, CurrentWeather, WeatherForecastResponse, WeatherForecast } from '../types'
import { mapWeatherData, mapWeatherForecastData } from '../utils'

const API_KEY = '75074f8fdc5aa45cb99c9aa9c4ecfdec'
const OPEN_WEATHER_URL = 'https://api.openweathermap.org/data/2.5'

export const fetchWeather = async (locationName: string): Promise<CurrentWeather> => {
  const res = await fetch(
    `${OPEN_WEATHER_URL}/weather?q=${locationName}&appid=${API_KEY}`
  )

  const jsonRes: WeatherResponse = await res.json()
  if (jsonRes.cod !== 200) {
    throw new Error('Something went wrong')
  }

  return mapWeatherData(jsonRes)
}

export const fetchWeatherForecast = async ({ lon, lat }: { lon: number, lat: number }): Promise<WeatherForecast> => {
  const res = await fetch(
    `${OPEN_WEATHER_URL}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`
  )

  const jsonRes: WeatherForecastResponse = await res.json()
  if (jsonRes.cod !== '200') {
    throw new Error('Something went wrong')
  }

  return mapWeatherForecastData(jsonRes)
}
