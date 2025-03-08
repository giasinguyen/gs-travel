"use client"

import { useState } from "react"
import "./styles/DestinationDetail.css"
import HaLong from '../assets/Ha-Long-bay.jpg'
import { Link } from "react-router-dom"
import BaiTamTiTop from '../assets/Bai-tam-Titop.jpg'
import LangChaiCuaVan from '../assets/lang-chai-cua-van.jpg'

const HalongBay = () => {
  const [activeTab, setActiveTab] = useState('overview')
  
  const highlights = [
    {
      id: 1,
      title: "Sung Sot Cave (Hang Sung Sốt)",
      description: "Một trong những hang động đẹp và lớn nhất vịnh Hạ Long, nổi tiếng với những thạch nhũ hùng vĩ và không gian rộng lớn.",
      image: "https://plus.unsplash.com/premium_photo-1661962933220-527edf0f8b3d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 2,
      title: "Đảo Ti Top (Ti Top Island)",
      description: "Hòn đảo xinh đẹp với bãi biển nhỏ và điểm ngắm cảnh tuyệt vời từ đỉnh đảo, nơi bạn có thể ngắm toàn cảnh vịnh Hạ Long.",
      image: "https://plus.unsplash.com/premium_photo-1669052824052-c6484a8214b3?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 3,
      title: "Làng Chài Cửa Vạn",
      description: "Làng chài nổi trên vịnh Hạ Long, nơi du khách có thể tìm hiểu về cuộc sống của ngư dân địa phương sống trên những căn nhà nổi.",
      image: LangChaiCuaVan
    },
    {
      id: 4,
      title: "Bãi Tắm Titov",
      description: "Bãi biển đẹp với cát trắng mịn và nước biển trong xanh, là điểm dừng chân lý tưởng để nghỉ ngơi và tắm biển.",
      image: BaiTamTiTop
    }
  ]

  const tourPackages = [
    {
      id: 1,
      name: "Tour Ngày Vịnh Hạ Long",
      duration: "1 ngày",
      price: "1.200.000 VND",
      description: "Khám phá vẻ đẹp của vịnh Hạ Long trong ngày với chuyến đi thuyền tham quan các điểm nổi tiếng."
    },
    {
      id: 2,
      name: "Tour Vịnh Hạ Long 2 Ngày 1 Đêm",
      duration: "2 ngày 1 đêm",
      price: "2.500.000 VND",
      description: "Trải nghiệm đêm trên vịnh Hạ Long với tàu du lịch cao cấp, thưởng thức ẩm thực địa phương và tham gia các hoạt động thú vị."
    },
    {
      id: 3,
      name: "Gói Premium Vịnh Hạ Long",
      duration: "3 ngày 2 đêm",
      price: "5.000.000 VND",
      description: "Trọn gói nghỉ dưỡng cao cấp trên du thuyền 5 sao, khám phá vùng sâu vịnh Bái Tử Long và trải nghiệm VIP."
    }
  ]

  const faqs = [
    {
      id: 1,
      question: "Khi nào là thời gian tốt nhất để thăm vịnh Hạ Long?",
      answer: "Thời gian lý tưởng để thăm vịnh Hạ Long là từ tháng 10 đến tháng 4, khi thời tiết mát mẻ và ít mưa. Tránh khoảng thời gian từ tháng 6 đến tháng 9 vì đó là mùa mưa bão."
    },
    {
      id: 2,
      question: "Làm thế nào để đến được vịnh Hạ Long từ Hà Nội?",
      answer: "Từ Hà Nội, bạn có thể đến vịnh Hạ Long bằng xe khách (khoảng 4 giờ), taxi hoặc xe riêng (khoảng 2.5-3 giờ), hoặc thủy phi cơ (45 phút). Nhiều tour cũng cung cấp dịch vụ đón từ Hà Nội."
    },
    {
      id: 3,
      question: "Có nên đặt tour trước khi đến vịnh Hạ Long không?",
      answer: "Có, việc đặt tour trước là rất khuyến khích, đặc biệt vào mùa cao điểm. Điều này giúp bạn đảm bảo có chỗ trên tàu du lịch và thường có giá tốt hơn so với đặt trực tiếp."
    },
    {
      id: 4,
      question: "Nên mang theo những gì khi đi vịnh Hạ Long?",
      answer: "Hãy mang theo quần áo nhẹ, đồ bơi, kem chống nắng, thuốc chống say sóng nếu bạn dễ bị say, máy ảnh và một ít tiền mặt cho các chi tiêu nhỏ."
    }
  ]

  return (
    <div className="destination-detail-page">
      <section className="destination-hero" style={{ backgroundImage: `url(${HaLong})` }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Vịnh Hạ Long</h1>
          <p className="hero-subtitle">Di sản thiên nhiên thế giới tại Việt Nam</p>
        </div>
      </section>

      <section className="destination-nav">
        <div className="container">
          <ul className="nav-tabs">
            <li className={activeTab === 'overview' ? 'active' : ''} onClick={() => setActiveTab('overview')}>Tổng Quan</li>
            <li className={activeTab === 'highlights' ? 'active' : ''} onClick={() => setActiveTab('highlights')}>Điểm Nổi Bật</li>
            <li className={activeTab === 'tours' ? 'active' : ''} onClick={() => setActiveTab('tours')}>Tour Du Lịch</li>
            <li className={activeTab === 'faq' ? 'active' : ''} onClick={() => setActiveTab('faq')}>Hỏi Đáp</li>
          </ul>
        </div>
      </section>

      <div className="container">
        {activeTab === 'overview' && (
          <section className="overview-section">
            <div className="overview-grid">
              <div className="overview-content">
                <h2>Giới Thiệu Về Vịnh Hạ Long</h2>
                <p>Vịnh Hạ Long nằm ở phía Đông Bắc Việt Nam, là một trong những kỳ quan thiên nhiên nổi tiếng nhất của đất nước. Năm 1994, UNESCO đã công nhận Vịnh Hạ Long là Di sản Thiên nhiên Thế giới nhờ giá trị địa chất, địa mạo đặc biệt với hơn 1.600 hòn đảo đá vôi lớn nhỏ trên vùng biển rộng hơn 1.500 km².</p>
                
                <p>Tên gọi "Hạ Long" có nghĩa là "nơi rồng đáp xuống". Theo truyền thuyết, khi Việt Nam mới thành lập và phải đối mặt với các cuộc xâm lược, các vị thần đã cử một gia đình rồng xuống giúp người Việt chống lại kẻ thù. Những con rồng này đã phun ra ngọc và ngọc biến thành hàng nghìn hòn đảo đá, tạo thành các rào cản chống lại kẻ thù, giúp người Việt giành chiến thắng và hình thành nên cảnh quan hùng vĩ ngày nay.</p>
                
                <h3>Đặc Điểm Nổi Bật</h3>
                <ul>
                  <li>Hệ thống hơn 1.600 hòn đảo đá vôi và đảo nhỏ</li>
                  <li>Các hang động tuyệt đẹp với thạch nhũ độc đáo</li>
                  <li>Làng chài nổi truyền thống</li>
                  <li>Hệ sinh thái biển phong phú</li>
                  <li>Khung cảnh hoàng hôn và bình minh tuyệt đẹp</li>
                </ul>
                
                <h3>Thông Tin Du Lịch</h3>
                <div className="travel-info">
                  <div className="info-item">
                    <h4>Thời Gian Lý Tưởng</h4>
                    <p>Tháng 10 - Tháng 4</p>
                  </div>
                  <div className="info-item">
                    <h4>Thời Gian Di Chuyển</h4>
                    <p>2.5-3 giờ từ Hà Nội</p>
                  </div>
                  <div className="info-item">
                    <h4>Chi Phí Trung Bình</h4>
                    <p>1.000.000 - 5.000.000 VND/người</p>
                  </div>
                </div>
              </div>
              <div className="overview-images">
                <img src={HaLong} alt="Vịnh Hạ Long" className="main-image" />
                <div className="small-images">
                  <img src={HaLong} alt="Thuyền trên vịnh Hạ Long" />
                  <img src={HaLong} alt="Hoàng hôn vịnh Hạ Long" />
                </div>
              </div>
            </div>
          </section>
        )}

        {activeTab === 'highlights' && (
          <section className="highlights-section">
            <h2>Điểm Đến Nổi Bật</h2>
            <div className="highlights-grid">
              {highlights.map(spot => (
                <div key={spot.id} className="highlight-card">
                  <img src={spot.image} alt={spot.title} className="highlight-image" />
                  <div className="highlight-content">
                    <h3>{spot.title}</h3>
                    <p>{spot.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'tours' && (
          <section className="tours-section">
            <h2>Các Gói Tour Du Lịch</h2>
            <div className="tours-grid">
              {tourPackages.map(tour => (
                <div key={tour.id} className="tour-card">
                  <h3>{tour.name}</h3>
                  <div className="tour-details">
                    <span className="tour-duration">{tour.duration}</span>
                    <span className="tour-price">{tour.price}</span>
                  </div>
                  <p>{tour.description}</p>
                  <button className="tour-button">Đặt Ngay</button>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'faq' && (
          <section className="faq-section">
            <h2>Câu Hỏi Thường Gặp</h2>
            <div className="faq-list">
              {faqs.map(faq => (
                <div key={faq.id} className="faq-item">
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      <section className="gallery-section">
        <div className="container">
          <h2 className="section-title">Thư Viện Ảnh</h2>
          <div className="gallery-grid">
            <img src={HaLong} alt="Cảnh quan vịnh Hạ Long" />
            <img src={HaLong} alt="Hang động vịnh Hạ Long" />
            <img src={HaLong} alt="Du thuyền vịnh Hạ Long" />
            <img src={HaLong} alt="Đảo vịnh Hạ Long" />
            <img src={HaLong} alt="Toàn cảnh vịnh Hạ Long" />
            <img src={HaLong} alt="Hoàng hôn vịnh Hạ Long" />
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">Sẵn sàng khám phá Vịnh Hạ Long?</h2>
          <p className="cta-subtitle">Hãy để chúng tôi giúp bạn lên kế hoạch cho chuyến đi hoàn hảo!</p>
          <div className="cta-buttons">
            <Link to="/contact" className="cta-button primary">Liên Hệ Tư Vấn</Link>
            <button className="cta-button secondary">Xem Tour</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HalongBay