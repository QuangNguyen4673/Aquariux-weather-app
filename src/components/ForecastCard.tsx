import React from 'react'
import CardLayout from './CardLayout'
import { WeatherForecast } from '../types'
import WeatherIcon from './WeatherIcon'

export default function ForecastCard({ weatherForecast }: { weatherForecast: WeatherForecast | null }) {
  if (!weatherForecast) return "No Data"
  return (
    <CardLayout>
      {Object.keys(weatherForecast.list).map(date => {
        return <React.Fragment key={date}>
          <div className='font-bold text-gray-400'>{date}</div>
          {weatherForecast.list[date].map(item => {
            return <div key={item.dateTime}>
              <div className="flex items-center gap-4 px-4 py-2">
                {/* Time */}
                <div className="font-medium text-base">{item.dateTime}</div>

                {/* Weather Icon */}
                <WeatherIcon icon={item.icon} size='@2x' />

                {/* Temperature + Description */}
                <div className="flex flex-col">
                  <span className="text-gray-400 text-sm">{item.tempRange}</span>
                  <span className="font-semibold text-sm">{item.desc}</span>
                </div>
              </div>
            </div>
          })}
        </React.Fragment>
      })}
    </CardLayout>
  )
}
