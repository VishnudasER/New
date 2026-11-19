// Centralized Content & Personalization File for "For Shuttu, With Love"
// You can edit any messages, foods, treks, dates, or surprises right here!

export interface LoveLetter {
  id: string;
  category: string;
  envelopeTitle: string;
  preview: string;
  content: string[];
  signOff: string;
  accentColor: string;
  icon: string;
}

export interface PainLevelOption {
  level: "none" | "mild" | "moderate" | "severe";
  label: string;
  emoji: string;
  headline: string;
  description: string;
  comfortTips: string[];
  requiresMedicalNote?: boolean;
}

export interface HugType {
  id: string;
  title: string;
  emoji: string;
  tagline: string;
  message: string;
  durationSeconds: number;
}

export interface FoodItem {
  id: string;
  name: string;
  category: "sweet" | "comfort" | "munchies" | "street";
  description: string;
  emoji: string;
}

export interface FoodTreat {
  id: string;
  title: string;
  emoji: string;
  description: string;
  note: string;
}

export interface AdventureItem {
  id: string;
  title: string;
  type: "trek" | "destination" | "date";
  location: string;
  highlight: string;
  dreamSeason: string;
  tag: string;
}

export interface MoodOption {
  id: string;
  label: string;
  emoji: string;
  headline: string;
  response: string;
  suggestedAction: {
    label: string;
    href: string;
    icon: string;
  };
}

export interface SurpriseGift {
  id: number;
  type: "compliment" | "love-note" | "reason" | "joke" | "promise" | "hug";
  badge: string;
  emoji: string;
  text: string;
}

// -------------------------------------------------------------
// SITE CONTENT CONFIGURATION
// -------------------------------------------------------------

export const siteConfig = {
  partnerNickname: "Shuttu",
  partnerRealName: "Sru",
  senderName: "Your Boy",
  siteTitle: "For Shuttu, With Love",
  openingGreeting: "Hey, my Shuttu! 💗",
  openingSubtitle:
    "I made a little something for you. A tiny corner of the internet where everything is about you.",
  openButtonText: "Open Your Little World 💌",
  mainGreeting: "Hello, Shuttu! 🌷",
  mainSubtitle:
    "On days when the world feels a little too much, I hope this little corner reminds you how loved you are.",
  centralPromise:
    "Even on your hardest days, you will always have a little corner of love waiting for you.",
};

// Time-based greetings for dashboard
export const timeGreetings = {
  morning: {
    greeting: "Good morning, my sweet Shuttu ☀️",
    subtext: "I hope you wake up gently today. Don't forget to sip some warm water and stretch like a soft kitten.",
  },
  afternoon: {
    greeting: "Good afternoon, my Shuttu 🌸",
    subtext: "Pause whatever you're doing for just ten seconds, drop your shoulders, and breathe. You're doing great.",
  },
  evening: {
    greeting: "Good evening, my love 🌅",
    subtext: "The sun is setting, and you survived another busy day. Time to slow down, put on your comfiest clothes, and relax.",
  },
  night: {
    greeting: "Good night, my precious Shuttu 🌙",
    subtext: "The whole world is quiet now. Let go of every worry, snuggle into your softest blanket, and know that you are deeply loved.",
  },
};

// -------------------------------------------------------------
// LOVE LETTERS (7 categories, deeply heartfelt & natural)
// -------------------------------------------------------------

export const loveLetters: LoveLetter[] = [
  {
    id: "pain",
    category: "pain",
    envelopeTitle: "Open when you're in pain",
    preview: "For the heavy crampy hours when your body feels weary and everything aches...",
    accentColor: "from-rose-100 to-pink-200 border-rose-300",
    icon: "🌸",
    content: [
      "Hey, my poor baby,",
      "I know how agonizing and draining these days can be. I wish more than anything that I could take the pain away from your lower belly and carry it myself so you could just lie back and smile.",
      "Right now, please give yourself full permission to surrender to rest. You don't need to be strong, you don't need to answer messages, and you certainly don't need to push yourself through the day.",
      "Get that warm heating pad, tuck your knees up toward your chest, and pull the softest quilt over your shoulders. Picture me sitting right beside you, gently rubbing your back and running my fingers softly through your hair until you drift off to sleep.",
      "You are so strong, Shuttu, but you don't have to prove it today. Just rest, my love.",
    ],
    signOff: "Holding you tight from afar, always ❤️",
  },
  {
    id: "sad",
    category: "sad",
    envelopeTitle: "Open when you're sad",
    preview: "For the quiet moments when a heavy cloud sits over your heart...",
    accentColor: "from-purple-100 to-pink-100 border-purple-300",
    icon: "🌧️",
    content: [
      "Come here, Shuttu.",
      "First of all, take a deep breath. You don't have to explain why you feel sad, and you don't have to find logical reasons for the heaviness in your chest. Sometimes the world is just loud, tired, and overwhelming, and that is okay.",
      "Your feelings will never be too much for me. I love you on the days when you are bubbling with laughter, and I love you with the exact same depth on the days when tears are sitting silently behind your eyes.",
      "If you want to vent, I will listen to every single word. If you just want to sit together in comfortable silence, I'll hold your hand without asking a thing.",
      "Remember: this heavy cloud is passing through. The blue sky underneath hasn't gone anywhere, and neither have I.",
    ],
    signOff: "Forever your safest shelter, with all my love ❤️",
  },
  {
    id: "miss-me",
    category: "miss-me",
    envelopeTitle: "Open when you miss me",
    preview: "When the distance feels a little too loud and you wish I was right there...",
    accentColor: "from-amber-100 to-rose-200 border-rose-300",
    icon: "💌",
    content: [
      "My sweet girl,",
      "I know that longing feeling all too well, because not an hour goes by where my thoughts don't wander off to you. I miss the silly little faces you make, the sound of your spontaneous giggle, and how perfectly your head fits right on my chest.",
      "Close your eyes for three seconds. Feel that warmth? That is me thinking of you at this exact moment. Miles cannot dilute how tightly we are stitched together.",
      "Soon enough, we won't be looking at screens or counting days. We'll be walking together under mountain skies, sharing warm parathas, and arguing over what dessert to order next.",
      "Until then, keep this letter close. I'm right here with you, always.",
    ],
    signOff: "Yours in every second and every heartbeat ❤️",
  },
  {
    id: "insecure",
    category: "insecure",
    envelopeTitle: "Open when you feel insecure",
    preview: "When those silly doubts sneak in and make you question yourself...",
    accentColor: "from-pink-100 to-rose-100 border-pink-300",
    icon: "🪞",
    content: [
      "Hey you,",
      "Stop listening to whatever mean little whisper is playing inside your head right now. That voice has no idea what it's talking about.",
      "I wish you could step outside of yourself for just five minutes and look at Shuttu through my eyes. You would see someone whose kindness fills an entire room, someone with the most expressive, captivating eyes, and someone whose presence makes my life feel infinitely richer.",
      "You don't need to be flawless, you don't need to match any unrealistic standard, and you never have to earn my admiration. You have had my whole heart from the start, exactly as you are.",
      "You are gorgeous, you are brilliant, and you are so thoroughly loved.",
    ],
    signOff: "Your forever number-one fan ❤️",
  },
  {
    id: "sleep",
    category: "sleep",
    envelopeTitle: "Open when you can't sleep",
    preview: "When the clock strikes midnight and your mind is still racing...",
    accentColor: "from-indigo-100 to-purple-200 border-indigo-300",
    icon: "🌙",
    content: [
      "Shhh, my sleepyhead,",
      "Turn your screen brightness down, relax your jaw, unclench your fists, and let your head sink deep into the pillow. Everything you are worrying about can wait until tomorrow.",
      "Tonight, there is nothing for you to solve, nothing to plan, and nowhere you need to rush to. The universe has tucked the sun into bed, and now it's your turn to rest.",
      "Imagine us setting up a cozy tent on a quiet hill under a million twinkling stars. The air is cool and crisp, a soft fire crackles nearby, and you are wrapped securely inside my arms.",
      "Drift off safely, Shuttu. I'll be waiting for you in tomorrow's sunshine.",
    ],
    signOff: "Sweetest dreams, my little star 🌟",
  },
  {
    id: "smile",
    category: "smile",
    envelopeTitle: "Open when you need a smile",
    preview: "A little dose of goofy sunshine to light up your face right now...",
    accentColor: "from-yellow-100 to-amber-200 border-amber-300",
    icon: "☀️",
    content: [
      "Attention please! 🚨",
      "This is an urgent official dispatch from the International Bureau of Adorable Humans: Sru (aka Shuttu) is hereby required to deploy at least one genuine grin immediately.",
      "Did you know that your smile is literally my favorite thing in the universe? It's so cute that if scientists could bottle it, it would power a small city and put energy companies out of business.",
      "Think of Minions singing nonsensical songs, think of warm melted cheese pulling apart, think of us stumbling up a mountain trail breathless and bursting into giggles.",
      "See? There it is. I can feel you smiling right now. Keep it there, cutie!",
    ],
    signOff: "Sending 10,000 giggles your way ❤️",
  },
  {
    id: "special",
    category: "special",
    envelopeTitle: "Open when you need to remember how special you are",
    preview: "Just a gentle reminder of the magic you bring into this world...",
    accentColor: "from-fuchsia-100 to-pink-200 border-fuchsia-300",
    icon: "✨",
    content: [
      "My dearest Shuttu,",
      "Sometimes life gets so routine and frantic that we forget how remarkable we are. So consider this your personal certificate of extraordinary existence.",
      "The way you care about the people around you, your adventurous spirit that dreams of mountain summits, the fierce passion you carry, and the way you can find pure joy in delicious food—you are a masterpiece of a human being.",
      "Out of all the billions of people walking this planet, I was lucky enough to find you, to know you, and to love you. That is the greatest gift of my life.",
      "Never forget who you are: my brilliant, beautiful, unforgettable Shuttu.",
    ],
    signOff: "Proud of you always and forever ❤️",
  },
];

// -------------------------------------------------------------
// PERIOD COMFORT CORNER DATA
// -------------------------------------------------------------

export const painLevelsData: Record<string, PainLevelOption> = {
  none: {
    level: "none",
    label: "Feeling Good / No Discomfort",
    emoji: "🌸",
    headline: "Yay! Today is a bright and gentle day.",
    description: "So happy your body is feeling easy right now, baby. Let's keep the good vibes rolling!",
    comfortTips: [
      "Enjoy a nice walk or some gentle stretching in the fresh air.",
      "Stay well-hydrated with your favorite cool or room-temp drink.",
      "Treat yourself to a delicious snack—you've earned it!",
      "Save extra energy for the things that spark joy for you.",
    ],
  },
  mild: {
    level: "mild",
    label: "Mild Cramps / Slight Aches",
    emoji: "☕",
    headline: "A little tender, but manageable with some TLC.",
    description: "Your body is working hard. A little warmth and slowdown will make a world of difference.",
    comfortTips: [
      "Sip a warm cup of herbal tea, hot water with lemon, or cocoa.",
      "Wear your loosest, softest cotton pajamas and fluffy socks.",
      "Place a warm cloth or gentle heating pad on your lower tummy.",
      "Do some gentle cat-cow or child's pose stretches if they feel soothing.",
    ],
  },
  moderate: {
    level: "moderate",
    label: "Moderate Cramps / Uncomfortable",
    emoji: "🧸",
    headline: "Heating pad mode fully engaged. Please rest, my love.",
    description: "I'm right here with you in spirit. Curl up, cancel unnecessary plans, and take it one hour at a time.",
    comfortTips: [
      "Use your heating pad or hot water bag continuously over lower abdomen and lower back.",
      "Take a warm bath or a slow, steamy shower to relax tight pelvic muscles.",
      "Tuck a pillow between your knees while lying on your side to relieve lower back pressure.",
      "Eat warm, easily digestible comfort food (warm soup, khichdi, or porridge).",
      "Turn off harsh overhead lights and put on cozy ambient sounds.",
    ],
  },
  severe: {
    level: "severe",
    label: "Severe Pain / Feeling Overwhelmed",
    emoji: "🩺",
    headline: "My heart aches seeing you hurt. Let's prioritize your care.",
    description:
      "Sweetheart, your comfort and well-being are everything. Please prioritize deep rest and don't hesitate to seek medical guidance if needed.",
    comfortTips: [
      "Lie down in a dark, quiet room with support pillows under your knees and back.",
      "Keep a warm compress on your abdomen and maintain deep, gentle belly breathing.",
      "Sip small amounts of warm electrolyte water or warm ginger broth.",
      "If you have a doctor-approved pain management plan or prescribed remedies, follow medical instructions carefully.",
    ],
    requiresMedicalNote: true,
  },
};

export const medicalDisclaimer =
  "Caring Note: While warm compresses, hydration, and restful self-care provide comfort, this website is not a medical provider. If you experience sudden, unusually severe, worsening pain, heavy dizziness, or symptoms that feel abnormal, please reach out to your doctor or healthcare professional. Your health is the most precious thing in the world.";

export const comfortMessages = [
  "You're allowed to slow down today.",
  "You don't have to be productive every single second.",
  "Take a deep breath, Shuttu. One moment at a time.",
  "Sending you the biggest virtual hug right into your chest.",
  "Today, your only job is to be gentle with yourself.",
  "Wrap yourself in blankets like a happy little burrito.",
  "Your body is doing incredible work right now; treat it like royalty.",
  "If all you did today was rest and survive, that is more than enough.",
  "You are safe, you are loved, and this cramp will pass.",
];

export const comfortChecklistDefault = [
  { id: "water", label: "Had some water or warm tea 💧", done: false },
  { id: "food", label: "Had something nourishing to eat 🍲", done: false },
  { id: "rest", label: "Took some quiet rest lying down 🛌", done: false },
  { id: "warmth", label: "Used a heating pad or warm compress ♨️", done: false },
  { id: "break", label: "Took a little break from screens or work 🧘‍♀️", done: false },
  { id: "smile", label: "Did something that made me smile 💖", done: false },
];

// -------------------------------------------------------------
// VIRTUAL HUG DATA
// -------------------------------------------------------------

export const hugTypes: HugType[] = [
  {
    id: "tight",
    title: "Tight Hug",
    emoji: "🫂",
    tagline: "Wrap-around, squeeze-tight, never-let-go hug",
    message:
      "Wrapping both arms completely around you, lifting you up on your tiptoes just an inch, and squeezing until all the tension melts out of your shoulders. You are completely safe here.",
    durationSeconds: 4,
  },
  {
    id: "gentle",
    title: "Gentle Hug",
    emoji: "🌸",
    tagline: "Soft, tender embrace with a forehead kiss",
    message:
      "A soft, feather-light embrace, pulling you close against my chest, smoothing your hair down, and pressing a long, warm kiss right against your forehead.",
    durationSeconds: 3,
  },
  {
    id: "long-distance",
    title: "Long-Distance Hug",
    emoji: "✈️",
    tagline: "Across all the miles, straight into your heart",
    message:
      "Distance might keep us physically apart, but close your eyes for a second. That warmth you feel right around your heart? That is me holding you through the airwaves.",
    durationSeconds: 5,
  },
  {
    id: "no-words",
    title: "No Words, Just a Hug",
    emoji: "🤍",
    tagline: "Total quiet, steady heartbeat, pure safety",
    message:
      "No explanations needed. No questions asked. Just my chin resting gently on your head, matching our breaths, and holding you until the world feels calm again.",
    durationSeconds: 4,
  },
];

// -------------------------------------------------------------
// MINION SURPRISE ZONE DATA 💛
// -------------------------------------------------------------

export const minionCompliments = [
  "Official announcement: Shuttu is the cutest human alive on planet Earth!",
  "Bananaaaa! Even bananas know how extraordinary you are, Shuttu!",
  "Minion-level happiness activated because Shuttu just smiled! 🍌",
  "Warning: Sru's cuteness levels have exceeded the maximum safe laboratory threshold!",
  "Bello! Stuart, Kevin, and Bob have officially voted Shuttu their favorite person!",
  "If I had a banana for every time you looked adorable, I would own a whole banana plantation!",
  "Bee-do bee-do bee-do! Emergency alert: Shuttu needs 100 kisses immediately!",
  "Poo-kay! Your smile just solved 99% of all global grumpiness!",
];

export const minionJokes = [
  {
    setup: "Why did the Minion put his bed in the fireplace?",
    punchline: "Because he wanted to sleep like a log! (Just like Shuttu during nap time! 😂)",
  },
  {
    setup: "What do you call a Minion who loves trekking like Shuttu?",
    punchline: "A Peak-a-boo adventurer! 🏔️🍌",
  },
  {
    setup: "Why are bananas never lonely?",
    punchline: "Because they always hang out in bunches! Just like my thoughts hang around you! 💛",
  },
  {
    setup: "What did Bob say when he saw Shuttu?",
    punchline: "Bello gorgeous! Tulaliloo ti amo! (That means 'You are the prettiest' in Minion!) 🥰",
  },
  {
    setup: "How do you know Shuttu is extra powerful today?",
    punchline: "Because even Gru's shrink ray couldn't diminish her radiant energy! ✨",
  },
];

// -------------------------------------------------------------
// FOOD LOVE CORNER DATA 🍓
// -------------------------------------------------------------

export const virtualFoodTreats: FoodTreat[] = [
  {
    id: "hot-chocolate",
    title: "Steaming Hot Chocolate with Marshmallows",
    emoji: "☕",
    description: "Thick, decadent dark chocolate topped with pillowy toasted marshmallows.",
    note: "Made with extra love to soothe your soul and warm you from the inside out.",
  },
  {
    id: "peri-peri-fries",
    title: "Crispy Peri-Peri Loaded Fries",
    emoji: "🍟",
    description: "Golden, crunchy fries dusted with fiery peri-peri seasoning and drizzled with cheese dip.",
    note: "Because savory crunch is the ultimate mood booster when you want something flavorful!",
  },
  {
    id: "truffle-pasta",
    title: "Creamy Truffle Mushroom Pasta",
    emoji: "🍝",
    description: "Silky fettuccine coated in a velvety garlic-parmesan cream sauce with sautéed mushrooms.",
    note: "Rich, comforting, and guaranteed to make you do a happy little food dance.",
  },
  {
    id: "cheesecake",
    title: "Strawberry New York Cheesecake",
    emoji: "🍰",
    description: "Dense, velvety cheesecake with a buttery graham crust and ruby strawberry compote.",
    note: "Sweet, tangy, and as pretty and special as you are, baby.",
  },
  {
    id: "steaming-ramen",
    title: "Steaming Bowl of Cozy Ramen",
    emoji: "🍜",
    description: "Savory broth with bouncy noodles, soft-boiled marinated egg, and fragrant sesame oil.",
    note: "Slurping this together while it's pouring rain outside is our official upcoming date.",
  },
  {
    id: "croissant",
    title: "Warm Hazelnut Nutella Croissant",
    emoji: "🥐",
    description: "Flaky, buttery French pastry oozing with warm hazelnut spread and dusted with cocoa.",
    note: "Every bite tastes like a warm hug for your tastebuds.",
  },
  {
    id: "momos",
    title: "Steaming Hot Darjeeling Momos",
    emoji: "🥟",
    description: "Tender steamed dumplings served with fiery red spicy chutney and warm clear soup.",
    note: "Best enjoyed in chilly hill-station breeze with your hand in mine.",
  },
  {
    id: "boba",
    title: "Brown Sugar Pearl Milk Tea",
    emoji: "🧋",
    description: "Chilled creamy milk tea marbled with warm tiger brown sugar pearls.",
    note: "Chewy, sweet, and pure joy with every sip!",
  },
];

export const foodWishlistCategories = [
  {
    category: "Sweet Cravings",
    emoji: "🍓",
    items: [
      "Strawberry glazed donuts with custard filling",
      "Molten lava cake with vanilla bean ice cream",
      "Pistachio gelato in a waffle cone",
      "Tiramisu with rich espresso cream",
    ],
  },
  {
    category: "Warm Comforts",
    emoji: "🍲",
    items: [
      "Creamy tomato soup with crispy grilled cheese soldiers",
      "Garlic butter naan with rich butter chicken gravy",
      "Spicy Dan Dan noodles with toasted crushed peanuts",
      "Homestyle hot parathas with a melting dollop of white butter",
    ],
  },
  {
    category: "Street & Crunch",
    emoji: "🥟",
    items: [
      "Crispy kathi roll with extra mint chutney",
      "Fiery chili garlic momos with spicy broth",
      "Cheesy loaded nachos with fresh guacamole",
      "Golden spring rolls with sweet chili dip",
    ],
  },
];

export const foodDatesList = [
  {
    title: "Rooftop Candlelit Italian Feast",
    place: "Our favorite cozy Italian bistro",
    highlight: "Sharing creamy pasta, garlic bread, and laughing till the staff starts packing up.",
  },
  {
    title: "Midnight Drive-Thru Ice Cream Run",
    place: "Windows down, city lights blur",
    highlight: "Eating waffle cones on the car hood while our favorite songs play on low volume.",
  },
  {
    title: "Rainy Day Hillside Momo Trail",
    place: "A misty hill station stall",
    highlight: "Hands shivering in the mountain chill, savoring spicy momos and hot tea together.",
  },
  {
    title: "Sunday Morning Pancake Workshop",
    place: "Our future cozy kitchen",
    highlight: "Flour on your nose, blueberry syrup everywhere, and unhurried Sunday morning cuddles.",
  },
];

// -------------------------------------------------------------
// TRAVEL & ADVENTURE CORNER DATA 🏔️
// -------------------------------------------------------------

export const adventureBucketList: AdventureItem[] = [
  {
    id: "kedarkantha",
    title: "Kedarkantha Winter Snow Trek",
    type: "trek",
    location: "Uttarakhand, Himalayas",
    highlight: "Crunching through waist-deep snow at 12,500 ft and watching sunrise set peaks on fire.",
    dreamSeason: "Winter (Dec - Feb)",
    tag: "Snow Summit",
  },
  {
    id: "valley-of-flowers",
    title: "Valley of Flowers Alpine Hike",
    type: "trek",
    location: "Garhwal Himalayas",
    highlight: "Walking hand in hand through endless carpets of wild alpine blossoms and cascading streams.",
    dreamSeason: "Monsoon (July - Aug)",
    tag: "Botanical Wonder",
  },
  {
    id: "hampta-pass",
    title: "Hampta Pass Crossover",
    type: "trek",
    location: "Manali to Spiti Valley",
    highlight: "Transforming from lush green Kullu pine forests into the dramatic, moon-like desert of Spiti.",
    dreamSeason: "Summer (June - Sept)",
    tag: "Dramatic Landscape",
  },
  {
    id: "triund",
    title: "Triund Starry Night Camp",
    type: "trek",
    location: "Dharamshala, Himachal Pradesh",
    highlight: "Pitching a tent overlooking the glittering Kangra valley beneath a galaxy of crystal stars.",
    dreamSeason: "Spring / Autumn",
    tag: "Stargazing Haven",
  },
  {
    id: "switzerland",
    title: "Swiss Alpine Meadows & Jungfrau",
    type: "destination",
    location: "Grindelwald, Switzerland",
    highlight: "Wooden chalets, sound of cowbells across emerald slopes, and eating Swiss fondue after a hike.",
    dreamSeason: "Late Spring / Summer",
    tag: "Dream Escape",
  },
  {
    id: "kyoto",
    title: "Kyoto Bamboo Groves & Lantern Paths",
    type: "destination",
    location: "Kyoto, Japan",
    highlight: "Quiet morning strolls through Arashiyama bamboo forest and sipping matcha in traditional gardens.",
    dreamSeason: "Spring Blossom / Autumn Foliage",
    tag: "Peaceful Exploration",
  },
  {
    id: "cabin-getaway",
    title: "Cozy Mountain Cabin with Wood Stove",
    type: "date",
    location: "Secluded Pine Forest Valley",
    highlight: "Drinking hot cider in oversized sweaters by a roaring fireplace while rain taps on the roof.",
    dreamSeason: "Autumn / Winter",
    tag: "Pure Romance",
  },
  {
    id: "lake-camp",
    title: "Lakeside Campfire & Fairy Lights",
    type: "date",
    location: "Quiet Mountain Lake",
    highlight: "Roasting marshmallows over embers, wrapped inside one shared sleeping bag under the Milky Way.",
    dreamSeason: "Clear Sky Nights",
    tag: "Magic Memories",
  },
];

// -------------------------------------------------------------
// MUSIC & RELAXATION CORNER DATA 🎵
// -------------------------------------------------------------

export const musicData = {
  featuredSong: {
    title: "Arz Kiya Hai",
    artist: "Her Favourite Song",
    tagline: "The melody that sounds like home whenever I think of you",
    albumArtBg: "from-rose-400 via-pink-500 to-purple-600",
    lyricsSnippet:
      "Kuch toh hai jo hum hai itne paas...\nTere aane se saanson mein ghuli ek meethi si pyaas...\nArz kiya hai, har lafz tera mere dil ka sukoon ban gaya.",
    personalNote:
      "Every time this song plays, the background noise of the entire world fades away and all I see is your smile, Shuttu. It's gentle, poetic, and intimate—just like you.",
    spotifySearchUrl: "https://open.spotify.com/search/Arz%20Kiya%20Hai",
    youtubeSearchUrl: "https://www.youtube.com/results?search_query=Arz+Kiya+Hai+song",
    appleMusicSearchUrl: "https://music.apple.com/search?term=Arz+Kiya+Hai",
  },
  ambientSounds: [
    {
      id: "rain",
      name: "Gentle Window Rain",
      emoji: "🌧️",
      description: "Soft raindrops tapping quietly against glass panes.",
      color: "from-blue-100 to-indigo-100",
    },
    {
      id: "ocean",
      name: "Tranquil Ocean Waves",
      emoji: "🌊",
      description: "Rhythmic rolling surf washing onto a smooth sandy shore.",
      color: "from-cyan-100 to-teal-100",
    },
    {
      id: "fire",
      name: "Warm Cabin Fireplace",
      emoji: "🔥",
      description: "Cozy crackling logs and soothing ambient hearth warmth.",
      color: "from-amber-100 to-orange-100",
    },
    {
      id: "night",
      name: "Starry Night Crickets",
      emoji: "🦗",
      description: "Peaceful country night breeze and soft cricket chirps.",
      color: "from-purple-100 to-violet-100",
    },
    {
      id: "chimes",
      name: "Soft Zen Bell Chimes",
      emoji: "🎐",
      description: "Delicate meditative wind chimes swaying in garden breeze.",
      color: "from-rose-100 to-pink-100",
    },
  ],
};

// -------------------------------------------------------------
// MOOD CHECK-IN DATA 💗
// -------------------------------------------------------------

export const moodOptions: MoodOption[] = [
  {
    id: "happy",
    label: "Happy & Vibrant",
    emoji: "😊",
    headline: "Your happiness is literally my favorite glow!",
    response:
      "Seeing you happy makes my whole universe bright. Whatever is making you smile right now, soak it all in. You deserve every ounce of sunshine today!",
    suggestedAction: {
      label: "Check out fun Minion cheer",
      href: "/minions",
      icon: "💛",
    },
  },
  {
    id: "sleepy",
    label: "Sleepy & Drowsy",
    emoji: "😴",
    headline: "Time to close those pretty eyes, my sleepyhead.",
    response:
      "Don't fight the sleepiness, sweetheart. Put your phone away, crawl under the softest blanket, and let yourself float away into dreamland. I'll watch over you.",
    suggestedAction: {
      label: "Read Open When You Can't Sleep",
      href: "/letters",
      icon: "💌",
    },
  },
  {
    id: "sad",
    label: "Sad & Heavy",
    emoji: "🥺",
    headline: "Come here, baby. You don't have to explain everything.",
    response:
      "I wish I could wrap my arms around you right now and hold you tight until the sadness dissipates. You don't have to put on a brave face. I am right here with you, always.",
    suggestedAction: {
      label: "Collect a tight virtual hug",
      href: "/hugs",
      icon: "🫂",
    },
  },
  {
    id: "irritated",
    label: "Irritated / Overwhelmed",
    emoji: "😤",
    headline: "Today is a strict no-pressure zone.",
    response:
      "If the world is testing your patience today, take a deep breath and step back. You don't owe anyone explanations or endless energy. You deserve patience, calm, and kindness.",
    suggestedAction: {
      label: "Try soothing breathing & ambient sounds",
      href: "/music",
      icon: "🎵",
    },
  },
  {
    id: "crampy",
    label: "Crampy / Period Discomfort",
    emoji: "🌸",
    headline: "Let's get you comfortable, my love.",
    response:
      "I know how exhausting this ache is. Heating pad on, comfiest clothes, warm sips, and zero chores. Let me pamper you through your comfort corner.",
    suggestedAction: {
      label: "Open Period Comfort Corner",
      href: "/comfort",
      icon: "🌸",
    },
  },
  {
    id: "tired",
    label: "Physically Exhausted",
    emoji: "🥱",
    headline: "Rest, sweetheart. The world can wait.",
    response:
      "You give so much of your energy to everything you do. Lie back, prop your feet up, and give your body the rest it has earned so thoroughly.",
    suggestedAction: {
      label: "Listen to relaxing ambient rain",
      href: "/music",
      icon: "🌧️",
    },
  },
  {
    id: "emotional",
    label: "Emotional & Tender",
    emoji: "🥺",
    headline: "Every single feeling you have is valid and safe.",
    response:
      "When hormones or emotions rise up like waves, remember you don't have to hold them back. Let yourself feel, cry if you need to, and know that you are unconditionally cherished.",
    suggestedAction: {
      label: "Read Love Letters written for you",
      href: "/letters",
      icon: "💌",
    },
  },
  {
    id: "cuddles",
    label: "Need Cuddles",
    emoji: "🫂",
    headline: "Wrapping you in the biggest blanket burrito right now!",
    response:
      "If I were there right now, I'd pull you onto my lap, wrap both arms around your waist, bury my face in your neck, and not let go for hours.",
    suggestedAction: {
      label: "Hold to send a long hug",
      href: "/hugs",
      icon: "🫂",
    },
  },
];

// -------------------------------------------------------------
// SECRET SURPRISE BUTTON POOL (40+ sweet surprises)
// -------------------------------------------------------------

export const secretSurprises: SurpriseGift[] = [
  {
    id: 1,
    type: "compliment",
    badge: "Sweet Compliment",
    emoji: "✨",
    text: "You have the most captivating eyes in the world. When you look at me and smile, time literally stops.",
  },
  {
    id: 2,
    type: "reason",
    badge: "Reason I Love You #14",
    emoji: "💖",
    text: "I love the way your nose scrunches up when you giggle really hard at silly jokes.",
  },
  {
    id: 3,
    type: "love-note",
    badge: "Love Note",
    emoji: "💌",
    text: "Out of all 8 billion people on this planet, my heart picked you without a second thought. And it picks you again every single morning.",
  },
  {
    id: 4,
    type: "hug",
    badge: "Virtual Hug",
    emoji: "🫂",
    text: "A surprise tight squeeze delivered straight to you! Arms wrapped tight, forehead kissed, warmth delivered.",
  },
  {
    id: 5,
    type: "promise",
    badge: "Future Promise",
    emoji: "🏔️",
    text: "I promise we are going to reach a mountain peak together, sit in the crisp morning chill, and share a steaming cup of tea while looking at the clouds beneath us.",
  },
  {
    id: 6,
    type: "joke",
    badge: "Cute Joke",
    emoji: "🍌",
    text: "Are you a magician? Because whenever I look at you, everyone else disappears! (Minion approved cheese factor: 100%)",
  },
  {
    id: 7,
    type: "reason",
    badge: "Reason I Love You #27",
    emoji: "🍓",
    text: "I love how passionate you get about delicious food. Watching you enjoy a great meal is one of my favorite sights.",
  },
  {
    id: 8,
    type: "compliment",
    badge: "Daily Truth",
    emoji: "👑",
    text: "You handle so many responsibilities with grace, even when nobody is looking. You are extraordinary, Shuttu.",
  },
  {
    id: 9,
    type: "love-note",
    badge: "Sweet Reminder",
    emoji: "🌷",
    text: "Whenever you feel overwhelmed, remember: you are my home. And you will always have my unconditional love.",
  },
  {
    id: 10,
    type: "promise",
    badge: "Food Date Promise",
    emoji: "🍝",
    text: "Next time we are together, dinner is 100% on me: whatever you are craving, whether it's cheesy pasta or late-night street food, we're having a feast!",
  },
  {
    id: 11,
    type: "reason",
    badge: "Reason I Love You #08",
    emoji: "🧸",
    text: "I love how soft and caring your heart is. You care so deeply about the people in your life.",
  },
  {
    id: 12,
    type: "compliment",
    badge: "Cutie Alert",
    emoji: "🌸",
    text: "You look effortlessly gorgeous, whether you're all dressed up or in cozy oversized pajamas with messy hair.",
  },
  {
    id: 13,
    type: "hug",
    badge: "Warm Snuggle",
    emoji: "🛌",
    text: "Tucking you into the softest imaginary blanket burrito right now. Rest your head, sweetheart.",
  },
  {
    id: 14,
    type: "promise",
    badge: "Starry Promise",
    emoji: "🌌",
    text: "One night, we're going to lie side-by-side on a blanket outside our tent, counting shooting stars until we lose count.",
  },
  {
    id: 15,
    type: "love-note",
    badge: "Heart Whisper",
    emoji: "💓",
    text: "You make life feel poetic, Shuttu. Just knowing you exist in my world makes every ordinary day feel special.",
  },
  {
    id: 16,
    type: "reason",
    badge: "Reason I Love You #33",
    emoji: "🎒",
    text: "I love your adventurous spirit—the way your eyes light up when we talk about traveling to new places and hiking scenic trails.",
  },
  {
    id: 17,
    type: "joke",
    badge: "Silly Minion Laugh",
    emoji: "💛",
    text: "Stuart just called: he wants to report an illegal level of cuteness originating from your phone right now!",
  },
  {
    id: 18,
    type: "compliment",
    badge: "Pure Truth",
    emoji: "🌟",
    text: "Your voice has this calming magic that instantly settles my mind, no matter how chaotic my day was.",
  },
  {
    id: 19,
    type: "love-note",
    badge: "Forever Note",
    emoji: "🕊️",
    text: "You will never have to face a hard day alone again. As long as I have breath in my lungs, I'm standing right beside you.",
  },
  {
    id: 20,
    type: "promise",
    badge: "Cuddle Voucher",
    emoji: "🎟️",
    text: "This card entitles Shuttu to unlimited, non-expiring cuddles, back rubs, and forehead kisses whenever she demands them!",
  },
  {
    id: 21,
    type: "reason",
    badge: "Reason I Love You #42",
    emoji: "☕",
    text: "I love how cozy life feels with you. Even just sitting in silence scrolling on our phones feels like heaven beside you.",
  },
  {
    id: 22,
    type: "compliment",
    badge: "Shine Bright",
    emoji: "✨",
    text: "You have a natural kindness that makes people around you feel comfortable and respected. Never lose that gentle glow.",
  },
  {
    id: 23,
    type: "love-note",
    badge: "Arz Kiya Hai",
    emoji: "🎵",
    text: "Tere aane se saanson mein ghuli ek meethi si pyaas... You are the melody that plays constantly in my heart.",
  },
  {
    id: 24,
    type: "hug",
    badge: "Forehead Kiss",
    emoji: "💋",
    text: "A gentle hand cupping your cheek, brushing a stray lock of hair behind your ear, and a tender kiss right on your forehead.",
  },
  {
    id: 25,
    type: "reason",
    badge: "Reason I Love You #19",
    emoji: "🐣",
    text: "I love the cute sounds you make when you're sleepy and trying to stay awake to talk to me.",
  },
];

