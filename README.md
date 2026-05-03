# NexInterview 🎯
### AI-Powered Technical Interview Platform

<p align="center">
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Socket.IO-Real--Time-010101?style=for-the-badge&logo=socket.io" />
  <img src="https://img.shields.io/badge/Monaco-Editor-007ACC?style=for-the-badge&logo=visual-studio-code" />
  <img src="https://img.shields.io/badge/Stream-Video%20%26%20Chat-005FFF?style=for-the-badge&logo=stream" />
  <img src="https://img.shields.io/badge/AI-Powered-8B5CF6?style=for-the-badge" />
</p>

<p align="center">
  NexInterview is a full-stack technical interview platform where interviewers and candidates connect via live 1-on-1 video calls, collaborate on a real VSCode-powered code editor, and get instant AI-generated feedback — all in one seamless session.
</p>

---

## ✨ Features

- 🎥 **Live 1-on-1 Video Calling** — Stream-powered video calls with low latency, directly in the browser
- 💬 **Real-Time Chat** — In-session text chat powered by Stream Chat SDK
- 💻 **Real-Time Collaborative Code Editor** — Monaco Editor (the engine behind VSCode) with live code sync via Socket.IO
- 🤖 **AI Code Review** — Instant automated analysis covering correctness, bugs, time/space complexity, better approaches, and edge cases
- 🏆 **Interview Scoring** — AI gives a score out of 10 with detailed structured feedback
- 🧪 **Code Execution** — Run code directly in the browser and see output instantly via Piston API
- 🎉 **Test Case Validation** — Automatic check against expected outputs with confetti on passing
- 🌐 **Multi-Language Support** — JavaScript, Python, and more
- 📋 **Problem Bank** — Curated DSA problems with starter code per language
- 🔄 **Session Management** — Isolated interview rooms with real-time sync

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| React 18 | UI framework |
| Monaco Editor | VSCode-powered code editor |
| Stream Video SDK | Live 1-on-1 video calls |
| Stream Chat SDK | In-session real-time chat |
| React Router DOM | Client-side routing |
| Framer Motion | Animations |
| React Resizable Panels | Draggable split-pane layout |
| Canvas Confetti | Celebration on test pass |
| React Hot Toast | Notifications |
| Lucide React | Icons |

### Backend
| Technology | Purpose |
|---|---|
| Node.js + Express | HTTP server & REST API |
| Socket.IO | Real-time code sync between participants |
| Stream Node SDK | Generate user tokens for video & chat |
| Piston API | Code execution engine |
| AI/LLM API | Automated code review & feedback |

---

## 📁 Project Structure

```
NexInterview/
├── frontend/                  # React application
│   ├── src/
│   │   ├── pages/
│   │   │   └── ProblemIdPage.jsx      # Main interview page
│   │   ├── components/
│   │   │   ├── Navbar/                # Top navigation
│   │   │   ├── CodeEditor/            # Monaco editor wrapper
│   │   │   ├── ProblemDescription/    # Problem panel
│   │   │   ├── OutputPanel/           # Code execution output
│   │   │   └── CodeAnalyse/           # AI review panel
│   │   ├── api/
│   │   │   └── ai.js                  # AI review API calls
│   │   ├── lib/
│   │   │   ├── piston.js              # Code execution
│   │   │   └── openrouter.js          # LLM API client
│   │   ├── data/
│   │   │   └── problems.js            # Problem bank with starter code
│   │   └── App.jsx
│   └── package.json
│
├── backend/                   # Node.js + Express server
│   ├── controllers/
│   │   └── aiController.js    # AI review logic & prompt
│   ├── routes/                # REST API routes
│   ├── index.js               # Server entry point
│   └── package.json
│
├── package.json               # Root — orchestrates both workspaces
└── .gitignore
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- npm v9+

### Installation

```bash
# Clone the repository
git clone https://github.com/Harsh-Kumar-Pandit/NexInterview.git
cd NexInterview

# Install all dependencies
npm install --prefix backend
npm install --prefix frontend
```

### Environment Variables

Create a `.env` file in the `/backend` directory:

```env
PORT=5000
CLIENT_URL=http://localhost:5173
STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret
```

Create a `.env` file in the `/frontend` directory:

```env
VITE_BACKEND_URL=http://localhost:5000
VITE_STREAM_API_KEY=your_stream_api_key
```

### Running in Development

```bash
# Start the backend server (port 5000)
npm run start --prefix backend

# In a new terminal — start the frontend dev server (port 5173)
npm run dev --prefix frontend
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
# Build frontend & start backend
npm run build   # from root
npm start       # from root
```

In production, the Express backend serves the compiled React frontend as static files.

---

## 🤖 AI Code Review

The AI review system analyzes candidate code and returns structured feedback:

| Field | Description |
|---|---|
| **Score** | Interview score out of 10 |
| **Correctness** | Whether the solution solves the problem |
| **Bugs** | List of identified bugs |
| **Time Complexity** | Big-O time analysis |
| **Space Complexity** | Big-O space analysis |
| **Better Approach** | Optimal solution suggestion |
| **Edge Cases** | Missed edge cases |

---

## 🔄 Real-Time Architecture

```
Interviewer joins room
        ↓
  Stream call created (via API)
        ↓
  Candidate joins with call ID
        ↓
  Stream handles video/audio
        ↓
  Stream Chat channel opened
        ↓
  Both edit code together
  (code-change events via Socket.IO)
```

---

## 📸 Screenshots

> Interview Room — Video call + collaborative code editor + AI analysis panel

---

## 🗺️ Roadmap

- [ ] Authentication & user accounts
- [ ] Interview recording & playback
- [ ] Question bank with difficulty levels
- [ ] Whiteboard mode
- [ ] In-session text chat
- [ ] Interview timer
- [ ] Interviewer dashboard with session history
- [ ] Docker + CI/CD deployment

---

## 👨‍💻 Author

**Harsh Kumar Pandit**

[![GitHub](https://img.shields.io/badge/GitHub-Harsh--Kumar--Pandit-181717?style=flat&logo=github)](https://github.com/Harsh-Kumar-Pandit)

---

## 📄 License

This project is licensed under the ISC License.

---

<p align="center">Built with ❤️ for better technical interviews</p>
