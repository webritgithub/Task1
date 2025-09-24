# TASK1 - Scalable Web App with Authentication & Dashboard

This project is a **frontend and backend web application** built as part of a Frontend Developer Intern assignment. It demonstrates a scalable structure with **authentication, dashboard features, and CRUD operations**.

---

## Table of Contents

- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Project Structure](#project-structure)  
- [Getting Started](#getting-started)  
- [API Endpoints](#api-endpoints)  
- [Security & Scalability](#security--scalability)  
- [Future Improvements](#future-improvements)  

---

## Features

- User **Signup / Login** with JWT authentication  
- **Protected Routes** for authenticated users  
- **Dashboard** with CRUD operations on sample entity (e.g., tasks or posts)  
- **Profile page** to view/update user information  
- Client-side & server-side form validation  
- Responsive UI with **TailwindCSS**  

---

## Tech Stack

**Frontend:** React.js, React Router v7, TailwindCSS  
**Backend:** Node.js, Express.js  
**Database:** MongoDB (or any preferred DB)  
**Authentication:** JWT, bcrypt for password hashing  
**API Testing:** Postman  

---

## Project Structure

TASK1/
─ src/
 ─ api/
  ─ api.js # Axios instance for API calls
 ─ components/
  ─ Navbar.jsx
  ─ PrivateRoute.jsx
 ─ pages/
  ─ Login.jsx
  ─ Register.jsx
  ─ Dashboard.jsx
  ─ Profile.jsx
 ─ App.jsx
 ─ main.jsx
─ package.json
─ README.md
