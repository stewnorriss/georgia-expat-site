'use client'

import { useState } from 'react'
import { MessageCircle, Volume2, BookOpen, Users, Play, Video, Clock, Award, Bot, Sparkles, TrendingUp, CheckCircle, RotateCcw, Target, Brain, Zap, Globe } from 'lucide-react'

export default function LanguagePage() {
  const [selectedLesson, setSelectedLesson] = useState<number | null>(null)
  const [completedLessons, setCompletedLessons] = useState<number[]>([])
  const [currentStreak] = useState(7)
  const [selectedDifficulty, setSelectedDifficulty] = useState('all')

  const difficulties = [
    { id: 'all', name: 'All Levels', count: 29 },
    { id: 'Beginner', name: 'Beginner', count: 15 },
    { id: 'Intermediate', name: 'Intermediate', count: 10 },
    { id: 'Advanced', name: 'Advanced', count: 4 }
  ]

  const lessons = [
    {
      lesson: 1,
      title: 'Basic Greetings & Introductions',
      georgian: 'გამარჯობა (gamarjoba)',
      english: 'Hello',
      difficulty: 'Beginner',
      category: 'Greetings',
      duration: '15 min',
      hasAudio: true,
      hasVideo: true,
      aiRecommended: true,
      practiceExercises: 5,
      phrases: [
        { georgian: 'გამარჯობა', english: 'Hello', pronunciation: 'ga-mar-jo-ba', difficulty: 'easy' },
        { georgian: 'მე ვარ...', english: 'I am...', pronunciation: 'me var...', difficulty: 'easy' },
        { georgian: 'სახელი მქვია...', english: 'My name is...', pronunciation: 'sa-khe-li mk-vi-a...', difficulty: 'medium' }
      ],
      culturalNotes: 'Georgians greet with enthusiasm. A firm handshake and eye contact show respect.',
      aiInsights: 'This lesson has 94% completion rate among expats. Master these phrases for immediate social benefits.'
    },
    {
      lesson: 2,
      title: 'Politeness & Thank You',
      georgian: 'მადლობა (madloba)',
      english: 'Thank you',
      difficulty: 'Beginner',
      category: 'Politeness',
      duration: '12 min',
      hasAudio: true,
      hasVideo: false,
      aiRecommended: true,
      practiceExercises: 4,
      phrases: [
        { georgian: 'მადლობა', english: 'Thank you', pronunciation: 'mad-lo-ba', difficulty: 'easy' },
        { georgian: 'დიდი მადლობა', english: 'Thank you very much', pronunciation: 'di-di mad-lo-ba', difficulty: 'medium' }
      ],
      culturalNotes: 'Politeness is highly valued. Using these phrases shows respect and cultural awareness.',
      aiInsights: 'Expats who master politeness phrases report 78% better interactions with locals.'
    }
  ]

  const filteredLessons = lessons.filter(lesson => 
    selectedDifficulty === 'all' || lesson.difficulty === selectedDifficulty
  )

  const toggleLessonCompletion = (lessonNumber: number) => {
    setCompletedLessons(prev => 
      prev.includes(lessonNumber) 
        ? prev.filter(l => l !== lessonNumber)
        : [...prev, lessonNumber]
    )
  }

  const playPronunciation = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = 'ka-GE'
      utterance.rate = 0.7
      speechSynthesis.speak(utterance)
    }
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-800'
      case 'medium': return 'bg-yellow-100 text-yellow-800'
      case 'hard': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getProgressPercentage = () => {
    return Math.round((completedLessons.length / lessons.length) * 100)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative bg-gradient-to-br from-pink-600 via-pink-700 to-red-600 text-white py-16 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <div className="bg-white/10 p-3 rounded-full mr-4">
              <MessageCircle className="h-12 w-12 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                Learn Georgian Language
              </h1>
              <div className="flex items-center space-x-4 text-pink-200">
                <div className="flex items-center">
                  <BookOpen className="h-5 w-5 mr-2" />
                  <span>29 Interactive Lessons</span>
                </div>
                <div className="flex items-center">
                  <Bot className="h-5 w-5 mr-2" />
                  <span>AI-Powered Learning</span>
                </div>
                <div className="flex items-center">
                  <Target className="h-5 w-5 mr-2" />
                  <span>{currentStreak} Day Streak</span>
                </div>
              </div>
            </div>
          </div>
          <p className="text-xl max-w-3xl">
            Master Georgian with interactive lessons, pronunciation guides, and cultural context. 
            Our AI adapts to your learning pace and provides personalized feedback.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <TrendingUp className="h-6 w-6 text-green-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Progress</h3>
              </div>
              <span className="text-2xl font-bold text-green-600">{getProgressPercentage()}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
              <div 
                className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full transition-all duration-300"
                style={{ width: `${getProgressPercentage()}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-600">{completedLessons.length} of {lessons.length} lessons completed</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <Zap className="h-6 w-6 text-orange-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Streak</h3>
              </div>
              <span className="text-2xl font-bold text-orange-600">{currentStreak}</span>
            </div>
            <div className="flex items-center space-x-1 mb-2">
              {Array.from({ length: 7 }).map((_, i) => (
                <div 
                  key={i} 
                  className={`w-4 h-4 rounded-full ${i < currentStreak ? 'bg-orange-500' : 'bg-gray-200'}`}
                ></div>
              ))}
            </div>
            <p className="text-sm text-gray-600">Keep it up! Daily practice improves retention by 85%</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <Brain className="h-6 w-6 text-purple-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">AI Insights</h3>
              </div>
              <Bot className="h-6 w-6 text-purple-600" />
            </div>
            <p className="text-sm text-gray-600 mb-2">
              Your strongest area: <span className="font-semibold text-purple-600">Greetings</span>
            </p>
            <p className="text-sm text-gray-600">
              Focus on: <span className="font-semibold text-red-600">Numbers & Directions</span>
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Globe className="h-5 w-5 text-pink-600 mr-2" />
              <h2 className="text-lg font-semibold text-gray-900">Choose Your Level</h2>
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <Clock className="h-4 w-4 mr-1" />
              <span>Avg. 15-25 min per lesson</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3 mb-4">
            {difficulties.map((difficulty) => (
              <button
                key={difficulty.id}
                onClick={() => setSelectedDifficulty(difficulty.id)}
                className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                  selectedDifficulty === difficulty.id
                    ? 'bg-pink-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {difficulty.name} ({difficulty.count})
              </button>
            ))}
          </div>

          <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
            <div className="flex items-center mb-2">
              <Sparkles className="h-5 w-5 text-blue-600 mr-2" />
              <span className="font-semibold text-gray-700">Stew AI Learning Tips</span>
            </div>
            <p className="text-sm text-gray-600">
              Based on your progress, focus on practical phrases first. Georgian has 33 letters but pronunciation is consistent. 
              Practice 15 minutes daily for optimal retention. {filteredLessons.length} lessons match your current filter.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {filteredLessons.map((lesson) => (
            <div key={lesson.lesson} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white ${
                        completedLessons.includes(lesson.lesson) 
                          ? 'bg-green-500' 
                          : 'bg-pink-500'
                      }`}>
                        {completedLessons.includes(lesson.lesson) ? 
                          <CheckCircle className="h-6 w-6" /> : 
                          lesson.lesson
                        }
                      </div>
                      {lesson.aiRecommended && (
                        <div className="absolute -top-1 -right-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-1 rounded-full">
                          <Sparkles className="h-3 w-3" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{lesson.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span className="capitalize">{lesson.difficulty}</span>
                        <span>{lesson.category}</span>
                        <span className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {lesson.duration}
                        </span>
                        <span className="flex items-center">
                          <Target className="h-4 w-4 mr-1" />
                          {lesson.practiceExercises} exercises
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    {lesson.hasAudio && (
                      <div className="bg-blue-100 text-blue-600 p-2 rounded-lg">
                        <Volume2 className="h-4 w-4" />
                      </div>
                    )}
                    {lesson.hasVideo && (
                      <div className="bg-red-100 text-red-600 p-2 rounded-lg">
                        <Video className="h-4 w-4" />
                      </div>
                    )}
                    <button
                      onClick={() => setSelectedLesson(selectedLesson === lesson.lesson ? null : lesson.lesson)}
                      className="bg-pink-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-pink-700 transition-colors"
                    >
                      {selectedLesson === lesson.lesson ? 'Close' : 'Start Lesson'}
                    </button>
                  </div>
                </div>
              </div>

              {selectedLesson === lesson.lesson && (
                <div className="p-6 space-y-6">
                  <div className="bg-gradient-to-r from-pink-50 to-red-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Phrase</h4>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="georgian-text text-2xl font-bold text-gray-900 mb-1">
                          {lesson.georgian}
                        </div>
                        <div className="text-gray-700">{lesson.english}</div>
                      </div>
                      <button
                        onClick={() => playPronunciation(lesson.georgian)}
                        className="p-3 bg-pink-100 text-pink-600 rounded-lg hover:bg-pink-200 transition-colors"
                      >
                        <Volume2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Practice Phrases
                    </h4>
                    <div className="grid gap-3">
                      {lesson.phrases.map((phrase, idx) => (
                        <div key={idx} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <div className="flex items-center space-x-3 mb-2">
                                <div className="georgian-text text-lg font-semibold text-gray-900">
                                  {phrase.georgian}
                                </div>
                                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(phrase.difficulty)}`}>
                                  {phrase.difficulty}
                                </span>
                              </div>
                              <div className="text-gray-700 mb-1">{phrase.english}</div>
                              <div className="text-sm text-gray-500 italic">{phrase.pronunciation}</div>
                            </div>
                            <button
                              onClick={() => playPronunciation(phrase.pronunciation)}
                              className="p-2 bg-pink-100 text-pink-600 rounded-lg hover:bg-pink-200 transition-colors ml-4"
                            >
                              <Play className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      Cultural Context
                    </h4>
                    <p className="text-gray-700">{lesson.culturalNotes}</p>
                  </div>

                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <Bot className="h-4 w-4 mr-2" />
                      AI Learning Insight
                    </h4>
                    <p className="text-gray-700">{lesson.aiInsights}</p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <button
                      onClick={() => toggleLessonCompletion(lesson.lesson)}
                      className={`flex items-center px-4 py-2 rounded-lg font-semibold transition-colors ${
                        completedLessons.includes(lesson.lesson)
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {completedLessons.includes(lesson.lesson) ? (
                        <>
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Completed
                        </>
                      ) : (
                        <>
                          <Target className="h-4 w-4 mr-2" />
                          Mark Complete
                        </>
                      )}
                    </button>
                    
                    <div className="flex items-center space-x-3">
                      <button className="flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-lg font-semibold hover:bg-blue-200 transition-colors">
                        <RotateCcw className="h-4 w-4 mr-2" />
                        Practice Again
                      </button>
                      <button className="flex items-center px-4 py-2 bg-pink-600 text-white rounded-lg font-semibold hover:bg-pink-700 transition-colors">
                        <Play className="h-4 w-4 mr-2" />
                        Start Exercises
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <Award className="h-6 w-6 text-green-600 mr-3" />
              <h3 className="text-xl font-bold text-gray-900">Learning Tips</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 mt-1 mr-2 text-green-600" />
                <span>Practice pronunciation daily - Georgian is phonetic</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 mt-1 mr-2 text-green-600" />
                <span>Learn the 33-letter Georgian alphabet gradually</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 mt-1 mr-2 text-green-600" />
                <span>Focus on practical phrases for daily situations</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <Globe className="h-6 w-6 text-purple-600 mr-3" />
              <h3 className="text-xl font-bold text-gray-900">Additional Resources</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-white/50 rounded-lg p-3">
                <h4 className="font-semibold text-gray-900 mb-1">Language Exchange Meetups</h4>
                <p className="text-sm text-gray-600">Weekly gatherings at cafes around Tbilisi</p>
              </div>
              <div className="bg-white/50 rounded-lg p-3">
                <h4 className="font-semibold text-gray-900 mb-1">Georgian Language Schools</h4>
                <p className="text-sm text-gray-600">TLG, International House, and university programs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
