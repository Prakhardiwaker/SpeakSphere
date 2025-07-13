# 🗣️ SpeakSphere

**SpeakSphere** is a modern, full-featured **MERN stack application** that enables users to connect globally for language exchange. It supports **live chat, video calling**, a smooth **onboarding flow**, **friend system**, and a **custom theme selector**, making the app interactive and personalized.

---

## 🚀 Features

- 🔐 Secure Sign Up / Log In with JWT Auth
- 🧭 Guided onboarding for new users
- 👥 Friend request & connection system
- 🔔 Realtime notifications
- 💬 Text chat using **Stream Chat**
- 🎥 Video calling powered by **Stream Video**
- 🎨 **Custom theme selector** (dark/light/system themes)
- 📜 Privacy Policies & user-friendly pages
- 🌐 Responsive and mobile-friendly design

---

## 🛠️ Tech Stack

### 🔹 Frontend

- **React 19**
- **Tailwind CSS**
- **React Router v7**
- **Zustand** (state management)
- **Framer Motion** (animations)
- **@tanstack/react-query**
- **Lucide React** (icons)
- **React Hot Toast**
- **@stream-io/video-react-sdk**
- **stream-chat-react**
- **Custom Theme Selector (Tailwind + Zustand)**

### 🔸 Backend

- **Node.js + Express**
- **MongoDB + Mongoose**
- **JWT for authentication**
- **dotenv, cors, cookie-parser**
- **bcryptjs**
- **Stream Chat SDK (Node)**


## 🧪 Setup Instructions

### 📦 Requirements

- Node.js + npm
- MongoDB (local or Atlas)
- Stream API credentials

---

### 📁 Clone the Repository

```bash
git clone https://github.com/your-username/speaksphere.git
cd speaksphere
```

```
----
### 🗂️ Folder Structure
speaksphere/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   │   ├── App.jsx
│   │   │   ├── OnboardingPage.jsx
│   │   │   ├── NotificationsPage.jsx
│   │   │   ├── Friends.jsx
│   │   │   ├── SignUpPage.jsx
│   │   │   ├── PrivacyPolicies.jsx
│   │   │   └── ThemeSelector.jsx
│   └── ...
│
└── backend/
    ├── models/
    ├── routes/
    ├── controllers/
    ├── server.js
    └── ...
```

⚙️ Install Dependencies
----
Frontend-
cd frontend
npm install
npm run dev
----
Backend-
cd backend
npm install
npm run dev
----


🔐 Backend .env Example-
----
MONGO_URI=your-mongodb-uri
JWT_SECRET=your-jwt-secret
STREAM_API_KEY=your-stream-api-key
STREAM_API_SECRET=your-stream-api-secret
----


🌐 Contact
----
GitHub: your-[username](https://github.com/Prakhardiwaker)

LinkedIn: your-[link](https://www.linkedin.com/in/prakhar-diwaker-261271122/)

----
