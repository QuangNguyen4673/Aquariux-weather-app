import { render } from '@testing-library/react';
import { currentWeather } from '../test/mockData'
import CurrentWeatherCard from './CurrentWeatherCard'

describe("CurrentWeatherCard tests", () => {
  it("Display no data text when passing null", () => {
    const { getByText } = render(<CurrentWeatherCard currentWeather={null} />)
    const text = getByText(/no data/i);
    expect(text).toBeInTheDocument();
  });

  it("Display humidity label", () => {
    const { getByText } = render(<CurrentWeatherCard currentWeather={currentWeather} />)
    const text = getByText(/humidity/i);
    expect(text).toBeInTheDocument();
  });
})

