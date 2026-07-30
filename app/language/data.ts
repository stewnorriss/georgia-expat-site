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
  { georgian: 'თ', latin: "t'", pronunciation: 'tah (aspirated)', example: 'თოვლი (tovli)', meaning: 'snow' },
  { georgian: 'ი', latin: 'i', pronunciation: 'ee', example: 'ისტორია (istoria)', meaning: 'history' },
  { georgian: 'კ', latin: "k'", pronunciation: 'kah (ejective)', example: 'კაცი (katsi)', meaning: 'man' },
  { georgian: 'ლ', latin: 'l', pronunciation: 'lah', example: 'ლამაზი (lamazi)', meaning: 'beautiful' },
  { georgian: 'მ', latin: 'm', pronunciation: 'mah', example: 'მამა (mama)', meaning: 'father' },
  { georgian: 'ნ', latin: 'n', pronunciation: 'nah', example: 'ნაცარი (natsari)', meaning: 'ash' },
  { georgian: 'ო', latin: 'o', pronunciation: 'oh', example: 'ოჯახი (ojakhi)', meaning: 'family' },
  { georgian: 'პ', latin: "p'", pronunciation: 'pah (ejective)', example: 'პური (puri)', meaning: 'bread' },
  { georgian: 'ჟ', latin: 'zh', pronunciation: 'zhah', example: 'ჟამი (zhami)', meaning: 'time' },
  { georgian: 'რ', latin: 'r', pronunciation: 'rah (rolled)', example: 'რძე (rdze)', meaning: 'milk' },
  { georgian: 'ს', latin: 's', pronunciation: 'sah', example: 'სახლი (sakhli)', meaning: 'house' },
  { georgian: 'ტ', latin: "t'", pronunciation: 'tah (ejective)', example: 'ტყე (tke)', meaning: 'forest' },
  { georgian: 'უ', latin: 'u', pronunciation: 'oo', example: 'უნივერსიტეტი', meaning: 'university' },
  { georgian: 'ფ', latin: 'p', pronunciation: 'pah (aspirated)', example: 'ფული (puli)', meaning: 'money' },
  { georgian: 'ქ', latin: 'k', pronunciation: 'kah (aspirated)', example: 'ქალაქი (kalaki)', meaning: 'city' },
  { georgian: 'ღ', latin: 'gh', pronunciation: 'ghah (uvular)', example: 'ღამე (ghame)', meaning: 'night' },
  { georgian: 'ყ', latin: "q'", pronunciation: 'qah (ejective uvular)', example: 'ყველა (qvela)', meaning: 'everyone' },
  { georgian: 'შ', latin: 'sh', pronunciation: 'shah', example: 'შავი (shavi)', meaning: 'black' },
  { georgian: 'ჩ', latin: 'ch', pronunciation: 'chah', example: 'ჩაი (chai)', meaning: 'tea' },
  { georgian: 'ც', latin: 'ts', pronunciation: 'tsah', example: 'ცხენი (tskheni)', meaning: 'horse' },
  { georgian: 'ძ', latin: 'dz', pronunciation: 'dzah', example: 'ძაღლი (dzaghli)', meaning: 'dog' },
  { georgian: 'წ', latin: "ts'", pronunciation: 'tsah (ejective)', example: 'წყალი (tskali)', meaning: 'water' },
  { georgian: 'ჭ', latin: "ch'", pronunciation: 'chah (ejective)', example: 'ჭამა (chama)', meaning: 'eating' },
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
      { georgian: 'არაფრის', english: "You're welcome", pronunciation: 'a-ra-pris', difficulty: 'easy' },
      { georgian: 'ბოდიში', english: 'Excuse me / Sorry', pronunciation: 'bo-di-shi', difficulty: 'easy' },
    ],
    culturalNotes: 'Georgians greet with enthusiasm. A firm handshake and eye contact show respect. Friends often greet with a kiss on each cheek.',
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
      { georgian: 'ექვსი', english: 'Six', pronunciation: 'ek-vsi', difficulty: 'easy' },
      { georgian: 'შვიდი', english: 'Seven', pronunciation: 'shvi-di', difficulty: 'easy' },
      { georgian: 'რვა', english: 'Eight', pronunciation: 'r-va', difficulty: 'easy' },
      { georgian: 'ცხრა', english: 'Nine', pronunciation: 'tskh-ra', difficulty: 'medium' },
      { georgian: 'ათი', english: 'Ten', pronunciation: 'a-ti', difficulty: 'easy' },
      { georgian: 'ოცი', english: 'Twenty', pronunciation: 'o-tsi', difficulty: 'medium' },
      { georgian: 'ასი', english: 'Hundred', pronunciation: 'a-si', difficulty: 'medium' },
    ],
    culturalNotes: 'Georgian uses a base-20 number system. 30 is "twenty-and-ten", 50 is "two-twenties-and-ten". Essential for shopping and daily transactions.',
  },
  {
    lesson: 3, title: 'Food & Dining', georgian: 'საჭმელი', english: 'Food',
    difficulty: 'Beginner', category: 'Food', duration: '25 min',
    phrases: [
      { georgian: 'წყალი', english: 'Water', pronunciation: 'ts-ka-li', difficulty: 'easy' },
      { georgian: 'ღვინო', english: 'Wine', pronunciation: 'gh-vi-no', difficulty: 'easy' },
      { georgian: 'ლუდი', english: 'Beer', pronunciation: 'lu-di', difficulty: 'easy' },
      { georgian: 'ხაჭაპური', english: 'Khachapuri (cheese bread)', pronunciation: 'kha-cha-pu-ri', difficulty: 'medium' },
      { georgian: 'ხინკალი', english: 'Khinkali (dumplings)', pronunciation: 'khin-ka-li', difficulty: 'medium' },
      { georgian: 'მწვადი', english: 'Barbecue/Shashlik', pronunciation: 'mts-va-di', difficulty: 'medium' },
      { georgian: 'სალათი', english: 'Salad', pronunciation: 'sa-la-ti', difficulty: 'easy' },
      { georgian: 'პური', english: 'Bread', pronunciation: 'pu-ri', difficulty: 'easy' },
      { georgian: 'მე მინდა...', english: 'I want...', pronunciation: 'me min-da', difficulty: 'medium' },
      { georgian: 'ანგარიში, თუ შეიძლება', english: 'The bill, please', pronunciation: 'an-ga-ri-shi, tu shei-dzle-ba', difficulty: 'hard' },
      { georgian: 'ძალიან გემრიელია', english: 'Very delicious', pronunciation: 'dza-li-an gem-ri-e-li-a', difficulty: 'hard' },
    ],
    culturalNotes: 'Georgian cuisine is central to culture. Never eat khinkali with a fork — use your hands and drink the broth first. Leaving one on the plate means you are full.',
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
      { georgian: 'ავტობუსი', english: 'Bus', pronunciation: 'av-to-bu-si', difficulty: 'easy' },
      { georgian: 'გაჩერება', english: 'Stop/Station', pronunciation: 'ga-che-re-ba', difficulty: 'medium' },
      { georgian: 'ახლოს არის?', english: 'Is it nearby?', pronunciation: 'akh-los a-ris?', difficulty: 'medium' },
      { georgian: 'შორს არის?', english: 'Is it far?', pronunciation: 'shors a-ris?', difficulty: 'medium' },
    ],
    culturalNotes: 'Locals are very helpful with directions when you try Georgian. Tbilisi metro announcements are in Georgian and English.',
  },
  {
    lesson: 5, title: 'Shopping & Money', georgian: 'რამდენი ღირს?', english: 'How much?',
    difficulty: 'Beginner', category: 'Shopping', duration: '22 min',
    phrases: [
      { georgian: 'რამდენი ღირს?', english: 'How much does it cost?', pronunciation: 'ram-de-ni ghirs?', difficulty: 'medium' },
      { georgian: 'ძვირია', english: "It's expensive", pronunciation: 'dzvi-ri-a', difficulty: 'medium' },
      { georgian: 'იაფია', english: "It's cheap", pronunciation: 'ia-fi-a', difficulty: 'medium' },
      { georgian: 'ლარი', english: 'Lari (currency)', pronunciation: 'la-ri', difficulty: 'easy' },
      { georgian: 'თეთრი', english: 'Tetri (cents)', pronunciation: 'tet-ri', difficulty: 'easy' },
      { georgian: 'ბარათი', english: 'Card', pronunciation: 'ba-ra-ti', difficulty: 'easy' },
      { georgian: 'ნაღდი ფული', english: 'Cash', pronunciation: 'nagh-di pu-li', difficulty: 'medium' },
      { georgian: 'ფასდაკლება', english: 'Discount', pronunciation: 'pas-dak-le-ba', difficulty: 'hard' },
    ],
    culturalNotes: 'Bargaining is common in markets like Dezerter Bazaar. Speaking Georgian often gets better prices. Most shops accept card payment.',
  },
  {
    lesson: 6, title: 'Time & Days', georgian: 'რა დროა?', english: 'What time is it?',
    difficulty: 'Intermediate', category: 'Time', duration: '30 min',
    phrases: [
      { georgian: 'რა დროა?', english: 'What time is it?', pronunciation: 'ra dro-a?', difficulty: 'medium' },
      { georgian: 'დღეს', english: 'Today', pronunciation: 'dghes', difficulty: 'easy' },
      { georgian: 'ხვალ', english: 'Tomorrow', pronunciation: 'khval', difficulty: 'easy' },
      { georgian: 'გუშინ', english: 'Yesterday', pronunciation: 'gu-shin', difficulty: 'easy' },
      { georgian: 'ორშაბათი', english: 'Monday', pronunciation: 'or-sha-ba-ti', difficulty: 'medium' },
      { georgian: 'სამშაბათი', english: 'Tuesday', pronunciation: 'sam-sha-ba-ti', difficulty: 'medium' },
      { georgian: 'ოთხშაბათი', english: 'Wednesday', pronunciation: 'otkh-sha-ba-ti', difficulty: 'medium' },
      { georgian: 'ხუთშაბათი', english: 'Thursday', pronunciation: 'khut-sha-ba-ti', difficulty: 'medium' },
      { georgian: 'პარასკევი', english: 'Friday', pronunciation: 'pa-ras-ke-vi', difficulty: 'medium' },
      { georgian: 'შაბათი', english: 'Saturday', pronunciation: 'sha-ba-ti', difficulty: 'easy' },
      { georgian: 'კვირა', english: 'Sunday', pronunciation: 'kvi-ra', difficulty: 'easy' },
    ],
    culturalNotes: 'Georgian days of the week are numbered (Monday = "second day", Tuesday = "third day" etc). Sunday (კვირა) means "week".',
  },
  {
    lesson: 7, title: 'Family & Relationships', georgian: 'ოჯახი', english: 'Family',
    difficulty: 'Intermediate', category: 'Family', duration: '25 min',
    phrases: [
      { georgian: 'დედა', english: 'Mother', pronunciation: 'de-da', difficulty: 'easy' },
      { georgian: 'მამა', english: 'Father', pronunciation: 'ma-ma', difficulty: 'easy' },
      { georgian: 'ძმა', english: 'Brother', pronunciation: 'dzma', difficulty: 'easy' },
      { georgian: 'და', english: 'Sister', pronunciation: 'da', difficulty: 'easy' },
      { georgian: 'შვილი', english: 'Child', pronunciation: 'shvi-li', difficulty: 'easy' },
      { georgian: 'ბებია', english: 'Grandmother', pronunciation: 'be-bi-a', difficulty: 'easy' },
      { georgian: 'ბაბუა', english: 'Grandfather', pronunciation: 'ba-bu-a', difficulty: 'easy' },
      { georgian: 'მეგობარი', english: 'Friend', pronunciation: 'me-go-ba-ri', difficulty: 'medium' },
      { georgian: 'ცოლი', english: 'Wife', pronunciation: 'tso-li', difficulty: 'easy' },
      { georgian: 'ქმარი', english: 'Husband', pronunciation: 'k-ma-ri', difficulty: 'easy' },
    ],
    culturalNotes: 'Family is the cornerstone of Georgian society. Multi-generational households are common. Grandparents often live with the family.',
  },
  {
    lesson: 8, title: 'Emotions & Feelings', georgian: 'როგორ ხარ?', english: 'How are you?',
    difficulty: 'Intermediate', category: 'Emotions', duration: '28 min',
    phrases: [
      { georgian: 'როგორ ხარ?', english: 'How are you?', pronunciation: 'ro-gor khar?', difficulty: 'medium' },
      { georgian: 'კარგად ვარ', english: "I'm fine", pronunciation: 'kar-gad var', difficulty: 'medium' },
      { georgian: 'მშია', english: "I'm hungry", pronunciation: 'm-shi-a', difficulty: 'medium' },
      { georgian: 'მწყურია', english: "I'm thirsty", pronunciation: 'mts-ku-ri-a', difficulty: 'hard' },
      { georgian: 'დაღლილი ვარ', english: "I'm tired", pronunciation: 'dagh-li-li var', difficulty: 'hard' },
      { georgian: 'მხიარული ვარ', english: "I'm happy", pronunciation: 'mkhi-a-ru-li var', difficulty: 'hard' },
      { georgian: 'მოვწყენილი ვარ', english: "I'm bored", pronunciation: 'mov-ts-ke-ni-li var', difficulty: 'hard' },
      { georgian: 'მცივა', english: "I'm cold", pronunciation: 'mtsi-va', difficulty: 'medium' },
      { georgian: 'მცხელა', english: "I'm hot", pronunciation: 'mtskhe-la', difficulty: 'medium' },
    ],
    culturalNotes: 'Georgians are emotionally expressive. Sharing feelings builds strong friendships. "როგორ ხარ?" is never just a pleasantry — people expect a real answer.',
  },
  {
    lesson: 9, title: 'Medical & Health', georgian: 'ავად ვარ', english: 'I am sick',
    difficulty: 'Intermediate', category: 'Health', duration: '35 min',
    phrases: [
      { georgian: 'ავად ვარ', english: 'I am sick', pronunciation: 'a-vad var', difficulty: 'medium' },
      { georgian: 'ექიმი', english: 'Doctor', pronunciation: 'e-ki-mi', difficulty: 'medium' },
      { georgian: 'საავადმყოფო', english: 'Hospital', pronunciation: 'sa-a-vad-m-ko-po', difficulty: 'hard' },
      { georgian: 'აფთიაქი', english: 'Pharmacy', pronunciation: 'ap-ti-a-ki', difficulty: 'medium' },
      { georgian: 'წამალი', english: 'Medicine', pronunciation: 'tsa-ma-li', difficulty: 'medium' },
      { georgian: 'დახმარება', english: 'Help', pronunciation: 'dakh-ma-re-ba', difficulty: 'medium' },
      { georgian: 'თავი მტკივა', english: 'I have a headache', pronunciation: 'ta-vi mt-ki-va', difficulty: 'hard' },
      { georgian: 'მუცელი მტკივა', english: 'I have a stomachache', pronunciation: 'mu-tse-li mt-ki-va', difficulty: 'hard' },
      { georgian: 'ალერგია მაქვს', english: 'I have an allergy', pronunciation: 'a-ler-gi-a makvs', difficulty: 'hard' },
    ],
    culturalNotes: 'Georgia has both public and private healthcare. Pharmacies (აფთიაქი) are widespread and pharmacists often speak some English. Many medications are available without prescription.',
  },
  {
    lesson: 10, title: 'Housing & Apartments', georgian: 'ბინა', english: 'Apartment',
    difficulty: 'Intermediate', category: 'Housing', duration: '30 min',
    phrases: [
      { georgian: 'ბინა', english: 'Apartment', pronunciation: 'bi-na', difficulty: 'easy' },
      { georgian: 'ქირა', english: 'Rent', pronunciation: 'ki-ra', difficulty: 'easy' },
      { georgian: 'ოთახი', english: 'Room', pronunciation: 'o-ta-khi', difficulty: 'easy' },
      { georgian: 'სამზარეულო', english: 'Kitchen', pronunciation: 'sam-za-re-u-lo', difficulty: 'hard' },
      { georgian: 'აბაზანა', english: 'Bathroom', pronunciation: 'a-ba-za-na', difficulty: 'medium' },
      { georgian: 'აივანი', english: 'Balcony', pronunciation: 'ai-va-ni', difficulty: 'medium' },
      { georgian: 'სართული', english: 'Floor/Storey', pronunciation: 'sar-tu-li', difficulty: 'medium' },
      { georgian: 'ინტერნეტი შედის?', english: 'Is internet included?', pronunciation: 'in-ter-ne-ti she-dis?', difficulty: 'hard' },
      { georgian: 'კომუნალური', english: 'Utilities', pronunciation: 'ko-mu-na-lu-ri', difficulty: 'hard' },
      { georgian: 'გამათბობელი', english: 'Heating', pronunciation: 'ga-mat-bo-be-li', difficulty: 'hard' },
    ],
    culturalNotes: 'Most rentals in Tbilisi are furnished. Always ask about utilities (კომუნალური). Gas heating is common and cheap. Water is usually included in rent.',
  },
  {
    lesson: 11, title: 'Wine & Toasting', georgian: 'გაუმარჯოს!', english: 'Cheers!',
    difficulty: 'Advanced', category: 'Culture', duration: '40 min',
    phrases: [
      { georgian: 'ღვინო', english: 'Wine', pronunciation: 'gh-vi-no', difficulty: 'easy' },
      { georgian: 'სუფრა', english: 'Georgian feast/table', pronunciation: 'sup-ra', difficulty: 'medium' },
      { georgian: 'ტამადა', english: 'Toastmaster', pronunciation: 'ta-ma-da', difficulty: 'medium' },
      { georgian: 'გაუმარჯოს!', english: 'Cheers!', pronunciation: 'gau-mar-jos!', difficulty: 'medium' },
      { georgian: 'საფერავი', english: 'Saperavi (red wine)', pronunciation: 'sa-pe-ra-vi', difficulty: 'medium' },
      { georgian: 'რქაწითელი', english: 'Rkatsiteli (white wine)', pronunciation: 'r-ka-tsi-te-li', difficulty: 'hard' },
      { georgian: 'ქვევრი', english: 'Qvevri (clay wine vessel)', pronunciation: 'kvev-ri', difficulty: 'medium' },
      { georgian: 'ბოლომდე!', english: 'To the bottom! (drink up)', pronunciation: 'bo-lo-mde!', difficulty: 'medium' },
    ],
    culturalNotes: 'Georgian wine culture is 8000 years old. The tamada leads toasts in a specific order: to God, family, ancestors, Georgia, the host. Never interrupt a toast. Drinking from the kantsi (horn) means you must finish it.',
  },
  {
    lesson: 12, title: 'Weather & Seasons', georgian: 'ამინდი', english: 'Weather',
    difficulty: 'Intermediate', category: 'Weather', duration: '20 min',
    phrases: [
      { georgian: 'ამინდი', english: 'Weather', pronunciation: 'a-min-di', difficulty: 'easy' },
      { georgian: 'ცხელა', english: "It's hot", pronunciation: 'tskhe-la', difficulty: 'medium' },
      { georgian: 'ცივა', english: "It's cold", pronunciation: 'tsi-va', difficulty: 'easy' },
      { georgian: 'წვიმს', english: "It's raining", pronunciation: 'tsvims', difficulty: 'medium' },
      { georgian: 'თოვს', english: "It's snowing", pronunciation: 'tovs', difficulty: 'easy' },
      { georgian: 'მზე ანათებს', english: "It's sunny", pronunciation: 'mze a-na-tebs', difficulty: 'hard' },
      { georgian: 'ზაფხული', english: 'Summer', pronunciation: 'za-pkhu-li', difficulty: 'medium' },
      { georgian: 'ზამთარი', english: 'Winter', pronunciation: 'zam-ta-ri', difficulty: 'medium' },
      { georgian: 'გაზაფხული', english: 'Spring', pronunciation: 'ga-za-pkhu-li', difficulty: 'hard' },
      { georgian: 'შემოდგომა', english: 'Autumn', pronunciation: 'she-mod-go-ma', difficulty: 'hard' },
    ],
    culturalNotes: 'Tbilisi has hot summers (35°C+) and mild winters. Mountain areas get heavy snow. Spring and autumn are the most pleasant seasons for exploring.',
  },
  {
    lesson: 13, title: 'Emergency Phrases', georgian: 'დამეხმარეთ!', english: 'Help me!',
    difficulty: 'Beginner', category: 'Emergency', duration: '15 min',
    phrases: [
      { georgian: 'დამეხმარეთ!', english: 'Help me!', pronunciation: 'da-me-khma-ret!', difficulty: 'medium' },
      { georgian: 'პოლიცია', english: 'Police', pronunciation: 'po-li-tsi-a', difficulty: 'easy' },
      { georgian: 'სასწრაფო', english: 'Ambulance', pronunciation: 'sas-tsra-po', difficulty: 'medium' },
      { georgian: 'ხანძარი!', english: 'Fire!', pronunciation: 'khan-dza-ri!', difficulty: 'medium' },
      { georgian: 'დავკარგე...', english: 'I lost...', pronunciation: 'dav-kar-ge...', difficulty: 'medium' },
      { georgian: 'პასპორტი', english: 'Passport', pronunciation: 'pas-por-ti', difficulty: 'easy' },
      { georgian: 'საელჩო', english: 'Embassy', pronunciation: 'sa-el-cho', difficulty: 'medium' },
      { georgian: 'მოპარეს!', english: 'I was robbed!', pronunciation: 'mo-pa-res!', difficulty: 'medium' },
    ],
    culturalNotes: 'Emergency number in Georgia is 112 (like EU). Police are generally helpful. Tbilisi is very safe but pickpocketing can occur in tourist areas.',
  },
  {
    lesson: 14, title: 'Work & Business', georgian: 'სამსახური', english: 'Work/Job',
    difficulty: 'Intermediate', category: 'Work', duration: '30 min',
    phrases: [
      { georgian: 'სამსახური', english: 'Work/Job', pronunciation: 'sam-sa-khu-ri', difficulty: 'medium' },
      { georgian: 'ოფისი', english: 'Office', pronunciation: 'o-pi-si', difficulty: 'easy' },
      { georgian: 'თანამშრომელი', english: 'Colleague', pronunciation: 'ta-nam-shro-me-li', difficulty: 'hard' },
      { georgian: 'ხელფასი', english: 'Salary', pronunciation: 'khel-pa-si', difficulty: 'medium' },
      { georgian: 'შეხვედრა', english: 'Meeting', pronunciation: 'she-khved-ra', difficulty: 'medium' },
      { georgian: 'რას მუშაობ?', english: 'What do you do for work?', pronunciation: 'ras mu-sha-ob?', difficulty: 'medium' },
      { georgian: 'ფრილანსერი ვარ', english: "I'm a freelancer", pronunciation: 'fri-lan-se-ri var', difficulty: 'medium' },
      { georgian: 'დისტანციურად ვმუშაობ', english: 'I work remotely', pronunciation: 'dis-tan-tsi-u-rad v-mu-sha-ob', difficulty: 'hard' },
    ],
    culturalNotes: 'Georgia is a popular digital nomad destination. Co-working spaces are plentiful in Tbilisi. Business relationships are often built over meals.',
  },
  {
    lesson: 15, title: 'Dating & Social Life', georgian: 'მოგწონხარ', english: 'I like you',
    difficulty: 'Advanced', category: 'Social', duration: '25 min',
    phrases: [
      { georgian: 'მოგწონხარ', english: 'I like you', pronunciation: 'mog-tson-khar', difficulty: 'hard' },
      { georgian: 'ლამაზი ხარ', english: 'You are beautiful', pronunciation: 'la-ma-zi khar', difficulty: 'medium' },
      { georgian: 'ყავაზე წავიდეთ?', english: 'Shall we go for coffee?', pronunciation: 'ka-va-ze tsa-vi-det?', difficulty: 'hard' },
      { georgian: 'ტელეფონის ნომერი', english: 'Phone number', pronunciation: 'te-le-po-nis no-me-ri', difficulty: 'medium' },
      { georgian: 'მიყვარხარ', english: 'I love you', pronunciation: 'mi-kvar-khar', difficulty: 'medium' },
      { georgian: 'შევხვდეთ?', english: 'Shall we meet?', pronunciation: 'shev-khv-det?', difficulty: 'hard' },
      { georgian: 'კარგი საღამო იყო', english: 'It was a good evening', pronunciation: 'kar-gi sa-gha-mo i-ko', difficulty: 'hard' },
    ],
    culturalNotes: 'Georgian dating culture mixes traditional and modern. Chivalry is valued — men open doors and pay for dates. Families can be very involved in relationships.',
  },
  {
    lesson: 16, title: 'Sports & Activities', georgian: 'სპორტი', english: 'Sport',
    difficulty: 'Intermediate', category: 'Sport', duration: '20 min',
    phrases: [
      { georgian: 'ფეხბურთი', english: 'Football', pronunciation: 'pekh-bur-ti', difficulty: 'medium' },
      { georgian: 'კალათბურთი', english: 'Basketball', pronunciation: 'ka-lat-bur-ti', difficulty: 'medium' },
      { georgian: 'ცურვა', english: 'Swimming', pronunciation: 'tsur-va', difficulty: 'easy' },
      { georgian: 'სირბილი', english: 'Running', pronunciation: 'sir-bi-li', difficulty: 'medium' },
      { georgian: 'ლაშქრობა', english: 'Hiking', pronunciation: 'lash-kro-ba', difficulty: 'medium' },
      { georgian: 'თხილამური', english: 'Skiing', pronunciation: 'tkhi-la-mu-ri', difficulty: 'hard' },
      { georgian: 'სტადიონი', english: 'Stadium', pronunciation: 'sta-di-o-ni', difficulty: 'easy' },
      { georgian: 'გამარჯვება', english: 'Victory', pronunciation: 'ga-mar-jve-ba', difficulty: 'hard' },
    ],
    culturalNotes: 'Rugby and football are the most popular sports. Georgian wrestlers are world-class. Gudauri and Bakuriani are popular ski resorts.',
  },
  {
    lesson: 17, title: 'Colours & Descriptions', georgian: 'ფერები', english: 'Colours',
    difficulty: 'Beginner', category: 'Descriptions', duration: '15 min',
    phrases: [
      { georgian: 'წითელი', english: 'Red', pronunciation: 'tsi-te-li', difficulty: 'medium' },
      { georgian: 'ლურჯი', english: 'Blue', pronunciation: 'lur-ji', difficulty: 'easy' },
      { georgian: 'მწვანე', english: 'Green', pronunciation: 'mts-va-ne', difficulty: 'medium' },
      { georgian: 'ყვითელი', english: 'Yellow', pronunciation: 'kvi-te-li', difficulty: 'medium' },
      { georgian: 'შავი', english: 'Black', pronunciation: 'sha-vi', difficulty: 'easy' },
      { georgian: 'თეთრი', english: 'White', pronunciation: 'tet-ri', difficulty: 'easy' },
      { georgian: 'დიდი', english: 'Big', pronunciation: 'di-di', difficulty: 'easy' },
      { georgian: 'პატარა', english: 'Small', pronunciation: 'pa-ta-ra', difficulty: 'easy' },
      { georgian: 'ლამაზი', english: 'Beautiful', pronunciation: 'la-ma-zi', difficulty: 'easy' },
      { georgian: 'ძველი', english: 'Old', pronunciation: 'dzve-li', difficulty: 'easy' },
      { georgian: 'ახალი', english: 'New', pronunciation: 'a-kha-li', difficulty: 'easy' },
    ],
    culturalNotes: 'Georgian has a unique word "ლურჯი" which covers both blue and dark blue, while light blue is "ცისფერი" (sky-coloured).',
  },
  {
    lesson: 18, title: 'Body & Appearance', georgian: 'სხეული', english: 'Body',
    difficulty: 'Intermediate', category: 'Body', duration: '20 min',
    phrases: [
      { georgian: 'თავი', english: 'Head', pronunciation: 'ta-vi', difficulty: 'easy' },
      { georgian: 'თვალი', english: 'Eye', pronunciation: 'tva-li', difficulty: 'easy' },
      { georgian: 'ხელი', english: 'Hand/Arm', pronunciation: 'khe-li', difficulty: 'easy' },
      { georgian: 'ფეხი', english: 'Foot/Leg', pronunciation: 'pe-khi', difficulty: 'easy' },
      { georgian: 'გული', english: 'Heart', pronunciation: 'gu-li', difficulty: 'easy' },
      { georgian: 'მუცელი', english: 'Stomach', pronunciation: 'mu-tse-li', difficulty: 'medium' },
      { georgian: 'ზურგი', english: 'Back', pronunciation: 'zur-gi', difficulty: 'easy' },
      { georgian: 'კბილი', english: 'Tooth', pronunciation: 'k-bi-li', difficulty: 'medium' },
      { georgian: 'ყური', english: 'Ear', pronunciation: 'ku-ri', difficulty: 'easy' },
    ],
    culturalNotes: 'Knowing body parts is essential for medical visits. Georgian doctors often speak limited English, so these terms help communicate symptoms.',
  },
  {
    lesson: 19, title: 'Nature & Animals', georgian: 'ბუნება', english: 'Nature',
    difficulty: 'Intermediate', category: 'Nature', duration: '22 min',
    phrases: [
      { georgian: 'მთა', english: 'Mountain', pronunciation: 'm-ta', difficulty: 'easy' },
      { georgian: 'ზღვა', english: 'Sea', pronunciation: 'zghva', difficulty: 'easy' },
      { georgian: 'მდინარე', english: 'River', pronunciation: 'mdi-na-re', difficulty: 'medium' },
      { georgian: 'ტყე', english: 'Forest', pronunciation: 't-ke', difficulty: 'easy' },
      { georgian: 'ტბა', english: 'Lake', pronunciation: 't-ba', difficulty: 'easy' },
      { georgian: 'ძაღლი', english: 'Dog', pronunciation: 'dzagh-li', difficulty: 'easy' },
      { georgian: 'კატა', english: 'Cat', pronunciation: 'ka-ta', difficulty: 'easy' },
      { georgian: 'ცხენი', english: 'Horse', pronunciation: 'tskhe-ni', difficulty: 'medium' },
      { georgian: 'ფრინველი', english: 'Bird', pronunciation: 'prin-ve-li', difficulty: 'medium' },
      { georgian: 'ხე', english: 'Tree', pronunciation: 'khe', difficulty: 'easy' },
      { georgian: 'ყვავილი', english: 'Flower', pronunciation: 'kva-vi-li', difficulty: 'medium' },
    ],
    culturalNotes: 'Georgia is one of the most biodiverse countries in Europe. The Caucasus mountains are home to wolves, bears, and lynx. Street dogs are everywhere in Tbilisi — they are tagged and vaccinated.',
  },
  {
    lesson: 20, title: 'Celebrations & Holidays', georgian: 'დღესასწაული', english: 'Holiday',
    difficulty: 'Advanced', category: 'Culture', duration: '30 min',
    phrases: [
      { georgian: 'დღესასწაული', english: 'Holiday/Celebration', pronunciation: 'dghe-sas-tsau-li', difficulty: 'hard' },
      { georgian: 'შობა', english: 'Christmas', pronunciation: 'sho-ba', difficulty: 'easy' },
      { georgian: 'ახალი წელი', english: 'New Year', pronunciation: 'a-kha-li tse-li', difficulty: 'medium' },
      { georgian: 'დაბადების დღე', english: 'Birthday', pronunciation: 'da-ba-de-bis dghe', difficulty: 'hard' },
      { georgian: 'გილოცავ!', english: 'Congratulations!', pronunciation: 'gi-lo-tsav!', difficulty: 'medium' },
      { georgian: 'ბედნიერი ახალი წელი!', english: 'Happy New Year!', pronunciation: 'bed-ni-e-ri a-kha-li tse-li!', difficulty: 'hard' },
      { georgian: 'ქორწილი', english: 'Wedding', pronunciation: 'kor-tsi-li', difficulty: 'medium' },
      { georgian: 'ნათლობა', english: 'Baptism', pronunciation: 'nat-lo-ba', difficulty: 'medium' },
    ],
    culturalNotes: 'Georgian Christmas is January 7 (Orthodox calendar). New Year is the biggest celebration — families gather for a supra. May 26 is Independence Day.',
  },
  {
    lesson: 21, title: 'Technology & Internet', georgian: 'ტექნოლოგია', english: 'Technology',
    difficulty: 'Intermediate', category: 'Technology', duration: '18 min',
    phrases: [
      { georgian: 'ინტერნეტი', english: 'Internet', pronunciation: 'in-ter-ne-ti', difficulty: 'easy' },
      { georgian: 'ვაი-ფაი', english: 'WiFi', pronunciation: 'vai-pai', difficulty: 'easy' },
      { georgian: 'პაროლი', english: 'Password', pronunciation: 'pa-ro-li', difficulty: 'easy' },
      { georgian: 'ტელეფონი', english: 'Phone', pronunciation: 'te-le-po-ni', difficulty: 'easy' },
      { georgian: 'კომპიუტერი', english: 'Computer', pronunciation: 'kom-pi-u-te-ri', difficulty: 'easy' },
      { georgian: 'დამტენი', english: 'Charger', pronunciation: 'dam-te-ni', difficulty: 'medium' },
      { georgian: 'ვაი-ფაის პაროლი რაა?', english: "What's the WiFi password?", pronunciation: 'vai-pais pa-ro-li ra-a?', difficulty: 'medium' },
      { georgian: 'სიმ-ბარათი', english: 'SIM card', pronunciation: 'sim-ba-ra-ti', difficulty: 'easy' },
    ],
    culturalNotes: 'Georgia has excellent internet speeds and cheap mobile data. Magti, Silknet, and Beeline are the main providers. Most cafes have free WiFi.',
  },
  {
    lesson: 22, title: 'Polite Phrases & Manners', georgian: 'თუ შეიძლება', english: 'Please',
    difficulty: 'Beginner', category: 'Manners', duration: '15 min',
    phrases: [
      { georgian: 'თუ შეიძლება', english: 'Please / If possible', pronunciation: 'tu shei-dzle-ba', difficulty: 'medium' },
      { georgian: 'უკაცრავად', english: 'Excuse me (formal)', pronunciation: 'u-ka-tsra-vad', difficulty: 'hard' },
      { georgian: 'არა, მადლობა', english: 'No, thank you', pronunciation: 'a-ra, mad-lo-ba', difficulty: 'easy' },
      { georgian: 'დიახ', english: 'Yes (formal)', pronunciation: 'di-akh', difficulty: 'easy' },
      { georgian: 'არა', english: 'No', pronunciation: 'a-ra', difficulty: 'easy' },
      { georgian: 'ჰო', english: 'Yes (informal)', pronunciation: 'ho', difficulty: 'easy' },
      { georgian: 'კი', english: 'Yes', pronunciation: 'ki', difficulty: 'easy' },
      { georgian: 'მიხარია გაცნობა', english: 'Nice to meet you', pronunciation: 'mi-kha-ri-a gats-no-ba', difficulty: 'hard' },
      { georgian: 'წარმატებები!', english: 'Good luck!', pronunciation: 'tsar-ma-te-be-bi!', difficulty: 'hard' },
    ],
    culturalNotes: 'Georgians value politeness highly. "თუ შეიძლება" (if possible) is the standard way to say please. Older people are addressed with formal "you" (თქვენ).',
  },
  {
    lesson: 23, title: 'At the Bank', georgian: 'ბანკი', english: 'Bank',
    difficulty: 'Intermediate', category: 'Finance', duration: '22 min',
    phrases: [
      { georgian: 'ბანკი', english: 'Bank', pronunciation: 'ban-ki', difficulty: 'easy' },
      { georgian: 'ანგარიში', english: 'Account', pronunciation: 'an-ga-ri-shi', difficulty: 'medium' },
      { georgian: 'გადარიცხვა', english: 'Transfer', pronunciation: 'ga-da-rits-khva', difficulty: 'hard' },
      { georgian: 'ბანკომატი', english: 'ATM', pronunciation: 'ban-ko-ma-ti', difficulty: 'easy' },
      { georgian: 'გაცვლითი კურსი', english: 'Exchange rate', pronunciation: 'gats-vli-ti kur-si', difficulty: 'hard' },
      { georgian: 'ვალუტის გაცვლა', english: 'Currency exchange', pronunciation: 'va-lu-tis gats-vla', difficulty: 'hard' },
      { georgian: 'ანგარიში გავხსნა მინდა', english: 'I want to open an account', pronunciation: 'an-ga-ri-shi gav-khsna min-da', difficulty: 'hard' },
    ],
    culturalNotes: 'Bank of Georgia and TBC Bank are the two main banks. Opening an account requires passport only — very easy for foreigners. ATMs are everywhere.',
  },
  {
    lesson: 24, title: 'Advanced Conversations', georgian: 'რას ფიქრობ?', english: 'What do you think?',
    difficulty: 'Advanced', category: 'Conversation', duration: '45 min',
    phrases: [
      { georgian: 'რას ფიქრობ?', english: 'What do you think?', pronunciation: 'ras pik-rob?', difficulty: 'hard' },
      { georgian: 'მესმის', english: 'I understand', pronunciation: 'mes-mis', difficulty: 'medium' },
      { georgian: 'არ მესმის', english: "I don't understand", pronunciation: 'ar mes-mis', difficulty: 'medium' },
      { georgian: 'შეიძლება განმეორდეს?', english: 'Can you repeat?', pronunciation: 'shei-dzle-ba gan-me-or-des?', difficulty: 'hard' },
      { georgian: 'ნელა ილაპარაკეთ', english: 'Speak slowly', pronunciation: 'ne-la i-la-pa-ra-ket', difficulty: 'hard' },
      { georgian: 'ვთანხმდები', english: 'I agree', pronunciation: 'v-tan-khm-de-bi', difficulty: 'hard' },
      { georgian: 'არ ვთანხმდები', english: 'I disagree', pronunciation: 'ar v-tan-khm-de-bi', difficulty: 'hard' },
      { georgian: 'ქართული ვსწავლობ', english: "I'm learning Georgian", pronunciation: 'kar-tu-li vs-tsav-lob', difficulty: 'hard' },
      { georgian: 'ცოტას ვლაპარაკობ', english: 'I speak a little', pronunciation: 'tso-tas v-la-pa-ra-kob', difficulty: 'hard' },
    ],
    culturalNotes: 'Georgians love when foreigners try to speak their language. Even basic attempts are met with encouragement and often free food or drinks.',
  },
  {
    lesson: 25, title: 'Georgian Slang & Expressions', georgian: 'გენაცვალე', english: 'My dear (expression of affection)',
    difficulty: 'Advanced', category: 'Slang', duration: '30 min',
    phrases: [
      { georgian: 'გენაცვალე', english: 'My dear (lit: I sacrifice myself for you)', pronunciation: 'ge-nats-va-le', difficulty: 'hard' },
      { georgian: 'შენი ჭირიმე', english: 'I adore you (lit: let me take your troubles)', pronunciation: 'she-ni chi-ri-me', difficulty: 'hard' },
      { georgian: 'რა კარგია!', english: "That's great!", pronunciation: 'ra kar-gi-a!', difficulty: 'medium' },
      { georgian: 'კაი', english: 'Okay/Cool', pronunciation: 'kai', difficulty: 'easy' },
      { georgian: 'ძმაო', english: 'Bro', pronunciation: 'dzma-o', difficulty: 'easy' },
      { georgian: 'ძალიან მაგარია', english: "That's awesome", pronunciation: 'dza-li-an ma-ga-ri-a', difficulty: 'medium' },
      { georgian: 'არაუშავს', english: "No problem / It's okay", pronunciation: 'a-ra-u-shavs', difficulty: 'medium' },
      { georgian: 'რა მოხდა?', english: 'What happened?', pronunciation: 'ra mo-khda?', difficulty: 'medium' },
      { georgian: 'წავიდეთ!', english: "Let's go!", pronunciation: 'tsa-vi-det!', difficulty: 'medium' },
    ],
    culturalNotes: '"გენაცვალე" is the most Georgian expression possible — it literally means "I sacrifice myself for you" and is used casually like "dear" or "love". You will hear it constantly.',
  },
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
      { speaker: 'Waiter', georgian: 'კარგი. რამეს დასალევად?', english: 'Good. Something to drink?', pronunciation: 'kargi. rames dasalevad?' },
      { speaker: 'You', georgian: 'ერთი ლიმონათი', english: 'One lemonade', pronunciation: 'erti limonati' },
    ],
  },
  {
    id: 2, title: 'Asking for Directions', difficulty: 'Beginner',
    scenario: "You need to find the metro station",
    dialogue: [
      { speaker: 'You', georgian: 'ბოდიში, სად არის მეტროს სადგური?', english: 'Excuse me, where is the metro station?', pronunciation: 'bodishi, sad aris metros sadguri?' },
      { speaker: 'Local', georgian: 'პირდაპირ წადით და მარჯვნივ მიუხვიეთ', english: 'Go straight and turn right', pronunciation: 'pirdapir tsadit da marjvniv miukhviet' },
      { speaker: 'You', georgian: 'შორს არის?', english: 'Is it far?', pronunciation: 'shors aris?' },
      { speaker: 'Local', georgian: 'არა, ხუთი წუთი ფეხით', english: 'No, five minutes on foot', pronunciation: 'ara, khuti tsuti pekhit' },
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
      { speaker: 'You', georgian: 'კარგი, ორი კილო მინდა', english: 'Good, I want two kilos', pronunciation: 'kargi, ori kilo minda' },
      { speaker: 'Vendor', georgian: 'მოიცადეთ... ბრძანდით!', english: 'Wait a moment... Here you go!', pronunciation: 'moitsadet... brdzandit!' },
    ],
  },
  {
    id: 4, title: 'Taking a Taxi', difficulty: 'Beginner',
    scenario: "You're calling a taxi to go to Rustaveli Avenue",
    dialogue: [
      { speaker: 'You', georgian: 'გამარჯობა! რუსთაველზე წამიყვანეთ', english: 'Hello! Take me to Rustaveli please', pronunciation: 'gamarjoba! rustavelze tsamikvanet' },
      { speaker: 'Driver', georgian: 'კარგი, ჩაჯექით', english: 'Okay, get in', pronunciation: 'kargi, chajekit' },
      { speaker: 'You', georgian: 'რამდენი იქნება?', english: 'How much will it be?', pronunciation: 'ramdeni ikneba?' },
      { speaker: 'Driver', georgian: 'ხუთი ლარი', english: 'Five lari', pronunciation: 'khuti lari' },
      { speaker: 'You', georgian: 'კარგი', english: 'Okay', pronunciation: 'kargi' },
      { speaker: 'Driver', georgian: 'მოვედით!', english: "We're here!", pronunciation: 'movedit!' },
      { speaker: 'You', georgian: 'მადლობა, დატოვეთ ხურდა', english: 'Thanks, keep the change', pronunciation: 'madloba, datovet khurda' },
    ],
  },
  {
    id: 5, title: 'At the Pharmacy', difficulty: 'Intermediate',
    scenario: "You need medicine for a headache and cold",
    dialogue: [
      { speaker: 'You', georgian: 'გამარჯობა, თავი მტკივა', english: 'Hello, I have a headache', pronunciation: 'gamarjoba, tavi mtkiva' },
      { speaker: 'Pharmacist', georgian: 'რამე ალერგია ხომ არ გაქვთ?', english: "You don't have any allergies?", pronunciation: 'rame alergia khom ar gakvt?' },
      { speaker: 'You', georgian: 'არა, არ მაქვს', english: "No, I don't", pronunciation: 'ara, ar makvs' },
      { speaker: 'Pharmacist', georgian: 'ეს აბი მიიღეთ. დღეში სამჯერ', english: 'Take this pill. Three times a day', pronunciation: 'es abi miighet. dgheshi samjer' },
      { speaker: 'You', georgian: 'რამდენი ღირს?', english: 'How much is it?', pronunciation: 'ramdeni ghirs?' },
      { speaker: 'Pharmacist', georgian: 'ორი ლარი ოცდაათი', english: 'Two lari thirty', pronunciation: 'ori lari otsdaati' },
      { speaker: 'You', georgian: 'მადლობა!', english: 'Thank you!', pronunciation: 'madloba!' },
    ],
  },
  {
    id: 6, title: 'Making Friends at a Bar', difficulty: 'Intermediate',
    scenario: "You meet some Georgians at a bar in Tbilisi",
    dialogue: [
      { speaker: 'Georgian', georgian: 'გამარჯობა! საიდან ხარ?', english: 'Hi! Where are you from?', pronunciation: 'gamarjoba! saidan khar?' },
      { speaker: 'You', georgian: 'ინგლისიდან ვარ. შენ?', english: "I'm from England. You?", pronunciation: 'inglisidan var. shen?' },
      { speaker: 'Georgian', georgian: 'მე თბილისელი ვარ. რა გქვია?', english: "I'm from Tbilisi. What's your name?", pronunciation: 'me tbiliseli var. ra gkvia?' },
      { speaker: 'You', georgian: 'სახელი მქვია... ქართული ვსწავლობ', english: "My name is... I'm learning Georgian", pronunciation: 'sakheli mkvia... kartuli vstsvavlob' },
      { speaker: 'Georgian', georgian: 'ძალიან კარგი! მოდი, ერთად დავლიოთ!', english: "Very good! Come, let's drink together!", pronunciation: 'dzalian kargi! modi, ertad davliot!' },
      { speaker: 'You', georgian: 'გაუმარჯოს!', english: 'Cheers!', pronunciation: 'gaumarjos!' },
      { speaker: 'Georgian', georgian: 'გაუმარჯოს! მეგობრობას!', english: 'Cheers! To friendship!', pronunciation: 'gaumarjos! megobarobas!' },
    ],
  },
  {
    id: 7, title: 'Phone Call — Ordering Delivery', difficulty: 'Intermediate',
    scenario: "You're ordering food delivery over the phone",
    dialogue: [
      { speaker: 'Staff', georgian: 'გამარჯობა, რით მოგემსახურებით?', english: 'Hello, how can I help you?', pronunciation: 'gamarjoba, rit mogemsakhurebit?' },
      { speaker: 'You', georgian: 'მინდა შეკვეთის გაკეთება', english: 'I want to place an order', pronunciation: 'minda shekvetis gaketeba' },
      { speaker: 'Staff', georgian: 'რა გსურთ?', english: 'What would you like?', pronunciation: 'ra gsurt?' },
      { speaker: 'You', georgian: 'ორი ხინკალი და ერთი სალათი', english: 'Two portions of khinkali and one salad', pronunciation: 'ori khinkali da erti salati' },
      { speaker: 'Staff', georgian: 'მისამართი?', english: 'Address?', pronunciation: 'misamarti?' },
      { speaker: 'You', georgian: 'აღმაშენებლის ქუჩა, ნომერი ოცი', english: 'Agmashenebeli street, number twenty', pronunciation: 'agmasheneblis kucha, nomeri otsi' },
      { speaker: 'Staff', georgian: 'ნახევარ საათში მოვა', english: 'It will arrive in half an hour', pronunciation: 'nakhevar saatshi mova' },
    ],
  },
  {
    id: 8, title: 'Talking to Your Landlord', difficulty: 'Intermediate',
    scenario: "Reporting a problem with your apartment",
    dialogue: [
      { speaker: 'You', georgian: 'გამარჯობა, პრობლემა მაქვს ბინაში', english: 'Hello, I have a problem in the apartment', pronunciation: 'gamarjoba, problema makvs binashi' },
      { speaker: 'Landlord', georgian: 'რა პრობლემაა?', english: 'What problem?', pronunciation: 'ra problemaa?' },
      { speaker: 'You', georgian: 'წყალი არ მოდის', english: "The water isn't working", pronunciation: 'tskali ar modis' },
      { speaker: 'Landlord', georgian: 'ცხელი თუ ცივი?', english: 'Hot or cold?', pronunciation: 'tskheli tu tsivi?' },
      { speaker: 'You', georgian: 'ცხელი წყალი. გუშინდან არ არის', english: "Hot water. It's been off since yesterday", pronunciation: 'tskheli tskali. gushindan ar aris' },
      { speaker: 'Landlord', georgian: 'კარგი, ოსტატს გამოვუძახებ', english: "Okay, I'll call a repairman", pronunciation: 'kargi, ostats gamoivudzakheb' },
      { speaker: 'You', georgian: 'როდის მოვა?', english: 'When will he come?', pronunciation: 'rodis mova?' },
      { speaker: 'Landlord', georgian: 'დღეს საღამოს', english: 'This evening', pronunciation: 'dghes saghamos' },
    ],
  },
  {
    id: 9, title: 'Job Interview', difficulty: 'Advanced',
    scenario: "You're interviewing for a position at a tech company",
    dialogue: [
      { speaker: 'Interviewer', georgian: 'გამარჯობა, დაბრძანდით', english: 'Hello, please sit down', pronunciation: 'gamarjoba, dabrdzandit' },
      { speaker: 'You', georgian: 'მადლობა. მიხარია გაცნობა', english: 'Thank you. Nice to meet you', pronunciation: 'madloba. mikharia gatsnoba' },
      { speaker: 'Interviewer', georgian: 'მოგვიყევით თქვენს გამოცდილებაზე', english: 'Tell us about your experience', pronunciation: 'mogvikevit tkvens gamotsdilabaze' },
      { speaker: 'You', georgian: 'ხუთი წელია ამ სფეროში ვმუშაობ', english: "I've worked in this field for five years", pronunciation: 'khuti tselia am speroshi vmushab' },
      { speaker: 'Interviewer', georgian: 'რატომ გსურთ ჩვენთან მუშაობა?', english: 'Why do you want to work with us?', pronunciation: 'ratom gsurt chventan mushaoba?' },
      { speaker: 'You', georgian: 'თქვენი კომპანია ძალიან საინტერესოა', english: 'Your company is very interesting', pronunciation: 'tkveni kompania dzalian sainteresoa' },
      { speaker: 'Interviewer', georgian: 'კარგი, დაგიკავშირდებით ერთ კვირაში', english: "Good, we'll contact you in one week", pronunciation: 'kargi, dagikavshirdebit ert kvirashi' },
    ],
  },
  {
    id: 10, title: 'Date Night', difficulty: 'Advanced',
    scenario: "You're on a date at a wine bar in old Tbilisi",
    dialogue: [
      { speaker: 'You', georgian: 'ძალიან ლამაზი ადგილია', english: "This is a very beautiful place", pronunciation: 'dzalian lamazi adgilia' },
      { speaker: 'Date', georgian: 'დიახ, ჩემი საყვარელი ბარია', english: "Yes, it's my favourite bar", pronunciation: 'diakh, chemi sakvareli baria' },
      { speaker: 'You', georgian: 'რას დალევ?', english: 'What will you drink?', pronunciation: 'ras dalev?' },
      { speaker: 'Date', georgian: 'ერთ ჭიქა საფერავს', english: 'A glass of Saperavi', pronunciation: 'ert chika saperavs' },
      { speaker: 'You', georgian: 'მეც იგივე. გაუმარჯოს!', english: 'Same for me. Cheers!', pronunciation: 'mets igive. gaumarjos!' },
      { speaker: 'Date', georgian: 'რამდენი ხანია საქართველოში ხარ?', english: 'How long have you been in Georgia?', pronunciation: 'ramdeni khania sakartveloshi khar?' },
      { speaker: 'You', georgian: 'სამი თვეა. ძალიან მომწონს აქ', english: "Three months. I really like it here", pronunciation: 'sami tvea. dzalian momtsons ak' },
      { speaker: 'Date', georgian: 'მეხარება! კიდევ შევხვდეთ?', english: "I'm glad! Shall we meet again?", pronunciation: 'mekharebia! kidev shevkhvdet?' },
    ],
  },
  {
    id: 11, title: 'At the Bank', difficulty: 'Intermediate',
    scenario: "Opening a bank account at TBC Bank",
    dialogue: [
      { speaker: 'You', georgian: 'გამარჯობა, ანგარიშის გახსნა მინდა', english: 'Hello, I want to open an account', pronunciation: 'gamarjoba, angarishis gakhsna minda' },
      { speaker: 'Teller', georgian: 'რა ტიპის ანგარიში გსურთ?', english: 'What type of account do you want?', pronunciation: 'ra tipis angarishi gsurt?' },
      { speaker: 'You', georgian: 'მიმდინარე ანგარიში, ლარში', english: 'A current account, in lari', pronunciation: 'mimdinare angarishi, larshi' },
      { speaker: 'Teller', georgian: 'პასპორტი გაქვთ?', english: 'Do you have your passport?', pronunciation: 'pasporti gakvt?' },
      { speaker: 'You', georgian: 'დიახ, აი', english: 'Yes, here it is', pronunciation: 'diakh, ai' },
      { speaker: 'Teller', georgian: 'კარგი. ბარათი ხვალ მზად იქნება', english: 'Good. Your card will be ready tomorrow', pronunciation: 'kargi. barati khval mzad ikneba' },
      { speaker: 'You', georgian: 'ინტერნეტ ბანკიც შემიძლია?', english: 'Can I get internet banking too?', pronunciation: 'internet bankits shemidzlia?' },
      { speaker: 'Teller', georgian: 'რა თქმა უნდა, აპლიკაცია ჩამოტვირთეთ', english: 'Of course, download the app', pronunciation: 'ra tkma unda, aplikatsia chamotvirtet' },
    ],
  },
  {
    id: 12, title: 'Emergency — Car Accident', difficulty: 'Advanced',
    scenario: "You witness a minor car accident and need to help",
    dialogue: [
      { speaker: 'You', georgian: 'კარგად ხართ? დახმარება ხომ არ გჭირდებათ?', english: 'Are you okay? Do you need help?', pronunciation: 'kargad khart? dakhmareba khom ar gchirdebit?' },
      { speaker: 'Person', georgian: 'არა, კარგად ვარ, მადლობა', english: "No, I'm fine, thanks", pronunciation: 'ara, kargad var, madloba' },
      { speaker: 'You', georgian: 'პოლიციას დავურეკო?', english: 'Should I call the police?', pronunciation: 'politsiis davureko?' },
      { speaker: 'Person', georgian: 'არ არის საჭირო, მცირე ავარიაა', english: "It's not necessary, it's a minor accident", pronunciation: 'ar aris sachiro, mtsire avariaa' },
      { speaker: 'You', georgian: 'სასწრაფო დახმარება ხომ არ გჭირდებათ?', english: 'Do you need an ambulance?', pronunciation: 'saststrapho dakhmareba khom ar gchirdebit?' },
      { speaker: 'Person', georgian: 'არა, მადლობა, უკვე დავურეკე დაზღვევას', english: "No thanks, I've already called insurance", pronunciation: 'ara, madloba, ukve davureke dazghvevas' },
    ],
  },
]

export const flashcards: Flashcard[] = [
  // Greetings & Basics
  { georgian: 'გამარჯობა', english: 'Hello', pronunciation: 'ga-mar-jo-ba', category: 'Greetings' },
  { georgian: 'მადლობა', english: 'Thank you', pronunciation: 'mad-lo-ba', category: 'Greetings' },
  { georgian: 'ნახვამდის', english: 'Goodbye', pronunciation: 'nakh-vam-dis', category: 'Greetings' },
  { georgian: 'ბოდიში', english: 'Sorry / Excuse me', pronunciation: 'bo-di-shi', category: 'Greetings' },
  { georgian: 'არაფრის', english: "You're welcome", pronunciation: 'a-ra-pris', category: 'Greetings' },
  { georgian: 'კი', english: 'Yes', pronunciation: 'ki', category: 'Basics' },
  { georgian: 'არა', english: 'No', pronunciation: 'a-ra', category: 'Basics' },
  { georgian: 'კარგი', english: 'Good / Okay', pronunciation: 'kar-gi', category: 'Basics' },
  { georgian: 'ცუდი', english: 'Bad', pronunciation: 'tsu-di', category: 'Basics' },
  // Food & Drink
  { georgian: 'წყალი', english: 'Water', pronunciation: 'ts-ka-li', category: 'Food' },
  { georgian: 'ღვინო', english: 'Wine', pronunciation: 'gh-vi-no', category: 'Food' },
  { georgian: 'ლუდი', english: 'Beer', pronunciation: 'lu-di', category: 'Food' },
  { georgian: 'ყავა', english: 'Coffee', pronunciation: 'ka-va', category: 'Food' },
  { georgian: 'ჩაი', english: 'Tea', pronunciation: 'chai', category: 'Food' },
  { georgian: 'პური', english: 'Bread', pronunciation: 'pu-ri', category: 'Food' },
  { georgian: 'ხაჭაპური', english: 'Khachapuri', pronunciation: 'kha-cha-pu-ri', category: 'Food' },
  { georgian: 'ხინკალი', english: 'Khinkali (dumplings)', pronunciation: 'khin-ka-li', category: 'Food' },
  { georgian: 'მწვადი', english: 'BBQ/Shashlik', pronunciation: 'mts-va-di', category: 'Food' },
  { georgian: 'ხორცი', english: 'Meat', pronunciation: 'khor-tsi', category: 'Food' },
  { georgian: 'თევზი', english: 'Fish', pronunciation: 'tev-zi', category: 'Food' },
  // Navigation & Transport
  { georgian: 'სად არის...?', english: 'Where is...?', pronunciation: 'sad a-ris?', category: 'Navigation' },
  { georgian: 'მეტრო', english: 'Metro', pronunciation: 'met-ro', category: 'Transport' },
  { georgian: 'ტაქსი', english: 'Taxi', pronunciation: 'tak-si', category: 'Transport' },
  { georgian: 'ავტობუსი', english: 'Bus', pronunciation: 'av-to-bu-si', category: 'Transport' },
  { georgian: 'მარჯვნივ', english: 'Right', pronunciation: 'mar-jv-niv', category: 'Navigation' },
  { georgian: 'მარცხნივ', english: 'Left', pronunciation: 'mar-tskh-niv', category: 'Navigation' },
  { georgian: 'პირდაპირ', english: 'Straight', pronunciation: 'pir-da-pir', category: 'Navigation' },
  // Shopping & Money
  { georgian: 'რამდენი ღირს?', english: 'How much?', pronunciation: 'ram-de-ni ghirs?', category: 'Shopping' },
  { georgian: 'ძვირია', english: 'Expensive', pronunciation: 'dzvi-ri-a', category: 'Shopping' },
  { georgian: 'იაფია', english: 'Cheap', pronunciation: 'ia-fi-a', category: 'Shopping' },
  { georgian: 'ლარი', english: 'Lari (currency)', pronunciation: 'la-ri', category: 'Shopping' },
  // Housing
  { georgian: 'ბინა', english: 'Apartment', pronunciation: 'bi-na', category: 'Housing' },
  { georgian: 'ქირა', english: 'Rent', pronunciation: 'ki-ra', category: 'Housing' },
  { georgian: 'ოთახი', english: 'Room', pronunciation: 'o-ta-khi', category: 'Housing' },
  // People & Family
  { georgian: 'მეგობარი', english: 'Friend', pronunciation: 'me-go-ba-ri', category: 'People' },
  { georgian: 'დედა', english: 'Mother', pronunciation: 'de-da', category: 'Family' },
  { georgian: 'მამა', english: 'Father', pronunciation: 'ma-ma', category: 'Family' },
  { georgian: 'ძმა', english: 'Brother', pronunciation: 'dzma', category: 'Family' },
  { georgian: 'და', english: 'Sister', pronunciation: 'da', category: 'Family' },
  // Conversation
  { georgian: 'როგორ ხარ?', english: 'How are you?', pronunciation: 'ro-gor khar?', category: 'Conversation' },
  { georgian: 'კარგად ვარ', english: "I'm fine", pronunciation: 'kar-gad var', category: 'Conversation' },
  { georgian: 'მესმის', english: 'I understand', pronunciation: 'mes-mis', category: 'Conversation' },
  { georgian: 'არ მესმის', english: "I don't understand", pronunciation: 'ar mes-mis', category: 'Conversation' },
  // Nature & Places
  { georgian: 'მთა', english: 'Mountain', pronunciation: 'm-ta', category: 'Nature' },
  { georgian: 'ზღვა', english: 'Sea', pronunciation: 'zghva', category: 'Nature' },
  { georgian: 'ტყე', english: 'Forest', pronunciation: 't-ke', category: 'Nature' },
  { georgian: 'მდინარე', english: 'River', pronunciation: 'mdi-na-re', category: 'Nature' },
  // Culture
  { georgian: 'სუფრა', english: 'Georgian feast', pronunciation: 'sup-ra', category: 'Culture' },
  { georgian: 'გაუმარჯოს!', english: 'Cheers!', pronunciation: 'gau-mar-jos!', category: 'Culture' },
  { georgian: 'ტამადა', english: 'Toastmaster', pronunciation: 'ta-ma-da', category: 'Culture' },
  { georgian: 'გენაცვალე', english: 'My dear (term of endearment)', pronunciation: 'ge-nats-va-le', category: 'Culture' },
  // Weather
  { georgian: 'ცხელა', english: "It's hot", pronunciation: 'tskhe-la', category: 'Weather' },
  { georgian: 'ცივა', english: "It's cold", pronunciation: 'tsi-va', category: 'Weather' },
  { georgian: 'წვიმს', english: "It's raining", pronunciation: 'tsvims', category: 'Weather' },
  // Emergency & Health
  { georgian: 'დამეხმარეთ!', english: 'Help me!', pronunciation: 'da-me-khma-ret!', category: 'Emergency' },
  { georgian: 'ექიმი', english: 'Doctor', pronunciation: 'e-ki-mi', category: 'Health' },
  { georgian: 'აფთიაქი', english: 'Pharmacy', pronunciation: 'ap-ti-a-ki', category: 'Health' },
  // Technology
  { georgian: 'ინტერნეტი', english: 'Internet', pronunciation: 'in-ter-ne-ti', category: 'Technology' },
  { georgian: 'პაროლი', english: 'Password', pronunciation: 'pa-ro-li', category: 'Technology' },
  // Slang
  { georgian: 'კაი', english: 'Cool/Okay', pronunciation: 'kai', category: 'Slang' },
  { georgian: 'ძალიან მაგარია', english: "That's awesome", pronunciation: 'dza-li-an ma-ga-ri-a', category: 'Slang' },
  { georgian: 'წავიდეთ!', english: "Let's go!", pronunciation: 'tsa-vi-det!', category: 'Slang' },
  { georgian: 'არაუშავს', english: 'No problem', pronunciation: 'a-ra-u-shavs', category: 'Slang' },
]

export const quizQuestions: QuizQuestion[] = [
  { question: "How do you say 'Hello' in Georgian?", options: ['გამარჯობა', 'ნახვამდის', 'მადლობა', 'კარგად'], correct: 0 },
  { question: "What does 'მადლობა' mean?", options: ['Goodbye', 'Hello', 'Thank you', 'Please'], correct: 2 },
  { question: "How do you ask 'How much?' in Georgian?", options: ['რა დროა?', 'რამდენი ღირს?', 'სად არის?', 'როგორ ხარ?'], correct: 1 },
  { question: "What is the Georgian word for 'water'?", options: ['ღვინო', 'წყალი', 'ჩაი', 'რძე'], correct: 1 },
  { question: "How do you say 'I don't understand'?", options: ['მესმის', 'არ მესმის', 'ვთანხმდები', 'არაუშავს'], correct: 1 },
  { question: "What does 'ბინა' mean?", options: ['House', 'Apartment', 'Room', 'Kitchen'], correct: 1 },
  { question: "What is 'სუფრა'?", options: ['Wine', 'Georgian feast/table', 'Dance', 'Song'], correct: 1 },
  { question: "What does 'მთა' mean?", options: ['Forest', 'River', 'Mountain', 'Lake'], correct: 2 },
  { question: "What does 'გაუმარჯოს!' mean?", options: ['Hello!', 'Goodbye!', 'Cheers!', 'Thank you!'], correct: 2 },
  { question: "How do you say 'Goodbye'?", options: ['გამარჯობა', 'ნახვამდის', 'მადლობა', 'ბოდიში'], correct: 1 },
  { question: "What is 'ტამადა'?", options: ['Chef', 'Toastmaster', 'Waiter', 'Teacher'], correct: 1 },
  { question: "How do you say 'I'm hungry'?", options: ['მცივა', 'მშია', 'მწყურია', 'დაღლილი ვარ'], correct: 1 },
  { question: "What does 'ძაღლი' mean?", options: ['Cat', 'Horse', 'Dog', 'Bird'], correct: 2 },
  { question: "What is the Georgian word for 'Red'?", options: ['ლურჯი', 'მწვანე', 'შავი', 'წითელი'], correct: 3 },
  { question: "How do you say 'Doctor' in Georgian?", options: ['ექიმი', 'აფთიაქი', 'წამალი', 'ოსტატი'], correct: 0 },
  { question: "What does 'გენაცვალე' literally mean?", options: ['My friend', 'Thank you', 'I sacrifice myself for you', 'Beautiful'], correct: 2 },
  { question: "How do you say 'Left' in Georgian?", options: ['მარჯვნივ', 'მარცხნივ', 'პირდაპირ', 'უკან'], correct: 1 },
  { question: "What is 'ქვევრი'?", options: ['A type of bread', 'A clay wine vessel', 'A musical instrument', 'A mountain pass'], correct: 1 },
  { question: "How do you say 'I love you'?", options: ['მოგწონხარ', 'მიყვარხარ', 'მეგობარი ხარ', 'ლამაზი ხარ'], correct: 1 },
  { question: "What does 'პური' mean?", options: ['Wine', 'Water', 'Bread', 'Cheese'], correct: 2 },
  { question: "How do you say 'It's raining'?", options: ['თოვს', 'წვიმს', 'ცხელა', 'ცივა'], correct: 1 },
  { question: "What is 'ფეხბურთი'?", options: ['Basketball', 'Tennis', 'Football', 'Rugby'], correct: 2 },
  { question: "How do you say 'Let's go!'?", options: ['მოდი!', 'წავიდეთ!', 'გაჩერდი!', 'დაიცადე!'], correct: 1 },
  { question: "What does 'ახალი წელი' mean?", options: ['Birthday', 'Christmas', 'New Year', 'Wedding'], correct: 2 },
  { question: "How do you say 'WiFi password' in Georgian?", options: ['ინტერნეტი', 'ვაი-ფაის პაროლი', 'კომპიუტერი', 'ტელეფონი'], correct: 1 },
  { question: "What does 'არაუშავს' mean?", options: ['Very bad', 'No problem', 'Excuse me', 'I disagree'], correct: 1 },
  { question: "How do you say 'Beautiful'?", options: ['დიდი', 'პატარა', 'ლამაზი', 'ძველი'], correct: 2 },
  { question: "What is the emergency number in Georgia?", options: ['999', '911', '112', '100'], correct: 2 },
  { question: "What does 'ბოლომდე!' mean at a supra?", options: ['Slow down!', 'To the bottom! (drink up)', 'More wine!', 'Sit down!'], correct: 1 },
  { question: "How do you say 'I work remotely'?", options: ['ოფისში ვმუშაობ', 'დისტანციურად ვმუშაობ', 'არ ვმუშაობ', 'ბევრს ვმუშაობ'], correct: 1 },
]
