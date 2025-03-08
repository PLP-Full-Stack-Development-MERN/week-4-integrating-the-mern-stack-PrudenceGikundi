# MERN Project - Backend Setup

## 📌 Step 1: Initialize the Backend

### Create Backend Directory
```sh
mkdir mern-project && cd mern-project
mkdir backend && cd backend
npm init -y
```

### Install Backend Dependencies
```sh
npm install express mongoose dotenv cors
```

### Setup Backend Directory Structure
```
backend/
├── models/        # Contains database schemas
├── routes/        # Defines API endpoints
├── controllers/   # Handles business logic
├── config/        # Stores configuration files (e.g., database connection)
├── server.js      # Main server entry point
└── .env           # Environment variables (e.g., database credentials)
```

---

## ⚙️ Step 2: Setting Up the Express Server

### Create `server.js`
```js
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

app.listen(process.env.PORT || 5000, () => console.log('Server running on port 5000'));
```

### Define Environment Variables
Create a `.env` file:
```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

### Hands-On Tasks
- **Test the server** by running:
  ```sh
  node server.js
  ```
  Then visit: [http://localhost:5000](http://localhost:5000)
- **Create middleware** for logging incoming requests (e.g., log the method and URL).

---

## 📦 Step 3: Initialize the Frontend

### Set Up React Application
```sh
npx create-react-app frontend
cd frontend
npm install axios react-router-dom
```

### Frontend Directory Structure
```
frontend/
├── src/
│   ├── components/  # Reusable UI components
│   ├── pages/       # Page components
│   ├── App.jsx      # Main App component
│   ├── index.jsx    # Entry point for React
├── public/
├── package.json
├── README.md
```

---

## 🚀 Next Steps
- Implement database models inside the `models/` folder.
- Set up API routes inside the `routes/` folder.
- Create controller functions to handle business logic inside `controllers/`.
- Test API endpoints using **Postman** or **Insomnia**.
- Build frontend pages and components to connect with the backend.


