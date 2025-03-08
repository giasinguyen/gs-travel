import { Link } from "react-router-dom"
import "../styles/Footer.css"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-column">
            <h3 className="footer-title">GS Travel</h3>
            <p className="footer-description">
              Khám phá những điểm đến tuyệt vời nhất của Việt Nam với hướng dẫn viên chuyên nghiệp và trải nghiệm du lịch cá nhân hóa.
            </p>
          </div>

          <div className="footer-column">
            <h4 className="footer-subtitle">Đường Dẫn Nhanh</h4>
            <ul className="footer-links">
              <li>
                <Link to="/" className="footer-link">
                  Trang Chủ
                </Link>
              </li>
              <li>
                <Link to="/about" className="footer-link">
                  Về Chúng Tôi
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">
                  Liên Hệ
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-subtitle">Điểm Đến Phổ Biến</h4>
            <ul className="footer-links">
              <li>
                <a href="#" className="footer-link">
                  Vịnh Hạ Long, Việt Nam
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Hội An, Việt Nam
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Sa Pa, Việt Nam
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Phú Quốc, Việt Nam
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-subtitle">Kết Nối Với Chúng Tôi</h4>
            <div className="social-links">
              <a href="#" className="social-link">
                <i className="fab fa-facebook-f"></i>
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-twitter"></i>
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-instagram"></i>
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-pinterest"></i>
                <span className="sr-only">Pinterest</span>
              </a>
            </div>
            <div className="newsletter">
              <h5 className="newsletter-title">Đăng Ký Nhận Tin</h5>
              <div className="newsletter-form">
                <input type="email" placeholder="Email của bạn" className="newsletter-input" />
                <button className="newsletter-button">Đăng Ký</button>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} GS Travel. Bản quyền thuộc về chúng tôi.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer