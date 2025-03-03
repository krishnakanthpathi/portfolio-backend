# 🖥️ Portfolio Backend 

This is the 🔙 for a portfolio 🌐. It provides API 🔗 to manage 📂, 🏆, ℹ️, and 📄. The 🔙 is built using 🟢 Node.js, 🚀 Express.js, and 🍃 MongoDB.

## 📂 File Structure
```
portfolio-backend/
│── 📁 routes/
│   ├── 📜 about.get.route.js      # GET route for 'ℹ️' section
│   ├── 📜 about.route.js          # POST route for 'ℹ️' section
│   ├── 📜 achievements.get.route.js # GET route for 🏆
│   ├── 📜 achievements.route.js   # POST route for 🏆
│   ├── 📜 projects.get.route.js   # GET route for 📂
│   ├── 📜 projects.route.js       # POST route for 📂
│   ├── 📜 resume.get.route.js     # GET route for 📄
│   ├── 📜 resume.route.js         # POST route for 📄
│
│── ⚙️ config/
│   ├── 📜 mongodb.config.js       # 🍃 connection setup
│
│── 🏗 models/
│   ├── 📜 about.model.js          # 🟢 schema for 'ℹ️' section
│   ├── 📜 achievements.model.js   # 🟢 schema for 🏆
│   ├── 📜 projects.model.js       # 🟢 schema for 📂
│   ├── 📜 resume.model.js         # 🟢 schema for 📄
│
│── 🗂 public/
│   ├── 📜 index.html              # 🏗 Admin panel for managing portfolio
│
│── 🚫 .gitignore
│── 📜 index.js                    # 🔧 Main server file
│── 📜 package.json                 # 📦 Dependencies and scripts
│── 📜 package-lock.json            # 🔒 Lock file for dependencies
│── 📜 README.md                    # 📖 Documentation
```

## 🌟 Features
- 🛠️ CRUD operations for 📂, 🏆, and ℹ️
- 📁 File upload support
- 🔗 CORS enabled for frontend integration
- 🍃 Uses MongoDB for data storage

## 🔧 Tech Stack
- 🟢 Node.js
- 🚀 Express.js
- 🍃 MongoDB
- 🏗 Mongoose
- 🔐 dotenv
- 🔗 CORS
- 🔄 Nodemon (for development)

## 🚀 Installation

1. 📥 Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio-backend.git
   cd portfolio-backend
   ```
2. 📦 Install dependencies:
   ```bash
   npm install
   ```
3. 📄 Create a `.env` file in the root directory and add:
   ```env
   PORT=8080
   MONGO_URI=your_mongodb_connection_string
   ```
4. ▶️ Start the development server:
   ```bash
   npm start
   ```

## 🌍 API Endpoints

### 📂 Projects
- `GET /projects` - 📥 Retrieve all 📂
- `POST /api/projects` - ➕ Add a new 📂

### 🏆 Achievements
- `GET /achievements` - 📥 Retrieve all 🏆
- `POST /api/achievements` - ➕ Add a new 🏆

### ℹ️ About
- `GET /about` - 📥 Retrieve ℹ️ details
- `POST /api/about` - 🔄 Update ℹ️ section

### 📄 Resume
- `GET /resume` - 📥 Retrieve 📄 URL
- `POST /api/resume` - 🔄 Update 📄 URL

## 📜 License
This project is licensed under the MIT License. 🎉📜🔖

