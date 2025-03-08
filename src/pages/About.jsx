import { useImageSearch } from "../hooks/useImageSearch"
import "../styles/About.css"

const About = () => {
  // eslint-disable-next-line no-unused-vars
  const { images, loading } = useImageSearch("công ty du lịch việt nam")

  const teamMembers = [
    {
      id: 1,
      name: "Nguyễn Trần Gia Sĩ",
      role: "Giám đốc & Nhà sáng lập",
      bio: "Người đam mê du lịch với hơn 15 năm kinh nghiệm trong ngành du lịch Việt Nam.",
    },
    {
      id: 2,
      name: "Nguyễn Trần Gia Sĩ",
      role: "Tư vấn Du lịch",
      bio: "Chuyên gia về các điểm đến tại Việt Nam với kiến thức sâu rộng về văn hóa địa phương.",
    },
    {
      id: 3,
      name: "Nguyễn Trần Gia Sĩ",
      role: "Giám đốc Marketing",
      bio: "Người đứng sau các chiến dịch quảng bá và sự hiện diện trên mạng xã hội của chúng tôi.",
    },
    {
      id: 4,
      name: "Nguyễn Trần Gia Sĩ",
      role: "Chăm sóc Khách hàng",
      bio: "Luôn tận tâm đảm bảo mỗi khách hàng có một hành trình khó quên tại Việt Nam.",
    },
  ]

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <h1 className="about-hero-title">Về GS Travel</h1>
          <p className="about-hero-subtitle">
            Chúng tôi đam mê tạo ra những trải nghiệm du lịch khó quên kết nối bạn với những điểm đến tuyệt vời nhất tại Việt Nam.
          </p>
        </div>
      </section>

      <section className="story-section">
        <div className="container">
          <div className="story-container">
            <div className="story-image-container">
              <img
                src="travel-app\src\assets\Ha-Long-bay.jpg"
                alt="Câu chuyện của chúng tôi"
                className="story-image"
              />
            </div>
            <div className="story-content">
              <h2 className="story-title">Câu Chuyện Của Chúng Tôi</h2>
              <p className="story-text">
                Được thành lập vào năm 2025, GS Travel bắt đầu với một sứ mệnh đơn giản: giúp mọi người khám phá Việt Nam theo những cách mới và ý nghĩa. Từ một nhóm nhỏ những người đam mê du lịch, chúng tôi đã phát triển thành một mạng lưới các chuyên gia du lịch tận tâm tạo ra những hành trình cá nhân hóa.
              </p>
              <p className="story-text">
                Chúng tôi tin rằng du lịch có sức mạnh thay đổi cuộc sống, mở rộng tầm nhìn và tạo ra những kỷ niệm lâu dài. Đó là lý do chúng tôi cam kết tạo ra những trải nghiệm vượt xa các điểm du lịch thông thường và kết nối bạn với văn hóa địa phương đích thực.
              </p>
              <p className="story-text">
                Qua nhiều năm, chúng tôi đã giúp hàng nghìn du khách khám phá đất nước Việt Nam xinh đẹp, luôn chú trọng đến du lịch bền vững, tôn trọng văn hóa và tạo ra những trải nghiệm khó quên.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <h2 className="section-title">Đội Ngũ Của Chúng Tôi</h2>

          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={member.id} className="team-card">
                <img
                  src={`https://source.unsplash.com/300x300/?vietnamese,${index % 2 === 0 ? 'woman' : 'man'},professional`}
                  alt={member.name}
                  className="team-image"
                />
                <div className="team-content">
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p className="team-bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values-section">
        <div className="container">
          <h2 className="section-title">Giá Trị Của Chúng Tôi</h2>

          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="value-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="value-title">Khám Phá</h3>
              <p className="value-description">
                Chúng tôi tin vào việc vượt qua giới hạn và khám phá những chân trời mới để tạo ra những trải nghiệm thực sự đáng nhớ.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon-container sustainability">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="value-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                  />
                </svg>
              </div>
              <h3 className="value-title">Bền Vững</h3>
              <p className="value-description">
                Chúng tôi cam kết du lịch có trách nhiệm, tôn trọng cộng đồng địa phương và bảo tồn môi trường tự nhiên.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon-container connection">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="value-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="value-title">Kết Nối</h3>
              <p className="value-description">
                Chúng tôi nuôi dưỡng những kết nối ý nghĩa giữa du khách và văn hóa địa phương để tạo ra trải nghiệm chân thực nhất.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About