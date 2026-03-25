# 🐾 PawedIn — Professional Network for Dogs

> *LinkedIn, but make it dogs.*  
> A fully functional social network built for the most professional animals on the planet.

![PawedIn Banner](https://img.shields.io/badge/PawedIn-Professional%20Network%20for%20Dogs-c8622a?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48dGV4dCB5PSIuOWVtIiBmb250LXNpemU9IjkwIj7wn5C+PC90ZXh0Pjwvc3ZnPg==)
[![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-222?style=for-the-badge&logo=github)](https://pages.github.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-e8b84b?style=for-the-badge)](LICENSE)

---

## ✨ Features

| Feature | Description |
|---|---|
| 🏠 **Home Feed** | Posts from Rex Thunderpaws, Duchess Fluffington & more. Like, comment, repost, share. |
| ✍️ **Post Composer** | Write your own posts. They appear at the top of the feed. |
| 🐕 **Network** | Browse dog profiles, send connection requests, accept pending ones. |
| 💼 **Jobs Board** | Full job listings (Squirrel Analyst, Fetch Engineer, etc.) with apply modal. |
| 😊 **Profile Page** | Full dog profile with experience, skills & endorsements. |
| 🤖 **BarkBot AI** | AI-powered career advisor chatbot (powered by Claude). |
| 🔥 **Trending Hashtags** | Live sidebar with #FetchEconomy and other canine discourse. |
| 📱 **Responsive** | Works on mobile and desktop. |

---

## 🗂️ Project Structure

```
pawedin/
├── index.html          ← Main HTML (all pages)
├── css/
│   ├── style.css       ← Main styles (nav, feed, jobs, profile, modals)
│   └── chat.css        ← BarkBot AI chat widget styles
├── js/
│   ├── data.js         ← All app data (dogs, posts, jobs, skills)
│   ├── app.js          ← Main app logic (rendering, navigation, interactions)
│   └── chat.js         ← BarkBot AI chat logic (Anthropic API)
├── README.md           ← You are here
└── LICENSE             ← MIT License
```

---

## 🚀 Deploy to GitHub Pages (3 steps)

1. **Create a new GitHub repository** (public)
2. **Upload all files** keeping the folder structure intact
3. Go to **Settings → Pages → Source → `main` branch → `/root`** → Save

Your site will be live at:
```
https://YOUR_USERNAME.github.io/REPO_NAME
```

---

## 🤖 BarkBot AI Setup

BarkBot is powered by the **Anthropic Claude API**.

### Running inside claude.ai
The chatbot works automatically — no API key needed.

### Running on your own GitHub Pages / server

Open `js/chat.js` and update the fetch headers:

```javascript
const response = await fetch('https://api.anthropic.com/v1/messages', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': 'YOUR_ANTHROPIC_API_KEY',           // 👈 Add your key here
    'anthropic-version': '2023-06-01',
    'anthropic-dangerous-direct-browser-access': 'true', // Required for browser
  },
  body: JSON.stringify({ ... })
});
```

> ⚠️ **Security Note:** Never commit your API key to a public repo.  
> For production, use a backend proxy server instead of calling the API directly from the browser.

Get your API key at: [console.anthropic.com](https://console.anthropic.com/)

---

## 🛠️ Local Development

No build tools needed. Just open `index.html` in your browser:

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/pawedin.git
cd pawedin

# Option 1: Open directly
open index.html

# Option 2: Serve with Python
python3 -m http.server 8080
# then visit http://localhost:8080
```

---

## 🎨 Tech Stack

- **HTML5** — Semantic, accessible markup
- **CSS3** — Custom properties, Grid, Flexbox, animations (zero frameworks)
- **Vanilla JavaScript** — No dependencies, no build step
- **Google Fonts** — Playfair Display + DM Sans
- **Anthropic Claude API** — Powers BarkBot AI

---

## 📋 Pages

### 🏠 Home Feed
- Left sidebar with profile stats
- Post composer with expandable textarea
- Scrollable feed with reactions
- Right sidebar: trending hashtags + suggested dogs

### 🐕 Network
- Grid of dog profile cards
- Connect / disconnect functionality
- Pending connection requests section

### 💼 Jobs
- Split-pane layout: job list + job detail
- Full job descriptions, requirements, benefits
- Apply modal with treat compensation selector

### 😊 Profile (Biscuit McFluffins)
- Banner + avatar card
- Professional badges
- Work experience timeline
- Skills with endorsement counts
- Edit profile modal

### 🤖 BarkBot AI Chat
- Floating paw button (bottom-right)
- Smooth spring animation on open/close
- Conversation history maintained per session
- Typing indicator (3-dot bounce)
- Quick suggestion chips on first open

---

## 🐾 Sample Dog Profiles

| Dog | Role |
|-----|------|
| 🐩 Duchess Fluffington | Chief Bork Officer at Bork & Associates |
| 🐕 Rex Thunderpaws | Senior Squirrel Analyst |
| 🦮 Sir Woofs-a-Lot | Certified Belly Rub Consultant |
| 🐕‍🦺 Agent Patches | Head of Security (Mailman Dept.) |
| 🐾 Noodles McBork | Freelance Zoomies Choreographer |
| 🐶 Princess Wagsworth | VP of Park Operations |

---

## 📝 License

MIT © 2025 PawedIn, Inc.  
*All paws reserved.*

---

<p align="center">
  Made with 🐾 and unconditional love<br/>
  <em>"Be the professional dog LinkedIn never knew it needed."</em>
</p>
