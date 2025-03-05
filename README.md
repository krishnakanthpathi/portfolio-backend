# Portfolio Backend

This is the backend for a portfolio website. It provides API endpoints to manage projects, achievements, about section, and resume details. The backend is built using **Node.js**, **Express.js**, and **MongoDB**.

## File Structure
```
portfolio-backend/
├─ routes/
│  ├─ about.get.route.js      # GET route for About section
│  ├─ about.route.js          # POST route for About section
│  ├─ achievements.get.route.js # GET route for Achievements
│  ├─ achievements.route.js   # POST route for Achievements
│  ├─ projects.get.route.js   # GET route for Projects
│  ├─ projects.route.js       # POST route for Projects
│  ├─ resume.get.route.js     # GET route for Resume
│  ├─ resume.route.js         # POST route for Resume
│
├─ config/
│  ├─ mongodb.config.js       # MongoDB connection setup
│
├─ models/
│  ├─ about.model.js          # Schema for About section
│  ├─ achievements.model.js   # Schema for Achievements
│  ├─ projects.model.js       # Schema for Projects
│  ├─ resume.model.js         # Schema for Resume
│
├─ public/
│  ├─ index.html              # Admin panel for managing portfolio
│
├─ .gitignore
├─ index.js                    # Main server file
├─ package.json                 # Dependencies and scripts
├─ package-lock.json            # Lock file for dependencies
├─ README.md                    # Documentation
```

## Features
- CRUD operations for Projects, Achievements, and About section
- File upload support
- CORS enabled for frontend integration
- Uses MongoDB for data storage

## Tech Stack
- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**
- **dotenv**
- **CORS**
- **Nodemon** (for development)

## Installation

### Clone the Repository:
```bash
git clone <repo-url>
cd portfolio-backend
```

### Install Dependencies:
```bash
npm install
```

### Create a `.env` File:
```env
PORT=8080
MONGO_URI=your_mongodb_connection_string
```

### Start the Development Server:
```bash
npm start
```

## API Endpoints

### Projects
- `GET /projects` - Retrieve all projects
- `POST /api/projects` - Add a new project

### Achievements
- `GET /achievements` - Retrieve all achievements
- `POST /api/achievements` - Add a new achievement

### About
- `GET /about` - Retrieve about details
- `POST /api/about` - Update about section

### Resume
- `GET /resume` - Retrieve resume URL
- `POST /api/resume` - Update resume URL

## License
This project is licensed under the **MIT License**.

## Developed by
**Krishna Kanth**

