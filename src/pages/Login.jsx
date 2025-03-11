import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import "../styles/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { authenticate } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      // Validate form
      if (!email || !password) {
        throw new Error("Vui lòng điền đầy đủ thông tin");
      }

      // Attempt to authenticate
      const success = authenticate(email, password);
      
      if (success) {
        // Redirect after successful login
        navigate("/");
      } else {
        throw new Error("Email hoặc mật khẩu không chính xác");
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h2>Đăng Nhập</h2>
          <p>Vui lòng nhập thông tin tài khoản của bạn</p>
        </div>

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <div className="input-with-icon">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="input-icon" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <input
                type="email"
                id="email"
                placeholder="Email của bạn"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password">Mật khẩu</label>
            <div className="input-with-icon">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="input-icon" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
              <input
                type="password"
                id="password"
                placeholder="Mật khẩu của bạn"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="form-footer">
            <div className="remember-me">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Ghi nhớ đăng nhập</label>
            </div>
            <Link to="/forgot-password" className="forgot-password">
              Quên mật khẩu?
            </Link>
          </div>

          <button type="submit" className="login-button" disabled={isLoading}>
            {isLoading ? "Đang xử lý..." : "Đăng Nhập"}
          </button>
        </form>

        <div className="register-section">
          <p>Chưa có tài khoản?</p>
          <Link to="/register" className="register-link">
            Đăng ký ngay
          </Link>
        </div>

        <div className="social-login">
          <p>Hoặc đăng nhập với</p>
          <div className="social-buttons">
            <button className="google-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032 s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2 C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/>
              </svg>
              <span>Google</span>
            </button>
            <button className="facebook-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                <path d="M20.9,2H3.1C2.5,2,2,2.5,2,3.1v17.7c0,0.6,0.5,1.1,1.1,1.1h9.6v-7.7h-2.6v-3h2.6V9c0-2.6,1.6-4,3.9-4 c1.1,0,2.1,0.1,2.3,0.1v2.7l-1.6,0c-1.3,0-1.5,0.6-1.5,1.5v1.9h3l-0.4,3h-2.6V22h5c0.6,0,1.1-0.5,1.1-1.1V3.1C22,2.5,21.5,2,20.9,2z"/>
              </svg>
              <span>Facebook</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;