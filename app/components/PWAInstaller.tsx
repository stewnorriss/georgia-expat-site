'use client'

import { useState, useEffect } from 'react'
import { Download, X, Smartphone, Monitor, Zap } from 'lucide-react'

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[]
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed'
    platform: string
  }>
  prompt(): Promise<void>
}

export default function PWAInstaller() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [showInstallPrompt, setShowInstallPrompt] = useState(false)
  const [isInstalled, setIsInstalled] = useState(false)
  const [isIOS, setIsIOS] = useState(false)
  const [isStandalone, setIsStandalone] = useState(false)

  useEffect(() => {
    // Check if app is already installed
    setIsStandalone(window.matchMedia('(display-mode: standalone)').matches)
    
    // Check if iOS
    setIsIOS(/iPad|iPhone|iPod/.test(navigator.userAgent))
    
    // Check if already installed
    if ('getInstalledRelatedApps' in navigator) {
      (navigator as any).getInstalledRelatedApps().then((relatedApps: any[]) => {
        setIsInstalled(relatedApps.length > 0)
      })
    }

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e as BeforeInstallPromptEvent)
      
      // Show install prompt after a delay (don't be too aggressive)
      setTimeout(() => {
        if (!isStandalone && !isInstalled) {
          setShowInstallPrompt(true)
        }
      }, 10000) // Show after 10 seconds
    }

    const handleAppInstalled = () => {
      setIsInstalled(true)
      setShowInstallPrompt(false)
      setDeferredPrompt(null)
      
      // Show success message
      const notification = document.createElement('div')
      notification.className = 'fixed top-4 right-4 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50'
      notification.innerHTML = '✅ App installed successfully!'
      document.body.appendChild(notification)
      
      setTimeout(() => {
        document.body.removeChild(notification)
      }, 3000)
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
    window.addEventListener('appinstalled', handleAppInstalled)

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
      window.removeEventListener('appinstalled', handleAppInstalled)
    }
  }, [isStandalone, isInstalled])

  const handleInstallClick = async () => {
    if (!deferredPrompt) return

    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice
    
    if (outcome === 'accepted') {
      console.log('User accepted the install prompt')
    } else {
      console.log('User dismissed the install prompt')
    }
    
    setDeferredPrompt(null)
    setShowInstallPrompt(false)
  }

  const handleDismiss = () => {
    setShowInstallPrompt(false)
    
    // Don't show again for this session
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('pwa-install-dismissed', 'true')
    }
  }

  // Don't show if already installed, in standalone mode, or dismissed
  if (isInstalled || isStandalone || (typeof window !== 'undefined' && sessionStorage.getItem('pwa-install-dismissed'))) {
    return null
  }

  // iOS install instructions
  if (isIOS && showInstallPrompt) {
    return (
      <div className="fixed bottom-4 left-4 right-4 md:left-auto md:w-80 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 z-50">
        <div className="p-4">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center">
              <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-lg mr-3">
                <Smartphone className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Install App</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Add to Home Screen</p>
              </div>
            </div>
            <button
              onClick={handleDismiss}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          
          <div className="text-sm text-gray-600 dark:text-gray-300 mb-4">
            <p className="mb-2">To install this app on your iPhone:</p>
            <ol className="list-decimal list-inside space-y-1">
              <li>Tap the Share button in Safari</li>
              <li>Scroll down and tap "Add to Home Screen"</li>
              <li>Tap "Add" to confirm</li>
            </ol>
          </div>
          
          <div className="flex items-center justify-center text-xs text-gray-500 dark:text-gray-400">
            <Zap className="h-3 w-3 mr-1" />
            <span>Faster access • Offline support • Native experience</span>
          </div>
        </div>
      </div>
    )
  }

  // Android/Desktop install prompt
  if (showInstallPrompt && deferredPrompt) {
    return (
      <div className="fixed bottom-4 left-4 right-4 md:left-auto md:w-80 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 z-50">
        <div className="p-4">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg mr-3">
                <Monitor className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Install Stew's Guide</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Get the full app experience</p>
              </div>
            </div>
            <button
              onClick={handleDismiss}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          
          <div className="text-sm text-gray-600 dark:text-gray-300 mb-4">
            <div className="grid grid-cols-3 gap-2 mb-3">
              <div className="text-center">
                <div className="bg-green-100 dark:bg-green-900 p-2 rounded-lg mb-1">
                  <Zap className="h-4 w-4 text-green-600 dark:text-green-400 mx-auto" />
                </div>
                <span className="text-xs">Faster</span>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-lg mb-1">
                  <Download className="h-4 w-4 text-blue-600 dark:text-blue-400 mx-auto" />
                </div>
                <span className="text-xs">Offline</span>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 dark:bg-purple-900 p-2 rounded-lg mb-1">
                  <Smartphone className="h-4 w-4 text-purple-600 dark:text-purple-400 mx-auto" />
                </div>
                <span className="text-xs">Native</span>
              </div>
            </div>
          </div>
          
          <div className="flex space-x-2">
            <button
              onClick={handleDismiss}
              className="flex-1 px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 transition-colors"
            >
              Not now
            </button>
            <button
              onClick={handleInstallClick}
              className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-blue-600 hover:to-purple-700 transition-all flex items-center justify-center"
            >
              <Download className="h-4 w-4 mr-1" />
              Install
            </button>
          </div>
        </div>
      </div>
    )
  }

  return null
}