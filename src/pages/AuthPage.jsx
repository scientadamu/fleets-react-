import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./auth.css";

const defaultUser = {
  email: "admin@gmail.com",
  password: "admin123456",
  otp: "123456",
};

const AuthPage = () => {
  const [page, setPage] = useState("login");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    otp: ["", "", "", "", "", ""],
  });
  const navigate = useNavigate();
  const inputRefs = useRef([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (formData.email === defaultUser.email && formData.password === defaultUser.password) {
      setPage("otp");
    } else {
      alert("Invalid credentials");
    }
  };

  const handleOtpChange = (index, e) => {
    const value = e.target.value;
    if (isNaN(value)) return;

    const newOtp = [...formData.otp];
    newOtp[index] = value;
    setFormData({ ...formData, otp: newOtp });

    if (value && index < 5) {
      inputRefs.current[index + 1].focus(); // Move to next input
    }
  };

  const handleBackspace = (index, e) => {
    if (e.key === "Backspace" && index > 0) {
      const newOtp = [...formData.otp];
      newOtp[index] = "";
      setFormData({ ...formData, otp: newOtp });

      inputRefs.current[index - 1].focus(); // Move back
    }
  };

  const handleOtpVerify = (e) => {
    e.preventDefault();
    if (formData.otp.join("") === defaultUser.otp) {
      navigate("/dashboard");
    } else {
      alert("Invalid OTP");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <img src="/logo.png" alt="Logo" className="logo" />
        
        {page === "login" && (
          <form onSubmit={handleLogin} className="auth-form">
            <h2>Login</h2>
            <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
            <button type="submit">Login</button>
            <p>
              <a href="#" onClick={() => setPage("reset")}>Forgot Password?</a>
            </p>
            <p>
              Don't have an account? <a href="#" onClick={() => setPage("register")}>Register</a>
            </p>
          </form>
        )}

        {page === "otp" && (
          <form onSubmit={handleOtpVerify} className="auth-form">
            <h2>Enter OTP</h2>
            <div className="otp-container">
              {[...Array(6)].map((_, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  className="otp-input"
                  ref={(el) => (inputRefs.current[index] = el)}
                  value={formData.otp[index]}
                  onChange={(e) => handleOtpChange(index, e)}
                  onKeyDown={(e) => handleBackspace(index, e)}
                  required
                />
              ))}
            </div>
            <button type="submit">Verify</button>
            <p>
              <a href="#" onClick={() => setPage("login")}>Back to Login</a>
            </p>
          </form>
        )}

        {page === "reset" && (
          <form className="auth-form">
            <h2>Reset Password</h2>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Reset</button>
            <p>
              <a href="#" onClick={() => setPage("login")}>Back to Login</a>
            </p>
          </form>
        )}

        {page === "register" && (
          <form className="auth-form">
            <h2>Register</h2>
            <input type="text" placeholder="Full Name" required />
            <input type="text" placeholder="Phone Number" required />
            <input type="email" placeholder="Email Address" required />
            <input type="password" placeholder="Password" required />
            <input type="password" placeholder="Confirm Password" required />
            <button type="submit">Register</button>
            <p>
              Already have an account? <a href="#" onClick={() => setPage("login")}>Login</a>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
