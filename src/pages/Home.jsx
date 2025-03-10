"use client";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
import "../styles/Home.css";
import HaLong from "./assets/Ha-Long-bay.jpg";
import HoiAn from "./assets/hoi-an.jpg";
import Hue from "./assets/hue.jpeg";
import PhongNha from "./assets/phong-nha.jpg";
import PhuQuoc from "./assets/phu-quoc.jpg";
import Sapa from "./assets/sapa.jpg";

const Home = () => {
  // eslint-disable-next-line no-unused-vars
  const [destinations, setDestinations] = useState([
    {
      id: 1,
      name: "Vịnh Hạ Long",
      country: "Việt Nam",
      description: "Di sản UNESCO với hàng nghìn hòn đảo đá vôi",
      image: HaLong,
    },
    {
      id: 2,
      name: "Hội An",
      country: "Việt Nam",
      description:
        "Phố cổ nổi tiếng với đèn lồng đầy màu sắc và các cửa hiệu may đo",
      image: HoiAn,
    },
    {
      id: 3,
      name: "Sa Pa",
      country: "Việt Nam",
      description:
        "Thị trấn miền núi với những thửa ruộng bậc thang tuyệt đẹp và các làng dân tộc",
      image: Hue,
    },
    {
      id: 4,
      name: "Phong Nha",
      country: "Việt Nam",
      description:
        "Quê hương của những hang động lớn nhất và đẹp nhất thế giới",
      image: PhongNha,
    },
    {
      id: 5,
      name: "Huế",
      country: "Việt Nam",
      description: "Kinh đô với Hoàng thành lịch sử và các lăng tẩm hoàng gia",
      image: Hue,
    },
    {
      id: 6,
      name: "Phú Quốc",
      country: "Việt Nam",
      description: "Thiên đường nhiệt đới với những bãi biển nguyên sơ",
      image: PhuQuoc,
    },
  ]);

  const backgroundImages = [HaLong, PhuQuoc, Sapa, Hue, PhongNha, HoiAn];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-page">
      <section
        className="hero-section"
        style={{
          backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
          transition: "background-image 0.8s ease-in-out",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Khám Phá Điểm Đến Tiếp Theo</h1>
          <p className="hero-subtitle">
            Khám phá những điểm đến đẹp nhất Việt Nam
          </p>
          <div className="search-container">
            <input
              type="text"
              placeholder="Bạn muốn đi đâu?"
              className="search-input"
            />
            <button className="search-button">Tìm Kiếm</button>
          </div>
        </div>
      </section>

      <section className="destinations-section">
        <div className="container">
          <h2 className="section-title">Điểm Đến Phổ Biến</h2>

          <div className="destinations-grid">
            {destinations.map((destination) => (
              <div key={destination.id} className="destination-card">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="destination-image"
                />
                <div className="destination-content">
                  <h3 className="destination-title">
                    {destination.name}, {destination.country}
                  </h3>
                  <p className="destination-description">
                    {destination.description}
                  </p>
                  <button className="destination-button">
                    <Link style={{color: "white", fontStyle: "inherit"}}
                      to={
                        destination.id === 1 ? "/destinations/halong-bay" : "#"
                      }
                    >
                      Khám phá
                    </Link>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">
            Sẵn sàng cho chuyến phiêu lưu tiếp theo?
          </h2>
          <p className="cta-subtitle">
            Tham gia cùng hàng nghìn du khách đã trải nghiệm dịch vụ du lịch cao
            cấp của chúng tôi
          </p>
          <button className="cta-button">Lên Kế Hoạch Ngay</button>
        </div>
      </section>
    </div>
  );
};

export default Home;