'use client'

import { useState, useEffect } from 'react'
import { MessageCircle, Volume2, BookOpen, Users, Play, Video, Clock, Award, Bot, Sparkles, TrendingUp, CheckCircle, RotateCcw, Target, Brain, Zap, Globe, ChevronLeft, ChevronRight } from 'lucide-react'
import VideoContent from '../components/VideoContent'

export default function LanguagePage() {
  const [selectedLesson, setSelectedLesson] = useState<number | null>(null)
  const [completedLessons, setCompletedLessons] = useState<number[]>([])
  const [currentStreak] = useState(7)
  const [selectedDifficulty, setSelectedDifficulty] = useState('all')
  const [showAlphabet, setShowAlphabet] = useState(false)
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null)
  const [showQuiz, setShowQuiz] = useState(false)
  const [currentQuizQuestion, setCurrentQuizQuestion] = useState(0)
  const [quizScore, setQuizScore] = useState(0)
  const [showFlashcards, setShowFlashcards] = useState(false)
  const [currentFlashcard, setCurrentFlashcard] = useState(0)
  const [studyMode, setStudyMode] = useState<'lesson' | 'flashcard' | 'quiz' | 'alphabet' | 'conversation' | 'pronunciation'>('lesson')
  const [voiceRecording, setVoiceRecording] = useState(false)
  const [userLevel, setUserLevel] = useState<'beginner' | 'intermediate' | 'advanced'>('beginner')
  const [dailyGoal, setDailyGoal] = useState(15) // minutes
  const [studyStreak, setStudyStreak] = useState(7)
  const [totalXP, setTotalXP] = useState(1250)
  const [showAchievements, setShowAchievements] = useState(false)
  const [showExercises, setShowExercises] = useState<number | null>(null)
  const [exerciseAnswers, setExerciseAnswers] = useState<{[key: string]: string}>({})

  // Load progress from localStorage on component mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const savedProgress = localStorage.getItem('georgian-learning-progress')
        if (savedProgress) {
          setCompletedLessons(JSON.parse(savedProgress))
        }
      } catch (e) {
        console.error('Failed to load progress:', e)
      }
    }
  }, [])

  // Georgian Alphabet
  const georgianAlphabet = [
    { georgian: 'ა', latin: 'a', pronunciation: 'ah', example: 'ანა (Ana)', meaning: 'Anna' },
    { georgian: 'ბ', latin: 'b', pronunciation: 'bah', example: 'ბავშვი (bavshvi)', meaning: 'child' },
    { georgian: 'გ', latin: 'g', pronunciation: 'gah', example: 'გული (guli)', meaning: 'heart' },
    { georgian: 'დ', latin: 'd', pronunciation: 'dah', example: 'დედა (deda)', meaning: 'mother' },
    { georgian: 'ე', latin: 'e', pronunciation: 'eh', example: 'ერთი (erti)', meaning: 'one' },
    { georgian: 'ვ', latin: 'v', pronunciation: 'vah', example: 'ვარდი (vardi)', meaning: 'rose' },
    { georgian: 'ზ', latin: 'z', pronunciation: 'zah', example: 'ზღვა (zghva)', meaning: 'sea' },
    { georgian: 'თ', latin: 't', pronunciation: 'tah', example: 'თოვლი (tovli)', meaning: 'snow' },
    { georgian: 'ი', latin: 'i', pronunciation: 'ee', example: 'ისტორია (istoria)', meaning: 'history' },
    { georgian: 'კ', latin: 'k', pronunciation: 'kah', example: 'კაცი (katsi)', meaning: 'man' },
    { georgian: 'ლ', latin: 'l', pronunciation: 'lah', example: 'ლამაზი (lamazi)', meaning: 'beautiful' },
    { georgian: 'მ', latin: 'm', pronunciation: 'mah', example: 'მამა (mama)', meaning: 'father' },
    { georgian: 'ნ', latin: 'n', pronunciation: 'nah', example: 'ნაცარი (natsari)', meaning: 'ash' },
    { georgian: 'ო', latin: 'o', pronunciation: 'oh', example: 'ოჯახი (ojakhi)', meaning: 'family' },
    { georgian: 'პ', latin: 'p', pronunciation: 'pah', example: 'პური (puri)', meaning: 'bread' },
    { georgian: 'ჟ', latin: 'zh', pronunciation: 'zhah', example: 'ჟამი (zhami)', meaning: 'time' },
    { georgian: 'რ', latin: 'r', pronunciation: 'rah', example: 'რძე (rdze)', meaning: 'milk' },
    { georgian: 'ს', latin: 's', pronunciation: 'sah', example: 'სახლი (sakhli)', meaning: 'house' },
    { georgian: 'ტ', latin: 't', pronunciation: 'tah', example: 'ტყე (tke)', meaning: 'forest' },
    { georgian: 'უ', latin: 'u', pronunciation: 'oo', example: 'უნივერსიტეტი (universiteti)', meaning: 'university' },
    { georgian: 'ფ', latin: 'p', pronunciation: 'pah', example: 'ფული (puli)', meaning: 'money' },
    { georgian: 'ქ', latin: 'k', pronunciation: 'kah', example: 'ქალაქი (kalaki)', meaning: 'city' },
    { georgian: 'ღ', latin: 'gh', pronunciation: 'ghah', example: 'ღამე (ghame)', meaning: 'night' },
    { georgian: 'ყ', latin: 'q', pronunciation: 'qah', example: 'ყველა (qvela)', meaning: 'everyone' },
    { georgian: 'შ', latin: 'sh', pronunciation: 'shah', example: 'შავი (shavi)', meaning: 'black' },
    { georgian: 'ჩ', latin: 'ch', pronunciation: 'chah', example: 'ჩაი (chai)', meaning: 'tea' },
    { georgian: 'ც', latin: 'ts', pronunciation: 'tsah', example: 'ცხენი (tskheni)', meaning: 'horse' },
    { georgian: 'ძ', latin: 'dz', pronunciation: 'dzah', example: 'ძაღლი (dzaghli)', meaning: 'dog' },
    { georgian: 'წ', latin: 'ts', pronunciation: 'tsah', example: 'წყალი (tskali)', meaning: 'water' },
    { georgian: 'ჭ', latin: 'ch', pronunciation: 'chah', example: 'ჭამა (chama)', meaning: 'eating' },
    { georgian: 'ხ', latin: 'kh', pronunciation: 'khah', example: 'ხაჭაპური (khachapuri)', meaning: 'cheese bread' },
    { georgian: 'ჯ', latin: 'j', pronunciation: 'jah', example: 'ჯანმრთელობა (janmrteloba)', meaning: 'health' },
    { georgian: 'ჰ', latin: 'h', pronunciation: 'hah', example: 'ჰაერი (haeri)', meaning: 'air' }
  ]

  const difficulties = [
    { id: 'all', name: 'All Levels', count: 30 },
    { id: 'Beginner', name: 'Beginner', count: 12 },
    { id: 'Intermediate', name: 'Intermediate', count: 12 },
    { id: 'Advanced', name: 'Advanced', count: 6 }
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
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      phrases: [
        { georgian: 'გამარჯობა', english: 'Hello', pronunciation: 'ga-mar-jo-ba', difficulty: 'easy' },
        { georgian: 'მე ვარ...', english: 'I am...', pronunciation: 'me var...', difficulty: 'easy' },
        { georgian: 'სახელი მქვია...', english: 'My name is...', pronunciation: 'sa-khe-li mk-vi-a...', difficulty: 'medium' },
        { georgian: 'ნახვამდის', english: 'Goodbye', pronunciation: 'nakh-vam-dis', difficulty: 'easy' },
        { georgian: 'მადლობა', english: 'Thank you', pronunciation: 'mad-lo-ba', difficulty: 'easy' }
      ],
      culturalNotes: 'Georgians greet with enthusiasm. A firm handshake and eye contact show respect.',
      aiInsights: 'This lesson has 94% completion rate among expats. Master these phrases for immediate social benefits.'
    },
    {
      lesson: 2,
      title: 'Numbers & Counting',
      georgian: 'ერთი (erti)',
      english: 'One',
      difficulty: 'Beginner',
      category: 'Numbers',
      duration: '20 min',
      hasAudio: true,
      hasVideo: true,
      aiRecommended: true,
      practiceExercises: 8,
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      phrases: [
        { georgian: 'ერთი', english: 'One', pronunciation: 'er-ti', difficulty: 'easy' },
        { georgian: 'ორი', english: 'Two', pronunciation: 'o-ri', difficulty: 'easy' },
        { georgian: 'სამი', english: 'Three', pronunciation: 'sa-mi', difficulty: 'easy' },
        { georgian: 'ოთხი', english: 'Four', pronunciation: 'ot-khi', difficulty: 'easy' },
        { georgian: 'ხუთი', english: 'Five', pronunciation: 'khu-ti', difficulty: 'easy' },
        { georgian: 'ათი', english: 'Ten', pronunciation: 'a-ti', difficulty: 'medium' },
        { georgian: 'ას', english: 'Hundred', pronunciation: 'a-si', difficulty: 'medium' }
      ],
      culturalNotes: 'Georgian numbers are essential for shopping, ordering food, and daily transactions.',
      aiInsights: 'Numbers are used constantly in daily life. This lesson improves practical communication by 85%.'
    },
    {
      lesson: 3,
      title: 'Food & Dining Essentials',
      georgian: 'საჭმელი (sach\'meli)',
      english: 'Food',
      difficulty: 'Beginner',
      category: 'Food',
      duration: '25 min',
      hasAudio: true,
      hasVideo: true,
      aiRecommended: false,
      practiceExercises: 10,
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      phrases: [
        { georgian: 'საჭმელი', english: 'Food', pronunciation: 'sach-me-li', difficulty: 'medium' },
        { georgian: 'წყალი', english: 'Water', pronunciation: 'ts-ka-li', difficulty: 'easy' },
        { georgian: 'ღვინო', english: 'Wine', pronunciation: 'gh-vi-no', difficulty: 'easy' },
        { georgian: 'ხაჭაპური', english: 'Khachapuri (cheese bread)', pronunciation: 'kha-cha-pu-ri', difficulty: 'medium' },
        { georgian: 'ხინკალი', english: 'Khinkali (dumplings)', pronunciation: 'khin-ka-li', difficulty: 'medium' },
        { georgian: 'მე მინდა...', english: 'I want...', pronunciation: 'me min-da...', difficulty: 'medium' },
        { georgian: 'ანგარიში, თუ შეიძლება', english: 'The bill, please', pronunciation: 'an-ga-ri-shi, tu shei-dzle-ba', difficulty: 'hard' }
      ],
      culturalNotes: 'Georgian cuisine is central to culture. Learning food terms helps you enjoy authentic dining experiences.',
      aiInsights: 'Food vocabulary is highly practical. Students using these phrases report 90% better restaurant experiences.'
    },
    {
      lesson: 4,
      title: 'Directions & Transportation',
      georgian: 'სად არის...? (sad aris...?)',
      english: 'Where is...?',
      difficulty: 'Beginner',
      category: 'Navigation',
      duration: '18 min',
      hasAudio: true,
      hasVideo: true,
      aiRecommended: true,
      practiceExercises: 7,
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      phrases: [
        { georgian: 'სად არის...?', english: 'Where is...?', pronunciation: 'sad a-ris...?', difficulty: 'medium' },
        { georgian: 'მარჯვნივ', english: 'Right', pronunciation: 'mar-jv-niv', difficulty: 'medium' },
        { georgian: 'მარცხნივ', english: 'Left', pronunciation: 'mar-ts-kh-niv', difficulty: 'medium' },
        { georgian: 'პირდაპირ', english: 'Straight', pronunciation: 'pir-da-pir', difficulty: 'medium' },
        { georgian: 'მეტრო', english: 'Metro', pronunciation: 'met-ro', difficulty: 'easy' },
        { georgian: 'ავტობუსი', english: 'Bus', pronunciation: 'av-to-bu-si', difficulty: 'easy' },
        { georgian: 'ტაქსი', english: 'Taxi', pronunciation: 'tak-si', difficulty: 'easy' }
      ],
      culturalNotes: 'Tbilisi\'s public transport is extensive. Locals are helpful with directions when you try Georgian.',
      aiInsights: 'Navigation phrases reduce travel stress by 75%. Essential for independent exploration.'
    },
    {
      lesson: 5,
      title: 'Shopping & Money',
      georgian: 'რამდენი ღირს? (ramdeni ghirs?)',
      english: 'How much does it cost?',
      difficulty: 'Beginner',
      category: 'Shopping',
      duration: '22 min',
      hasAudio: true,
      hasVideo: true,
      aiRecommended: false,
      practiceExercises: 9,
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      phrases: [
        { georgian: 'რამდენი ღირს?', english: 'How much does it cost?', pronunciation: 'ram-de-ni ghirs?', difficulty: 'medium' },
        { georgian: 'ძვირია', english: 'It\'s expensive', pronunciation: 'dzvi-ri-a', difficulty: 'medium' },
        { georgian: 'იაფია', english: 'It\'s cheap', pronunciation: 'ia-fi-a', difficulty: 'medium' },
        { georgian: 'ლარი', english: 'Lari (Georgian currency)', pronunciation: 'la-ri', difficulty: 'easy' },
        { georgian: 'ბარათი', english: 'Card', pronunciation: 'ba-ra-ti', difficulty: 'easy' },
        { georgian: 'ნაღდი ფული', english: 'Cash', pronunciation: 'nagh-di pu-li', difficulty: 'medium' },
        { georgian: 'ჩანთა', english: 'Bag', pronunciation: 'chan-ta', difficulty: 'easy' }
      ],
      culturalNotes: 'Bargaining is common in markets. Showing effort to speak Georgian often gets better prices.',
      aiInsights: 'Shopping vocabulary saves money and improves market experiences. 88% report better deals.'
    },
    {
      lesson: 6,
      title: 'Time & Dates',
      georgian: 'რა დროა? (ra droa?)',
      english: 'What time is it?',
      difficulty: 'Intermediate',
      category: 'Time',
      duration: '30 min',
      hasAudio: true,
      hasVideo: true,
      aiRecommended: true,
      practiceExercises: 12,
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      phrases: [
        { georgian: 'რა დროა?', english: 'What time is it?', pronunciation: 'ra dro-a?', difficulty: 'medium' },
        { georgian: 'დღეს', english: 'Today', pronunciation: 'dghes', difficulty: 'easy' },
        { georgian: 'ხვალ', english: 'Tomorrow', pronunciation: 'khval', difficulty: 'easy' },
        { georgian: 'გუშინ', english: 'Yesterday', pronunciation: 'gu-shin', difficulty: 'easy' },
        { georgian: 'ორშაბათი', english: 'Monday', pronunciation: 'or-sha-ba-ti', difficulty: 'hard' },
        { georgian: 'საათი', english: 'Hour/Clock', pronunciation: 'sa-a-ti', difficulty: 'medium' },
        { georgian: 'წუთი', english: 'Minute', pronunciation: 'ts-u-ti', difficulty: 'medium' }
      ],
      culturalNotes: 'Georgians have a relaxed attitude toward time, but learning time expressions shows respect.',
      aiInsights: 'Time vocabulary is crucial for appointments and social plans. Improves scheduling accuracy by 92%.'
    },
    {
      lesson: 7,
      title: 'Family & Relationships',
      georgian: 'ოჯახი (ojakh\'i)',
      english: 'Family',
      difficulty: 'Intermediate',
      category: 'Family',
      duration: '25 min',
      hasAudio: true,
      hasVideo: true,
      aiRecommended: false,
      practiceExercises: 8,
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      phrases: [
        { georgian: 'ოჯახი', english: 'Family', pronunciation: 'o-ja-khi', difficulty: 'medium' },
        { georgian: 'დედა', english: 'Mother', pronunciation: 'de-da', difficulty: 'easy' },
        { georgian: 'მამა', english: 'Father', pronunciation: 'ma-ma', difficulty: 'easy' },
        { georgian: 'ძმა', english: 'Brother', pronunciation: 'dzma', difficulty: 'easy' },
        { georgian: 'და', english: 'Sister', pronunciation: 'da', difficulty: 'easy' },
        { georgian: 'მეგობარი', english: 'Friend', pronunciation: 'me-go-ba-ri', difficulty: 'medium' },
        { georgian: 'ცოლი', english: 'Wife', pronunciation: 'tso-li', difficulty: 'medium' },
        { georgian: 'ქმარი', english: 'Husband', pronunciation: 'k-ma-ri', difficulty: 'medium' }
      ],
      culturalNotes: 'Family is extremely important in Georgian culture. These terms help you connect personally.',
      aiInsights: 'Family vocabulary builds deeper relationships. 95% report improved social connections.'
    },
    {
      lesson: 8,
      title: 'Weather & Seasons',
      georgian: 'ამინდი (amindi)',
      english: 'Weather',
      difficulty: 'Intermediate',
      category: 'Weather',
      duration: '20 min',
      hasAudio: true,
      hasVideo: true,
      aiRecommended: false,
      practiceExercises: 6,
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      phrases: [
        { georgian: 'ამინდი', english: 'Weather', pronunciation: 'a-min-di', difficulty: 'medium' },
        { georgian: 'მზე', english: 'Sun', pronunciation: 'm-ze', difficulty: 'easy' },
        { georgian: 'წვიმა', english: 'Rain', pronunciation: 'ts-vi-ma', difficulty: 'easy' },
        { georgian: 'თოვლი', english: 'Snow', pronunciation: 'tov-li', difficulty: 'easy' },
        { georgian: 'ცივა', english: 'It\'s cold', pronunciation: 'tsi-va', difficulty: 'easy' },
        { georgian: 'ცხელა', english: 'It\'s hot', pronunciation: 'ts-khe-la', difficulty: 'easy' },
        { georgian: 'ზაფხული', english: 'Summer', pronunciation: 'zap-khu-li', difficulty: 'medium' },
        { georgian: 'ზამთარი', english: 'Winter', pronunciation: 'zam-ta-ri', difficulty: 'medium' }
      ],
      culturalNotes: 'Weather is a common conversation starter. Georgians love discussing seasonal changes.',
      aiInsights: 'Weather talk is universal. These phrases improve small talk success by 80%.'
    },
    {
      lesson: 9,
      title: 'Emotions & Feelings',
      georgian: 'როგორ ხარ? (rogor khar?)',
      english: 'How are you?',
      difficulty: 'Intermediate',
      category: 'Emotions',
      duration: '28 min',
      hasAudio: true,
      hasVideo: true,
      aiRecommended: true,
      practiceExercises: 10,
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      phrases: [
        { georgian: 'როგორ ხარ?', english: 'How are you?', pronunciation: 'ro-gor khar?', difficulty: 'medium' },
        { georgian: 'კარგად ვარ', english: 'I\'m fine', pronunciation: 'kar-gad var', difficulty: 'medium' },
        { georgian: 'ბედნიერი ვარ', english: 'I\'m happy', pronunciation: 'bed-ni-e-ri var', difficulty: 'hard' },
        { georgian: 'მწუხარე ვარ', english: 'I\'m sad', pronunciation: 'm-ts-u-kha-re var', difficulty: 'hard' },
        { georgian: 'დაღლილი ვარ', english: 'I\'m tired', pronunciation: 'dagh-li-li var', difficulty: 'hard' },
        { georgian: 'მშია', english: 'I\'m hungry', pronunciation: 'm-shi-a', difficulty: 'medium' },
        { georgian: 'მწყურია', english: 'I\'m thirsty', pronunciation: 'm-ts-ku-ri-a', difficulty: 'hard' }
      ],
      culturalNotes: 'Georgians are emotionally expressive. Sharing feelings builds strong friendships.',
      aiInsights: 'Emotional vocabulary deepens relationships. 90% report more meaningful conversations.'
    },
    {
      lesson: 10,
      title: 'Medical & Health',
      georgian: 'ავად ვარ (avad var)',
      english: 'I am sick',
      difficulty: 'Intermediate',
      category: 'Health',
      duration: '35 min',
      hasAudio: true,
      hasVideo: true,
      aiRecommended: true,
      practiceExercises: 11,
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      phrases: [
        { georgian: 'ავად ვარ', english: 'I am sick', pronunciation: 'a-vad var', difficulty: 'medium' },
        { georgian: 'ექიმი', english: 'Doctor', pronunciation: 'e-ki-mi', difficulty: 'medium' },
        { georgian: 'საავადმყოფო', english: 'Hospital', pronunciation: 'sa-a-vad-m-ko-po', difficulty: 'hard' },
        { georgian: 'წამალი', english: 'Medicine', pronunciation: 'ts-a-ma-li', difficulty: 'medium' },
        { georgian: 'ტკივა', english: 'Pain', pronunciation: 't-ki-va', difficulty: 'medium' },
        { georgian: 'თავი მტკივა', english: 'I have a headache', pronunciation: 'ta-vi m-t-ki-va', difficulty: 'hard' },
        { georgian: 'დახმარება', english: 'Help', pronunciation: 'dakh-ma-re-ba', difficulty: 'medium' }
      ],
      culturalNotes: 'Healthcare vocabulary is essential for emergencies. Georgian medical staff appreciate the effort.',
      aiInsights: 'Medical phrases provide safety and confidence. Critical for health emergencies and routine care.'
    },
    {
      lesson: 11,
      title: 'Work & Business',
      georgian: 'სამუშაო (samusho)',
      english: 'Work',
      difficulty: 'Advanced',
      category: 'Business',
      duration: '40 min',
      hasAudio: true,
      hasVideo: true,
      aiRecommended: false,
      practiceExercises: 15,
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      phrases: [
        { georgian: 'სამუშაო', english: 'Work', pronunciation: 'sa-mu-sha-o', difficulty: 'medium' },
        { georgian: 'ოფისი', english: 'Office', pronunciation: 'o-pi-si', difficulty: 'easy' },
        { georgian: 'შეხვედრა', english: 'Meeting', pronunciation: 'shekh-ve-dra', difficulty: 'hard' },
        { georgian: 'პროექტი', english: 'Project', pronunciation: 'pro-ek-ti', difficulty: 'medium' },
        { georgian: 'ხელფასი', english: 'Salary', pronunciation: 'khel-pa-si', difficulty: 'medium' },
        { georgian: 'კომპანია', english: 'Company', pronunciation: 'kom-pa-ni-a', difficulty: 'medium' },
        { georgian: 'ბიზნესი', english: 'Business', pronunciation: 'biz-ne-si', difficulty: 'easy' }
      ],
      culturalNotes: 'Business relationships in Georgia are built on personal trust and respect.',
      aiInsights: 'Professional vocabulary opens career opportunities. 85% report improved workplace integration.'
    },
    {
      lesson: 12,
      title: 'Advanced Conversations',
      georgian: 'რას ფიქრობ? (ras pikrob?)',
      english: 'What do you think?',
      difficulty: 'Advanced',
      category: 'Conversation',
      duration: '45 min',
      hasAudio: true,
      hasVideo: true,
      aiRecommended: true,
      practiceExercises: 18,
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      phrases: [
        { georgian: 'რას ფიქრობ?', english: 'What do you think?', pronunciation: 'ras pik-rob?', difficulty: 'hard' },
        { georgian: 'ვთანხმდები', english: 'I agree', pronunciation: 'v-tan-khm-de-bi', difficulty: 'hard' },
        { georgian: 'არ ვთანხმდები', english: 'I disagree', pronunciation: 'ar v-tan-khm-de-bi', difficulty: 'hard' },
        { georgian: 'საინტერესოა', english: 'It\'s interesting', pronunciation: 'sa-in-te-re-so-a', difficulty: 'hard' },
        { georgian: 'მესმის', english: 'I understand', pronunciation: 'mes-mis', difficulty: 'medium' },
        { georgian: 'არ მესმის', english: 'I don\'t understand', pronunciation: 'ar mes-mis', difficulty: 'medium' },
        { georgian: 'შეიძლება განმეორდეს?', english: 'Can you repeat?', pronunciation: 'shei-dzle-ba gan-me-or-des?', difficulty: 'hard' }
      ],
      culturalNotes: 'Advanced conversations show deep respect for Georgian culture and build lasting relationships.',
      aiInsights: 'Complex phrases enable nuanced communication. Master level for meaningful cultural exchange.'
    },
    {
      lesson: 13,
      title: 'Colors & Descriptions',
      georgian: 'ფერი (peri)',
      english: 'Color',
      difficulty: 'Beginner',
      category: 'Descriptions',
      duration: '18 min',
      hasAudio: true,
      hasVideo: true,
      aiRecommended: false,
      practiceExercises: 7,
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      phrases: [
        { georgian: 'ფერი', english: 'Color', pronunciation: 'pe-ri', difficulty: 'easy' },
        { georgian: 'თეთრი', english: 'White', pronunciation: 'tet-ri', difficulty: 'easy' },
        { georgian: 'შავი', english: 'Black', pronunciation: 'sha-vi', difficulty: 'easy' },
        { georgian: 'წითელი', english: 'Red', pronunciation: 'ts-i-te-li', difficulty: 'medium' },
        { georgian: 'ლურჯი', english: 'Blue', pronunciation: 'lur-ji', difficulty: 'easy' },
        { georgian: 'მწვანე', english: 'Green', pronunciation: 'm-ts-va-ne', difficulty: 'medium' },
        { georgian: 'ყვითელი', english: 'Yellow', pronunciation: 'k-vi-te-li', difficulty: 'medium' }
      ],
      culturalNotes: 'Colors are important in Georgian culture, especially in traditional clothing and art.',
      aiInsights: 'Color vocabulary helps with shopping, describing objects, and artistic discussions. 78% improvement in descriptive communication.'
    },
    {
      lesson: 14,
      title: 'Clothing & Appearance',
      georgian: 'ტანსაცმელი (tansatsmeli)',
      english: 'Clothing',
      difficulty: 'Beginner',
      category: 'Fashion',
      duration: '22 min',
      hasAudio: true,
      hasVideo: true,
      aiRecommended: true,
      practiceExercises: 9,
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      phrases: [
        { georgian: 'ტანსაცმელი', english: 'Clothing', pronunciation: 'tan-sa-ts-me-li', difficulty: 'hard' },
        { georgian: 'პერანგი', english: 'Shirt', pronunciation: 'pe-ran-gi', difficulty: 'medium' },
        { georgian: 'შარვალი', english: 'Pants', pronunciation: 'shar-va-li', difficulty: 'medium' },
        { georgian: 'ფეხსაცმელი', english: 'Shoes', pronunciation: 'pekh-sa-ts-me-li', difficulty: 'hard' },
        { georgian: 'ქუდი', english: 'Hat', pronunciation: 'ku-di', difficulty: 'easy' },
        { georgian: 'ლამაზი', english: 'Beautiful', pronunciation: 'la-ma-zi', difficulty: 'medium' },
        { georgian: 'ძვირი', english: 'Expensive', pronunciation: 'dzvi-ri', difficulty: 'medium' }
      ],
      culturalNotes: 'Georgians dress well for social occasions. Complimenting appearance is a common social practice.',
      aiInsights: 'Fashion vocabulary essential for shopping and social interactions. 82% report better shopping experiences.'
    },
    {
      lesson: 15,
      title: 'Technology & Modern Life',
      georgian: 'ტექნოლოგია (teknologia)',
      english: 'Technology',
      difficulty: 'Beginner',
      category: 'Modern Life',
      duration: '20 min',
      hasAudio: true,
      hasVideo: true,
      aiRecommended: true,
      practiceExercises: 8,
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      phrases: [
        { georgian: 'ტექნოლოგია', english: 'Technology', pronunciation: 'tek-no-lo-gi-a', difficulty: 'medium' },
        { georgian: 'ტელეფონი', english: 'Phone', pronunciation: 'te-le-po-ni', difficulty: 'easy' },
        { georgian: 'კომპიუტერი', english: 'Computer', pronunciation: 'kom-pi-u-te-ri', difficulty: 'medium' },
        { georgian: 'ინტერნეტი', english: 'Internet', pronunciation: 'in-ter-ne-ti', difficulty: 'easy' },
        { georgian: 'ვებსაიტი', english: 'Website', pronunciation: 'veb-sai-ti', difficulty: 'easy' },
        { georgian: 'აპლიკაცია', english: 'App', pronunciation: 'ap-li-ka-tsi-a', difficulty: 'medium' },
        { georgian: 'Wi-Fi', english: 'Wi-Fi', pronunciation: 'vai-pai', difficulty: 'easy' }
      ],
      culturalNotes: 'Georgia has excellent internet infrastructure. Tech vocabulary is essential for modern life in Tbilisi.',
      aiInsights: 'Tech terms are crucial for daily life. 95% of expats use these phrases regularly for connectivity and work.'
    },
    {
      lesson: 16,
      title: 'Hobbies & Interests',
      georgian: 'ჰობი (hobi)',
      english: 'Hobby',
      difficulty: 'Intermediate',
      category: 'Leisure',
      duration: '25 min',
      hasAudio: true,
      hasVideo: true,
      aiRecommended: false,
      practiceExercises: 10,
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      phrases: [
        { georgian: 'ჰობი', english: 'Hobby', pronunciation: 'ho-bi', difficulty: 'easy' },
        { georgian: 'კითხვა', english: 'Reading', pronunciation: 'kit-khva', difficulty: 'medium' },
        { georgian: 'მუსიკა', english: 'Music', pronunciation: 'mu-si-ka', difficulty: 'easy' },
        { georgian: 'ფოტოგრაფია', english: 'Photography', pronunciation: 'po-to-gra-pi-a', difficulty: 'medium' },
        { georgian: 'ხატვა', english: 'Drawing/Painting', pronunciation: 'khat-va', difficulty: 'medium' },
        { georgian: 'სპორტი', english: 'Sports', pronunciation: 'spor-ti', difficulty: 'easy' },
        { georgian: 'მოგზაურობა', english: 'Travel', pronunciation: 'mog-zau-ro-ba', difficulty: 'hard' }
      ],
      culturalNotes: 'Sharing hobbies is a great way to connect with Georgians and find local communities.',
      aiInsights: 'Hobby vocabulary builds social connections. 88% report finding new friends through shared interests.'
    },
    {
      lesson: 17,
      title: 'Education & Learning',
      georgian: 'განათლება (ganatleba)',
      english: 'Education',
      difficulty: 'Intermediate',
      category: 'Academic',
      duration: '30 min',
      hasAudio: true,
      hasVideo: true,
      aiRecommended: true,
      practiceExercises: 12,
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      phrases: [
        { georgian: 'განათლება', english: 'Education', pronunciation: 'ga-nat-le-ba', difficulty: 'hard' },
        { georgian: 'სკოლა', english: 'School', pronunciation: 'sko-la', difficulty: 'easy' },
        { georgian: 'უნივერსიტეტი', english: 'University', pronunciation: 'u-ni-ver-si-te-ti', difficulty: 'medium' },
        { georgian: 'სტუდენტი', english: 'Student', pronunciation: 'stu-den-ti', difficulty: 'easy' },
        { georgian: 'მასწავლებელი', english: 'Teacher', pronunciation: 'mas-ts-av-le-be-li', difficulty: 'hard' },
        { georgian: 'წიგნი', english: 'Book', pronunciation: 'ts-ig-ni', difficulty: 'medium' },
        { georgian: 'გაკვეთილი', english: 'Lesson', pronunciation: 'ga-kve-ti-li', difficulty: 'hard' }
      ],
      culturalNotes: 'Education is highly valued in Georgian culture. Many universities offer programs in English.',
      aiInsights: 'Academic vocabulary opens educational opportunities. Essential for students and professionals in Georgia.'
    },
    {
      lesson: 18,
      title: 'Banking & Finance',
      georgian: 'ბანკი (banki)',
      english: 'Bank',
      difficulty: 'Intermediate',
      category: 'Finance',
      duration: '28 min',
      hasAudio: true,
      hasVideo: true,
      aiRecommended: true,
      practiceExercises: 11,
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      phrases: [
        { georgian: 'ბანკი', english: 'Bank', pronunciation: 'ban-ki', difficulty: 'easy' },
        { georgian: 'ანგარიში', english: 'Account', pronunciation: 'an-ga-ri-shi', difficulty: 'medium' },
        { georgian: 'ბარათი', english: 'Card', pronunciation: 'ba-ra-ti', difficulty: 'easy' },
        { georgian: 'ფული', english: 'Money', pronunciation: 'pu-li', difficulty: 'easy' },
        { georgian: 'გადახდა', english: 'Payment', pronunciation: 'ga-dakh-da', difficulty: 'medium' },
        { georgian: 'სესხი', english: 'Loan', pronunciation: 'seskh-i', difficulty: 'medium' },
        { georgian: 'ვალუტა', english: 'Currency', pronunciation: 'va-lu-ta', difficulty: 'medium' }
      ],
      culturalNotes: 'Georgian banks are modern and efficient. Most services are available in English, but Georgian helps.',
      aiInsights: 'Financial vocabulary essential for expat life. 92% report smoother banking experiences with these phrases.'
    },
    {
      lesson: 19,
      title: 'Legal & Government',
      georgian: 'მთავრობა (mtavroba)',
      english: 'Government',
      difficulty: 'Advanced',
      category: 'Official',
      duration: '35 min',
      hasAudio: true,
      hasVideo: true,
      aiRecommended: false,
      practiceExercises: 14,
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      phrases: [
        { georgian: 'მთავრობა', english: 'Government', pronunciation: 'm-tav-ro-ba', difficulty: 'hard' },
        { georgian: 'კანონი', english: 'Law', pronunciation: 'ka-no-ni', difficulty: 'medium' },
        { georgian: 'პასპორტი', english: 'Passport', pronunciation: 'pas-por-ti', difficulty: 'easy' },
        { georgian: 'ვიზა', english: 'Visa', pronunciation: 'vi-za', difficulty: 'easy' },
        { georgian: 'რეგისტრაცია', english: 'Registration', pronunciation: 're-gis-tra-tsi-a', difficulty: 'hard' },
        { georgian: 'დოკუმენტი', english: 'Document', pronunciation: 'do-ku-men-ti', difficulty: 'medium' },
        { georgian: 'ოფიციალური', english: 'Official', pronunciation: 'o-pi-tsi-a-lu-ri', difficulty: 'hard' }
      ],
      culturalNotes: 'Understanding legal terms helps with residency, business registration, and official procedures.',
      aiInsights: 'Legal vocabulary crucial for long-term residents. Essential for visa extensions and official processes.'
    },
    {
      lesson: 20,
      title: 'Advanced Cultural Expressions',
      georgian: 'კულტურა (kultura)',
      english: 'Culture',
      difficulty: 'Advanced',
      category: 'Cultural',
      duration: '40 min',
      hasAudio: true,
      hasVideo: true,
      aiRecommended: true,
      practiceExercises: 16,
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      phrases: [
        { georgian: 'კულტურა', english: 'Culture', pronunciation: 'kul-tu-ra', difficulty: 'medium' },
        { georgian: 'ტრადიცია', english: 'Tradition', pronunciation: 'tra-di-tsi-a', difficulty: 'medium' },
        { georgian: 'ღირსება', english: 'Value/Honor', pronunciation: 'ghir-se-ba', difficulty: 'hard' },
        { georgian: 'სტუმარმასპინძლობა', english: 'Hospitality', pronunciation: 'stu-mar-mas-pin-dzlo-ba', difficulty: 'hard' },
        { georgian: 'ზეიმი', english: 'Celebration', pronunciation: 'zei-mi', difficulty: 'medium' },
        { georgian: 'ფოლკლორი', english: 'Folklore', pronunciation: 'pol-klo-ri', difficulty: 'medium' },
        { georgian: 'მემკვიდრეობა', english: 'Heritage', pronunciation: 'mem-kvi-dre-o-ba', difficulty: 'hard' }
      ],
      culturalNotes: 'These expressions show deep cultural understanding and respect for Georgian heritage and values.',
      aiInsights: 'Cultural vocabulary demonstrates serious commitment to integration. Highest level of respect from locals.'
    },
    {
      lesson: 21,
      title: 'Public Transportation & Travel',
      georgian: 'ტრანსპორტი (transporti)',
      english: 'Transportation',
      difficulty: 'Beginner',
      category: 'Travel',
      duration: '18 min',
      hasAudio: true,
      hasVideo: true,
      aiRecommended: true,
      practiceExercises: 8,
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      phrases: [
        { georgian: 'ტრანსპორტი', english: 'Transportation', pronunciation: 'trans-por-ti', difficulty: 'easy' },
        { georgian: 'მეტროს სადგური', english: 'Metro station', pronunciation: 'met-ros sad-gu-ri', difficulty: 'medium' },
        { georgian: 'ავტობუსის გაჩერება', english: 'Bus stop', pronunciation: 'av-to-bu-sis ga-che-re-ba', difficulty: 'hard' },
        { georgian: 'ბილეთი', english: 'Ticket', pronunciation: 'bi-le-ti', difficulty: 'easy' },
        { georgian: 'რამდენი ღირს ბილეთი?', english: 'How much is the ticket?', pronunciation: 'ram-de-ni ghirs bi-le-ti?', difficulty: 'hard' },
        { georgian: 'აეროპორტი', english: 'Airport', pronunciation: 'a-e-ro-por-ti', difficulty: 'medium' },
        { georgian: 'მატარებელი', english: 'Train', pronunciation: 'ma-ta-re-be-li', difficulty: 'medium' }
      ],
      culturalNotes: 'Tbilisi has excellent public transport. The metro is clean, efficient, and very affordable at 1 lari per ride.',
      aiInsights: 'Transport vocabulary is essential for daily life. 98% of expats use public transport regularly in Tbilisi.'
    },
    {
      lesson: 22,
      title: 'Apartment Hunting & Housing',
      georgian: 'ბინა (bina)',
      english: 'Apartment',
      difficulty: 'Intermediate',
      category: 'Housing',
      duration: '30 min',
      hasAudio: true,
      hasVideo: true,
      aiRecommended: true,
      practiceExercises: 12,
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      phrases: [
        { georgian: 'ბინა', english: 'Apartment', pronunciation: 'bi-na', difficulty: 'easy' },
        { georgian: 'ქირა', english: 'Rent', pronunciation: 'ki-ra', difficulty: 'easy' },
        { georgian: 'ოთახი', english: 'Room', pronunciation: 'o-ta-khi', difficulty: 'easy' },
        { georgian: 'სამზარეულო', english: 'Kitchen', pronunciation: 'sam-za-re-u-lo', difficulty: 'hard' },
        { georgian: 'აბაზანა', english: 'Bathroom', pronunciation: 'a-ba-za-na', difficulty: 'medium' },
        { georgian: 'ავეჯი', english: 'Furniture', pronunciation: 'a-ve-ji', difficulty: 'medium' },
        { georgian: 'კომუნალური', english: 'Utilities', pronunciation: 'ko-mu-na-lu-ri', difficulty: 'hard' },
        { georgian: 'ინტერნეტი შედის?', english: 'Is internet included?', pronunciation: 'in-ter-ne-ti she-dis?', difficulty: 'hard' }
      ],
      culturalNotes: 'Most rentals in Tbilisi are unfurnished. Always ask about utilities and internet inclusion in rent.',
      aiInsights: 'Housing vocabulary crucial for expat life. Knowing these terms helps negotiate better rental deals.'
    },
    {
      lesson: 23,
      title: 'Georgian Cuisine & Cooking',
      georgian: 'ქართული სამზარეულო (kartuli samzareulo)',
      english: 'Georgian cuisine',
      difficulty: 'Intermediate',
      category: 'Food',
      duration: '35 min',
      hasAudio: true,
      hasVideo: true,
      aiRecommended: false,
      practiceExercises: 14,
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      phrases: [
        { georgian: 'ქართული სამზარეულო', english: 'Georgian cuisine', pronunciation: 'kar-tu-li sam-za-re-u-lo', difficulty: 'hard' },
        { georgian: 'ხაჭაპური აჭარული', english: 'Adjarian khachapuri', pronunciation: 'kha-cha-pu-ri a-cha-ru-li', difficulty: 'hard' },
        { georgian: 'მცხეთა', english: 'Mchadi (cornbread)', pronunciation: 'm-che-ta', difficulty: 'medium' },
        { georgian: 'ლობიო', english: 'Bean stew', pronunciation: 'lo-bi-o', difficulty: 'easy' },
        { georgian: 'ბადრიჯანი', english: 'Eggplant', pronunciation: 'bad-ri-ja-ni', difficulty: 'medium' },
        { georgian: 'ნიგვზის საუსი', english: 'Walnut sauce', pronunciation: 'nig-vzis sa-u-si', difficulty: 'hard' },
        { georgian: 'ტკბილი', english: 'Sweet', pronunciation: 't-k-bi-li', difficulty: 'medium' },
        { georgian: 'მწარე', english: 'Spicy/Bitter', pronunciation: 'm-ts-a-re', difficulty: 'medium' }
      ],
      culturalNotes: 'Georgian cuisine uses many herbs and spices. Walnuts, coriander, and fenugreek are staples.',
      aiInsights: 'Food vocabulary enhances cultural integration. Cooking Georgian food impresses locals significantly.'
    },
    {
      lesson: 24,
      title: 'Georgian Wine & Toasting',
      georgian: 'ღვინო და სუფრა (ghvino da supra)',
      english: 'Wine and feast',
      difficulty: 'Advanced',
      category: 'Cultural',
      duration: '40 min',
      hasAudio: true,
      hasVideo: true,
      aiRecommended: true,
      practiceExercises: 15,
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      phrases: [
        { georgian: 'ღვინო', english: 'Wine', pronunciation: 'gh-vi-no', difficulty: 'easy' },
        { georgian: 'სუფრა', english: 'Georgian feast', pronunciation: 'sup-ra', difficulty: 'medium' },
        { georgian: 'ტამადა', english: 'Toastmaster', pronunciation: 'ta-ma-da', difficulty: 'medium' },
        { georgian: 'გაუმარჯოს!', english: 'Cheers! (Victory!)', pronunciation: 'gau-mar-jos!', difficulty: 'medium' },
        { georgian: 'ქართული ღვინო', english: 'Georgian wine', pronunciation: 'kar-tu-li gh-vi-no', difficulty: 'medium' },
        { georgian: 'საფერავი', english: 'Saperavi (red wine)', pronunciation: 'sa-pe-ra-vi', difficulty: 'medium' },
        { georgian: 'რქაწითელი', english: 'Rkatsiteli (white wine)', pronunciation: 'r-ka-ts-i-te-li', difficulty: 'hard' },
        { georgian: 'ჩაჩა', english: 'Chacha (Georgian brandy)', pronunciation: 'cha-cha', difficulty: 'easy' }
      ],
      culturalNotes: 'Georgian wine culture is 8000 years old. Toasting is an art form with specific rules and traditions.',
      aiInsights: 'Wine vocabulary is essential for social integration. Georgians bond deeply over wine and toasts.'
    },
    {
      lesson: 25,
      title: 'Nature & Outdoor Activities',
      georgian: 'ბუნება (buneba)',
      english: 'Nature',
      difficulty: 'Beginner',
      category: 'Nature',
      duration: '22 min',
      hasAudio: true,
      hasVideo: true,
      aiRecommended: false,
      practiceExercises: 9,
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      phrases: [
        { georgian: 'ბუნება', english: 'Nature', pronunciation: 'bu-ne-ba', difficulty: 'medium' },
        { georgian: 'მთა', english: 'Mountain', pronunciation: 'm-ta', difficulty: 'easy' },
        { georgian: 'ტყე', english: 'Forest', pronunciation: 't-ke', difficulty: 'easy' },
        { georgian: 'მდინარე', english: 'River', pronunciation: 'm-di-na-re', difficulty: 'medium' },
        { georgian: 'ტბა', english: 'Lake', pronunciation: 't-ba', difficulty: 'easy' },
        { georgian: 'ფეხით სიარული', english: 'Hiking', pronunciation: 'pe-khit si-a-ru-li', difficulty: 'hard' },
        { georgian: 'ლაშქრობა', english: 'Camping/Expedition', pronunciation: 'lash-kro-ba', difficulty: 'medium' },
        { georgian: 'ღია ცის ქვეშ', english: 'Under the open sky', pronunciation: 'ghi-a tsis k-vesh', difficulty: 'hard' }
      ],
      culturalNotes: 'Georgia has incredible nature - from Caucasus mountains to Black Sea coast. Georgians love outdoor activities.',
      aiInsights: 'Nature vocabulary opens up adventure opportunities. Georgia has some of the best hiking in the region.'
    },
    {
      lesson: 26,
      title: 'Georgian History & Landmarks',
      georgian: 'ისტორია (istoria)',
      english: 'History',
      difficulty: 'Advanced',
      category: 'Cultural',
      duration: '45 min',
      hasAudio: true,
      hasVideo: true,
      aiRecommended: false,
      practiceExercises: 18,
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      phrases: [
        { georgian: 'ისტორია', english: 'History', pronunciation: 'is-to-ri-a', difficulty: 'medium' },
        { georgian: 'ძველი ქალაქი', english: 'Old city', pronunciation: 'dzve-li ka-la-ki', difficulty: 'medium' },
        { georgian: 'ნარიყალა', english: 'Narikala fortress', pronunciation: 'na-ri-ka-la', difficulty: 'medium' },
        { georgian: 'სამება', english: 'Trinity Cathedral', pronunciation: 'sa-me-ba', difficulty: 'medium' },
        { georgian: 'მცხეთა', english: 'Mtskheta (ancient capital)', pronunciation: 'm-ts-khe-ta', difficulty: 'medium' },
        { georgian: 'სვეტიცხოველი', english: 'Svetitskhoveli Cathedral', pronunciation: 'sve-tits-kho-ve-li', difficulty: 'hard' },
        { georgian: 'მუზეუმი', english: 'Museum', pronunciation: 'mu-ze-u-mi', difficulty: 'easy' },
        { georgian: 'ძეგლი', english: 'Monument', pronunciation: 'dze-gli', difficulty: 'medium' }
      ],
      culturalNotes: 'Georgia has 3000+ years of history. Understanding historical context deepens cultural appreciation.',
      aiInsights: 'Historical vocabulary shows serious cultural interest. Locals appreciate knowledge of Georgian heritage.'
    },
    {
      lesson: 27,
      title: 'Technology & Digital Life',
      georgian: 'ციფრული ცხოვრება (tsipruli tskhovreba)',
      english: 'Digital life',
      difficulty: 'Beginner',
      category: 'Technology',
      duration: '20 min',
      hasAudio: true,
      hasVideo: true,
      aiRecommended: true,
      practiceExercises: 10,
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      phrases: [
        { georgian: 'ციფრული', english: 'Digital', pronunciation: 'tsip-ru-li', difficulty: 'medium' },
        { georgian: 'სმარტფონი', english: 'Smartphone', pronunciation: 'smart-po-ni', difficulty: 'easy' },
        { georgian: 'აპლიკაცია', english: 'Application/App', pronunciation: 'ap-li-ka-tsi-a', difficulty: 'medium' },
        { georgian: 'პაროლი', english: 'Password', pronunciation: 'pa-ro-li', difficulty: 'easy' },
        { georgian: 'ელექტრონული ფოსტა', english: 'Email', pronunciation: 'e-lek-tro-nu-li pos-ta', difficulty: 'hard' },
        { georgian: 'სოციალური ქსელი', english: 'Social network', pronunciation: 'so-tsi-a-lu-ri k-se-li', difficulty: 'hard' },
        { georgian: 'ონლაინ', english: 'Online', pronunciation: 'on-lain', difficulty: 'easy' },
        { georgian: 'ჩამოტვირთვა', english: 'Download', pronunciation: 'cha-mo-t-virt-va', difficulty: 'hard' }
      ],
      culturalNotes: 'Georgia has excellent internet infrastructure. Tech vocabulary is essential for modern life in Tbilisi.',
      aiInsights: 'Tech terms are crucial for digital nomads. Georgia is becoming a major tech hub in the region.'
    },
    {
      lesson: 28,
      title: 'Georgian Festivals & Celebrations',
      georgian: 'ფესტივალები (pestivalebi)',
      english: 'Festivals',
      difficulty: 'Intermediate',
      category: 'Cultural',
      duration: '32 min',
      hasAudio: true,
      hasVideo: true,
      aiRecommended: true,
      practiceExercises: 13,
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      phrases: [
        { georgian: 'ფესტივალი', english: 'Festival', pronunciation: 'pes-ti-va-li', difficulty: 'medium' },
        { georgian: 'ახალი წელი', english: 'New Year', pronunciation: 'a-kha-li ts-e-li', difficulty: 'medium' },
        { georgian: 'შობა', english: 'Christmas', pronunciation: 'sho-ba', difficulty: 'easy' },
        { georgian: 'აღდგომა', english: 'Easter', pronunciation: 'agh-dgo-ma', difficulty: 'medium' },
        { georgian: 'თბილისობა', english: 'Tbilisoba (Tbilisi Day)', pronunciation: 'tbi-li-so-ba', difficulty: 'hard' },
        { georgian: 'რთველი', english: 'Harvest festival', pronunciation: 'rt-ve-li', difficulty: 'medium' },
        { georgian: 'ცეკვა', english: 'Dance', pronunciation: 'tsek-va', difficulty: 'easy' },
        { georgian: 'სიმღერა', english: 'Song', pronunciation: 'sim-ghe-ra', difficulty: 'medium' }
      ],
      culturalNotes: 'Georgian festivals blend Christian traditions with ancient customs. Music and dance are central elements.',
      aiInsights: 'Festival vocabulary helps participate in cultural events. Georgians love sharing their traditions with foreigners.'
    },
    {
      lesson: 29,
      title: 'Sports & Recreation',
      georgian: 'სპორტი (sporti)',
      english: 'Sports',
      difficulty: 'Beginner',
      category: 'Sports',
      duration: '25 min',
      hasAudio: true,
      hasVideo: true,
      aiRecommended: false,
      practiceExercises: 11,
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      phrases: [
        { georgian: 'სპორტი', english: 'Sports', pronunciation: 'spor-ti', difficulty: 'easy' },
        { georgian: 'ფეხბურთი', english: 'Football/Soccer', pronunciation: 'pekh-bur-ti', difficulty: 'medium' },
        { georgian: 'რაგბი', english: 'Rugby', pronunciation: 'rag-bi', difficulty: 'easy' },
        { georgian: 'ჭიდაობა', english: 'Wrestling', pronunciation: 'chi-da-o-ba', difficulty: 'medium' },
        { georgian: 'ცურვა', english: 'Swimming', pronunciation: 'tsur-va', difficulty: 'easy' },
        { georgian: 'სპორტული დარბაზი', english: 'Gym', pronunciation: 'spor-tu-li dar-ba-zi', difficulty: 'hard' },
        { georgian: 'ვარჯიში', english: 'Exercise/Training', pronunciation: 'var-ji-shi', difficulty: 'medium' },
        { georgian: 'მოთხილამურე', english: 'Skier', pronunciation: 'mot-khi-la-mu-re', difficulty: 'hard' }
      ],
      culturalNotes: 'Rugby and wrestling are very popular in Georgia. The country has produced many world champions.',
      aiInsights: 'Sports vocabulary helps connect with locals. Georgians are passionate about sports, especially rugby.'
    },
    {
      lesson: 30,
      title: 'Advanced Business Georgian',
      georgian: 'ბიზნეს ქართული (biznes kartuli)',
      english: 'Business Georgian',
      difficulty: 'Advanced',
      category: 'Business',
      duration: '50 min',
      hasAudio: true,
      hasVideo: true,
      aiRecommended: true,
      practiceExercises: 20,
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      phrases: [
        { georgian: 'ბიზნეს გეგმა', english: 'Business plan', pronunciation: 'biz-nes geg-ma', difficulty: 'medium' },
        { georgian: 'ინვესტიცია', english: 'Investment', pronunciation: 'in-ves-ti-tsi-a', difficulty: 'medium' },
        { georgian: 'მოგება', english: 'Profit', pronunciation: 'mo-ge-ba', difficulty: 'easy' },
        { georgian: 'ზარალი', english: 'Loss', pronunciation: 'za-ra-li', difficulty: 'easy' },
        { georgian: 'კონტრაქტი', english: 'Contract', pronunciation: 'kon-trak-ti', difficulty: 'medium' },
        { georgian: 'მოლაპარაკება', english: 'Negotiation', pronunciation: 'mo-la-pa-ra-ke-ba', difficulty: 'hard' },
        { georgian: 'პარტნიორობა', english: 'Partnership', pronunciation: 'part-ni-o-ro-ba', difficulty: 'hard' },
        { georgian: 'წარმატება', english: 'Success', pronunciation: 'ts-ar-ma-te-ba', difficulty: 'medium' }
      ],
      culturalNotes: 'Georgia has a growing startup ecosystem. Business relationships are built on personal trust and respect.',
      aiInsights: 'Business Georgian opens professional opportunities. Essential for entrepreneurs and business professionals.'
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

  // Quiz questions generated from lessons
  const quizQuestions = [
    {
      question: "How do you say 'Hello' in Georgian?",
      options: ["გამარჯობა", "ნახვამდის", "მადლობა", "კარგად"],
      correct: 0,
      pronunciation: "gamarjoba"
    },
    {
      question: "What does 'მადლობა' mean?",
      options: ["Goodbye", "Hello", "Thank you", "Please"],
      correct: 2,
      pronunciation: "madloba"
    },
    {
      question: "How do you ask 'How much does it cost?' in Georgian?",
      options: ["რა დროა?", "რამდენი ღირს?", "სად არის?", "როგორ ხარ?"],
      correct: 1,
      pronunciation: "ramdeni ghirs?"
    },
    {
      question: "What is the Georgian word for 'water'?",
      options: ["ღვინო", "წყალი", "ჩაი", "რძე"],
      correct: 1,
      pronunciation: "tskali"
    },
    {
      question: "How do you say 'I don't understand' in Georgian?",
      options: ["მესმის", "არ მესმის", "ვთანხმდები", "საინტერესოა"],
      correct: 1,
      pronunciation: "ar mesmis"
    },
    {
      question: "What does 'ბინა' mean?",
      options: ["House", "Apartment", "Room", "Kitchen"],
      correct: 1,
      pronunciation: "bina"
    },
    {
      question: "How do you say 'Metro station' in Georgian?",
      options: ["ავტობუსის გაჩერება", "მეტროს სადგური", "აეროპორტი", "ბილეთი"],
      correct: 1,
      pronunciation: "metros sadguri"
    },
    {
      question: "What is 'სუფრა'?",
      options: ["Wine", "Georgian feast", "Dance", "Song"],
      correct: 1,
      pronunciation: "supra"
    },
    {
      question: "How do you say 'Mountain' in Georgian?",
      options: ["ტყე", "მდინარე", "მთა", "ტბა"],
      correct: 2,
      pronunciation: "mta"
    },
    {
      question: "What does 'გაუმარჯოს!' mean?",
      options: ["Hello!", "Goodbye!", "Cheers!/Victory!", "Thank you!"],
      correct: 2,
      pronunciation: "gaumarjos!"
    }
  ]

  // Flashcard data from common phrases
  const flashcards = [
    { georgian: "გამარჯობა", english: "Hello", pronunciation: "ga-mar-jo-ba", category: "Greetings" },
    { georgian: "მადლობა", english: "Thank you", pronunciation: "mad-lo-ba", category: "Greetings" },
    { georgian: "ნახვამდის", english: "Goodbye", pronunciation: "nakh-vam-dis", category: "Greetings" },
    { georgian: "წყალი", english: "Water", pronunciation: "ts-ka-li", category: "Food" },
    { georgian: "ღვინო", english: "Wine", pronunciation: "gh-vi-no", category: "Food" },
    { georgian: "ხაჭაპური", english: "Khachapuri", pronunciation: "kha-cha-pu-ri", category: "Food" },
    { georgian: "რამდენი ღირს?", english: "How much does it cost?", pronunciation: "ram-de-ni ghirs?", category: "Shopping" },
    { georgian: "სად არის...?", english: "Where is...?", pronunciation: "sad a-ris...?", category: "Navigation" },
    { georgian: "მე ვარ...", english: "I am...", pronunciation: "me var...", category: "Introduction" },
    { georgian: "როგორ ხარ?", english: "How are you?", pronunciation: "ro-gor khar?", category: "Conversation" },
    { georgian: "ბინა", english: "Apartment", pronunciation: "bi-na", category: "Housing" },
    { georgian: "ქირა", english: "Rent", pronunciation: "ki-ra", category: "Housing" },
    { georgian: "მეტრო", english: "Metro", pronunciation: "met-ro", category: "Transport" },
    { georgian: "ბილეთი", english: "Ticket", pronunciation: "bi-le-ti", category: "Transport" },
    { georgian: "ღვინო", english: "Wine", pronunciation: "gh-vi-no", category: "Culture" },
    { georgian: "სუფრა", english: "Georgian feast", pronunciation: "sup-ra", category: "Culture" },
    { georgian: "მთა", english: "Mountain", pronunciation: "m-ta", category: "Nature" },
    { georgian: "ტყე", english: "Forest", pronunciation: "t-ke", category: "Nature" },
    { georgian: "სპორტი", english: "Sports", pronunciation: "spor-ti", category: "Sports" },
    { georgian: "ბიზნესი", english: "Business", pronunciation: "biz-ne-si", category: "Business" }
  ]

  const handleQuizAnswer = (selectedAnswer: number) => {
    if (selectedAnswer === quizQuestions[currentQuizQuestion].correct) {
      setQuizScore(prev => prev + 1)
    }
    
    if (currentQuizQuestion < quizQuestions.length - 1) {
      setCurrentQuizQuestion(prev => prev + 1)
    } else {
      // Quiz completed
      setTimeout(() => {
        alert(`Quiz completed! Score: ${quizScore + (selectedAnswer === quizQuestions[currentQuizQuestion].correct ? 1 : 0)}/${quizQuestions.length}`)
        setShowQuiz(false)
        setCurrentQuizQuestion(0)
        setQuizScore(0)
      }, 1000)
    }
  }

  const nextFlashcard = () => {
    setCurrentFlashcard(prev => (prev + 1) % flashcards.length)
  }

  const prevFlashcard = () => {
    setCurrentFlashcard(prev => prev === 0 ? flashcards.length - 1 : prev - 1)
  }

  // Conversation scenarios for practice
  const conversationScenarios = [
    {
      id: 1,
      title: "At a Restaurant",
      difficulty: "Beginner",
      scenario: "You're ordering food at a traditional Georgian restaurant",
      dialogue: [
        { speaker: "Waiter", georgian: "გამარჯობა! რას შეუკვეთავთ?", english: "Hello! What would you like to order?", pronunciation: "gamarjoba! ras sheuketavt?" },
        { speaker: "You", georgian: "მე მინდა ხაჭაპური", english: "I want khachapuri", pronunciation: "me minda khachapuri" },
        { speaker: "Waiter", georgian: "რომელი ხაჭაპური?", english: "Which khachapuri?", pronunciation: "romeli khachapuri?" },
        { speaker: "You", georgian: "აჭარული, თუ შეიძლება", english: "Adjarian, please", pronunciation: "acharuli, tu sheidzleba" }
      ]
    },
    {
      id: 2,
      title: "Asking for Directions",
      difficulty: "Beginner", 
      scenario: "You're lost in Tbilisi and need to find the metro station",
      dialogue: [
        { speaker: "You", georgian: "ბოდიში, სად არის მეტროს სადგური?", english: "Excuse me, where is the metro station?", pronunciation: "bodishi, sad aris metros sadguri?" },
        { speaker: "Local", georgian: "პირდაპირ წადით და მარჯვნივ მიუხვიეთ", english: "Go straight and turn right", pronunciation: "pirdapir tsadit da marjvniv miukhviet" },
        { speaker: "You", georgian: "მადლობა!", english: "Thank you!", pronunciation: "madloba!" },
        { speaker: "Local", georgian: "არაფრის!", english: "You're welcome!", pronunciation: "arapris!" }
      ]
    },
    {
      id: 3,
      title: "Shopping at the Market",
      difficulty: "Intermediate",
      scenario: "You're buying fresh produce at Dezerter Bazaar",
      dialogue: [
        { speaker: "You", georgian: "რამდენი ღირს ეს ყურძენი?", english: "How much do these grapes cost?", pronunciation: "ramdeni ghirs es qurdzeni?" },
        { speaker: "Vendor", georgian: "სამი ლარი კილოგრამი", english: "Three lari per kilogram", pronunciation: "sami lari kilogrami" },
        { speaker: "You", georgian: "ძალიან ძვირია. ორი ლარი?", english: "That's very expensive. Two lari?", pronunciation: "dzalian dzviria. ori lari?" },
        { speaker: "Vendor", georgian: "კარგი, ორი ლარი ორმოცდაათი თეთრი", english: "Okay, two lari fifty tetri", pronunciation: "kargi, ori lari ormotsadaati tetri" }
      ]
    }
  ]

  // Pronunciation challenges
  const pronunciationChallenges = [
    { georgian: "ღვინო", english: "Wine", difficulty: "Medium", tip: "The 'ღ' sound is like a soft 'gh'" },
    { georgian: "ხაჭაპური", english: "Khachapuri", difficulty: "Medium", tip: "Emphasize the 'kh' sound at the beginning" },
    { georgian: "წყალი", english: "Water", difficulty: "Hard", tip: "The 'წ' is a sharp 'ts' sound" },
    { georgian: "ჯანმრთელობა", english: "Health", difficulty: "Hard", tip: "Break it down: jan-mr-te-lo-ba" },
    { georgian: "სტუმარმასპინძლობა", english: "Hospitality", difficulty: "Expert", tip: "Georgia's longest word! Take it slowly" }
  ]

  // Achievement system
  const achievements = [
    { id: 1, title: "First Steps", description: "Complete your first lesson", icon: "🎯", unlocked: true },
    { id: 2, title: "Week Warrior", description: "Maintain a 7-day streak", icon: "🔥", unlocked: true },
    { id: 3, title: "Alphabet Master", description: "Learn all 33 Georgian letters", icon: "📝", unlocked: false },
    { id: 4, title: "Conversation Starter", description: "Complete 5 conversation scenarios", icon: "💬", unlocked: false },
    { id: 5, title: "Wine Connoisseur", description: "Master Georgian wine vocabulary", icon: "🍷", unlocked: false },
    { id: 6, title: "Cultural Ambassador", description: "Complete all cultural lessons", icon: "🏛️", unlocked: false }
  ]

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
                  <span>20 Interactive Lessons</span>
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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
              <span className="text-2xl font-bold text-orange-600">{studyStreak}</span>
            </div>
            <div className="flex items-center space-x-1 mb-2">
              {Array.from({ length: 7 }).map((_, i) => (
                <div 
                  key={i} 
                  className={`w-4 h-4 rounded-full ${i < studyStreak ? 'bg-orange-500' : 'bg-gray-200'}`}
                ></div>
              ))}
            </div>
            <p className="text-sm text-gray-600">Keep it up! Daily practice improves retention by 85%</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <Award className="h-6 w-6 text-purple-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">XP Points</h3>
              </div>
              <span className="text-2xl font-bold text-purple-600">{totalXP}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
              <div 
                className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(totalXP % 1000) / 10}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-600">{1000 - (totalXP % 1000)} XP to next level</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <Target className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Daily Goal</h3>
              </div>
              <button 
                onClick={() => setShowAchievements(true)}
                className="text-blue-600 hover:text-blue-800"
              >
                <Award className="h-5 w-5" />
              </button>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">{dailyGoal} min</div>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full w-3/4"></div>
              </div>
              <p className="text-sm text-gray-600">11 min completed today</p>
            </div>
          </div>
        </div>

        {/* Achievements Modal */}
        {showAchievements && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-8 max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">🏆 Achievements</h2>
                <button 
                  onClick={() => setShowAchievements(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                {achievements.map((achievement) => (
                  <div 
                    key={achievement.id} 
                    className={`p-4 rounded-lg border-2 ${
                      achievement.unlocked 
                        ? 'border-green-200 bg-green-50' 
                        : 'border-gray-200 bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center mb-2">
                      <span className="text-2xl mr-3">{achievement.icon}</span>
                      <div>
                        <h3 className={`font-semibold ${
                          achievement.unlocked ? 'text-green-800' : 'text-gray-600'
                        }`}>
                          {achievement.title}
                        </h3>
                        {achievement.unlocked && (
                          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                            Unlocked!
                          </span>
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">{achievement.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Study Mode Selector */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <Brain className="h-6 w-6 text-purple-600 mr-3" />
              <h2 className="text-xl font-bold text-gray-900">Choose Your Study Mode</h2>
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <Clock className="h-4 w-4 mr-1" />
              <span>Personalized learning experience</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
            <button
              onClick={() => setStudyMode('lesson')}
              className={`p-4 rounded-lg border-2 transition-all ${
                studyMode === 'lesson'
                  ? 'border-pink-500 bg-pink-50'
                  : 'border-gray-200 hover:border-pink-300'
              }`}
            >
              <BookOpen className="h-8 w-8 mx-auto mb-2 text-pink-600" />
              <h3 className="font-semibold text-gray-900">Lessons</h3>
              <p className="text-sm text-gray-600">Structured learning</p>
            </button>
            
            <button
              onClick={() => setStudyMode('flashcard')}
              className={`p-4 rounded-lg border-2 transition-all ${
                studyMode === 'flashcard'
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              <RotateCcw className="h-8 w-8 mx-auto mb-2 text-blue-600" />
              <h3 className="font-semibold text-gray-900">Flashcards</h3>
              <p className="text-sm text-gray-600">Quick review</p>
            </button>
            
            <button
              onClick={() => setStudyMode('quiz')}
              className={`p-4 rounded-lg border-2 transition-all ${
                studyMode === 'quiz'
                  ? 'border-green-500 bg-green-50'
                  : 'border-gray-200 hover:border-green-300'
              }`}
            >
              <Target className="h-8 w-8 mx-auto mb-2 text-green-600" />
              <h3 className="font-semibold text-gray-900">Quiz</h3>
              <p className="text-sm text-gray-600">Test knowledge</p>
            </button>
            
            <button
              onClick={() => setStudyMode('alphabet')}
              className={`p-4 rounded-lg border-2 transition-all ${
                studyMode === 'alphabet'
                  ? 'border-purple-500 bg-purple-50'
                  : 'border-gray-200 hover:border-purple-300'
              }`}
            >
              <Globe className="h-8 w-8 mx-auto mb-2 text-purple-600" />
              <h3 className="font-semibold text-gray-900">Alphabet</h3>
              <p className="text-sm text-gray-600">Learn script</p>
            </button>

            <button
              onClick={() => setStudyMode('conversation')}
              className={`p-4 rounded-lg border-2 transition-all ${
                studyMode === 'conversation'
                  ? 'border-orange-500 bg-orange-50'
                  : 'border-gray-200 hover:border-orange-300'
              }`}
            >
              <MessageCircle className="h-8 w-8 mx-auto mb-2 text-orange-600" />
              <h3 className="font-semibold text-gray-900">Conversations</h3>
              <p className="text-sm text-gray-600">Real scenarios</p>
            </button>

            <button
              onClick={() => setStudyMode('pronunciation')}
              className={`p-4 rounded-lg border-2 transition-all ${
                studyMode === 'pronunciation'
                  ? 'border-red-500 bg-red-50'
                  : 'border-gray-200 hover:border-red-300'
              }`}
            >
              <Volume2 className="h-8 w-8 mx-auto mb-2 text-red-600" />
              <h3 className="font-semibold text-gray-900">Pronunciation</h3>
              <p className="text-sm text-gray-600">Perfect accent</p>
            </button>
          </div>
        </div>

        {/* Lessons Mode */}
        {studyMode === 'lesson' && (
          <>
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <BookOpen className="h-5 w-5 text-pink-600 mr-2" />
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

                  {/* Video Lesson */}
                  {lesson.hasVideo && lesson.videoUrl && (
                    <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-4">
                      <div className="flex items-center mb-4">
                        <Video className="h-5 w-5 text-red-600 mr-2" />
                        <h4 className="font-semibold text-gray-900">Video Lesson</h4>
                        <span className="ml-auto bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-semibold">
                          HD Quality
                        </span>
                      </div>
                      <div className="relative w-full h-0 pb-[56.25%] rounded-lg overflow-hidden shadow-lg">
                        <iframe
                          src={lesson.videoUrl}
                          title={`Georgian Lesson ${lesson.lesson}: ${lesson.title}`}
                          className="absolute top-0 left-0 w-full h-full"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                      <div className="mt-3 flex items-center justify-between text-sm text-gray-600">
                        <div className="flex items-center space-x-4">
                          <span className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {lesson.duration}
                          </span>
                          <span className="flex items-center">
                            <Volume2 className="h-4 w-4 mr-1" />
                            Native Speaker Audio
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-semibold hover:bg-red-200 transition-colors">
                            Subtitles Available
                          </button>
                          <button className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold hover:bg-blue-200 transition-colors">
                            Slow Speed Option
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Audio Practice Section */}
                  {lesson.hasAudio && (
                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-4">
                      <div className="flex items-center mb-4">
                        <Volume2 className="h-5 w-5 text-blue-600 mr-2" />
                        <h4 className="font-semibold text-gray-900">Audio Practice</h4>
                        <span className="ml-auto bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
                          Interactive
                        </span>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white/70 rounded-lg p-4">
                          <h5 className="font-semibold text-gray-800 mb-2">Listen & Repeat</h5>
                          <p className="text-sm text-gray-600 mb-3">Practice pronunciation with native speaker audio</p>
                          <button 
                            onClick={() => playPronunciation(lesson.georgian)}
                            className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                          >
                            <Play className="h-4 w-4 mr-2" />
                            Play Audio
                          </button>
                        </div>
                        <div className="bg-white/70 rounded-lg p-4">
                          <h5 className="font-semibold text-gray-800 mb-2">Speed Control</h5>
                          <p className="text-sm text-gray-600 mb-3">Adjust playback speed for better learning</p>
                          <div className="flex space-x-2">
                            <button 
                              onClick={() => {
                                const utterance = new SpeechSynthesisUtterance(lesson.georgian)
                                utterance.lang = 'ka-GE'
                                utterance.rate = 0.5
                                speechSynthesis.speak(utterance)
                              }}
                              className="bg-gray-200 text-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-300 transition-colors"
                            >
                              0.5x
                            </button>
                            <button 
                              onClick={() => {
                                const utterance = new SpeechSynthesisUtterance(lesson.georgian)
                                utterance.lang = 'ka-GE'
                                utterance.rate = 0.7
                                speechSynthesis.speak(utterance)
                              }}
                              className="bg-blue-200 text-blue-700 px-3 py-1 rounded text-sm hover:bg-blue-300 transition-colors"
                            >
                              0.7x
                            </button>
                            <button 
                              onClick={() => {
                                const utterance = new SpeechSynthesisUtterance(lesson.georgian)
                                utterance.lang = 'ka-GE'
                                utterance.rate = 1.0
                                speechSynthesis.speak(utterance)
                              }}
                              className="bg-green-200 text-green-700 px-3 py-1 rounded text-sm hover:bg-green-300 transition-colors"
                            >
                              1.0x
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Video Lesson */}
                  {lesson.hasVideo && lesson.videoUrl && (
                    <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-4">
                      <div className="flex items-center mb-4">
                        <Video className="h-5 w-5 text-red-600 mr-2" />
                        <h4 className="font-semibold text-gray-900">Video Lesson</h4>
                        <span className="ml-auto bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-semibold">
                          HD Quality
                        </span>
                      </div>
                      <div className="relative w-full h-0 pb-[56.25%] rounded-lg overflow-hidden shadow-lg">
                        <iframe
                          src={lesson.videoUrl}
                          title={`Georgian Lesson ${lesson.lesson}: ${lesson.title}`}
                          className="absolute top-0 left-0 w-full h-full"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                      <div className="mt-3 flex items-center justify-between text-sm text-gray-600">
                        <div className="flex items-center space-x-4">
                          <span className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {lesson.duration}
                          </span>
                          <span className="flex items-center">
                            <Volume2 className="h-4 w-4 mr-1" />
                            Native Speaker Audio
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-semibold hover:bg-red-200 transition-colors">
                            Subtitles Available
                          </button>
                          <button className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold hover:bg-blue-200 transition-colors">
                            Slow Speed Option
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Audio Practice Section */}
                  {lesson.hasAudio && (
                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-4">
                      <div className="flex items-center mb-4">
                        <Volume2 className="h-5 w-5 text-blue-600 mr-2" />
                        <h4 className="font-semibold text-gray-900">Audio Practice</h4>
                        <span className="ml-auto bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
                          Interactive
                        </span>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white/70 rounded-lg p-4">
                          <h5 className="font-semibold text-gray-800 mb-2">Listen & Repeat</h5>
                          <p className="text-sm text-gray-600 mb-3">Practice pronunciation with native speaker audio</p>
                          <button 
                            onClick={() => playPronunciation(lesson.georgian)}
                            className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                          >
                            <Play className="h-4 w-4 mr-2" />
                            Play Audio
                          </button>
                        </div>
                        <div className="bg-white/70 rounded-lg p-4">
                          <h5 className="font-semibold text-gray-800 mb-2">Speed Control</h5>
                          <p className="text-sm text-gray-600 mb-3">Adjust playback speed for better learning</p>
                          <div className="flex space-x-2">
                            <button 
                              onClick={() => {
                                const utterance = new SpeechSynthesisUtterance(lesson.georgian)
                                utterance.lang = 'ka-GE'
                                utterance.rate = 0.5
                                speechSynthesis.speak(utterance)
                              }}
                              className="bg-gray-200 text-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-300 transition-colors"
                            >
                              0.5x
                            </button>
                            <button 
                              onClick={() => {
                                const utterance = new SpeechSynthesisUtterance(lesson.georgian)
                                utterance.lang = 'ka-GE'
                                utterance.rate = 0.7
                                speechSynthesis.speak(utterance)
                              }}
                              className="bg-blue-200 text-blue-700 px-3 py-1 rounded text-sm hover:bg-blue-300 transition-colors"
                            >
                              0.7x
                            </button>
                            <button 
                              onClick={() => {
                                const utterance = new SpeechSynthesisUtterance(lesson.georgian)
                                utterance.lang = 'ka-GE'
                                utterance.rate = 1.0
                                speechSynthesis.speak(utterance)
                              }}
                              className="bg-green-200 text-green-700 px-3 py-1 rounded text-sm hover:bg-green-300 transition-colors"
                            >
                              1.0x
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Video Lesson */}
                  {lesson.hasVideo && lesson.videoUrl && (
                    <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-4">
                      <div className="flex items-center mb-4">
                        <Video className="h-5 w-5 text-red-600 mr-2" />
                        <h4 className="font-semibold text-gray-900">Video Lesson</h4>
                        <span className="ml-auto bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-semibold">
                          HD Quality
                        </span>
                      </div>
                      <div className="relative w-full h-0 pb-[56.25%] rounded-lg overflow-hidden shadow-lg">
                        <iframe
                          src={lesson.videoUrl}
                          title={`Georgian Lesson ${lesson.lesson}: ${lesson.title}`}
                          className="absolute top-0 left-0 w-full h-full"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                      <div className="mt-3 flex items-center justify-between text-sm text-gray-600">
                        <div className="flex items-center space-x-4">
                          <span className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {lesson.duration}
                          </span>
                          <span className="flex items-center">
                            <Volume2 className="h-4 w-4 mr-1" />
                            Native Speaker Audio
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-semibold hover:bg-red-200 transition-colors">
                            Subtitles Available
                          </button>
                          <button className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold hover:bg-blue-200 transition-colors">
                            Slow Speed Option
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Audio Practice Section */}
                  {lesson.hasAudio && (
                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-4">
                      <div className="flex items-center mb-4">
                        <Volume2 className="h-5 w-5 text-blue-600 mr-2" />
                        <h4 className="font-semibold text-gray-900">Audio Practice</h4>
                        <span className="ml-auto bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
                          Interactive
                        </span>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white/70 rounded-lg p-4">
                          <h5 className="font-semibold text-gray-800 mb-2">Listen & Repeat</h5>
                          <p className="text-sm text-gray-600 mb-3">Practice pronunciation with native speaker audio</p>
                          <button 
                            onClick={() => playPronunciation(lesson.georgian)}
                            className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                          >
                            <Play className="h-4 w-4 mr-2" />
                            Play Audio
                          </button>
                        </div>
                        <div className="bg-white/70 rounded-lg p-4">
                          <h5 className="font-semibold text-gray-800 mb-2">Speed Control</h5>
                          <p className="text-sm text-gray-600 mb-3">Adjust playback speed for better learning</p>
                          <div className="flex space-x-2">
                            <button 
                              onClick={() => {
                                const utterance = new SpeechSynthesisUtterance(lesson.georgian)
                                utterance.lang = 'ka-GE'
                                utterance.rate = 0.5
                                speechSynthesis.speak(utterance)
                              }}
                              className="bg-gray-200 text-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-300 transition-colors"
                            >
                              0.5x
                            </button>
                            <button 
                              onClick={() => {
                                const utterance = new SpeechSynthesisUtterance(lesson.georgian)
                                utterance.lang = 'ka-GE'
                                utterance.rate = 0.7
                                speechSynthesis.speak(utterance)
                              }}
                              className="bg-blue-200 text-blue-700 px-3 py-1 rounded text-sm hover:bg-blue-300 transition-colors"
                            >
                              0.7x
                            </button>
                            <button 
                              onClick={() => {
                                const utterance = new SpeechSynthesisUtterance(lesson.georgian)
                                utterance.lang = 'ka-GE'
                                utterance.rate = 1.0
                                speechSynthesis.speak(utterance)
                              }}
                              className="bg-green-200 text-green-700 px-3 py-1 rounded text-sm hover:bg-green-300 transition-colors"
                            >
                              1.0x
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

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
          </>
        )}

        {/* Flashcards Mode */}
        {studyMode === 'flashcard' && (
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <RotateCcw className="h-6 w-6 text-blue-600 mr-3" />
                <h2 className="text-xl font-bold text-gray-900">Flashcards</h2>
              </div>
              <div className="text-sm text-gray-500">
                {currentFlashcard + 1} of {flashcards.length}
              </div>
            </div>
            
            <div className="max-w-md mx-auto">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 mb-6 min-h-[300px] flex flex-col justify-center items-center text-center shadow-lg">
                <div className="mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {flashcards[currentFlashcard].category}
                  </span>
                </div>
                <div className="georgian-text text-4xl font-bold text-gray-900 mb-4">
                  {flashcards[currentFlashcard].georgian}
                </div>
                <div className="text-xl text-gray-700 mb-2">
                  {flashcards[currentFlashcard].english}
                </div>
                <div className="text-gray-500 italic mb-4">
                  {flashcards[currentFlashcard].pronunciation}
                </div>
                <button
                  onClick={() => playPronunciation(flashcards[currentFlashcard].georgian)}
                  className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  <Volume2 className="h-4 w-4 mr-2" />
                  Play Audio
                </button>
              </div>
              
              <div className="flex justify-between items-center">
                <button
                  onClick={prevFlashcard}
                  className="flex items-center bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                >
                  ← Previous
                </button>
                <div className="flex space-x-2">
                  {flashcards.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full ${
                        index === currentFlashcard ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={nextFlashcard}
                  className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Next →
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Conversation Mode */}
        {studyMode === 'conversation' && (
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <MessageCircle className="h-6 w-6 text-orange-600 mr-3" />
                <h2 className="text-xl font-bold text-gray-900">Conversation Practice</h2>
              </div>
              <div className="text-sm text-gray-500">
                Real-world scenarios
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {conversationScenarios.map((scenario) => (
                <div key={scenario.id} className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-gray-900">{scenario.title}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      scenario.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                      scenario.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {scenario.difficulty}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{scenario.scenario}</p>
                  
                  <div className="space-y-3">
                    {scenario.dialogue.slice(0, 2).map((line, idx) => (
                      <div key={idx} className={`p-3 rounded-lg ${
                        line.speaker === 'You' ? 'bg-blue-100 ml-4' : 'bg-white mr-4'
                      }`}>
                        <div className="text-xs font-semibold text-gray-500 mb-1">{line.speaker}:</div>
                        <div className="georgian-text font-semibold text-gray-900">{line.georgian}</div>
                        <div className="text-sm text-gray-600">{line.english}</div>
                      </div>
                    ))}
                  </div>
                  
                  <button className="w-full mt-4 bg-orange-600 text-white py-2 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
                    Practice This Scenario
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Pronunciation Mode */}
        {studyMode === 'pronunciation' && (
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <Volume2 className="h-6 w-6 text-red-600 mr-3" />
                <h2 className="text-xl font-bold text-gray-900">Pronunciation Training</h2>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setVoiceRecording(!voiceRecording)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                    voiceRecording 
                      ? 'bg-red-600 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {voiceRecording ? '🔴 Recording...' : '🎤 Start Recording'}
                </button>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Pronunciation Challenges</h3>
                <div className="space-y-4">
                  {pronunciationChallenges.map((challenge, idx) => (
                    <div key={idx} className="bg-gradient-to-r from-red-50 to-pink-50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="georgian-text text-2xl font-bold text-gray-900">
                          {challenge.georgian}
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          challenge.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                          challenge.difficulty === 'Hard' ? 'bg-red-100 text-red-800' :
                          'bg-purple-100 text-purple-800'
                        }`}>
                          {challenge.difficulty}
                        </span>
                      </div>
                      <div className="text-gray-700 mb-2">{challenge.english}</div>
                      <div className="text-sm text-blue-600 mb-3">💡 {challenge.tip}</div>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => playPronunciation(challenge.georgian)}
                          className="flex items-center bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700 transition-colors"
                        >
                          <Play className="h-3 w-3 mr-1" />
                          Listen
                        </button>
                        <button className="flex items-center bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition-colors">
                          <Volume2 className="h-3 w-3 mr-1" />
                          Record
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Pronunciation Tips</h3>
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">1</div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Georgian is Phonetic</h4>
                        <p className="text-sm text-gray-600">Each letter has one consistent sound, making pronunciation predictable once you learn the alphabet.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">2</div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Stress Patterns</h4>
                        <p className="text-sm text-gray-600">Georgian stress is usually on the first syllable, but there are exceptions in borrowed words.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">3</div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Unique Sounds</h4>
                        <p className="text-sm text-gray-600">Pay special attention to ღ (gh), ყ (q), ხ (kh), and ჯ (j) - these don't exist in English.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">4</div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Practice Daily</h4>
                        <p className="text-sm text-gray-600">15 minutes of daily pronunciation practice will dramatically improve your Georgian accent.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Quiz Mode */}
        {studyMode === 'quiz' && (
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <Target className="h-6 w-6 text-green-600 mr-3" />
                <h2 className="text-xl font-bold text-gray-900">Georgian Quiz</h2>
              </div>
              <div className="text-sm text-gray-500">
                Question {currentQuizQuestion + 1} of {quizQuestions.length}
              </div>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <div className="mb-6">
                <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                  <div 
                    className="bg-green-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((currentQuizQuestion + 1) / quizQuestions.length) * 100}%` }}
                  ></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  {quizQuestions[currentQuizQuestion].question}
                </h3>
              </div>
              
              <div className="grid gap-3 mb-6">
                {quizQuestions[currentQuizQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuizAnswer(index)}
                    className="p-4 text-left bg-gray-50 hover:bg-green-50 border-2 border-gray-200 hover:border-green-300 rounded-lg transition-all duration-200"
                  >
                    <div className="flex items-center">
                      <span className="w-8 h-8 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center font-semibold mr-3">
                        {String.fromCharCode(65 + index)}
                      </span>
                      <span className="georgian-text text-lg font-semibold">{option}</span>
                    </div>
                  </button>
                ))}
              </div>
              
              <div className="text-center">
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="flex items-center justify-center mb-2">
                    <Volume2 className="h-4 w-4 text-blue-600 mr-2" />
                    <span className="text-sm font-semibold text-gray-700">Pronunciation Help</span>
                  </div>
                  <button
                    onClick={() => playPronunciation(quizQuestions[currentQuizQuestion].pronunciation)}
                    className="text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    {quizQuestions[currentQuizQuestion].pronunciation}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Georgian Alphabet Section */}
        {studyMode === 'alphabet' && (
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <Globe className="h-8 w-8 text-purple-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Georgian Alphabet</h2>
              </div>
              <button
                onClick={() => setShowAlphabet(!showAlphabet)}
                className="bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                {showAlphabet ? 'Hide Letters' : 'Show All Letters'}
              </button>
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4 mb-6">
              <div className="flex items-center mb-2">
                <Sparkles className="h-5 w-5 text-purple-600 mr-2" />
                <span className="font-semibold text-gray-700">33 Letters of Georgian Script</span>
              </div>
              <p className="text-sm text-gray-600">
                Georgian has its own unique alphabet with 33 letters. Each letter has a consistent pronunciation, making it easier to learn than English spelling!
              </p>
            </div>

            {/* Alphabet Practice Mode Selector */}
            <div className="flex justify-center mb-6">
              <div className="bg-gray-100 rounded-lg p-1 flex">
                <button
                  onClick={() => setShowAlphabet(true)}
                  className={`px-4 py-2 rounded-md font-semibold transition-colors ${
                    showAlphabet
                      ? 'bg-purple-600 text-white'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  Interactive Grid
                </button>
                <button
                  onClick={() => setShowAlphabet(false)}
                  className={`px-4 py-2 rounded-md font-semibold transition-colors ${
                    !showAlphabet
                      ? 'bg-purple-600 text-white'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  Practice Cards
                </button>
              </div>
            </div>

            {showAlphabet ? (
              <div className="space-y-6">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
                  {georgianAlphabet.map((letter, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedLetter(selectedLetter === letter.georgian ? null : letter.georgian)}
                      className={`p-4 rounded-lg border-2 transition-all duration-200 hover:shadow-md ${
                        selectedLetter === letter.georgian
                          ? 'border-purple-500 bg-purple-50'
                          : 'border-gray-200 hover:border-purple-300'
                      }`}
                    >
                      <div className="text-center">
                        <div className="text-3xl font-bold text-gray-900 mb-1">{letter.georgian}</div>
                        <div className="text-sm text-purple-600 font-semibold">{letter.latin}</div>
                        <div className="text-xs text-gray-500">{letter.pronunciation}</div>
                      </div>
                    </button>
                  ))}
                </div>

                {selectedLetter && (
                  <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6">
                    {(() => {
                      const letter = georgianAlphabet.find(l => l.georgian === selectedLetter)
                      return letter ? (
                        <div>
                          <div className="flex items-center mb-4">
                            <div className="text-6xl font-bold text-purple-600 mr-6">{letter.georgian}</div>
                            <div>
                              <h3 className="text-2xl font-bold text-gray-900 mb-1">
                                {letter.latin.toUpperCase()} - {letter.pronunciation}
                              </h3>
                              <div className="flex items-center space-x-4">
                                <button
                                  onClick={() => {
                                    if ('speechSynthesis' in window) {
                                      const utterance = new SpeechSynthesisUtterance(letter.pronunciation)
                                      utterance.lang = 'ka-GE'
                                      utterance.rate = 0.7
                                      speechSynthesis.speak(utterance)
                                    }
                                  }}
                                  className="flex items-center bg-purple-600 text-white px-3 py-1 rounded-lg text-sm hover:bg-purple-700 transition-colors"
                                >
                                  <Volume2 className="h-4 w-4 mr-1" />
                                  Play Sound
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white/70 rounded-lg p-4">
                            <h4 className="font-semibold text-gray-900 mb-2">Example Word:</h4>
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="text-xl font-bold text-gray-900">{letter.example}</div>
                                <div className="text-gray-600">{letter.meaning}</div>
                              </div>
                              <button
                                onClick={() => {
                                  if ('speechSynthesis' in window) {
                                    const utterance = new SpeechSynthesisUtterance(letter.example.split(' ')[0])
                                    utterance.lang = 'ka-GE'
                                    utterance.rate = 0.7
                                    speechSynthesis.speak(utterance)
                                  }
                                }}
                                className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors"
                              >
                                <Play className="h-4 w-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      ) : null
                    })()}
                  </div>
                )}

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <Bot className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="font-semibold text-gray-700">AI Learning Tip</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Start with the most common letters: ა, ე, ი, ო, უ (vowels) and ბ, გ, დ, ვ, ზ (consonants). 
                    Practice writing each letter while saying its sound aloud for better retention.
                  </p>
                </div>
              </div>
            ) : (
              /* Alphabet Practice Cards */
              <div className="max-w-md mx-auto">
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 mb-6 min-h-[400px] flex flex-col justify-center items-center text-center shadow-lg">
                  <div className="text-8xl font-bold text-purple-600 mb-6">
                    {georgianAlphabet[selectedLetter ? georgianAlphabet.findIndex(l => l.georgian === selectedLetter) : 0].georgian}
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-2">
                    {georgianAlphabet[selectedLetter ? georgianAlphabet.findIndex(l => l.georgian === selectedLetter) : 0].latin.toUpperCase()}
                  </div>
                  <div className="text-lg text-gray-600 mb-4">
                    {georgianAlphabet[selectedLetter ? georgianAlphabet.findIndex(l => l.georgian === selectedLetter) : 0].pronunciation}
                  </div>
                  <div className="bg-white/70 rounded-lg p-4 mb-4 w-full">
                    <div className="text-lg font-semibold text-gray-900 mb-1">
                      {georgianAlphabet[selectedLetter ? georgianAlphabet.findIndex(l => l.georgian === selectedLetter) : 0].example}
                    </div>
                    <div className="text-gray-600">
                      {georgianAlphabet[selectedLetter ? georgianAlphabet.findIndex(l => l.georgian === selectedLetter) : 0].meaning}
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      const currentLetter = georgianAlphabet[selectedLetter ? georgianAlphabet.findIndex(l => l.georgian === selectedLetter) : 0]
                      playPronunciation(currentLetter.pronunciation)
                    }}
                    className="flex items-center bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                  >
                    <Volume2 className="h-4 w-4 mr-2" />
                    Play Audio
                  </button>
                </div>
                
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => {
                      const currentIndex = selectedLetter ? georgianAlphabet.findIndex(l => l.georgian === selectedLetter) : 0
                      const prevIndex = currentIndex === 0 ? georgianAlphabet.length - 1 : currentIndex - 1
                      setSelectedLetter(georgianAlphabet[prevIndex].georgian)
                    }}
                    className="flex items-center bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                  >
                    ← Previous
                  </button>
                  <div className="text-sm text-gray-500">
                    {(selectedLetter ? georgianAlphabet.findIndex(l => l.georgian === selectedLetter) : 0) + 1} of {georgianAlphabet.length}
                  </div>
                  <button
                    onClick={() => {
                      const currentIndex = selectedLetter ? georgianAlphabet.findIndex(l => l.georgian === selectedLetter) : 0
                      const nextIndex = (currentIndex + 1) % georgianAlphabet.length
                      setSelectedLetter(georgianAlphabet[nextIndex].georgian)
                    }}
                    className="flex items-center bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                  >
                    Next →
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Daily Challenge Section */}
        <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Zap className="h-6 w-6 text-orange-600 mr-3" />
              <h2 className="text-xl font-bold text-gray-900">Daily Challenge</h2>
            </div>
            <div className="flex items-center space-x-2">
              <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold">
                +50 XP
              </span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                2/3 Complete
              </span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            <div className="bg-white/70 rounded-lg p-4 relative">
              <div className="absolute top-2 right-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Word of the Day</h3>
              <div className="georgian-text text-2xl font-bold text-orange-600 mb-1">სტუმარი</div>
              <div className="text-gray-700 mb-1">Guest</div>
              <div className="text-sm text-gray-500 italic">stu-ma-ri</div>
              <button
                onClick={() => playPronunciation('სტუმარი')}
                className="mt-2 flex items-center bg-orange-100 text-orange-700 px-3 py-1 rounded text-sm hover:bg-orange-200 transition-colors"
              >
                <Volume2 className="h-3 w-3 mr-1" />
                Listen
              </button>
            </div>
            
            <div className="bg-white/70 rounded-lg p-4 relative">
              <div className="absolute top-2 right-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Quick Translation</h3>
              <p className="text-gray-700 mb-2">How do you say "Good morning"?</p>
              <div className="georgian-text text-lg font-semibold text-orange-600">დილა მშვიდობისა</div>
              <div className="text-sm text-gray-500 italic">dila mshvidobisa</div>
            </div>
            
            <div className="bg-white/70 rounded-lg p-4 relative">
              <div className="absolute top-2 right-2">
                <Target className="h-5 w-5 text-gray-400" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Pronunciation Challenge</h3>
              <p className="text-sm text-gray-600 mb-2">Record yourself saying:</p>
              <div className="georgian-text text-lg font-semibold text-orange-600 mb-1">ღვინო</div>
              <div className="text-sm text-gray-500 italic mb-2">ghvino (wine)</div>
              <button className="flex items-center bg-red-100 text-red-700 px-3 py-1 rounded text-sm hover:bg-red-200 transition-colors">
                <Volume2 className="h-3 w-3 mr-1" />
                Record
              </button>
            </div>
          </div>

          <div className="bg-white/50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-gray-900">Today's Progress</h3>
              <span className="text-sm text-gray-600">2 of 3 challenges</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full w-2/3 transition-all duration-300"></div>
            </div>
          </div>
        </div>

        {/* Progress Tracking */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center mb-6">
            <TrendingUp className="h-6 w-6 text-blue-600 mr-3" />
            <h2 className="text-xl font-bold text-gray-900">Learning Analytics</h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">{completedLessons.length}</div>
              <div className="text-sm text-gray-600">Lessons Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-1">{currentStreak}</div>
              <div className="text-sm text-gray-600">Day Streak</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-1">156</div>
              <div className="text-sm text-gray-600">Words Learned</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-1">42</div>
              <div className="text-sm text-gray-600">Hours Studied</div>
            </div>
          </div>
          
          <div className="mt-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4">
            <div className="flex items-center mb-2">
              <Bot className="h-5 w-5 text-blue-600 mr-2" />
              <span className="font-semibold text-gray-700">AI Recommendation</span>
            </div>
            <p className="text-sm text-gray-600">
              You're doing great with greetings and food vocabulary! Try focusing on numbers and directions next. 
              Your learning pattern shows you retain information best in 15-minute sessions.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
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
                <div className="mt-2 flex items-center text-xs text-purple-600">
                  <Users className="h-3 w-3 mr-1" />
                  <span>Join 200+ expats learning Georgian</span>
                </div>
              </div>
              <div className="bg-white/50 rounded-lg p-3">
                <h4 className="font-semibold text-gray-900 mb-1">Georgian Language Schools</h4>
                <p className="text-sm text-gray-600">TLG, International House, and university programs</p>
                <div className="mt-2 flex items-center text-xs text-purple-600">
                  <BookOpen className="h-3 w-3 mr-1" />
                  <span>Professional instruction available</span>
                </div>
              </div>
              <div className="bg-white/50 rounded-lg p-3">
                <h4 className="font-semibold text-gray-900 mb-1">Mobile Apps</h4>
                <p className="text-sm text-gray-600">Practice on-the-go with Georgian learning apps</p>
                <div className="mt-2 flex items-center text-xs text-purple-600">
                  <Zap className="h-3 w-3 mr-1" />
                  <span>Sync progress across devices</span>
                </div>
              </div>
              <div className="bg-white/50 rounded-lg p-3">
                <h4 className="font-semibold text-gray-900 mb-1">YouTube Channels</h4>
                <p className="text-sm text-gray-600">Free video lessons and pronunciation guides</p>
                <div className="mt-2 flex items-center text-xs text-purple-600">
                  <Video className="h-3 w-3 mr-1" />
                  <span>Native speaker content</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Learning Section */}
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center mb-4 p-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full">
              <Video className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Video Pronunciation Lessons
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Watch native speakers demonstrate proper Georgian pronunciation and learn through visual examples
            </p>
          </div>
          <VideoContent 
            category="language" 
            title="Georgian Language Video Lessons"
            description="Master pronunciation with native speaker guidance"
          />
        </div>
      </div>
    </div>
  )
}