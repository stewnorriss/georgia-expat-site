'use client'

import { useState, useEffect } from 'react'
import { Wind, Droplets, RotateCcw } from 'lucide-react'

interface WeatherData {
  temp: number
  feels_like: number
  humidity: number
  description: string
  wind_speed: number
  icon: string
}

interface ForecastDay {
  date: Date
  maxTemp: number
  minTemp: number
  icon: string
  precipitation: number
  weatherCode: number
}

const weatherDescriptions: Record<number, string> = {
  0: 'Clear', 1: 'Mostly clear', 2: 'Partly cloudy', 3: 'Overcast',
  45: 'Foggy', 48: 'Foggy', 51: 'Light drizzle', 53: 'Drizzle', 55: 'Heavy drizzle',
  61: 'Light rain', 63: 'Rain', 65: 'Heavy rain', 71: 'Light snow', 73: 'Snow', 75: 'Heavy snow',
  80: 'Rain showers', 81: 'Showers', 82: 'Heavy showers', 95: 'Thunderstorm', 96: 'Thunderstorm', 99: 'Thunderstorm',
}

const weatherIcon = (code: number) => {
  if (code <= 1) return '☀️'
  if (code <= 3) return '⛅'
  if (code <= 48) return '🌫️'
  if (code <= 55) return '🌦️'
  if (code <= 65) return '🌧️'
  if (code <= 75) return '❄️'
  if (code <= 82) return '🌧️'
  return '⛈️'
}

const WeatherWidget = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [forecast, setForecast] = useState<ForecastDay[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const fetchWeather = async () => {
    setLoading(true)
    setError(false)
    try {
      const res = await fetch(
        'https://api.open-meteo.com/v1/forecast?latitude=41.7151&longitude=44.8271&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=Asia%2FTbilisi&forecast_days=5'
      )
      const data = await res.json()
      if (data.current) {
        const code = data.current.weather_code
        setWeather({
          temp: Math.round(data.current.temperature_2m),
          feels_like: Math.round(data.current.apparent_temperature),
          humidity: data.current.relative_humidity_2m,
          description: weatherDescriptions[code] || 'Unknown',
          wind_speed: Math.round(data.current.wind_speed_10m),
          icon: weatherIcon(code),
        })
        setForecast(data.daily.time.map((d: string, i: number) => ({
          date: new Date(d),
          maxTemp: Math.round(data.daily.temperature_2m_max[i]),
          minTemp: Math.round(data.daily.temperature_2m_min[i]),
          weatherCode: data.daily.weather_code[i],
          icon: weatherIcon(data.daily.weather_code[i]),
          precipitation: data.daily.precipitation_probability_max[i] || 0,
        })))
      }
    } catch {
      setError(true)
    }
    setLoading(false)
  }

  useEffect(() => { fetchWeather() }, [])

  const dayName = (date: Date, i: number) => i === 0 ? 'Today' : ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'][date.getDay()]

  if (loading) {
    return <div className="card p-6 h-full"><div className="shimmer h-4 w-24 rounded mb-4" /><div className="shimmer h-10 w-16 rounded mb-3" /><div className="shimmer h-3 w-32 rounded" /></div>
  }

  if (error || !weather) {
    return (
      <div className="card p-6 h-full text-center">
        <p className="text-gray-400 text-sm mb-2">Weather unavailable</p>
        <button onClick={fetchWeather} className="text-xs text-red-500 hover:text-red-600 transition-colors">Try again</button>
      </div>
    )
  }

  return (
    <div className="card p-6 h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Tbilisi Weather</h3>
        <button onClick={fetchWeather} className="text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 transition-colors" aria-label="Refresh weather">
          <RotateCcw className="h-3.5 w-3.5" />
        </button>
      </div>

      {/* Current */}
      <div className="flex items-start justify-between mb-5">
        <div>
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-bold text-gray-900 dark:text-white">{weather.temp}°</span>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{weather.description}</p>
          <p className="text-xs text-gray-400 mt-0.5">Feels like {weather.feels_like}°</p>
        </div>
        <span className="text-4xl">{weather.icon}</span>
      </div>

      <div className="flex gap-4 mb-5 text-xs text-gray-500 dark:text-gray-400">
        <span className="flex items-center gap-1"><Droplets className="h-3.5 w-3.5" />{weather.humidity}%</span>
        <span className="flex items-center gap-1"><Wind className="h-3.5 w-3.5" />{weather.wind_speed} km/h</span>
      </div>

      {/* Forecast */}
      <div className="border-t border-gray-100 dark:border-gray-700/50 pt-4 space-y-2">
        {forecast.map((day, i) => (
          <div key={i} className="flex items-center justify-between text-sm">
            <span className="text-gray-500 dark:text-gray-400 w-12">{dayName(day.date, i)}</span>
            <span className="text-lg">{day.icon}</span>
            <span className="text-xs text-blue-500">{day.precipitation > 0 ? `${day.precipitation}%` : ''}</span>
            <div className="flex items-center gap-2 text-right">
              <span className="font-medium text-gray-900 dark:text-white">{day.maxTemp}°</span>
              <span className="text-gray-400">{day.minTemp}°</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WeatherWidget
