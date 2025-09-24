import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home } from "./pages/Home.jsx";
import { Login } from "./pages/Login.jsx";
import { Register } from "./pages/Register.jsx";
import { Dashboard } from "./pages/Dashboard.jsx";

export default function App() {
  return (
    <div>
      <Navbar />
      <div className="min-h-[calc(100vh-80px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
      <footer>
  <p>
    © 2025 My React Website | Designed with by Ritika Poojary
    <br />
    ritikapoojary003@gamil.com |+91-9136703366 | <a href="https://github.com/webritgithub">Github</a> | <a href="https://webritgithub.github.io/Portfolio/">Portfolio</a> 
  </p>
</footer>

    </div>
  );
}
