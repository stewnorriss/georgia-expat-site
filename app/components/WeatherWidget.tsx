'use client'

import { useState, useEffect } from 'react'
import { Cloud, CloudRain, Sun, Wind, Droplets, Eye, Gauge, RotateCcw } from 'lucide-react'

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
  const [forecast, setForecast] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetchWeather()
  }, [])

  const fetchWeather = async () => {
    try {
      // Using Open-Meteo API (free, no API key required)
      const response = await fetch(
        'https://api.open-meteo.com/v1/forecast?latitude=41.7151&longitude=44.8271&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,pressure_msl&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=Asia%2FTbilisi&forecast_days=5'
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
          visibility: 10,
          icon: getWeatherIcon(weatherCode)
        })

        // Process 5-day forecast
        const forecastData = data.daily.time.map((date: string, index: number) => ({
          date: new Date(date),
          maxTemp: Math.round(data.daily.temperature_2m_max[index]),
          minTemp: Math.round(data.daily.temperature_2m_min[index]),
          weatherCode: data.daily.weather_code[index],
          icon: getWeatherIcon(data.daily.weather_code[index])
        }))
        setForecast(forecastData)
        
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

  const getDayName = (date: Date, index: number) => {
    if (index === 0) return 'Today'
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    return days[date.getDay()]
  }

  return (
    <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-4 text-white shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div>
          <h3 className="text-sm font-semibold opacity-90">Tbilisi Weather</h3>
          <p className="text-[10px] opacity-75">5-Day Forecast</p>
        </div>
        <button
          onClick={fetchWeather}
          className="bg-blue-700 hover:bg-blue-800 p-1.5 rounded transition-colors"
          title="Refresh"
        >
          <RotateCcw className="h-3 w-3" />
        </button>
      </div>

      {/* Current Weather - Larger Display */}
      <div className="mb-3 pb-3 border-b border-blue-400">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-baseline mb-1">
              <span className="text-4xl font-bold">{weather.temp}</span>
              <span className="text-xl ml-1">°C</span>
            </div>
            <p className="text-sm opacity-90 capitalize mb-1">{weather.description}</p>
            <p className="text-xs opacity-75">Feels like {weather.feels_like}°C</p>
          </div>
          <div className="text-4xl">{weather.icon}</div>
        </div>
        
        {/* Current Conditions Grid */}
        <div className="grid grid-cols-4 gap-2 mt-3 text-[10px]">
          <div className="text-center bg-white/10 rounded p-1.5">
            <Droplets className="h-3 w-3 mx-auto mb-0.5 opacity-75" />
            <div className="font-semibold">{weather.humidity}%</div>
            <div className="opacity-75">Humidity</div>
          </div>
          <div className="text-center bg-white/10 rounded p-1.5">
            <Wind className="h-3 w-3 mx-auto mb-0.5 opacity-75" />
            <div className="font-semibold">{weather.wind_speed}</div>
            <div className="opacity-75">km/h</div>
          </div>
          <div className="text-center bg-white/10 rounded p-1.5">
            <Gauge className="h-3 w-3 mx-auto mb-0.5 opacity-75" />
            <div className="font-semibold">{weather.pressure}</div>
            <div className="opacity-75">hPa</div>
          </div>
          <div className="text-center bg-white/10 rounded p-1.5">
            <Eye className="h-3 w-3 mx-auto mb-0.5 opacity-75" />
            <div className="font-semibold">{weather.visibility}</div>
            <div className="opacity-75">km</div>
          </div>
        </div>
      </div>

      {/* 5-Day Forecast - Enhanced */}
      <div>
        <div className="text-xs font-semibold mb-2 opacity-90">Next 5 Days</div>
        <div className="space-y-1.5">
          {forecast.map((day, index) => (
            <div key={index} className="flex items-center justify-between bg-white/10 rounded p-2">
              <div className="flex items-center space-x-3 flex-1">
                <div className="text-xs font-semibold w-12">{getDayName(day.date, index)}</div>
                <div className="text-2xl">{day.icon}</div>
                <div className="text-xs opacity-90 flex-1 truncate">{getWeatherDescription(day.weatherCode)}</div>
              </div>
              <div className="flex items-center space-x-2 text-xs">
                <div className="text-right">
                  <div className="font-semibold">{day.maxTemp}°</div>
                  <div className="opacity-75 text-[10px]">High</div>
                </div>
                <div className="text-blue-200 opacity-50">/</div>
                <div className="text-right">
                  <div className="font-semibold opacity-75">{day.minTemp}°</div>
                  <div className="opacity-75 text-[10px]">Low</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WeatherWidget
