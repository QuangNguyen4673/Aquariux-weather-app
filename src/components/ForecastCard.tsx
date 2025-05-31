import React from "react";
import CardLayout from "./CardLayout";
import { WeatherForecast } from "../types";
import WeatherIcon from "./WeatherIcon";

export default function ForecastCard({
  weatherForecast,
}: {
  weatherForecast: WeatherForecast | null;
}) {
  if (!weatherForecast) return "No Data";
  return (
    <CardLayout>
      {Object.keys(weatherForecast.list).map((date) => {
        return (
          <React.Fragment key={date}>
            <div className="font-bold text-gray-400">{date}</div>
            {weatherForecast.list[date].map((item) => {
              return (
                <div key={item.dateTime}>
                  <div className="grid grid-cols-4 gap-4">
                    <div className="font-medium text-base flex items-center justify-center">
                      {item.dateTime}
                    </div>
                    <WeatherIcon icon={item.icon} size="@2x" />
                    <span className="text-gray-400 text-sm flex items-center justify-center">
                      {item.tempRange}
                    </span>
                    <span className="font-semibold text-sm flex items-center justify-center">
                      {item.desc}
                    </span>
                  </div>
                </div>
              );
            })}
          </React.Fragment>
        );
      })}
    </CardLayout>
  );
}
