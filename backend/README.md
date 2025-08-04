# 📦 Joke API – Backend

This is the backend for a random joke web application, built with **Node.js**, **Express**, and **PostgreSQL** (hosted on Supabase). It serves jokes via a RESTful API and includes automated seeding and error handling.

---

## ⚙️ Tech Stack

- Node.js + Express
- PostgreSQL (via Supabase)
- pg (node-postgres)
- Jest + Supertest
- dotenv

---

## 🚀 Getting Started

Follow the steps below to run this project on your local machine.

---

## 🔧 1. Clone the Repository

```bash
git clone https://github.com/tayyabhaseeb/a-safe-group
cd a-safe-group/backend
```

📦 2. Install Dependencies

npm install

🛠️ 3. Setup the PostgreSQL Database (Supabase)
📍 Use Supabase (free hosted PostgreSQL)
Go to https://app.supabase.com and create a new project.

Once your project is created:

Go to the Database section → copy the connection string

Replace <YOUR_CONNECTION_STRING> below with your actual one.

Make sure to encode special characters in the password (e.g. @ → %40)

🔐 4. Create a .env File
Inside the /backend directory, create a file named .env:

PG_URI=postgresql://postgres:yourPassword%40@your-db-host.supabase.co:5432/postgres
PORT=3001

⚠️ Replace the URI with your actual Supabase DB credentials.

🌱 5. Seed the Database
Run the following command to automatically create the jokes table and insert the jokes from jokes.json:

node seed.js

▶️ 6. Start the Server

npm run dev

Or:

node server.js

Your server will run at:

http://localhost:3001

🌐 7. Test the API
Visit this in your browser or Postman:

GET http://localhost:3001/api/joke

Expected response:

{
"id": 10,
"type": "general",
"setup": "Why don't scientists trust atoms?",
"punchline": "Because they make up everything!"
}

🧪 8. Run Tests
Run the test suite:

npm test

Tests include:

Valid response from /api/joke

Proper 404 error for unknown routes

Graceful error when DB fails
