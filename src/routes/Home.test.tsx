import { render } from '@testing-library/react';
import { currentWeather, weatherForecast } from '../test/mockData';
import Home from './Home'
import { BrowserRouter } from "react-router";

jest.mock("../services", () => ({
  fetchWeather: jest.fn(() => currentWeather),
  fetchWeatherForecast: jest.fn(() => weatherForecast),
}));

it("Display home page", async () => {
  // BrowserRouter added for useLocation to work
  const { findByText } = render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>)
  const search = await findByText(/search/i)
  expect(search).toBeInTheDocument();
});
