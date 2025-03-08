"use client"

import { useState } from "react"
import "../styles/Contact.css"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [formStatus, setFormStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormStatus("loading")

    setTimeout(() => {
      setFormStatus("success")
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    }, 1500)
  }

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <h1 className="contact-hero-title">Liên Hệ Với Chúng Tôi</h1>
          <p className="contact-hero-subtitle">
            Bạn có câu hỏi hoặc sẵn sàng cho chuyến đi tiếp theo? Chúng tôi sẽ giúp bạn!
          </p>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <div className="contact-container">
            <div className="form-container">
              <h2 className="section-title">Gửi Thông Tin</h2>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Họ và Tên
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="Nguyễn Trần Gia Sĩ"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="giasinguyentran@gmail.com"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">
                    Tiêu Đề
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Bạn cần hỗ trợ gì?"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Nội Dung
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="form-textarea"
                    placeholder="Hãy chia sẻ kế hoạch du lịch hoặc câu hỏi của bạn..."
                  ></textarea>
                </div>

                <button type="submit" className="submit-button" disabled={formStatus === "loading"}>
                  {formStatus === "loading" ? (
                    <>
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
                      Đang gửi...
                    </>
                  ) : (
                    "Gửi Tin Nhắn"
                  )}
                </button>

                {formStatus === "success" && (
                  <div className="success-message">
                    Tin nhắn của bạn đã được gửi thành công! Chúng tôi sẽ liên hệ lại sớm.
                  </div>
                )}
              </form>
            </div>

            <div className="info-container">
              <div className="contact-info">
                <h3 className="info-title">Thông Tin Liên Hệ</h3>

                <div className="info-items">
                  <div className="info-item">
                    <div className="info-icon-container">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="info-icon"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="info-subtitle">Địa Chỉ</h4>
                      <p className="info-text">
                        123 Đường Lê Lợi, Quận 1
                        <br />
                        TP. Hồ Chí Minh, Việt Nam
                      </p>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="info-icon-container">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="info-icon"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="info-subtitle">Điện Thoại</h4>
                      <p className="info-text">+84 34 899 6487</p>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="info-icon-container">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="info-icon"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="info-subtitle">Email</h4>
                      <p className="info-text">giasinguyentran@gmail.com</p>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="info-icon-container">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="info-icon"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="info-subtitle">Giờ Làm Việc</h4>
                      <p className="info-text">
                        Thứ Hai-Thứ Sáu: 8:00-17:30
                        <br />
                        Thứ Bảy: 8:30-12:00
                        <br />
                        Chủ Nhật: Nghỉ
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="office-image-container">
                <img
                  src="./assets/Ha-Long-bay.jpg"
                  alt="Văn phòng của chúng tôi"
                  className="office-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="container">
          <h2 className="section-title">Tìm Chúng Tôi</h2>
          <div className="map-container">
            <iframe
              title="Google Maps Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4241674197667!2d106.69848911471827!3d10.776089192319087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f4670702e31%3A0xe4b9079251850328!2zMTIzIMSQLiBMw6ogTOG7o2ksIELhur9uIE5naMOpLCBRdeG6rW4gMSwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1646644354763!5m2!1svi!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact