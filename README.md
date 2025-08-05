# 🖼️ Project Preview

This is what the project looks like on a mobile screen:

![Joke App UI](./frontend/public/images/mob-gen.png)

# 🗃️ Joke App – Full Stack (Backend + Frontend)

A full-stack joke web application built with:

- **Frontend**: React + Vite + Tailwind CSS
- **Backend**: Node.js + Express + PostgreSQL (via Supabase)
- **Database**: Supabase-hosted PostgreSQL
- **Testing**: Jest + Supertest

Users can fetch a new random joke on every click. The backend handles data retrieval and error handling; the frontend provides a clean and responsive UI.

---

## 📁 Project Structure

project-root/
├── backend/ → Node.js + Express API
├── frontend/ → React + Vite + Tailwind app
└── README.md → This file

---

## 🚀 Features

- Random joke displayed on each click
- Clean and responsive design with Tailwind CSS
- Backend served via Express with PostgreSQL
- Centralized error and 404 handling
- Fully tested backend with Jest and Supertest

---

## 🧰 Requirements

| Tool       | Version                  |
| ---------- | ------------------------ |
| Node.js    | >=16.x                   |
| npm / yarn | >=8.x                    |
| PostgreSQL | Local or Supabase-hosted |
| Supabase   | Free account             |

---

## 🛠️ Setup Instructions

---

### 1. 🔁 Clone the Repository

```bash
git clone https://github.com/tayyabhaseeb/a-safe-group
cd A_safe_group
```

2. ⚙️ Setup the Backend (API)

cd backend
npm install

🔐 Create a .env file

PG_URI=postgresql://postgres:<encoded-password>@<your-host>.supabase.co:5432/postgres
PORT=3001

Replace with your Supabase connection string. Encode special characters (@ → %40).

🌱 Seed the database

node seed.js

This:

Creates the jokes table (if not present)

Inserts jokes from jokes.json

▶️ Start the backend server

npm run dev

# or

node server.js

Your backend runs at:

http://localhost:3001/api/joke

3. 💻 Setup the Frontend (React + Tailwind)

cd ../frontend
npm install

⚙️ Vite Dev Server
Start the development server:

npm run dev

Frontend runs at:

http://localhost:5173

🧪 Running Backend Tests
Inside /backend:

npm test
