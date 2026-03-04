# Spotisic - Full Stack MERN Music Player

![Spotisic Layout](https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=1200&auto=format&fit=crop)

Spotisic is a visually stunning, responsive music player web application designed to emulate the aesthetics and core functionalities of modern streaming platforms like Spotify. Built entirely from scratch using the robust MERN stack (MongoDB, Express, React, Node.js) and vanilla CSS.

## 🚀 Features

- **Modern Dark Theme UI:** Pixel-perfect recreation of the Spotify interface featuring glassmorphism effects, custom scrollbars, and smooth micro-animations.
- **RESTful API Backend:** A scalable Node.js & Express server handling endpoints and database connections.
- **MongoDB Integration:** Structured Mongoose schemas managing Songs, Albums, and Playlists.
- **Responsive CSS Grid Layout:** A flexible architecture featuring an interactive Sidebar, a dynamic Content View, and a persistent Audio Player component.
- **Component-Driven React Frontend:** Built with Vite for rapid development and highly reusable UI elements (Cards, Navbars, Media Controls).

## 🛠️ Technology Stack

**Frontend:**
- React 18
- Vite
- Vanilla CSS (CSS Grid, Flexbox, CSS Variables)
- Lucide React (Icons)
- Axios

**Backend:**
- Node.js
- Express.js
- MongoDB & Mongoose
- dotenv
- CORS

## 📂 Project Structure

The repository is organized into a modular monorepo structure:

```
Spotisic/
├── backend/                  # Express server & API endpoints
│   ├── config/               # Database connection setup
│   ├── models/               # Mongoose schemas (Song, Album)
│   ├── routes/               # API route definitions
│   ├── server.js             # Entry point
│   └── seed.js               # Database seeding script
│
└── frontend/                 # React web application
    ├── src/
    │   ├── components/       # Reusable UI components
    │   │   ├── layout/       # Sidebar, Topbar, Player
    │   │   └── ui/           # Cards, Buttons
    │   ├── views/            # Main page views (Home)
    │   ├── App.jsx           # Root layout component
    │   └── index.css         # Global design system & thematic variables
```

## 💻 Running Locally

To get Spotisic running on your local machine, follow these steps:

### Prerequisites
- Node.js (v16+)
- MongoDB (Running locally or a MongoDB Atlas cluster URI)

### 1. Backend Setup

```bash
cd backend
npm install
```

Ensure your MongoDB instance is running. You can seed the database with initial mock data:
```bash
node seed.js
```

Start the Express development server:
```bash
node server.js
```
The API will run on `http://localhost:5000`.

### 2. Frontend Setup

Open a new terminal window:
```bash
cd frontend
npm install
npm run dev
```
The React app will compile and become accessible at `http://localhost:5173`.

## 🎨 Design Philosophy

A major focus of this project was mastering complex CSS layouts without relying on heavy frameworks like Tailwind or Bootstrap. By utilizing vanilla CSS Variables (`--bg-base`, `--accent-color`), CSS Grid (`grid-template-areas`), and custom hover states, the UI is both performant and easily customizable.

## 📝 License

This project is open-source and available under the MIT License. Feel free to use the code for learning and inspiration!