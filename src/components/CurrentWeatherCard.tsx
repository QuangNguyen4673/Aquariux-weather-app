import CardLayout from "./CardLayout";
import { CurrentWeather } from "../types";
import WeatherIcon from "./WeatherIcon";
import { ArrowDownLeftIcon } from "@heroicons/react/24/solid";

export default function CurrentWeatherCard({
  currentWeather,
}: {
  currentWeather: CurrentWeather | null;
}) {
  if (!currentWeather) return "No Data"; // TODO improve

  return (
    <CardLayout className="mb-5">
      <div className="text-lg font-semibold flex justify-between">
        <span>{currentWeather.dateTime}</span>
        <span>{currentWeather.name}</span>
      </div>

      {/* Icon + Temp + Description */}
      <div className="flex items-center justify-center gap-10 mb-4">
        <WeatherIcon icon={currentWeather.icon} size="@4x" />
        <div>
          <div className="text-2xl font-bold">{currentWeather.temp}</div>
          <div className="text-gray-500">{currentWeather.desc}</div>
        </div>
      </div>

      {/* Humidity, Wind, Visibility */}
      <div className="flex justify-between text-sm text-gray-700">
        <div className="flex flex-col items-center">
          <span className="font-bold">Humidity</span>
          <span>{currentWeather.humidity}</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-bold">Wind</span>
          <div className="flex align-middle justify-center">
            <ArrowDownLeftIcon className="size-3" />
            <div>{currentWeather.windSpeed}</div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-bold">Visibility</span>
          <span>{currentWeather.visibility}</span>
        </div>
      </div>
    </CardLayout>
  );
}
