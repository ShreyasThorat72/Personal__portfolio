# Personal Portfolio Backend API

A production-ready, security-hardened Node.js & Express REST API for the Personal Portfolio web application.

---

## 🚀 Features

- **Contact Form Engine**: Validates visitor inquiries, saves messages to MongoDB Atlas, and dispatches automated email notifications via Nodemailer.
- **Projects API**: Serves project showcases, architecture details, technologies, and live demo links with filtering support.
- **Skills API**: Exposes technical skills matrix categorized by domain and level.
- **Health Check Endpoint**: `/api/health` for monitoring, uptime metrics, and automated deployment checks.
- **Security Suite**: Pre-configured with Helmet HTTP security headers, CORS origin verification, Express body limit sanitization, and IP rate limiting.

---

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB Atlas with Mongoose ORM
- **Security**: Helmet, CORS, Express Rate Limit, Express Validator
- **Email Service**: Nodemailer (SMTP / Gmail / SendGrid)

---

## 📁 Directory Architecture

```text
backend/
├── src/
│   ├── config/
│   │   ├── db.js             # Mongoose MongoDB Atlas connection
│   │   └── seed.js           # Initial database seeder script
│   ├── controllers/
│   │   ├── contactController.js  # Contact submission & email trigger
│   │   ├── projectController.js  # Projects CRUD & filter logic
│   │   └── skillController.js    # Skills matrix retrieval
│   ├── models/
│   │   ├── Contact.js        # Contact inquiry schema
│   │   ├── Project.js        # Project showcase schema
│   │   └── Skill.js          # Technical skill schema
│   ├── routes/
│   │   ├── contactRoutes.js  # POST /api/contact with rate limits
│   │   ├── projectRoutes.js  # GET /api/projects
│   │   └── skillRoutes.js    # GET /api/skills
│   ├── middleware/
│   │   ├── errorMiddleware.js    # Global error handler
│   │   └── notFoundMiddleware.js # 404 router fallback
│   ├── utils/
│   │   └── emailService.js   # Nodemailer email dispatcher
│   ├── app.js               # Express application initialization
│   └── server.js            # Server entry point
├── .env.example             # Environment variable template
├── package.json             # Scripts & dependencies
└── README.md                # Documentation & deployment guide
```

---

## 🔑 Environment Variables

Copy `.env.example` to `.env` inside the `backend/` directory:

```bash
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/portfolio?retryWrites=true&w=majority
FRONTEND_URL=http://localhost:3000
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password
EMAIL_FROM="Portfolio Visitor Inquiry <your_email@gmail.com>"
EMAIL_TO=your_email@gmail.com
```

> **Note**: Never commit `.env` or plain-text credentials to Git repositories.

---

## 💻 Local Setup & Development

1. **Install Dependencies**:
   ```bash
   cd backend
   npm install
   ```

2. **Run in Development Mode (with hot-reload via Nodemailer/Nodemon)**:
   ```bash
   npm run dev
   ```
   The backend server will run on `http://localhost:5000`.

3. **(Optional) Seed Database with Initial Portfolio Data**:
   ```bash
   npm run seed
   ```

4. **Production Run**:
   ```bash
   npm start
   ```

---

## 📡 API Endpoints Summary

| Method | Endpoint | Description | Query / Body Params |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/health` | Backend status check | None |
| `POST` | `/api/contact` | Submit contact form | `{ name, email, subject, message }` |
| `GET` | `/api/projects` | Get all projects | `?category=Full Stack` |
| `GET` | `/api/projects/featured` | Get featured projects | None |
| `GET` | `/api/projects/:id` | Get project by ID or slug | `id` or `slug` |
| `GET` | `/api/skills` | Get technical skills | `?category=Frontend` |

---

## ☁️ Deployment Guide (Render)

1. **Create MongoDB Atlas Cluster**:
   - Create a free tier cluster on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
   - Add a database user (username & password) and whitelist IP address (`0.0.0.0/0` for cloud deployment).
   - Copy the connection string: `mongodb+srv://...`

2. **Deploy on Render**:
   - Log in to [Render](https://render.com) and click **New + > Web Service**.
   - Connect your GitHub repository `Personal__portfolio`.
   - Configure Web Service settings:
     - **Name**: `portfolio-backend`
     - **Root Directory**: `backend`
     - **Environment**: `Node`
     - **Build Command**: `npm install`
     - **Start Command**: `npm start`
   - Add Environment Variables in Render dashboard:
     - `MONGODB_URI`: `<your_atlas_connection_string>`
     - `NODE_ENV`: `production`
     - `FRONTEND_URL`: `https://your-portfolio.vercel.app` (or Vercel URL)
     - `EMAIL_HOST`, `EMAIL_PORT`, `EMAIL_USER`, `EMAIL_PASSWORD`, `EMAIL_FROM`, `EMAIL_TO`

3. **Connect Frontend**:
   - Set `VITE_USE_REMOTE_API="true"` and `VITE_API_URL="https://portfolio-backend.onrender.com/api"` in your frontend environment variables.
