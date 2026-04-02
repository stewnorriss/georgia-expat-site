'use client'

import { useState, useEffect, useCallback } from 'react'
import { Volume2, BookOpen, Clock, CheckCircle, ChevronDown, ChevronRight, ChevronLeft, RotateCcw, ArrowRight, Play, ExternalLink } from 'lucide-react'
import { lessons, georgianAlphabet, quizQuestions, flashcards, conversations } from './data'
import type { Lesson } from './data'

type Tab = 'lessons' | 'alphabet' | 'flashcards' | 'quiz' | 'conversations' | 'videos'

export default function LanguagePage() {
  const [tab, setTab] = useState<Tab>('lessons')
  const [expandedLesson, setExpandedLesson] = useState<number | null>(null)
  const [completedLessons, setCompletedLessons] = useState<number[]>([])
  const [difficulty, setDifficulty] = useState<string>('all')

  // Quiz state
  const [quizIndex, setQuizIndex] = useState(0)
  const [quizScore, setQuizScore] = useState(0)
  const [quizAnswer, setQuizAnswer] = useState<number | null>(null)
  const [quizDone, setQuizDone] = useState(false)

  // Flashcard state
  const [cardIndex, setCardIndex] = useState(0)
  const [cardFlipped, setCardFlipped] = useState(false)

  // Conversation state
  const [activeConvo, setActiveConvo] = useState(0)
  const [revealedLines, setRevealedLines] = useState(1)

  useEffect(() => {
    try {
      const saved = localStorage.getItem('georgian-progress')
      if (saved) setCompletedLessons(JSON.parse(saved))
    } catch {}
  }, [])

  useEffect(() => {
    if (completedLessons.length > 0) {
      localStorage.setItem('georgian-progress', JSON.stringify(completedLessons))
    }
  }, [completedLessons])

  const toggleComplete = (n: number) => {
    setCompletedLessons(prev =>
      prev.includes(n) ? prev.filter(l => l !== n) : [...prev, n]
    )
  }

  const speak = useCallback((text: string, rate = 0.7) => {
    if ('speechSynthesis' in window) {
      speechSynthesis.cancel()
      const u = new SpeechSynthesisUtterance(text)
      u.lang = 'ka-GE'
      u.rate = rate
      speechSynthesis.speak(u)
    }
  }, [])

  const filtered = lessons.filter(l => difficulty === 'all' || l.difficulty === difficulty)
  const progress = Math.round((completedLessons.length / lessons.length) * 100)

  const tabs: { id: Tab; label: string }[] = [
    { id: 'lessons', label: 'Lessons' },
    { id: 'alphabet', label: 'Alphabet' },
    { id: 'flashcards', label: 'Flashcards' },
    { id: 'quiz', label: 'Quiz' },
    { id: 'conversations', label: 'Conversations' },
    { id: 'videos', label: 'Videos' },
  ]

  const difficultyColor = (d: string) => {
    if (d === 'easy' || d === 'Beginner') return 'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400'
    if (d === 'medium' || d === 'Intermediate') return 'bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
    return 'bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-400'
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
          <p className="font-georgian text-2xl text-pink-300/70 mb-3">ქართული ენა</p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">Learn Georgian</h1>
          <p className="text-lg text-gray-300 max-w-2xl mb-8">
            {lessons.length} lessons from greetings to advanced conversations. The alphabet has 33 letters, each with exactly one sound — no exceptions.
          </p>

          {/* Progress */}
          <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl px-5 py-4 max-w-md">
            <div className="text-3xl font-bold text-pink-400">{progress}%</div>
            <div className="flex-1">
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-pink-500 to-rose-400 rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
              </div>
              <p className="text-xs text-gray-400 mt-1.5">{completedLessons.length} of {lessons.length} lessons completed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <div className="sticky top-[104px] z-30 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-2 -mb-px">
            {tabs.map(t => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`px-4 py-2.5 text-sm font-medium rounded-lg whitespace-nowrap transition-colors ${
                  tab === t.id
                    ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900'
                    : 'text-gray-500 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* ── LESSONS ── */}
        {tab === 'lessons' && (
          <div>
            {/* Difficulty filter */}
            <div className="flex flex-wrap gap-2 mb-8">
              {['all', 'Beginner', 'Intermediate', 'Advanced'].map(d => (
                <button
                  key={d}
                  onClick={() => setDifficulty(d)}
                  className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    difficulty === d
                      ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {d === 'all' ? 'All levels' : d}
                </button>
              ))}
            </div>

            <div className="space-y-3">
              {filtered.map(lesson => (
                <LessonCard
                  key={lesson.lesson}
                  lesson={lesson}
                  isExpanded={expandedLesson === lesson.lesson}
                  isCompleted={completedLessons.includes(lesson.lesson)}
                  onToggle={() => setExpandedLesson(expandedLesson === lesson.lesson ? null : lesson.lesson)}
                  onComplete={() => toggleComplete(lesson.lesson)}
                  onSpeak={speak}
                  difficultyColor={difficultyColor}
                />
              ))}
            </div>
          </div>
        )}

        {/* ── ALPHABET ── */}
        {tab === 'alphabet' && (
          <div>
            <p className="text-gray-500 dark:text-gray-400 mb-6">
              33 letters. Each letter = one sound. No uppercase. Click any letter to hear it.
            </p>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
              {georgianAlphabet.map((letter, i) => (
                <button
                  key={i}
                  onClick={() => speak(letter.georgian)}
                  className="card card-hover p-4 text-center group"
                >
                  <div className="font-georgian text-4xl text-gray-900 dark:text-white mb-2 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                    {letter.georgian}
                  </div>
                  <div className="text-sm font-medium text-gray-600 dark:text-gray-300">{letter.latin}</div>
                  <div className="text-xs text-gray-400 mt-1">{letter.pronunciation}</div>
                  <div className="text-xs text-gray-400 mt-1 truncate">{letter.meaning}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ── FLASHCARDS ── */}
        {tab === 'flashcards' && (
          <div className="flex flex-col items-center">
            <p className="text-sm text-gray-400 mb-6">{cardIndex + 1} / {flashcards.length}</p>
            <button
              onClick={() => setCardFlipped(!cardFlipped)}
              className="w-full max-w-md h-72 perspective-1000"
            >
              <div className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${cardFlipped ? '[transform:rotateY(180deg)]' : ''}`}>
                {/* Front */}
                <div className="absolute inset-0 card flex flex-col items-center justify-center p-8 backface-hidden">
                  <div className="font-georgian text-5xl text-gray-900 dark:text-white mb-4">
                    {flashcards[cardIndex].georgian}
                  </div>
                  <div className="text-sm text-gray-400">{flashcards[cardIndex].pronunciation}</div>
                  <div className="badge bg-gray-100 dark:bg-gray-800 text-gray-500 mt-4">{flashcards[cardIndex].category}</div>
                  <p className="text-xs text-gray-400 mt-6">Tap to reveal</p>
                </div>
                {/* Back */}
                <div className="absolute inset-0 card flex flex-col items-center justify-center p-8 backface-hidden [transform:rotateY(180deg)] bg-gray-50 dark:bg-gray-800">
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {flashcards[cardIndex].english}
                  </div>
                  <div className="font-georgian text-xl text-gray-500 dark:text-gray-400">
                    {flashcards[cardIndex].georgian}
                  </div>
                  <p className="text-xs text-gray-400 mt-6">Tap to flip back</p>
                </div>
              </div>
            </button>
            <div className="flex items-center gap-4 mt-8">
              <button onClick={() => { setCardIndex(cardIndex === 0 ? flashcards.length - 1 : cardIndex - 1); setCardFlipped(false) }} className="btn-secondary text-sm py-2">
                <ChevronLeft className="h-4 w-4" /> Previous
              </button>
              <button onClick={() => speak(flashcards[cardIndex].georgian)} className="p-3 rounded-xl bg-pink-50 dark:bg-pink-900/20 text-pink-600 dark:text-pink-400 hover:bg-pink-100 dark:hover:bg-pink-900/30 transition-colors" aria-label="Listen">
                <Volume2 className="h-5 w-5" />
              </button>
              <button onClick={() => { setCardIndex((cardIndex + 1) % flashcards.length); setCardFlipped(false) }} className="btn-secondary text-sm py-2">
                Next <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        {/* ── QUIZ ── */}
        {tab === 'quiz' && (
          <div className="max-w-lg mx-auto">
            {!quizDone ? (
              <>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm text-gray-400">Question {quizIndex + 1} of {quizQuestions.length}</span>
                  <span className="badge bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">{quizScore} correct</span>
                </div>
                <div className="h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full mb-8 overflow-hidden">
                  <div className="h-full bg-pink-500 rounded-full transition-all duration-300" style={{ width: `${((quizIndex) / quizQuestions.length) * 100}%` }} />
                </div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  {quizQuestions[quizIndex].question}
                </h2>
                <div className="space-y-3">
                  {quizQuestions[quizIndex].options.map((opt, i) => {
                    let style = 'card card-hover p-4 text-left w-full'
                    if (quizAnswer !== null) {
                      if (i === quizQuestions[quizIndex].correct) style = 'card p-4 text-left w-full border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20'
                      else if (i === quizAnswer) style = 'card p-4 text-left w-full border-red-500 bg-red-50 dark:bg-red-900/20'
                    }
                    return (
                      <button
                        key={i}
                        onClick={() => {
                          if (quizAnswer !== null) return
                          setQuizAnswer(i)
                          if (i === quizQuestions[quizIndex].correct) setQuizScore(s => s + 1)
                          setTimeout(() => {
                            if (quizIndex < quizQuestions.length - 1) {
                              setQuizIndex(q => q + 1)
                              setQuizAnswer(null)
                            } else {
                              setQuizDone(true)
                            }
                          }, 1200)
                        }}
                        className={style}
                      >
                        <span className="font-georgian text-lg">{opt}</span>
                      </button>
                    )
                  })}
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">{quizScore >= 7 ? '🎉' : quizScore >= 5 ? '👍' : '💪'}</div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {quizScore} / {quizQuestions.length}
                </h2>
                <p className="text-gray-500 dark:text-gray-400 mb-8">
                  {quizScore >= 7 ? 'Excellent! You really know your Georgian.' : quizScore >= 5 ? 'Good job! Keep practicing.' : 'Keep at it — practice makes perfect.'}
                </p>
                <button onClick={() => { setQuizIndex(0); setQuizScore(0); setQuizAnswer(null); setQuizDone(false) }} className="btn-accent">
                  <RotateCcw className="h-4 w-4" /> Try again
                </button>
              </div>
            )}
          </div>
        )}

        {/* ── CONVERSATIONS ── */}
        {tab === 'conversations' && (
          <div>
            <div className="flex gap-2 mb-8 overflow-x-auto">
              {conversations.map((c, i) => (
                <button
                  key={c.id}
                  onClick={() => { setActiveConvo(i); setRevealedLines(1) }}
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                    activeConvo === i
                      ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                  }`}
                >
                  {c.title}
                </button>
              ))}
            </div>

            <div className="card p-6 max-w-2xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900 dark:text-white">{conversations[activeConvo].title}</h3>
                <span className={`badge ${difficultyColor(conversations[activeConvo].difficulty)}`}>
                  {conversations[activeConvo].difficulty}
                </span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">{conversations[activeConvo].scenario}</p>

              <div className="space-y-4">
                {conversations[activeConvo].dialogue.slice(0, revealedLines).map((line, i) => (
                  <div key={i} className={`flex ${line.speaker === 'You' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                      line.speaker === 'You'
                        ? 'bg-pink-600 text-white rounded-br-md'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-bl-md'
                    }`}>
                      <div className="text-xs opacity-60 mb-1">{line.speaker}</div>
                      <div className="font-georgian text-base mb-1">{line.georgian}</div>
                      <div className="text-sm opacity-80">{line.english}</div>
                      <button
                        onClick={() => speak(line.georgian)}
                        className={`mt-2 text-xs flex items-center gap-1 ${line.speaker === 'You' ? 'text-pink-200 hover:text-white' : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'} transition-colors`}
                      >
                        <Volume2 className="h-3 w-3" /> {line.pronunciation}
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {revealedLines < conversations[activeConvo].dialogue.length && (
                <button
                  onClick={() => setRevealedLines(r => r + 1)}
                  className="mt-6 btn-secondary text-sm w-full"
                >
                  Next line <ArrowRight className="h-3.5 w-3.5" />
                </button>
              )}
              {revealedLines >= conversations[activeConvo].dialogue.length && (
                <button
                  onClick={() => setRevealedLines(1)}
                  className="mt-6 text-sm text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 flex items-center gap-1 mx-auto transition-colors"
                >
                  <RotateCcw className="h-3.5 w-3.5" /> Restart conversation
                </button>
              )}
            </div>
          </div>
        )}

        {/* ── VIDEOS ── */}
        {tab === 'videos' && (
          <div>
            <p className="text-gray-500 dark:text-gray-400 mb-8">
              The best free Georgian language video resources on YouTube. These channels are run by native speakers and language teachers.
            </p>

            <div className="space-y-4 mb-10">
              {[
                { name: 'Hoda Georgia', url: 'https://www.youtube.com/@hodageorgia', desc: 'Short, practical video tutorials covering shopping, weather, doctor visits, and everyday situations. Taught in English by native speakers.', topics: ['Beginner phrases', 'Daily situations', 'Vocabulary'] },
                { name: 'Lingophant — Georgian', url: 'https://www.youtube.com/@lingophant', desc: 'Structured course with listening exercises, grammar breakdowns, and phrase practice. Great for systematic learners.', topics: ['Grammar', 'Listening practice', 'Phrase sets'] },
                { name: 'Learn Georgian with Nini', url: 'https://www.youtube.com/@LearnGeorgianwithNini', desc: 'Conversational Georgian taught by a native speaker. Covers greetings, numbers, food vocabulary, and cultural context.', topics: ['Conversation', 'Culture', 'Pronunciation'] },
                { name: 'Georgian for Foreigners (RIC DOG)', url: 'https://www.youtube.com/results?search_query=georgian+for+foreigners+ric+dog', desc: 'A series of 13 short clips (under 2.5 min each) covering the most useful Georgian words and phrases for foreigners.', topics: ['Quick lessons', 'Essential words', 'Beginner friendly'] },
              ].map((channel, i) => (
                <a
                  key={i}
                  href={channel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card card-hover p-5 block group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1.5">
                        <Play className="h-4 w-4 text-red-500" />
                        <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                          {channel.name}
                        </h3>
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{channel.desc}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {channel.topics.map((topic, j) => (
                          <span key={j} className="badge bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-[11px]">{topic}</span>
                        ))}
                      </div>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-300 group-hover:text-gray-500 transition-colors shrink-0 mt-1" />
                  </div>
                </a>
              ))}
            </div>

            <div className="card p-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">More resources</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Other tools to supplement your video learning.</p>
              <div className="space-y-2.5">
                {[
                  { name: '50 Languages — Georgian', url: 'https://www.50languages.com/phrasebook/en/ka/', desc: '100 free audio lessons with downloadable MP3s' },
                  { name: 'Forvo — Georgian Pronunciation', url: 'https://forvo.com/languages/ka/', desc: 'Hear native speakers pronounce any Georgian word' },
                  { name: 'Learn Georgian Alphabet', url: 'https://www.learnthegeorgianalphabet.com/', desc: '11 lessons to master all 33 letters, with audio' },
                ].map((res, i) => (
                  <a
                    key={i}
                    href={res.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors group"
                  >
                    <div>
                      <div className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">{res.name}</div>
                      <div className="text-xs text-gray-400 mt-0.5">{res.desc}</div>
                    </div>
                    <ExternalLink className="h-3.5 w-3.5 text-gray-300 group-hover:text-gray-500 transition-colors shrink-0" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function LessonCard({ lesson, isExpanded, isCompleted, onToggle, onComplete, onSpeak, difficultyColor }: {
  lesson: Lesson
  isExpanded: boolean
  isCompleted: boolean
  onToggle: () => void
  onComplete: () => void
  onSpeak: (text: string, rate?: number) => void
  difficultyColor: (d: string) => string
}) {
  return (
    <div className="card overflow-hidden">
      <button onClick={onToggle} className="w-full flex items-center gap-4 p-5 text-left hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold shrink-0 ${
          isCompleted
            ? 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400'
            : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400'
        }`}>
          {isCompleted ? <CheckCircle className="h-5 w-5" /> : lesson.lesson}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <h3 className="font-semibold text-gray-900 dark:text-white truncate">{lesson.title}</h3>
            <span className={`badge text-[11px] ${difficultyColor(lesson.difficulty)}`}>{lesson.difficulty}</span>
          </div>
          <div className="flex items-center gap-3 text-xs text-gray-400">
            <span>{lesson.category}</span>
            <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{lesson.duration}</span>
            <span>{lesson.phrases.length} phrases</span>
          </div>
        </div>
        <ChevronDown className={`h-4 w-4 text-gray-400 shrink-0 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
      </button>

      {isExpanded && (
        <div className="border-t border-gray-100 dark:border-gray-800 p-5 space-y-5">
          {/* Key phrase */}
          <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4">
            <div>
              <div className="font-georgian text-2xl text-gray-900 dark:text-white">{lesson.georgian}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">{lesson.english}</div>
            </div>
            <button onClick={() => onSpeak(lesson.georgian)} className="p-2.5 rounded-xl bg-pink-50 dark:bg-pink-900/20 text-pink-600 dark:text-pink-400 hover:bg-pink-100 dark:hover:bg-pink-900/30 transition-colors" aria-label="Listen to pronunciation">
              <Volume2 className="h-5 w-5" />
            </button>
          </div>

          {/* Phrases */}
          <div>
            <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">Phrases</h4>
            <div className="space-y-2">
              {lesson.phrases.map((phrase, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors group">
                  <button onClick={() => onSpeak(phrase.georgian)} className="p-1.5 rounded-lg text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 hover:bg-pink-50 dark:hover:bg-pink-900/20 transition-colors" aria-label={`Listen to ${phrase.english}`}>
                    <Volume2 className="h-4 w-4" />
                  </button>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-2">
                      <span className="font-georgian text-base text-gray-900 dark:text-white">{phrase.georgian}</span>
                      <span className="text-xs text-gray-400">{phrase.pronunciation}</span>
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{phrase.english}</div>
                  </div>
                  <span className={`badge text-[10px] ${difficultyColor(phrase.difficulty)}`}>{phrase.difficulty}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cultural note */}
          <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-100 dark:border-amber-900/20 rounded-xl p-4">
            <div className="text-xs font-medium text-amber-700 dark:text-amber-400 mb-1">Cultural note</div>
            <p className="text-sm text-amber-800 dark:text-amber-300/80">{lesson.culturalNotes}</p>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 pt-2">
            <button
              onClick={onComplete}
              className={`text-sm font-medium px-4 py-2 rounded-lg transition-colors ${
                isCompleted
                  ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400 hover:bg-emerald-100'
                  : 'bg-gray-900 text-white dark:bg-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100'
              }`}
            >
              {isCompleted ? '✓ Completed' : 'Mark complete'}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
