"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "../styles/AdminLogin.css"

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  })
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))

      if (credentials.email === "giasinguyentran@gmail.com" && credentials.password === "giasinguyentran") {
        localStorage.setItem("isLoggedIn", "true")
        navigate("/") 
      } else {
        setError("Invalid email or password")
      }
    } catch (err) {
      setError("An error occurred. Please try again.")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <h2 className="login-title">Admin Login</h2>
          <p className="login-subtitle">Sign in to access the admin dashboard</p>
        </div>

        {error && (
          <div className="error-message" role="alert">
            <span>{error}</span>
          </div>
        )}

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-fields">
            <div className="form-field">
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={credentials.email}
                onChange={handleChange}
                className="form-input top"
                placeholder="Email address"
              />
            </div>
            <div className="form-field">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={credentials.password}
                onChange={handleChange}
                className="form-input bottom"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="form-options">
            <div className="remember-me">
              <input id="remember-me" name="remember-me" type="checkbox" className="remember-checkbox" />
              <label htmlFor="remember-me" className="remember-label">
                Remember me
              </label>
            </div>

            <div className="forgot-password">
              <a href="#" className="forgot-link">
                Forgot your password?
              </a>
            </div>
          </div>

          <div className="form-submit">
            <button type="submit" disabled={loading} className="login-button">
              {loading ? (
                <svg className="loading-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle
                    className="loading-circle"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="loading-path"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : (
                <span className="login-icon">
                  <svg
                    className="lock-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              )}
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </div>
        </form>

        <div className="login-demo">
          <p className="demo-text">Demo credentials: giasinguyentran@gmail.com / giasinguyentran</p>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin

