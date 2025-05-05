# 📝 Blog Task - Ibadur (Synsoft)

A full-stack blog application built with a modular architecture. This project contains a **React frontend** (using Vite) and a **Node.js backend** (with Express), connected via **MongoDB**. The setup instructions below will help you get started quickly on your local machine.

---

## 🚀 Quick Start Guide

Follow these steps to clone, configure, and run the project locally.

---

### 1️⃣ Clone the Repository

```bash
git clone <repository-url>
cd blog-task-ibadur-synsoft
```

---

### 2️⃣ Install Root Dependencies

```bash
npm install
```

---

### 3️⃣ Frontend Setup (`/fe`)

```bash
cd fe
npm install
```

#### 🔧 Create `.env` file in `/fe` with the following content:

```env
VITE_API_URL=<your-backend-api-url>
VITE_TOKEN_KEY=<your-token-key>
```

---

### 4️⃣ Backend Setup (`/be`)

```bash
cd ../be
npm install
```

#### 🔧 Create `.env` file in `/be` with the following content:

```env
PORT=<your-port>
MONGO_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>
```

---

### 5️⃣ Run the Project

Go back to the root folder:

```bash
cd ..
npm run dev
```

> This will start both the frontend and backend servers concurrently.

---

## 📁 Folder Structure

```
blog-task-ibadur-synsoft/
├── fe/          # Frontend (React + Vite)
│   ├── src/
│   └── .env
├── be/          # Backend (Node.js + Express)
│   ├── src/
│   └── .env
├── package.json # Root package with dev script
└── README.md
```

---

## ⚙️ Technologies Used

- **Frontend:** React, Vite, Axios, Tailwind (if used)
- **Backend:** Node.js, Express, MongoDB, Mongoose, JWT
- **Tools:** dotenv, concurrently, nodemon

---

## ✅ Tips

- Use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for easy cloud-based database setup.
- You can change ports or API URLs in the respective `.env` files.

---

## 📬 Contact

Have questions or feedback? Feel free to reach out!
