'use client'

import { useState, useEffect } from 'react'
import { Cloud, CloudRain, Sun, Wind, Droplets, Eye, Gauge } from 'lucide-react'

interface WeatherData {
  temp: number
  feels_like: number
  humidity: number
  wind_speed: number
  description: string
  icon: string
  visibility: number
  pressure: number
}

export default function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchWeather()
  }, [])

  const fetchWeather = async () => {
    try {
      // Using OpenWeatherMap API - you'll need to add your API key
      const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY || 'demo'
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=Tbilisi&units=metric&appid=${API_KEY}`
      )
      
      if (!response.ok) {
        throw new Error('Weather data unavailable')
      }
      
      const data = await response.json()
      setWeather({
        temp: Math.round(data.main.temp),
        feels_like: Math.round(data.main.feels_like),
        humidity: data.main.humidity,
        wind_speed: Math.round(data.wind.speed * 3.6), // Convert m/s to km/h
        description: data.weather[0].description,
        icon: data.weather[0].main,
        visibility: Math.round(data.visibility / 1000),
        pressure: data.main.pressure
      })
      setLoading(false)
    } catch (err) {
      // Fallback to mock data for demo
      setWeather({
        temp: 18,
        feels_like: 16,
        humidity: 65,
        wind_speed: 12,
        description: 'partly cloudy',
        icon: 'Clouds',
        visibility: 10,
        pressure: 1013
      })
      setLoading(false)
    }
  }

  const getWeatherIcon = (icon: string) => {
    switch (icon) {
      case 'Clear':
        return <Sun className="h-12 w-12 text-yellow-400" />
      case 'Rain':
        return <CloudRain className="h-12 w-12 text-blue-400" />
      case 'Clouds':
        return <Cloud className="h-12 w-12 text-gray-400" />
      default:
        return <Cloud className="h-12 w-12 text-gray-400" />
    }
  }

  if (loading) {
    return (
      <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white animate-pulse">
        <div className="h-32 flex items-center justify-center">
          <div className="text-center">Loading weather...</div>
        </div>
      </div>
    )
  }

  if (!weather) return null

  return (
    <div className="bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-xl">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-2xl font-bold">Tbilisi Weather</h3>
          <p className="text-blue-100 text-sm capitalize">{weather.description}</p>
        </div>
        {getWeatherIcon(weather.icon)}
      </div>
      
      <div className="flex items-end mb-6">
        <div className="text-6xl font-bold">{weather.temp}°</div>
        <div className="text-2xl text-blue-100 ml-2 mb-2">C</div>
      </div>
      
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div className="flex items-center bg-white/10 rounded-lg p-3">
          <Wind className="h-5 w-5 mr-2" />
          <div>
            <div className="text-blue-100 text-xs">Wind</div>
            <div className="font-semibold">{weather.wind_speed} km/h</div>
          </div>
        </div>
        
        <div className="flex items-center bg-white/10 rounded-lg p-3">
          <Droplets className="h-5 w-5 mr-2" />
          <div>
            <div className="text-blue-100 text-xs">Humidity</div>
            <div className="font-semibold">{weather.humidity}%</div>
          </div>
        </div>
        
        <div className="flex items-center bg-white/10 rounded-lg p-3">
          <Eye className="h-5 w-5 mr-2" />
          <div>
            <div className="text-blue-100 text-xs">Visibility</div>
            <div className="font-semibold">{weather.visibility} km</div>
          </div>
        </div>
        
        <div className="flex items-center bg-white/10 rounded-lg p-3">
          <Gauge className="h-5 w-5 mr-2" />
          <div>
            <div className="text-blue-100 text-xs">Pressure</div>
            <div className="font-semibold">{weather.pressure} hPa</div>
          </div>
        </div>
      </div>
      
      <div className="mt-4 text-center text-sm text-blue-100">
        Feels like {weather.feels_like}°C
      </div>
    </div>
  )
}
