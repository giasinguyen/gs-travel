import { useState, useRef, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import "../styles/Profile.css";

const Profile = () => {
  const { currentUser, updateUserProfile } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [avatarFile, setAvatarFile] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(null);
  const fileInputRef = useRef(null);
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    birthday: "",
    address: "",
    bio: "",
    preferences: {
      notifications: true,
      newsletter: true,
      travelPreferences: [],
    },
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  
  // Khởi tạo form data khi currentUser thay đổi
  useEffect(() => {
    if (currentUser) {
      setFormData({
        fullName: currentUser.fullName || "",
        email: currentUser.email || "",
        phone: currentUser.phone || "",
        birthday: currentUser.birthday || "",
        address: currentUser.address || "",
        bio: currentUser.bio || "",
        preferences: {
          notifications: currentUser.preferences?.notifications ?? true,
          newsletter: currentUser.preferences?.newsletter ?? true,
          travelPreferences: currentUser.preferences?.travelPreferences || [],
        },
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
      
      // Hiển thị avatar từ user
      setAvatarPreview(currentUser.avatar || null);
    }
  }, [currentUser]);

  // Xử lý thay đổi avatar
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatarFile(file);
      const reader = new FileReader();
      reader.onload = () => {
        setAvatarPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  
  // Xử lý click vào avatar
  const handleAvatarClick = () => {
    if (isEditing) {
      fileInputRef.current.click();
    }
  };

  // Xử lý thay đổi input
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (name.includes("preferences.")) {
      const prefName = name.split(".")[1];
      setFormData({
        ...formData,
        preferences: {
          ...formData.preferences,
          [prefName]: type === "checkbox" ? checked : value,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };
  
  // Xử lý thay đổi sở thích du lịch
  const handleTravelPreferenceChange = (preference) => {
    const currentPreferences = [...formData.preferences.travelPreferences];
    const index = currentPreferences.indexOf(preference);
    
    if (index > -1) {
      currentPreferences.splice(index, 1);
    } else {
      currentPreferences.push(preference);
    }
    
    setFormData({
      ...formData,
      preferences: {
        ...formData.preferences,
        travelPreferences: currentPreferences,
      },
    });
  };

  // Bắt đầu chỉnh sửa
  const handleEditClick = () => {
    setIsEditing(true);
  };
  
  // Hủy chỉnh sửa
  const handleCancelClick = () => {
    setIsEditing(false);
    
    // Reset form data và avatar preview
    if (currentUser) {
      setFormData({
        fullName: currentUser.fullName || "",
        email: currentUser.email || "",
        phone: currentUser.phone || "",
        birthday: currentUser.birthday || "",
        address: currentUser.address || "",
        bio: currentUser.bio || "",
        preferences: {
          notifications: currentUser.preferences?.notifications ?? true,
          newsletter: currentUser.preferences?.newsletter ?? true,
          travelPreferences: currentUser.preferences?.travelPreferences || [],
        },
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
      
      setAvatarPreview(currentUser.avatar || null);
      setAvatarFile(null);
    }
  };
  
  // Lưu thay đổi
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Kiểm tra mật khẩu mới nếu có
    if (formData.newPassword && formData.newPassword !== formData.confirmPassword) {
      alert("Mật khẩu xác nhận không khớp!");
      return;
    }
    
    try {
      // Chuẩn bị dữ liệu cập nhật
      const updateData = {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        birthday: formData.birthday,
        address: formData.address,
        bio: formData.bio,
        preferences: formData.preferences,
      };
      
      // Thêm avatar nếu có
      if (avatarFile) {
        updateData.avatarFile = avatarFile;
        updateData.avatar = avatarPreview;
      }
      
      // Thêm mật khẩu mới nếu có
      if (formData.newPassword) {
        updateData.currentPassword = formData.currentPassword;
        updateData.newPassword = formData.newPassword;
      }
      
      // Cập nhật profile
      await updateUserProfile(updateData);
      
      setIsEditing(false);
      alert("Cập nhật thông tin thành công!");
    } catch (error) {
      console.error("Lỗi khi cập nhật thông tin:", error);
      alert("Có lỗi xảy ra khi cập nhật thông tin. Vui lòng thử lại!");
    }
  };

  // Tạo chữ viết tắt từ tên
  const getInitials = (name) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('');
  };
  
  // Danh sách sở thích du lịch
  const travelPreferences = [
    { id: "adventure", label: "Du lịch mạo hiểm" },
    { id: "beach", label: "Biển" },
    { id: "mountain", label: "Núi" },
    { id: "culture", label: "Văn hóa" },
    { id: "food", label: "Ẩm thực" },
    { id: "history", label: "Lịch sử" },
    { id: "relax", label: "Nghỉ dưỡng" },
    { id: "eco", label: "Du lịch xanh" },
  ];

  return (
    <div className="profile-page">
      <div className="profile-container">
        <div className="profile-header">
          <h1>Thông tin cá nhân</h1>
          <p className="profile-subtitle">
            Quản lý thông tin cá nhân và tùy chọn của bạn
          </p>
        </div>

        <form onSubmit={handleSubmit} className="profile-form">
          <div className="profile-main">
            <div className="profile-avatar-section">
              <div 
                className={`profile-avatar ${isEditing ? "editable" : ""}`}
                onClick={handleAvatarClick}
              >
                {avatarPreview ? (
                  <img
                    src={avatarPreview}
                    alt="Avatar"
                    className="profile-avatar-image"
                  />
                ) : (
                  <div className="profile-avatar-fallback">
                    <span>{formData.fullName ? getInitials(formData.fullName) : "U"}</span>
                  </div>
                )}
                {isEditing && (
                  <div className="profile-avatar-overlay">
                    <span>Thay đổi</span>
                  </div>
                )}
              </div>
              <input 
                type="file"
                ref={fileInputRef}
                onChange={handleAvatarChange}
                accept="image/*"
                className="hidden-file-input"
              />
              
              <div className="profile-actions-mobile">
                {!isEditing ? (
                  <button 
                    type="button" 
                    className="edit-button" 
                    onClick={handleEditClick}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="action-icon"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                    </svg>
                    Chỉnh sửa
                  </button>
                ) : (
                  <div className="form-action-buttons">
                    <button 
                      type="button" 
                      className="cancel-button" 
                      onClick={handleCancelClick}
                    >
                      Hủy
                    </button>
                    <button 
                      type="submit" 
                      className="save-button"
                    >
                      Lưu thay đổi
                    </button>
                  </div>
                )}
              </div>
            </div>
            
            <div className="profile-details">
              <div className="profile-section">
                <h2>Thông tin cơ bản</h2>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="fullName">Họ và tên</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      required
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Số điện thoại</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="birthday">Ngày sinh</label>
                    <input
                      type="date"
                      id="birthday"
                      name="birthday"
                      value={formData.birthday}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                    />
                  </div>
                </div>
                
                <div className="form-group full-width">
                  <label htmlFor="address">Địa chỉ</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </div>
                
                <div className="form-group full-width">
                  <label htmlFor="bio">Giới thiệu bản thân</label>
                  <textarea
                    id="bio"
                    name="bio"
                    value={formData.bio}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    rows="4"
                  ></textarea>
                </div>
              </div>
              
              <div className="profile-section">
                <h2>Sở thích du lịch</h2>
                <p className="section-description">Chọn các loại hình du lịch bạn yêu thích</p>
                
                <div className="travel-preferences">
                  {travelPreferences.map(pref => (
                    <label key={pref.id} className={`preference-checkbox ${
                      formData.preferences.travelPreferences.includes(pref.id) ? "checked" : ""
                    }`}>
                      <input
                        type="checkbox"
                        name={`preferences.${pref.id}`}
                        checked={formData.preferences.travelPreferences.includes(pref.id)}
                        onChange={() => handleTravelPreferenceChange(pref.id)}
                        disabled={!isEditing}
                      />
                      <span className="preference-label">{pref.label}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div className="profile-section">
                <h2>Tùy chọn</h2>
                
                <label className="toggle-option">
                  <span className="toggle-label">Nhận thông báo</span>
                  <div className="toggle-control">
                    <input 
                      type="checkbox" 
                      name="preferences.notifications" 
                      checked={formData.preferences.notifications}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                    />
                    <div className="toggle-switch"></div>
                  </div>
                </label>
                
                <label className="toggle-option">
                  <span className="toggle-label">Đăng ký nhận bản tin</span>
                  <div className="toggle-control">
                    <input 
                      type="checkbox" 
                      name="preferences.newsletter" 
                      checked={formData.preferences.newsletter}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                    />
                    <div className="toggle-switch"></div>
                  </div>
                </label>
              </div>
              
              {isEditing && (
                <div className="profile-section">
                  <h2>Đổi mật khẩu</h2>
                  <p className="section-description">Để trống nếu bạn không muốn thay đổi mật khẩu</p>
                  
                  <div className="form-group full-width">
                    <label htmlFor="currentPassword">Mật khẩu hiện tại</label>
                    <input
                      type="password"
                      id="currentPassword"
                      name="currentPassword"
                      value={formData.currentPassword}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="newPassword">Mật khẩu mới</label>
                      <input
                        type="password"
                        id="newPassword"
                        name="newPassword"
                        value={formData.newPassword}
                        onChange={handleInputChange}
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="confirmPassword">Xác nhận mật khẩu</label>
                      <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="profile-actions">
            {!isEditing ? (
              <button 
                type="button" 
                className="edit-button" 
                onClick={handleEditClick}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="action-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                </svg>
                Chỉnh sửa thông tin
              </button>
            ) : (
              <div className="form-action-buttons">
                <button 
                  type="button" 
                  className="cancel-button" 
                  onClick={handleCancelClick}
                >
                  Hủy thay đổi
                </button>
                <button 
                  type="submit" 
                  className="save-button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="action-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
                    <polyline points="17 21 17 13 7 13 7 21"></polyline>
                    <polyline points="7 3 7 8 15 8"></polyline>
                  </svg>
                  Lưu thay đổi
                </button>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;