"use client";

import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isDestinationsOpen, setIsDestinationsOpen] = useState(false);
  const location = useLocation();
  const userMenuRef = useRef(null);
  const destinationsMenuRef = useRef(null);

  // Mock: Kiểm tra trạng thái đăng nhập từ localStorage khi component mount
  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated");
    if (authStatus === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  // Đóng dropdown menu khi click bên ngoài
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false);
      }
      if (
        destinationsMenuRef.current &&
        !destinationsMenuRef.current.contains(event.target)
      ) {
        setIsDestinationsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Đóng menu khi chuyển trang
  useEffect(() => {
    setIsMenuOpen(false);
    setIsUserMenuOpen(false);
    setIsDestinationsOpen(false);
  }, [location]);

  // Hiệu ứng header khi cuộn
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header");
      if (window.scrollY > 100) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const toggleDestinations = () => {
    setIsDestinationsOpen(!isDestinationsOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    setIsLoggedIn(false);
    setIsUserMenuOpen(false);
  };

  // Mock: Giả lập đăng nhập cho việc demo
  const handleAdminClick = () => {
    if (!isLoggedIn) {
      localStorage.setItem("isAuthenticated", "true");
      setIsLoggedIn(true);
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo" aria-label="GS Travel - Trang chủ">
          <div className="logo-image">
            <svg
              className="logo-icon"
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
          <div className="logo-text">
            <span className="logo-name">GS Travel</span>
            <span className="logo-tagline">Khám phá Việt Nam</span>
          </div>
        </Link>

        <div className="nav-group">
          <nav className="desktop-nav">
            <Link
              to="/"
              className={`nav-link ${
                location.pathname === "/" ? "active" : ""
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="nav-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
              <span>Trang Chủ</span>
            </Link>

            <div className="destinations-dropdown" ref={destinationsMenuRef}>
              <button
                className={`nav-link dropdown-trigger ${
                  isDestinationsOpen ? "active" : ""
                } ${
                  location.pathname.includes("/destinations")
                    ? "path-active"
                    : ""
                }`}
                onClick={toggleDestinations}
                aria-expanded={isDestinationsOpen}
                aria-haspopup="true"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="nav-icon"
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
                <span>Điểm Đến</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`dropdown-arrow ${
                    isDestinationsOpen ? "open" : ""
                  }`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>

              {isDestinationsOpen && (
                <div className="destinations-menu">
                  <div className="destinations-columns">
                    <div className="destinations-column">
                      <h3>Miền Bắc</h3>
                      <Link
                        to="/destinations/halong-bay"
                        className="destination-item"
                      >
                        <div
                          className="destination-image"
                          style={{
                            backgroundImage: `url('/images/halong-thumb.jpg')`,
                          }}
                        ></div>
                        <div className="destination-info">
                          <span className="destination-name">Vịnh Hạ Long</span>
                          <span className="destination-desc">
                            Di sản thiên nhiên thế giới
                          </span>
                        </div>
                      </Link>
                      <Link
                        to="/destinations/sapa"
                        className="destination-item"
                      >
                        <div
                          className="destination-image"
                          style={{
                            backgroundImage: `url('/images/sapa-thumb.jpg')`,
                          }}
                        ></div>
                        <div className="destination-info">
                          <span className="destination-name">Sa Pa</span>
                          <span className="destination-desc">
                            Thị trấn trong sương
                          </span>
                        </div>
                      </Link>
                      <Link
                        to="/destinations/hanoi"
                        className="destination-item"
                      >
                        <div
                          className="destination-image"
                          style={{
                            backgroundImage: `url('/images/hanoi-thumb.jpg')`,
                          }}
                        ></div>
                        <div className="destination-info">
                          <span className="destination-name">Hà Nội</span>
                          <span className="destination-desc">
                            Thủ đô ngàn năm văn hiến
                          </span>
                        </div>
                      </Link>
                    </div>

                    <div className="destinations-column">
                      <h3>Miền Trung</h3>
                      <Link
                        to="/destinations/hoian"
                        className="destination-item"
                      >
                        <div
                          className="destination-image"
                          style={{
                            backgroundImage: `url('/images/hoian-thumb.jpg')`,
                          }}
                        ></div>
                        <div className="destination-info">
                          <span className="destination-name">Hội An</span>
                          <span className="destination-desc">
                            Phố cổ đèn lồng
                          </span>
                        </div>
                      </Link>
                      <Link to="/destinations/hue" className="destination-item">
                        <div
                          className="destination-image"
                          style={{
                            backgroundImage: `url('/images/hue-thumb.jpg')`,
                          }}
                        ></div>
                        <div className="destination-info">
                          <span className="destination-name">Huế</span>
                          <span className="destination-desc">
                            Cố đô lịch sử
                          </span>
                        </div>
                      </Link>
                      <Link
                        to="/destinations/danang"
                        className="destination-item"
                      >
                        <div
                          className="destination-image"
                          style={{
                            backgroundImage: `url('/images/danang-thumb.jpg')`,
                          }}
                        ></div>
                        <div className="destination-info">
                          <span className="destination-name">Đà Nẵng</span>
                          <span className="destination-desc">
                            Thành phố đáng sống
                          </span>
                        </div>
                      </Link>
                    </div>

                    <div className="destinations-column">
                      <h3>Miền Nam</h3>
                      <Link
                        to="/destinations/phuquoc"
                        className="destination-item"
                      >
                        <div
                          className="destination-image"
                          style={{
                            backgroundImage: `url('/images/phuquoc-thumb.jpg')`,
                          }}
                        ></div>
                        <div className="destination-info">
                          <span className="destination-name">Phú Quốc</span>
                          <span className="destination-desc">
                            Đảo ngọc phương Nam
                          </span>
                        </div>
                      </Link>
                      <Link
                        to="/destinations/hochiminh"
                        className="destination-item"
                      >
                        <div
                          className="destination-image"
                          style={{
                            backgroundImage: `url('/images/hcmc-thumb.jpg')`,
                          }}
                        ></div>
                        <div className="destination-info">
                          <span className="destination-name">Hồ Chí Minh</span>
                          <span className="destination-desc">
                            Thành phố không ngủ
                          </span>
                        </div>
                      </Link>
                      <Link
                        to="/destinations/mekong"
                        className="destination-item"
                      >
                        <div
                          className="destination-image"
                          style={{
                            backgroundImage: `url('/images/mekong-thumb.jpg')`,
                          }}
                        ></div>
                        <div className="destination-info">
                          <span className="destination-name">
                            Đồng bằng sông Cửu Long
                          </span>
                          <span className="destination-desc">
                            Miền sông nước
                          </span>
                        </div>
                      </Link>
                    </div>
                  </div>

                  <div className="destinations-footer">
                    <Link to="/destinations" className="view-all-destinations">
                      Xem tất cả điểm đến
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="arrow-icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/about"
              className={`nav-link ${
                location.pathname === "/about" ? "active" : ""
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="nav-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
              </svg>
              <span>Giới Thiệu</span>
            </Link>

            <Link
              to="/contact"
              className={`nav-link ${
                location.pathname === "/contact" ? "active" : ""
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="nav-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
              <span>Liên Hệ</span>
            </Link>
          </nav>

          {isLoggedIn ? (
            <div className="user-menu-container" ref={userMenuRef}>
              <button
                className="user-button"
                onClick={toggleUserMenu}
                aria-haspopup="true"
                aria-expanded={isUserMenuOpen}
              >
                <div className="user-avatar">
                  <img
                    src="/images/user-avatar.jpg"
                    alt="Avatar người dùng"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  <div className="avatar-fallback">
                    <span>GS</span>
                  </div>
                </div>
                <div className="user-info">
                  <span className="user-name">Nguyễn Trần Gia Sĩ</span>
                  <span className="user-role">Quản trị viên</span>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`dropdown-icon ${isUserMenuOpen ? "open" : ""}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>

              <div className={`user-dropdown ${isUserMenuOpen ? "open" : ""}`}>
                <div className="dropdown-header">
                  <div className="user-avatar">
                    <img
                      src="/images/user-avatar.jpg"
                      alt="Avatar người dùng"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.nextSibling.style.display = "flex";
                      }}
                    />
                    <div className="avatar-fallback">
                      <span>GS</span>
                    </div>
                  </div>
                  <div>
                    <span className="dropdown-name">Nguyễn Trần Gia Sĩ</span>
                    <span className="dropdown-email">giasi@example.com</span>
                  </div>
                </div>

                <div className="dropdown-divider"></div>

                <Link to="/profile" className="dropdown-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="dropdown-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  <div className="dropdown-content">
                    <span className="dropdown-label">Thông tin cá nhân</span>
                    <span className="dropdown-description">
                      Cập nhật thông tin của bạn
                    </span>
                  </div>
                </Link>

                <Link to="/bookings" className="dropdown-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="dropdown-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="3"
                      y="4"
                      width="18"
                      height="18"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  <div className="dropdown-content">
                    <span className="dropdown-label">Đặt chỗ của tôi</span>
                    <span className="dropdown-description">
                      Xem lịch sử đặt tour
                    </span>
                  </div>
                </Link>

                <Link to="/change-password" className="dropdown-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="dropdown-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="3"
                      y="11"
                      width="18"
                      height="11"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                  <div className="dropdown-content">
                    <span className="dropdown-label">Đổi mật khẩu</span>
                    <span className="dropdown-description">
                      Cập nhật mật khẩu của bạn
                    </span>
                  </div>
                </Link>

                <div className="dropdown-divider"></div>

                <button onClick={handleLogout} className="dropdown-item logout">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="dropdown-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                    <polyline points="16 17 21 12 16 7"></polyline>
                    <line x1="21" y1="12" x2="9" y2="12"></line>
                  </svg>
                  <div className="dropdown-content">
                    <span className="dropdown-label">Đăng xuất</span>
                    <span className="dropdown-description">
                      Thoát khỏi tài khoản
                    </span>
                  </div>
                </button>
              </div>
            </div>
          ) : (
            <div className="auth-buttons">
              <Link to="/login" className="login-button">
                <span>Đăng nhập</span>
              </Link>
              <Link
                to="/admin-login"
                className="admin-button"
                onClick={handleAdminClick}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="admin-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <span>Admin</span>
              </Link>
            </div>
          )}

          <button
            className="mobile-menu-button"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Đóng menu" : "Mở menu"}
          >
            <svg
              className="menu-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div className={`mobile-nav ${isMenuOpen ? "open" : ""}`}>
        <div className="mobile-nav-container">
          <Link to="/" className="mobile-nav-link" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="nav-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            <span>Trang Chủ</span>
          </Link>

          <div className="mobile-destinations-menu">
            <button
              className="mobile-menu-trigger"
              onClick={() => setIsDestinationsOpen(!isDestinationsOpen)}
            >
              <div className="mobile-menu-header">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="nav-icon"
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
                <span>Điểm Đến</span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`dropdown-arrow ${isDestinationsOpen ? "open" : ""}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>

            {isDestinationsOpen && (
              <div className="mobile-submenu">
                <div className="mobile-submenu-section">
                  <h3 className="mobile-submenu-title">Miền Bắc</h3>
                  <Link
                    to="/destinations/halong-bay"
                    className="mobile-submenu-link"
                    onClick={toggleMenu}
                  >
                    Vịnh Hạ Long
                  </Link>
                  <Link
                    to="/destinations/sapa"
                    className="mobile-submenu-link"
                    onClick={toggleMenu}
                  >
                    Sa Pa
                  </Link>
                  <Link
                    to="/destinations/hanoi"
                    className="mobile-submenu-link"
                    onClick={toggleMenu}
                  >
                    Hà Nội
                  </Link>
                </div>

                <div className="mobile-submenu-section">
                  <h3 className="mobile-submenu-title">Miền Trung</h3>
                  <Link
                    to="/destinations/hoian"
                    className="mobile-submenu-link"
                    onClick={toggleMenu}
                  >
                    Hội An
                  </Link>
                  <Link
                    to="/destinations/hue"
                    className="mobile-submenu-link"
                    onClick={toggleMenu}
                  >
                    Huế
                  </Link>
                  <Link
                    to="/destinations/danang"
                    className="mobile-submenu-link"
                    onClick={toggleMenu}
                  >
                    Đà Nẵng
                  </Link>
                </div>

                <div className="mobile-submenu-section">
                  <h3 className="mobile-submenu-title">Miền Nam</h3>
                  <Link
                    to="/destinations/phuquoc"
                    className="mobile-submenu-link"
                    onClick={toggleMenu}
                  >
                    Phú Quốc
                  </Link>
                  <Link
                    to="/destinations/hochiminh"
                    className="mobile-submenu-link"
                    onClick={toggleMenu}
                  >
                    Hồ Chí Minh
                  </Link>
                  <Link
                    to="/destinations/mekong"
                    className="mobile-submenu-link"
                    onClick={toggleMenu}
                  >
                    Đồng bằng sông Cửu Long
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link to="/about" className="mobile-nav-link" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="nav-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
            <span>Giới Thiệu</span>
          </Link>

          <Link to="/contact" className="mobile-nav-link" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="nav-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            <span>Liên Hệ</span>
          </Link>

          {isLoggedIn ? (
            <>
              <div className="mobile-user-info">
                <div className="user-avatar mobile">
                  <img
                    src="/images/user-avatar.jpg"
                    alt="Avatar người dùng"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  <div className="avatar-fallback">
                    <span>GS</span>
                  </div>
                </div>
                <div>
                  <span className="mobile-user-name">Nguyễn Trần Gia Sĩ</span>
                  <span className="mobile-user-role">Quản trị viên</span>
                </div>
              </div>

              <Link
                to="/profile"
                className="mobile-nav-link"
                onClick={toggleMenu}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="nav-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <span>Thông tin cá nhân</span>
              </Link>

              <Link
                to="/bookings"
                className="mobile-nav-link"
                onClick={toggleMenu}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="nav-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                <span>Đặt chỗ của tôi</span>
              </Link>

              <Link
                to="/change-password"
                className="mobile-nav-link"
                onClick={toggleMenu}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="nav-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect
                    x="3"
                    y="11"
                    width="18"
                    height="11"
                    rx="2"
                    ry="2"
                  ></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
                <span>Đổi mật khẩu</span>
              </Link>

              <button onClick={handleLogout} className="mobile-nav-link logout">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="nav-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                  <polyline points="16 17 21 12 16 7"></polyline>
                  <line x1="21" y1="12" x2="9" y2="12"></line>
                </svg>
                <span>Đăng xuất</span>
              </button>
            </>
          ) : (
            <div className="mobile-auth-buttons">
              <Link
                to="/login"
                className="mobile-login-button"
                onClick={toggleMenu}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="nav-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                  <polyline points="10 17 15 12 10 7"></polyline>
                  <line x1="15" y1="12" x2="3" y2="12"></line>
                </svg>
                <span>Đăng nhập</span>
              </Link>
              <Link
                to="/admin-login"
                className="mobile-admin-button"
                onClick={() => {
                  handleAdminClick();
                  toggleMenu();
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="nav-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <span>Admin</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
