import { useState } from "react"
import { Link } from "react-router-dom"
import "../styles/Footer.css"

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)
  
  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email && email.includes('@')) {
      setSubscribed(true)
      setEmail("")
      setTimeout(() => setSubscribed(false), 5000)
    }
  }

  return (
    <footer className="footer">
      <div className="footer-waves">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#ffffff" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,186.7C1248,149,1344,107,1392,85.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
      </div>
      
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-logo">
            <div className="footer-logo-container">
              <svg 
                className="footer-logo-icon" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-1.1.1-1.5.5L2 8c-.5.5-.5 1.5 0 2l3 2.5L6.5 14l-2 4 1.8 1.8c.5.5 1.5.5 2 0L10 18l1.5 1.5c.5.5 1.5.5 2 0l1.5-1.5 4 2c.5.5 1.5.5 2 0l-1.2-1.2z" />
              </svg>
            </div>
            <div className="footer-logo-text">
              <h2 className="footer-brand">GS Travel</h2>
              <p className="footer-slogan">Khám phá Việt Nam tuyệt vời</p>
            </div>
          </div>

          <div className="footer-newsletter">
            <h3 className="footer-newsletter-title">Đăng Ký Nhận Bản Tin</h3>
            <p className="footer-newsletter-desc">Nhận thông tin mới nhất về tour du lịch và ưu đãi đặc biệt</p>
            
            <form className="footer-newsletter-form" onSubmit={handleSubscribe}>
              <div className="input-group">
                <svg 
                  className="newsletter-icon" 
                  xmlns="http://www.w3.org/2000/svg" 
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email của bạn"
                  className="newsletter-input"
                  required
                />
              </div>
              <button type="submit" className="newsletter-button">
                {subscribed ? 'Đã Đăng Ký!' : 'Đăng Ký'}
                {!subscribed && (
                  <svg 
                    className="send-icon" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                )}
              </button>
            </form>
          </div>
        </div>

        <div className="footer-grid">
          <div className="footer-column about-column">
            <h3 className="footer-title">Về Chúng Tôi</h3>
            <p className="footer-description">
              GS Travel là đơn vị hàng đầu chuyên cung cấp các dịch vụ du lịch chất lượng cao, 
              mang đến cho khách hàng những trải nghiệm du lịch độc đáo và đáng nhớ tại Việt Nam.
            </p>
            <div className="footer-contact-info">
              <div className="contact-item">
                <svg 
                  className="contact-icon" 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>126/3 Đường số 28, Phường 6, Quận Gò Vấp, TP. Hồ Chí Minh</span>
              </div>
              <div className="contact-item">
                <svg 
                  className="contact-icon" 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>(+84) 34 899 6487</span>
              </div>
              <div className="contact-item">
                <svg 
                  className="contact-icon" 
                  xmlns="http://www.w3.org/2000/svg" 
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
                <span>giasinguyentran@gmail.com</span>
              </div>
            </div>
          </div>

          <div className="footer-column">
            <h4 className="footer-subtitle">Liên Kết Nhanh</h4>
            <ul className="footer-links">
              <li>
                <Link to="/" className="footer-link">
                  <svg className="footer-link-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                  <span>Trang Chủ</span>
                </Link>
              </li>
              <li>
                <Link to="/destinations" className="footer-link">
                  <svg className="footer-link-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                  <span>Điểm Đến</span>
                </Link>
              </li>
              <li>
                <Link to="/tours" className="footer-link">
                  <svg className="footer-link-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                  <span>Tour Du Lịch</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="footer-link">
                  <svg className="footer-link-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                  <span>Về Chúng Tôi</span>
                </Link>
              </li>
              <li>
                <Link to="/faq" className="footer-link">
                  <svg className="footer-link-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                  <span>FAQs</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">
                  <svg className="footer-link-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                  <span>Liên Hệ</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-subtitle">Điểm Đến Hàng Đầu</h4>
            <ul className="footer-links destination-links">
              <li>
                <Link to="/destinations/halong-bay" className="footer-link">
                  <svg className="footer-link-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                  <span>Vịnh Hạ Long</span>
                </Link>
              </li>
              <li>
                <Link to="/destinations/hoian" className="footer-link">
                  <svg className="footer-link-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                  <span>Phố Cổ Hội An</span>
                </Link>
              </li>
              <li>
                <Link to="/destinations/sapa" className="footer-link">
                  <svg className="footer-link-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                  <span>Sa Pa</span>
                </Link>
              </li>
              <li>
                <Link to="/destinations/phuquoc" className="footer-link">
                  <svg className="footer-link-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                  <span>Đảo Phú Quốc</span>
                </Link>
              </li>
              <li>
                <Link to="/destinations/dalat" className="footer-link">
                  <svg className="footer-link-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                  <span>Đà Lạt</span>
                </Link>
              </li>
              <li>
                <Link to="/destinations/mekong" className="footer-link">
                  <svg className="footer-link-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                  <span>Đồng Bằng Sông Cửu Long</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-subtitle">Kết Nối</h4>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link facebook" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link twitter" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link instagram" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-link youtube" aria-label="YouTube">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="social-link tiktok" aria-label="TikTok">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path>
                  <path d="M19 10h-1V8A5 5 0 0 0 8 8v2H7c0-3.87 3.13-7 7-7s7 3.13 7 7v2z"></path>
                  <path d="M12 16v-4h-3v4c0 1.66 1.34 3 3 3s3-1.34 3-3v-7.5h2V9c0-1.66-1.34-3-3-3s-3 1.34-3 3v7z"></path>
                </svg>
              </a>
            </div>

            <div className="footer-payment">
              <h5 className="payment-title">Chấp Nhận Thanh Toán</h5>
              <div className="payment-methods">
                <div className="payment-method visa" title="Visa">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <rect width="24" height="24" rx="3" ry="3" fill="#1A1F71"></rect>
                    <path d="M10 9l-2 6h2.5l.3-1h1.3l.3 1h2.5l-2-6h-3zm.8 3.7l.2-.7.2-.5.2.5.2.7h-.8z" fill="#fff"></path>
                    <path d="M16 9l-1.5 6h2l1.5-6h-2zM7 9l-2 6h2l2-6H7z" fill="#fff"></path>
                  </svg>
                </div>
                <div className="payment-method mastercard" title="MasterCard">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <rect width="24" height="24" rx="3" ry="3" fill="#000"></rect>
                    <circle cx="9" cy="12" r="5" fill="#EB001B"></circle>
                    <circle cx="15" cy="12" r="5" fill="#F79E1B"></circle>
                    <path d="M12 9a5 5 0 0 0 0 6 5 5 0 0 0 0-6z" fill="#FF5F00"></path>
                  </svg>
                </div>
                <div className="payment-method paypal" title="PayPal">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <rect width="24" height="24" rx="3" ry="3" fill="#003087"></rect>
                    <path d="M7 10c0-1.1.9-2 2-2h3c.6 0 1 .4 1 1s-.4 1-1 1H9v1h3c.6 0 1 .4 1 1s-.4 1-1 1H9v1h3c.6 0 1 .4 1 1s-.4 1-1 1H9c-1.1 0-2-.9-2-2v-3z" fill="#fff"></path>
                    <path d="M15 8c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2h-1l-1-2h2v-4h-2l1-2h1z" fill="#fff"></path>
                  </svg>
                </div>
                <div className="payment-method momo" title="MoMo">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <rect width="24" height="24" rx="3" ry="3" fill="#A50064"></rect>
                    <circle cx="12" cy="12" r="6" fill="#fff"></circle>
                    <path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill="#A50064"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} GS Travel. Bản quyền thuộc về chúng tôi.
          </p>
          <div className="footer-policies">
            <Link to="/terms" className="policy-link">Điều khoản sử dụng</Link>
            <Link to="/privacy" className="policy-link">Chính sách bảo mật</Link>
            <Link to="/cookie" className="policy-link">Cookie</Link>
            <Link to="/sitemap" className="policy-link">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer