import { useState } from "react";
import { useNavigate } from "react-router";
import { fetchWeather } from "../services";
import { CurrentWeather, History } from "../types";
import Histories from "../components/History";

export default function Search() {
  const stored = localStorage.getItem('histories')
  const [locationName, setLocationName] = useState("");
  const [histories, setHistories] = useState<History[]>(stored ? JSON.parse(stored) : []);
  const [error, setError] = useState("");
  const navigate = useNavigate()

  const getWeather = async (e: React.FormEvent, historyName?: string) => {
    e.preventDefault();
    setError("")
    try {
      const newCurrentWeather: CurrentWeather = await fetchWeather(historyName || locationName)
      const { name, country, id } = newCurrentWeather
      const isExist = histories.find(his => his.id === id)
      if (!isExist) {
        const newHistories = [...histories, { name, country, id }]
        localStorage.setItem('histories', JSON.stringify(newHistories))
        setHistories(newHistories)
      }
      setLocationName("")
      navigate('/', { state: { currentWeather: newCurrentWeather } })
    } catch (error) {
      if (error) {
        setError("Invalid country or city");
      } else {
        alert('An unexpected error occurred.');
      }
    }
  }

  const handleDelete = (id: number) => {
    const newHistories = histories.filter(his => his.id !== id)
    localStorage.setItem('histories', JSON.stringify(newHistories))
    setHistories(newHistories)
  }

  return (
    <div className="flex flex-col gap-y-5 w-full max-w-md mx-auto">
      <form
        onSubmit={getWeather}
        className="flex items-center gap-2"
      >
        <input
          type="text"
          value={locationName}
          onChange={(e) => setLocationName(e.target.value)}
          placeholder="Search country or city here..."
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button type="submit" className="px-4 py-2 cursor-pointer bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Search
        </button>
      </form>
      {error && <div className="text-red-500 text-sm mt-1">{error}</div>}
      {histories.length > 0 &&
        <Histories histories={histories} getWeather={getWeather} handleDelete={handleDelete} />}
    </div>
  );
}
