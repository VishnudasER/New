# For Shuttu, With Love ❤️
### *A Personalized Romantic Period-Care, Comfort & Love Sanctuary for Sru ("Shuttu")*

---

> *"Even on your hardest days, you will always have a little corner of love waiting for you."*

## 🌸 About the Project
**For Shuttu, With Love** is a production-quality, mobile-first romantic website built exclusively for **Sru ("Shuttu")**. It is not a generic period tracker or a cold corporate utility; it is designed to feel like opening an enchanting digital gift box—a comforting sanctuary where she feels loved, pampered, understood, and emotionally supported, especially during menstrual discomfort.

---

## ✨ Features & Experiences

1. **Digital Hug Opening Experience (`/`)**
   - Enchanting gateway with floating hearts and stars.
   - Welcoming greeting: *"Hey, my Shuttu! 💗"*
   - Animated cheerful character and the *"Open Your Little World 💌"* unlock button with confetti burst and smooth transitions.

2. **Personalized Dashboard (`/`)**
   - Time-of-day greeting (Morning, Afternoon, Evening, Night) with tender personal notes.
   - Quick navigation cards to all 8 personalized corners.
   - Daily love whisper and gentle reminders.

3. **Period Comfort Corner (`/comfort`)**
   - **Pain Comfort Selector**: Tailored self-care tips for *No discomfort*, *Mild cramps*, *Moderate cramps*, and *Severe pain*.
   - **Interactive Comfort Checklist**: Persists in `localStorage` (Had some water, Had something to eat, Took rest, Used warm compress, Took a break, Smiled).
   - **Pelvic & Cramp Breathing Exercise**: Guided 4-4-4 deep relaxation bubble with rhythmic expanding pulses to relax tight pelvic muscles.
   - **Dynamic Comfort Whispers**: One-click rotation of tender, guilt-free affirmations.
   - **Thoughtful Medical Care Notice**: Emphasizes safety, rest, and seeking medical guidance for severe pain without robotic disclaimers.

4. **Digital Love Letters (`/letters`)**
   - Artisanal envelope cards with custom wax seals.
   - Opens an animated parchment letter modal with heartfelt, personal, natural letters across 7 categories:
     1. *Open when you're in pain*
     2. *Open when you're sad*
     3. *Open when you miss me*
     4. *Open when you feel insecure*
     5. *Open when you can't sleep*
     6. *Open when you need a smile*
     7. *Open when you need to remember how special you are*

5. **The Virtual Hug Experience (`/hugs`)**
   - Custom animated illustration with two cute characters rushing together into a tight loving embrace with squishy physics and floating hearts.
   - 4 Hug Modes: *Tight Hug*, *Gentle Hug*, *Long-Distance Hug*, and *No Words, Just a Hug*.
   - **Hold-to-Hug Button**: Hold down for 2 seconds to deliver a warm, deep embrace.
   - **Live Hug Counter**: Tracks hugs delivered today (saved in `localStorage`).

6. **Minion Surprise Zone (`/minions`)**
   - Cheerful yellow/blue aesthetic celebrating Shuttu's love for Minions.
   - Original custom vector Minion illustration with blinking eyes, overalls, and props.
   - **Banana Feeder**: Feed bananas to raise Stuart's happiness meter!
   - **Random Compliment Generator**: Wholesome, silly Minion compliments.
   - **Make Me Laugh Button**: Cute puns and giggles.

7. **The Food Love Corner (`/food`)**
   - *"If I could bring you anything right now..."* Virtual Food Treat Generator with surprise delivery notes.
   - Categorized wishlists: *Sweet Cravings*, *Warm Comforts*, and *Street & Crunch*.
   - **Live Craving Pad**: Shuttu can add her spontaneous cravings, which persist locally.
   - **Our Future Food Dates & Spots**: Reserved future dining memories.

8. **Travel & Adventure Corner (`/adventures`)**
   - Dreamy mountain illustration with stars, clouds, and tent campfire.
   - Dream Treks (Kedarkantha, Valley of Flowers, Hampta Pass, Triund).
   - Dream Destinations & Wilderness Dates.
   - Interactive *Must Go!* priority bookmarking.

9. **Music & Relaxation Corner (`/music`)**
   - Featured favourite song spotlight: **"Arz Kiya Hai"** with lyrics excerpt, personal memory note, and official Spotify, YouTube, and Apple Music links.
   - **Built-in Ambient Sound Synthesizer**: Pure Web Audio API synthesis generating real, soothing ambient sounds (Gentle Rain, Ocean Waves, Fireplace, Night Crickets, Bell Chimes) with play/pause and volume controls—no copyright issues, works offline!

10. **Daily Mood Check-In (`/mood`)**
    - 8 Mood buttons: *Happy*, *Sleepy*, *Sad*, *Irritated*, *Crampy*, *Tired*, *Emotional*, *Need cuddles*.
    - Empathetic responses tailored to her exact feeling with recommended comfort actions.
    - Mood timeline history.

11. **Secret Surprise Button 🎁**
    - Floating gift button accessible from every page.
    - Confetti blast revealing one of 40+ love notes, reasons I love you, cute jokes, and cuddle vouchers.

---

## 🔒 Authentication & Privacy

- **Server-Side Security**: Protected via Next.js middleware and secure HTTP-only session cookies.
- **HMAC-SHA256 Signed Tokens**: Cookie integrity verified server-side using Web Crypto API.
- **Zero Exposed Secrets**: The password and session secret are managed exclusively through environment variables.
- **Romantic Login UI (`/login`)**: Password visibility toggle, helpful hint drawer, and graceful error handling.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router with Turbopack)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion & Canvas Confetti
- **Icons**: Lucide React
- **Fonts**: Playfair Display (Headings) & DM Sans (Body)
- **Audio**: Web Audio API (real-time ambient synthesizer)
- **Hosting Target**: Vercel

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Create a `.env.local` file in the root directory (or copy from `.env.example`):
```bash
cp .env.example .env.local
```

Edit `.env.local`:
```env
# The password Shuttu will enter to log in (default: shuttu)
SITE_PASSWORD=shuttu

# A secret key used to sign the secure session cookie (32+ characters)
SESSION_SECRET=your-custom-secure-random-secret-key-at-least-32-chars
```

### 3. Run Locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser. Enter password `shuttu` to unlock.

### 4. Build for Production
```bash
npm run build
npm run start
```

---

## 📝 How to Personalize the Content

All personal texts, letters, jokes, food lists, destinations, and surprises are centralized in a single file:
👉 **`src/data/content.ts`**

You can easily open and customize:
- `siteConfig`: Nicknames, main greetings, central promises.
- `loveLetters`: Add or edit any of the 7 heartfelt letters.
- `painLevelsData`: Adjust period comfort suggestions.
- `minionCompliments` & `minionJokes`: Add custom jokes or inside humor.
- `virtualFoodTreats` & `foodWishlistCategories`: Her favorite foods & snacks.
- `adventureBucketList`: Your dream treks and travel spots.
- `secretSurprises`: Add your own reasons why you love her, date coupons, and sweet memories.

---

## 🌐 Deploying to Vercel

1. Push your repository to **GitHub** (or GitLab/Bitbucket).
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Select your repository.
4. In the **Environment Variables** section on Vercel, add:
   - `SITE_PASSWORD` = `[your chosen password]`
   - `SESSION_SECRET` = `[a random 32+ character string]`
5. Click **Deploy**!
6. Once deployed, share the link with Shuttu along with the password hint. ❤️

