# 🎬 MERN Netflix Clone

A fully responsive, feature-rich **Netflix-inspired streaming web application** built with the **MERN stack** (MongoDB, Express, React, Node.js). This project mimics core features of Netflix such as browsing shows and movies, search functionality, user authentication, and personalized watch history.

👉 [Live Demo Coming Soon]  
🔗 [GitHub Repository](https://github.com/deepsingh3473/mern-netflix-clone)

---

## 📸 Preview

![App Preview](https://mern-netflix-clone-83xb.onrender.com/) 

---

## 🚀 Features

✅ User Authentication (JWT-based)  
✅ Browse Trending Movies, TV Shows, and People  
✅ Search by Movie, TV Show, or Person  
✅ Add to Personalized Search History  
✅ Remove from History  
✅ Responsive UI/UX with Tailwind CSS  
✅ RESTful APIs  
✅ MongoDB Atlas Integration  
✅ Error Handling and Validation  

---

## 🛠️ Tech Stack

| Tech        | Description                            |
|-------------|----------------------------------------|
| **MongoDB** | Database for storing users & history   |
| **Express** | Backend framework (Node.js)            |
| **React**   | Frontend library                       |
| **Node.js** | Backend runtime                        |
| **Tailwind CSS** | Styling framework                |
| **TMDB API**| Movie data from The Movie DB           |

---

## 📂 Project Structure

netflix-clone/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── ...
├── frontend/
│   ├── components/
│   ├── pages/
│   ├── App.js
│   └── ...
└── README.md

---

## ⚙️ Getting Started

### 📌 Prerequisites

- Node.js
- MongoDB Atlas URI
- TMDB API Key

---

### 🔧 Installation

```bash
# Clone the repository
git clone https://github.com/deepsingh3473/mern-netflix-clone

# Navigate into the project
cd mern-netflix-clone

# Install backend dependencies
cd backend
npm install

# Create .env file in backend and add:
# MONGO_URI=your_mongo_uri
# TMDB_API_KEY=your_tmdb_key
# JWT_SECRET=your_jwt_secret

# Start the backend
npm run dev

# In another terminal, go to frontend
cd ../frontend
npm install

# Start the frontend
npm start


🔐 Environment Variables
Create a .env file in the backend/ directory with the following:

PORT=5001
MONGO_URI=your_mongo_db_uri
JWT_SECRET=your_jwt_secret
TMDB_API_KEY=your_tmdb_api_key


🙋‍♂️ Author
Deep Singh
🔗 GitHub

📄 License
This project is licensed under the MIT License.

🌟 Support
If you like this project, consider giving it a ⭐️ on GitHub!
Your feedback and contributions are always welcome!
