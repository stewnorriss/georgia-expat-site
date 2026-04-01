export interface Phrase {
  georgian: string
  english: string
  pronunciation: string
  difficulty: 'easy' | 'medium' | 'hard'
}

export interface Lesson {
  lesson: number
  title: string
  georgian: string
  english: string
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  category: string
  duration: string
  phrases: Phrase[]
  culturalNotes: string
}

export interface AlphabetLetter {
  georgian: string
  latin: string
  pronunciation: string
  example: string
  meaning: string
}

export interface QuizQuestion {
  question: string
  options: string[]
  correct: number
}

export interface Flashcard {
  georgian: string
  english: string
  pronunciation: string
  category: string
}

export interface ConversationLine {
  speaker: string
  georgian: string
  english: string
  pronunciation: string
}

export interface Conversation {
  id: number
  title: string
  difficulty: string
  scenario: string
  dialogue: ConversationLine[]
}

export const georgianAlphabet: AlphabetLetter[] = [
  { georgian: 'ა', latin: 'a', pronunciation: 'ah', example: 'ანა (Ana)', meaning: 'Anna' },
  { georgian: 'ბ', latin: 'b', pronunciation: 'bah', example: 'ბავშვი (bavshvi)', meaning: 'child' },
  { georgian: 'გ', latin: 'g', pronunciation: 'gah', example: 'გული (guli)', meaning: 'heart' },
  { georgian: 'დ', latin: 'd', pronunciation: 'dah', example: 'დედა (deda)', meaning: 'mother' },
  { georgian: 'ე', latin: 'e', pronunciation: 'eh', example: 'ერთი (erti)', meaning: 'one' },
  { georgian: 'ვ', latin: 'v', pronunciation: 'vah', example: 'ვარდი (vardi)', meaning: 'rose' },
  { georgian: 'ზ', latin: 'z', pronunciation: 'zah', example: 'ზღვა (zghva)', meaning: 'sea' },
  { georgian: 'თ', latin: 't\'', pronunciation: 'tah (aspirated)', example: 'თოვლი (tovli)', meaning: 'snow' },
  { georgian: 'ი', latin: 'i', pronunciation: 'ee', example: 'ისტორია (istoria)', meaning: 'history' },
  { georgian: 'კ', latin: 'k\'', pronunciation: 'kah (ejective)', example: 'კაცი (katsi)', meaning: 'man' },
  { georgian: 'ლ', latin: 'l', pronunciation: 'lah', example: 'ლამაზი (lamazi)', meaning: 'beautiful' },
  { georgian: 'მ', latin: 'm', pronunciation: 'mah', example: 'მამა (mama)', meaning: 'father' },
  { georgian: 'ნ', latin: 'n', pronunciation: 'nah', example: 'ნაცარი (natsari)', meaning: 'ash' },
  { georgian: 'ო', latin: 'o', pronunciation: 'oh', example: 'ოჯახი (ojakhi)', meaning: 'family' },
  { georgian: 'პ', latin: 'p\'', pronunciation: 'pah (ejective)', example: 'პური (puri)', meaning: 'bread' },
  { georgian: 'ჟ', latin: 'zh', pronunciation: 'zhah', example: 'ჟამი (zhami)', meaning: 'time' },
  { georgian: 'რ', latin: 'r', pronunciation: 'rah (rolled)', example: 'რძე (rdze)', meaning: 'milk' },
  { georgian: 'ს', latin: 's', pronunciation: 'sah', example: 'სახლი (sakhli)', meaning: 'house' },
  { georgian: 'ტ', latin: 't\'', pronunciation: 'tah (ejective)', example: 'ტყე (tke)', meaning: 'forest' },
  { georgian: 'უ', latin: 'u', pronunciation: 'oo', example: 'უნივერსიტეტი', meaning: 'university' },
  { georgian: 'ფ', latin: 'p', pronunciation: 'pah (aspirated)', example: 'ფული (puli)', meaning: 'money' },
  { georgian: 'ქ', latin: 'k', pronunciation: 'kah (aspirated)', example: 'ქალაქი (kalaki)', meaning: 'city' },
  { georgian: 'ღ', latin: 'gh', pronunciation: 'ghah (uvular)', example: 'ღამე (ghame)', meaning: 'night' },
  { georgian: 'ყ', latin: 'q\'', pronunciation: 'qah (ejective uvular)', example: 'ყველა (qvela)', meaning: 'everyone' },
  { georgian: 'შ', latin: 'sh', pronunciation: 'shah', example: 'შავი (shavi)', meaning: 'black' },
  { georgian: 'ჩ', latin: 'ch', pronunciation: 'chah', example: 'ჩაი (chai)', meaning: 'tea' },
  { georgian: 'ც', latin: 'ts', pronunciation: 'tsah', example: 'ცხენი (tskheni)', meaning: 'horse' },
  { georgian: 'ძ', latin: 'dz', pronunciation: 'dzah', example: 'ძაღლი (dzaghli)', meaning: 'dog' },
  { georgian: 'წ', latin: 'ts\'', pronunciation: 'tsah (ejective)', example: 'წყალი (tskali)', meaning: 'water' },
  { georgian: 'ჭ', latin: 'ch\'', pronunciation: 'chah (ejective)', example: 'ჭამა (chama)', meaning: 'eating' },
  { georgian: 'ხ', latin: 'kh', pronunciation: 'khah (velar)', example: 'ხაჭაპური (khachapuri)', meaning: 'cheese bread' },
  { georgian: 'ჯ', latin: 'j', pronunciation: 'jah', example: 'ჯანმრთელობა', meaning: 'health' },
  { georgian: 'ჰ', latin: 'h', pronunciation: 'hah', example: 'ჰაერი (haeri)', meaning: 'air' },
]

export const lessons: Lesson[] = [
  {
    lesson: 1, title: 'Basic Greetings', georgian: 'გამარჯობა', english: 'Hello',
    difficulty: 'Beginner', category: 'Greetings', duration: '15 min',
    phrases: [
      { georgian: 'გამარჯობა', english: 'Hello', pronunciation: 'ga-mar-jo-ba', difficulty: 'easy' },
      { georgian: 'მე ვარ...', english: 'I am...', pronunciation: 'me var...', difficulty: 'easy' },
      { georgian: 'სახელი მქვია...', english: 'My name is...', pronunciation: 'sa-khe-li mk-vi-a', difficulty: 'medium' },
      { georgian: 'ნახვამდის', english: 'Goodbye', pronunciation: 'nakh-vam-dis', difficulty: 'easy' },
      { georgian: 'მადლობა', english: 'Thank you', pronunciation: 'mad-lo-ba', difficulty: 'easy' },
    ],
    culturalNotes: 'Georgians greet with enthusiasm. A firm handshake and eye contact show respect.',
  },
  {
    lesson: 2, title: 'Numbers & Counting', georgian: 'ერთი', english: 'One',
    difficulty: 'Beginner', category: 'Numbers', duration: '20 min',
    phrases: [
      { georgian: 'ერთი', english: 'One', pronunciation: 'er-ti', difficulty: 'easy' },
      { georgian: 'ორი', english: 'Two', pronunciation: 'o-ri', difficulty: 'easy' },
      { georgian: 'სამი', english: 'Three', pronunciation: 'sa-mi', difficulty: 'easy' },
      { georgian: 'ოთხი', english: 'Four', pronunciation: 'ot-khi', difficulty: 'easy' },
      { georgian: 'ხუთი', english: 'Five', pronunciation: 'khu-ti', difficulty: 'easy' },
      { georgian: 'ათი', english: 'Ten', pronunciation: 'a-ti', difficulty: 'medium' },
      { georgian: 'ასი', english: 'Hundred', pronunciation: 'a-si', difficulty: 'medium' },
    ],
    culturalNotes: 'Georgian numbers are essential for shopping, ordering food, and daily transactions.',
  },
  {
    lesson: 3, title: 'Food & Dining', georgian: 'საჭმელი', english: 'Food',
    difficulty: 'Beginner', category: 'Food', duration: '25 min',
    phrases: [
      { georgian: 'წყალი', english: 'Water', pronunciation: 'ts-ka-li', difficulty: 'easy' },
      { georgian: 'ღვინო', english: 'Wine', pronunciation: 'gh-vi-no', difficulty: 'easy' },
      { georgian: 'ხაჭაპური', english: 'Khachapuri', pronunciation: 'kha-cha-pu-ri', difficulty: 'medium' },
      { georgian: 'ხინკალი', english: 'Khinkali (dumplings)', pronunciation: 'khin-ka-li', difficulty: 'medium' },
      { georgian: 'მე მინდა...', english: 'I want...', pronunciation: 'me min-da', difficulty: 'medium' },
      { georgian: 'ანგარიში, თუ შეიძლება', english: 'The bill, please', pronunciation: 'an-ga-ri-shi, tu shei-dzle-ba', difficulty: 'hard' },
    ],
    culturalNotes: 'Georgian cuisine is central to culture. Learning food terms helps you enjoy authentic dining.',
  },
  {
    lesson: 4, title: 'Directions & Transport', georgian: 'სად არის...?', english: 'Where is...?',
    difficulty: 'Beginner', category: 'Navigation', duration: '18 min',
    phrases: [
      { georgian: 'სად არის...?', english: 'Where is...?', pronunciation: 'sad a-ris?', difficulty: 'medium' },
      { georgian: 'მარჯვნივ', english: 'Right', pronunciation: 'mar-jv-niv', difficulty: 'medium' },
      { georgian: 'მარცხნივ', english: 'Left', pronunciation: 'mar-ts-kh-niv', difficulty: 'medium' },
      { georgian: 'პირდაპირ', english: 'Straight', pronunciation: 'pir-da-pir', difficulty: 'medium' },
      { georgian: 'მეტრო', english: 'Metro', pronunciation: 'met-ro', difficulty: 'easy' },
      { georgian: 'ტაქსი', english: 'Taxi', pronunciation: 'tak-si', difficulty: 'easy' },
    ],
    culturalNotes: 'Locals are very helpful with directions when you try Georgian.',
  },
  {
    lesson: 5, title: 'Shopping & Money', georgian: 'რამდენი ღირს?', english: 'How much?',
    difficulty: 'Beginner', category: 'Shopping', duration: '22 min',
    phrases: [
      { georgian: 'რამდენი ღირს?', english: 'How much does it cost?', pronunciation: 'ram-de-ni ghirs?', difficulty: 'medium' },
      { georgian: 'ძვირია', english: "It's expensive", pronunciation: 'dzvi-ri-a', difficulty: 'medium' },
      { georgian: 'იაფია', english: "It's cheap", pronunciation: 'ia-fi-a', difficulty: 'medium' },
      { georgian: 'ლარი', english: 'Lari (currency)', pronunciation: 'la-ri', difficulty: 'easy' },
      { georgian: 'ბარათი', english: 'Card', pronunciation: 'ba-ra-ti', difficulty: 'easy' },
    ],
    culturalNotes: 'Bargaining is common in markets. Speaking Georgian often gets better prices.',
  },
  {
    lesson: 6, title: 'Time & Dates', georgian: 'რა დროა?', english: 'What time is it?',
    difficulty: 'Intermediate', category: 'Time', duration: '30 min',
    phrases: [
      { georgian: 'რა დროა?', english: 'What time is it?', pronunciation: 'ra dro-a?', difficulty: 'medium' },
      { georgian: 'დღეს', english: 'Today', pronunciation: 'dghes', difficulty: 'easy' },
      { georgian: 'ხვალ', english: 'Tomorrow', pronunciation: 'khval', difficulty: 'easy' },
      { georgian: 'გუშინ', english: 'Yesterday', pronunciation: 'gu-shin', difficulty: 'easy' },
      { georgian: 'ორშაბათი', english: 'Monday', pronunciation: 'or-sha-ba-ti', difficulty: 'hard' },
    ],
    culturalNotes: 'Georgians have a relaxed attitude toward time, but learning time expressions shows respect.',
  },
  {
    lesson: 7, title: 'Family & Relationships', georgian: 'ოჯახი', english: 'Family',
    difficulty: 'Intermediate', category: 'Family', duration: '25 min',
    phrases: [
      { georgian: 'დედა', english: 'Mother', pronunciation: 'de-da', difficulty: 'easy' },
      { georgian: 'მამა', english: 'Father', pronunciation: 'ma-ma', difficulty: 'easy' },
      { georgian: 'ძმა', english: 'Brother', pronunciation: 'dzma', difficulty: 'easy' },
      { georgian: 'და', english: 'Sister', pronunciation: 'da', difficulty: 'easy' },
      { georgian: 'მეგობარი', english: 'Friend', pronunciation: 'me-go-ba-ri', difficulty: 'medium' },
    ],
    culturalNotes: 'Family is extremely important in Georgian culture.',
  },
  {
    lesson: 8, title: 'Emotions & Feelings', georgian: 'როგორ ხარ?', english: 'How are you?',
    difficulty: 'Intermediate', category: 'Emotions', duration: '28 min',
    phrases: [
      { georgian: 'როგორ ხარ?', english: 'How are you?', pronunciation: 'ro-gor khar?', difficulty: 'medium' },
      { georgian: 'კარგად ვარ', english: "I'm fine", pronunciation: 'kar-gad var', difficulty: 'medium' },
      { georgian: 'მშია', english: "I'm hungry", pronunciation: 'm-shi-a', difficulty: 'medium' },
      { georgian: 'დაღლილი ვარ', english: "I'm tired", pronunciation: 'dagh-li-li var', difficulty: 'hard' },
    ],
    culturalNotes: 'Georgians are emotionally expressive. Sharing feelings builds strong friendships.',
  },
  {
    lesson: 9, title: 'Medical & Health', georgian: 'ავად ვარ', english: 'I am sick',
    difficulty: 'Intermediate', category: 'Health', duration: '35 min',
    phrases: [
      { georgian: 'ავად ვარ', english: 'I am sick', pronunciation: 'a-vad var', difficulty: 'medium' },
      { georgian: 'ექიმი', english: 'Doctor', pronunciation: 'e-ki-mi', difficulty: 'medium' },
      { georgian: 'საავადმყოფო', english: 'Hospital', pronunciation: 'sa-a-vad-m-ko-po', difficulty: 'hard' },
      { georgian: 'წამალი', english: 'Medicine', pronunciation: 'tsa-ma-li', difficulty: 'medium' },
      { georgian: 'დახმარება', english: 'Help', pronunciation: 'dakh-ma-re-ba', difficulty: 'medium' },
    ],
    culturalNotes: 'Healthcare vocabulary is essential for emergencies.',
  },
  {
    lesson: 10, title: 'Housing & Apartments', georgian: 'ბინა', english: 'Apartment',
    difficulty: 'Intermediate', category: 'Housing', duration: '30 min',
    phrases: [
      { georgian: 'ბინა', english: 'Apartment', pronunciation: 'bi-na', difficulty: 'easy' },
      { georgian: 'ქირა', english: 'Rent', pronunciation: 'ki-ra', difficulty: 'easy' },
      { georgian: 'ოთახი', english: 'Room', pronunciation: 'o-ta-khi', difficulty: 'easy' },
      { georgian: 'სამზარეულო', english: 'Kitchen', pronunciation: 'sam-za-re-u-lo', difficulty: 'hard' },
      { georgian: 'ინტერნეტი შედის?', english: 'Is internet included?', pronunciation: 'in-ter-ne-ti she-dis?', difficulty: 'hard' },
    ],
    culturalNotes: 'Most rentals in Tbilisi are unfurnished. Always ask about utilities.',
  },
  {
    lesson: 11, title: 'Wine & Toasting', georgian: 'გაუმარჯოს!', english: 'Cheers!',
    difficulty: 'Advanced', category: 'Culture', duration: '40 min',
    phrases: [
      { georgian: 'ღვინო', english: 'Wine', pronunciation: 'gh-vi-no', difficulty: 'easy' },
      { georgian: 'სუფრა', english: 'Georgian feast', pronunciation: 'sup-ra', difficulty: 'medium' },
      { georgian: 'ტამადა', english: 'Toastmaster', pronunciation: 'ta-ma-da', difficulty: 'medium' },
      { georgian: 'გაუმარჯოს!', english: 'Cheers!', pronunciation: 'gau-mar-jos!', difficulty: 'medium' },
      { georgian: 'საფერავი', english: 'Saperavi (red wine)', pronunciation: 'sa-pe-ra-vi', difficulty: 'medium' },
    ],
    culturalNotes: 'Georgian wine culture is 8000 years old. Toasting is an art form with specific rules.',
  },
  {
    lesson: 12, title: 'Advanced Conversations', georgian: 'რას ფიქრობ?', english: 'What do you think?',
    difficulty: 'Advanced', category: 'Conversation', duration: '45 min',
    phrases: [
      { georgian: 'რას ფიქრობ?', english: 'What do you think?', pronunciation: 'ras pik-rob?', difficulty: 'hard' },
      { georgian: 'მესმის', english: 'I understand', pronunciation: 'mes-mis', difficulty: 'medium' },
      { georgian: 'არ მესმის', english: "I don't understand", pronunciation: 'ar mes-mis', difficulty: 'medium' },
      { georgian: 'შეიძლება განმეორდეს?', english: 'Can you repeat?', pronunciation: 'shei-dzle-ba gan-me-or-des?', difficulty: 'hard' },
    ],
    culturalNotes: 'Advanced conversations show deep respect for Georgian culture.',
  },
]

export const quizQuestions: QuizQuestion[] = [
  { question: "How do you say 'Hello' in Georgian?", options: ['გამარჯობა', 'ნახვამდის', 'მადლობა', 'კარგად'], correct: 0 },
  { question: "What does 'მადლობა' mean?", options: ['Goodbye', 'Hello', 'Thank you', 'Please'], correct: 2 },
  { question: "How do you ask 'How much?' in Georgian?", options: ['რა დროა?', 'რამდენი ღირს?', 'სად არის?', 'როგორ ხარ?'], correct: 1 },
  { question: "What is the Georgian word for 'water'?", options: ['ღვინო', 'წყალი', 'ჩაი', 'რძე'], correct: 1 },
  { question: "How do you say 'I don't understand'?", options: ['მესმის', 'არ მესმის', 'ვთანხმდები', 'საინტერესოა'], correct: 1 },
  { question: "What does 'ბინა' mean?", options: ['House', 'Apartment', 'Room', 'Kitchen'], correct: 1 },
  { question: "What is 'სუფრა'?", options: ['Wine', 'Georgian feast', 'Dance', 'Song'], correct: 1 },
  { question: "How do you say 'Mountain'?", options: ['ტყე', 'მდინარე', 'მთა', 'ტბა'], correct: 2 },
  { question: "What does 'გაუმარჯოს!' mean?", options: ['Hello!', 'Goodbye!', 'Cheers!', 'Thank you!'], correct: 2 },
  { question: "How do you say 'Goodbye'?", options: ['გამარჯობა', 'ნახვამდის', 'მადლობა', 'ბოდიში'], correct: 1 },
]

export const flashcards: Flashcard[] = [
  { georgian: 'გამარჯობა', english: 'Hello', pronunciation: 'ga-mar-jo-ba', category: 'Greetings' },
  { georgian: 'მადლობა', english: 'Thank you', pronunciation: 'mad-lo-ba', category: 'Greetings' },
  { georgian: 'ნახვამდის', english: 'Goodbye', pronunciation: 'nakh-vam-dis', category: 'Greetings' },
  { georgian: 'წყალი', english: 'Water', pronunciation: 'ts-ka-li', category: 'Food' },
  { georgian: 'ღვინო', english: 'Wine', pronunciation: 'gh-vi-no', category: 'Food' },
  { georgian: 'ხაჭაპური', english: 'Khachapuri', pronunciation: 'kha-cha-pu-ri', category: 'Food' },
  { georgian: 'რამდენი ღირს?', english: 'How much?', pronunciation: 'ram-de-ni ghirs?', category: 'Shopping' },
  { georgian: 'სად არის...?', english: 'Where is...?', pronunciation: 'sad a-ris?', category: 'Navigation' },
  { georgian: 'როგორ ხარ?', english: 'How are you?', pronunciation: 'ro-gor khar?', category: 'Conversation' },
  { georgian: 'ბინა', english: 'Apartment', pronunciation: 'bi-na', category: 'Housing' },
  { georgian: 'მეტრო', english: 'Metro', pronunciation: 'met-ro', category: 'Transport' },
  { georgian: 'სუფრა', english: 'Georgian feast', pronunciation: 'sup-ra', category: 'Culture' },
  { georgian: 'მთა', english: 'Mountain', pronunciation: 'm-ta', category: 'Nature' },
  { georgian: 'გაუმარჯოს!', english: 'Cheers!', pronunciation: 'gau-mar-jos!', category: 'Culture' },
]

export const conversations: Conversation[] = [
  {
    id: 1, title: 'At a Restaurant', difficulty: 'Beginner',
    scenario: "You're ordering food at a traditional Georgian restaurant",
    dialogue: [
      { speaker: 'Waiter', georgian: 'გამარჯობა! რას შეუკვეთავთ?', english: 'Hello! What would you like to order?', pronunciation: 'gamarjoba! ras sheuketavt?' },
      { speaker: 'You', georgian: 'მე მინდა ხაჭაპური', english: 'I want khachapuri', pronunciation: 'me minda khachapuri' },
      { speaker: 'Waiter', georgian: 'რომელი ხაჭაპური?', english: 'Which khachapuri?', pronunciation: 'romeli khachapuri?' },
      { speaker: 'You', georgian: 'აჭარული, თუ შეიძლება', english: 'Adjarian, please', pronunciation: 'acharuli, tu sheidzleba' },
    ],
  },
  {
    id: 2, title: 'Asking for Directions', difficulty: 'Beginner',
    scenario: "You need to find the metro station",
    dialogue: [
      { speaker: 'You', georgian: 'ბოდიში, სად არის მეტროს სადგური?', english: 'Excuse me, where is the metro station?', pronunciation: 'bodishi, sad aris metros sadguri?' },
      { speaker: 'Local', georgian: 'პირდაპირ წადით და მარჯვნივ მიუხვიეთ', english: 'Go straight and turn right', pronunciation: 'pirdapir tsadit da marjvniv miukhviet' },
      { speaker: 'You', georgian: 'მადლობა!', english: 'Thank you!', pronunciation: 'madloba!' },
      { speaker: 'Local', georgian: 'არაფრის!', english: "You're welcome!", pronunciation: 'arapris!' },
    ],
  },
  {
    id: 3, title: 'At the Market', difficulty: 'Intermediate',
    scenario: "Buying produce at Dezerter Bazaar",
    dialogue: [
      { speaker: 'You', georgian: 'რამდენი ღირს ეს ყურძენი?', english: 'How much are these grapes?', pronunciation: 'ramdeni ghirs es qurdzeni?' },
      { speaker: 'Vendor', georgian: 'სამი ლარი კილოგრამი', english: 'Three lari per kilogram', pronunciation: 'sami lari kilogrami' },
      { speaker: 'You', georgian: 'ძალიან ძვირია. ორი ლარი?', english: "That's expensive. Two lari?", pronunciation: 'dzalian dzviria. ori lari?' },
      { speaker: 'Vendor', georgian: 'კარგი, ორნახევარი', english: 'Okay, two and a half', pronunciation: 'kargi, ornakhevari' },
    ],
  },
]
