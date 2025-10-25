'use client'

import React from 'react'

// Georgian-themed SVG illustrations
export const TbilisiSkyline = ({ className = "w-full h-32" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 400 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Sky gradient */}
    <defs>
      <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#87CEEB" />
        <stop offset="100%" stopColor="#E0F6FF" />
      </linearGradient>
      <linearGradient id="mountainGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#8B7355" />
        <stop offset="100%" stopColor="#A0956B" />
      </linearGradient>
    </defs>
    
    {/* Sky */}
    <rect width="400" height="120" fill="url(#skyGradient)" />
    
    {/* Mountains */}
    <path d="M0 80 L50 60 L100 70 L150 50 L200 65 L250 45 L300 60 L350 40 L400 55 L400 120 L0 120 Z" 
          fill="url(#mountainGradient)" opacity="0.7" />
    
    {/* Narikala Fortress */}
    <rect x="180" y="45" width="40" height="25" fill="#8B4513" rx="2" />
    <polygon points="180,45 200,35 220,45" fill="#A0522D" />
    <rect x="185" y="50" width="6" height="15" fill="#654321" />
    <rect x="195" y="50" width="6" height="15" fill="#654321" />
    <rect x="209" y="50" width="6" height="15" fill="#654321" />
    
    {/* Old Town Buildings */}
    <rect x="120" y="70" width="15" height="30" fill="#D2691E" />
    <rect x="140" y="65" width="12" height="35" fill="#CD853F" />
    <rect x="155" y="75" width="18" height="25" fill="#DEB887" />
    <rect x="175" y="68" width="14" height="32" fill="#F4A460" />
    
    {/* Modern Buildings */}
    <rect x="250" y="55" width="20" height="45" fill="#708090" />
    <rect x="275" y="50" width="25" height="50" fill="#778899" />
    <rect x="305" y="60" width="18" height="40" fill="#696969" />
    
    {/* Mtkvari River */}
    <ellipse cx="200" cy="105" rx="150" ry="8" fill="#4682B4" opacity="0.6" />
    
    {/* Bridge */}
    <rect x="180" y="100" width="40" height="3" fill="#2F4F4F" />
    <rect x="185" y="95" width="2" height="10" fill="#2F4F4F" />
    <rect x="195" y="95" width="2" height="10" fill="#2F4F4F" />
    <rect x="205" y="95" width="2" height="10" fill="#2F4F4F" />
    <rect x="215" y="95" width="2" height="10" fill="#2F4F4F" />
  </svg>
)

export const GeorgianWineBottle = ({ className = "w-16 h-16" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bottleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#2D5016" />
        <stop offset="100%" stopColor="#4A7C59" />
      </linearGradient>
    </defs>
    
    {/* Bottle body */}
    <rect x="22" y="20" width="20" height="35" fill="url(#bottleGradient)" rx="2" />
    
    {/* Bottle neck */}
    <rect x="28" y="12" width="8" height="10" fill="url(#bottleGradient)" />
    
    {/* Cork */}
    <rect x="27" y="8" width="10" height="6" fill="#8B4513" rx="1" />
    
    {/* Label */}
    <rect x="24" y="28" width="16" height="12" fill="#F5F5DC" rx="1" />
    
    {/* Georgian script on label */}
    <text x="32" y="36" textAnchor="middle" fontSize="6" fill="#8B0000" fontFamily="serif">ღვინო</text>
    
    {/* Wine inside bottle */}
    <rect x="24" y="22" width="16" height="30" fill="#722F37" opacity="0.8" rx="1" />
  </svg>
)

export const GeorgianCross = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="crossGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFD700" />
        <stop offset="100%" stopColor="#FFA500" />
      </linearGradient>
    </defs>
    
    {/* Main cross */}
    <rect x="21" y="8" width="6" height="32" fill="url(#crossGradient)" />
    <rect x="12" y="19" width="24" height="6" fill="url(#crossGradient)" />
    
    {/* Small crosses in corners */}
    <rect x="14" y="12" width="2" height="8" fill="url(#crossGradient)" />
    <rect x="10" y="15" width="8" height="2" fill="url(#crossGradient)" />
    
    <rect x="32" y="12" width="2" height="8" fill="url(#crossGradient)" />
    <rect x="30" y="15" width="8" height="2" fill="url(#crossGradient)" />
    
    <rect x="14" y="28" width="2" height="8" fill="url(#crossGradient)" />
    <rect x="10" y="31" width="8" height="2" fill="url(#crossGradient)" />
    
    <rect x="32" y="28" width="2" height="8" fill="url(#crossGradient)" />
    <rect x="30" y="31" width="8" height="2" fill="url(#crossGradient)" />
  </svg>
)

export const Khachapuri = ({ className = "w-16 h-16" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="breadGradient" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#DEB887" />
        <stop offset="100%" stopColor="#D2691E" />
      </radialGradient>
      <radialGradient id="cheeseGradient" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#FFFACD" />
        <stop offset="100%" stopColor="#F0E68C" />
      </radialGradient>
    </defs>
    
    {/* Bread base */}
    <ellipse cx="32" cy="32" rx="28" ry="20" fill="url(#breadGradient)" />
    
    {/* Cheese filling */}
    <ellipse cx="32" cy="32" rx="22" ry="14" fill="url(#cheeseGradient)" />
    
    {/* Egg yolk */}
    <circle cx="32" cy="32" r="6" fill="#FFD700" />
    
    {/* Butter pat */}
    <ellipse cx="26" cy="28" rx="3" ry="2" fill="#FFFFE0" />
    
    {/* Crust texture */}
    <ellipse cx="32" cy="32" rx="28" ry="20" fill="none" stroke="#CD853F" strokeWidth="1" opacity="0.5" />
  </svg>
)

export const GeorgianPattern = ({ className = "w-full h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 200 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="georgianPattern" x="0" y="0" width="40" height="32" patternUnits="userSpaceOnUse">
        <rect width="40" height="32" fill="#8B0000" opacity="0.1" />
        <path d="M8 16 L16 8 L24 16 L32 8 L40 16" stroke="#8B0000" strokeWidth="2" fill="none" opacity="0.3" />
        <circle cx="20" cy="16" r="3" fill="#FFD700" opacity="0.5" />
      </pattern>
    </defs>
    <rect width="200" height="32" fill="url(#georgianPattern)" />
  </svg>
)

export const MountainRange = ({ className = "w-full h-24" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 300 96" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="mountain1" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#4A5568" />
        <stop offset="100%" stopColor="#718096" />
      </linearGradient>
      <linearGradient id="mountain2" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#2D3748" />
        <stop offset="100%" stopColor="#4A5568" />
      </linearGradient>
    </defs>
    
    {/* Background mountains */}
    <path d="M0 96 L0 60 L50 30 L100 50 L150 20 L200 45 L250 25 L300 40 L300 96 Z" 
          fill="url(#mountain1)" opacity="0.6" />
    
    {/* Foreground mountains */}
    <path d="M0 96 L0 70 L40 45 L80 65 L120 35 L160 55 L200 40 L240 60 L280 45 L300 50 L300 96 Z" 
          fill="url(#mountain2)" opacity="0.8" />
    
    {/* Snow caps */}
    <polygon points="120,35 130,45 110,45" fill="#FFFFFF" opacity="0.9" />
    <polygon points="200,40 210,50 190,50" fill="#FFFFFF" opacity="0.9" />
  </svg>
)