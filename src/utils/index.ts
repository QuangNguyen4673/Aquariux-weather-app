import {
  CurrentWeather,
  ForecastEntry,
  ForecastItem,
  WeatherForecast,
  WeatherForecastResponse,
  WeatherResponse,
} from '../types'
import moment from 'moment'

const kelvinToCelsius = (k: number): number => k - 273.15

const getDayMonthFromUnix = (unix: number) =>
  moment.unix(unix).format('DD MMMM')

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1)

export const mapWeatherData = (data: WeatherResponse): CurrentWeather => {
  return {
    id: data.id,
    dateTime: moment.unix(data.dt).format('MMMM D, YYYY'),
    name: data.name,
    country: data.sys.country,
    temp: kelvinToCelsius(data.main.temp).toFixed(0) + ' °C',
    desc: capitalize(data.weather[0].description),
    icon: data.weather[0].icon,
    humidity: data.main.humidity + ' %',
    windSpeed: data.wind.speed + ' m/s',
    visibility: data.visibility / 1000 + ' km',
    coord: data.coord,
  }
}

export const mapWeatherForecastData = (
  data: WeatherForecastResponse
): WeatherForecast => {
  return {
    cityId: data.city.id,
    coord: data.city.coord,
    list: handleWeatherList(data.list),
  }
}

// group ForecastEntry by dayandmonth
// exp: {"16 April" : [...],"17 April": [...]}
// TODO refactor
const handleWeatherList = (
  list: ForecastEntry[]
): Record<string, ForecastItem[]> => {
  let date = getDayMonthFromUnix(list[0].dt)
  let res: Record<string, ForecastItem[]> = { [date]: [] }
  list.forEach(item => {
    if (getDayMonthFromUnix(item.dt) === date) {
      res = { ...res, [date]: [...res[date], transformForecastEntry(item)] }
    } else {
      date = getDayMonthFromUnix(item.dt)
      res[date] = []
    }
  })
  return res
}

const transformForecastEntry = (entry: ForecastEntry): ForecastItem => {
  const { temp_min, temp_max } = entry.main
  const celsius = (temp: number) => kelvinToCelsius(temp).toFixed(2)
  return {
    dateTime: moment.unix(entry.dt).format('HH:mm'),
    icon: entry.weather[0].icon,
    tempRange: celsius(temp_min) + '/' + celsius(temp_max) + '°C',
    desc: entry.weather[0].description,
  }
}
