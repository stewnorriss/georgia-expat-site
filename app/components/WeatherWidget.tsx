'use client'

import { useState, useEffect } from 'react'
import { Cloud, CloudRain, Sun, Wind, Droplets, Eye, Gauge } from 'lucide-react'

interface WeatherData {
  temp: number
  feels_like: number
  humidity: number
  description: string
  wind_speed: number
  pressure: number
  visibility: number
  icon: string
}

const WeatherWidget = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetchWeather()
  }, [])

  const fetchWeather = async () => {
    try {
      // Using Open-Meteo API (free, no API key required)
      const response = await fetch(
        'https://api.open-meteo.com/v1/forecast?latitude=41.7151&longitude=44.8271&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,pressure_msl&timezone=Asia%2FTbilisi'
      )
      const data = await response.json()
      
      if (data.current) {
        const weatherCode = data.current.weather_code
        const description = getWeatherDescription(weatherCode)
        
        setWeather({
          temp: Math.round(data.current.temperature_2m),
          feels_like: Math.round(data.current.apparent_temperature),
          humidity: data.current.relative_humidity_2m,
          description: description,
          wind_speed: Math.round(data.current.wind_speed_10m),
          pressure: Math.round(data.current.pressure_msl),
          visibility: 10, // Default value as Open-Meteo doesn't provide this
          icon: getWeatherIcon(weatherCode)
        })
        setLoading(false)
      }
    } catch (err) {
      console.error('Weather fetch error:', err)
      setError(true)
      setLoading(false)
    }
  }

  const getWeatherDescription = (code: number): string => {
    const weatherCodes: { [key: number]: string } = {
      0: 'Clear sky',
      1: 'Mainly clear',
      2: 'Partly cloudy',
      3: 'Overcast',
      45: 'Foggy',
      48: 'Foggy',
      51: 'Light drizzle',
      53: 'Moderate drizzle',
      55: 'Dense drizzle',
      61: 'Slight rain',
      63: 'Moderate rain',
      65: 'Heavy rain',
      71: 'Slight snow',
      73: 'Moderate snow',
      75: 'Heavy snow',
      80: 'Slight rain showers',
      81: 'Moderate rain showers',
      82: 'Violent rain showers',
      95: 'Thunderstorm',
      96: 'Thunderstorm with hail',
      99: 'Thunderstorm with hail'
    }
    return weatherCodes[code] || 'Unknown'
  }

  const getWeatherIcon = (code: number): string => {
    if (code === 0 || code === 1) return '☀️'
    if (code === 2 || code === 3) return '⛅'
    if (code >= 45 && code <= 48) return '🌫️'
    if (code >= 51 && code <= 55) return '🌦️'
    if (code >= 61 && code <= 65) return '🌧️'
    if (code >= 71 && code <= 75) return '❄️'
    if (code >= 80 && code <= 82) return '🌧️'
    if (code >= 95) return '⛈️'
    return '🌤️'
  }

  if (loading) {
    return (
      <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-4 text-white shadow-md">
        <div className="animate-pulse">
          <div className="h-3 bg-blue-400 rounded w-20 mb-3"></div>
          <div className="h-6 bg-blue-400 rounded w-12 mb-2"></div>
          <div className="h-2 bg-blue-400 rounded w-24"></div>
        </div>
      </div>
    )
  }

  if (error || !weather) {
    return (
      <div className="bg-gradient-to-br from-gray-500 to-gray-600 rounded-lg p-4 text-white shadow-md">
        <div className="text-center">
          <Cloud className="h-8 w-8 mx-auto mb-1 opacity-50" />
          <p className="text-xs">Weather unavailable</p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-4 text-white shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center justify-between mb-3">
        <div>
          <h3 className="text-xs font-semibold opacity-90">Tbilisi Weather</h3>
          <p className="text-[10px] opacity-75">Right now</p>
        </div>
        <div className="text-2xl">{weather.icon}</div>
      </div>

      <div className="mb-3">
        <div className="flex items-baseline">
          <span className="text-3xl font-bold">{weather.temp}</span>
          <span className="text-lg ml-1">°C</span>
        </div>
        <p className="text-xs opacity-90 capitalize mt-0.5">{weather.description}</p>
        <p className="text-[10px] opacity-75 mt-0.5">Feels like {weather.feels_like}°C</p>
      </div>

      <div className="grid grid-cols-2 gap-2 pt-3 border-t border-blue-400">
        <div className="flex items-center space-x-1.5">
          <Droplets className="h-3 w-3 opacity-75" />
          <div>
            <p className="text-[10px] opacity-75">Humidity</p>
            <p className="text-xs font-semibold">{weather.humidity}%</p>
          </div>
        </div>
        <div className="flex items-center space-x-1.5">
          <Wind className="h-3 w-3 opacity-75" />
          <div>
            <p className="text-[10px] opacity-75">Wind</p>
            <p className="text-xs font-semibold">{weather.wind_speed} km/h</p>
          </div>
        </div>
        <div className="flex items-center space-x-1.5">
          <Gauge className="h-3 w-3 opacity-75" />
          <div>
            <p className="text-[10px] opacity-75">Pressure</p>
            <p className="text-xs font-semibold">{weather.pressure} hPa</p>
          </div>
        </div>
        <div className="flex items-center space-x-1.5">
          <Eye className="h-3 w-3 opacity-75" />
          <div>
            <p className="text-[10px] opacity-75">Visibility</p>
            <p className="text-xs font-semibold">{weather.visibility} km</p>
          </div>
        </div>
      </div>

      <button
        onClick={fetchWeather}
        className="mt-3 w-full bg-blue-700 hover:bg-blue-800 text-white text-[10px] py-1.5 rounded transition-colors"
      >
        🔄 Refresh
      </button>
    </div>
  )
}

export default WeatherWidget
