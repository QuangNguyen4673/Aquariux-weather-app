// icon: 04n
// size: "" "@2x" "@4x"
export default function WeatherIcon({
  icon,
  size = "@2x",
}: {
  icon: string;
  size?: string;
}) {
  return (
    <img
      src={`https://openweathermap.org/img/wn/${icon}${size}.png`}
      alt="weather icon"
    />
  );
}
