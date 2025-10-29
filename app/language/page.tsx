'use client'

import { useState } from 'react'
import { MessageCircle, Volume2, BookOpen, Users, Play, Video, Clock, Award, Bot, Sparkles, TrendingUp, CheckCircle, RotateCcw, Target, Brain, Zap, Globe } from 'lucide-react'

export default function LanguagePage() {
  const [selectedLesson, setSelectedLesson] = useState<number | null>(null)
  const [completedLessons, setCompletedLessons] = useState<number[]>([])
  const [currentStreak] = useState(7)
  const [selectedDifficulty, setSelectedDifficulty] = useState('all')
  const [showAlphabet, setShowAlphabet] = useState(false)
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null)

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
    { id: 'all', name: 'All Levels', count: 20 },
    { id: 'Beginner', name: 'Beginner', count: 8 },
    { id: 'Intermediate', name: 'Intermediate', count: 8 },
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

        {/* Georgian Alphabet Section */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <BookOpen className="h-8 w-8 text-purple-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Georgian Alphabet</h2>
            </div>
            <button
              onClick={() => setShowAlphabet(!showAlphabet)}
              className="bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              {showAlphabet ? 'Hide Alphabet' : 'Learn Alphabet'}
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

          {showAlphabet && (
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
          )}
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