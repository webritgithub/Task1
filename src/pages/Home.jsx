import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export function Home() {
  return (
    <div className="page-container home-container">
      <div>
        <h1>Welcome to My React Website</h1>
        <p>Sign in or if don't have account then register yourself.</p>
        <Link to="/login" className="login-btn">Login</Link>
        <Link to="/register" className="register-btn">Register</Link>
      </div>
    </div>
  );
}
