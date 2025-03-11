import { createContext, useContext, useState, useEffect } from "react";

// Tạo context cho quản lý xác thực
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Khôi phục trạng thái đăng nhập từ localStorage khi component được tạo
  useEffect(() => {
    const checkAuthStatus = () => {
      const authStatus = localStorage.getItem("isAuthenticated");
      const userData = localStorage.getItem("userData");

      if (authStatus === "true" && userData) {
        setIsAuthenticated(true);
        setCurrentUser(JSON.parse(userData));
      }

      setIsLoading(false);
    };

    checkAuthStatus();
  }, []);

  // Đăng nhập với thông tin người dùng
  const login = (userData) => {
    // Mặc định nếu không có userData, dùng dữ liệu mẫu
    const user = userData || {
      id: "admin1",
      fullName: "Nguyễn Trần Gia Sĩ",
      email: "giasi@example.com",
      role: "admin",
      avatar: "/images/user-avatar.jpg",
    };

    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("userData", JSON.stringify(user));

    setCurrentUser(user);
    setIsAuthenticated(true);

    return true;
  };

  // Đăng xuất người dùng
  const logout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("userData");

    setCurrentUser(null);
    setIsAuthenticated(false);

    return true;
  };

  // Cập nhật thông tin người dùng
  const updateProfile = (data) => {
    const updatedUser = { ...currentUser, ...data };
    localStorage.setItem("userData", JSON.stringify(updatedUser));
    setCurrentUser(updatedUser);

    return true;
  };

  // Đổi mật khẩu người dùng (mô phỏng)
  const changePassword = (oldPassword, newPassword) => {
    // Trong thế giới thực, bạn sẽ gọi API để xác thực mật khẩu cũ
    // và đặt mật khẩu mới. Đây chỉ là mô phỏng.
    console.log(`Đã đổi mật khẩu thành công từ ${oldPassword} sang ${newPassword}!`);
    return true;
  };

  // Xác thực tài khoản người dùng (mô phỏng)
  const authenticate = (email, password) => {
    // Thông tin xác thực mẫu
    const mockCredentials = {
      "admin@gstravel.vn": "admin123",
      "giasi@example.com": "password123",
    };

    if (mockCredentials[email] === password) {
      // Trong thực tế, server sẽ trả về thông tin người dùng
      const userData = {
        id: "user1",
        fullName: "Nguyễn Trần Gia Sĩ",
        email: email,
        role: email.includes("admin") ? "admin" : "user",
        avatar: "/images/user-avatar.jpg",
      };

      login(userData);
      return true;
    }

    return false;
  };

  // Kiểm tra quyền truy cập của người dùng
  const checkPermission = (requiredRole) => {
    if (!isAuthenticated || !currentUser) return false;

    // Nếu không yêu cầu role cụ thể hoặc người dùng có role admin
    if (!requiredRole || currentUser.role === "admin") return true;

    // Kiểm tra người dùng có role phù hợp không
    return currentUser.role === requiredRole;
  };

  // Giá trị được cung cấp cho context
  const value = {
    currentUser,
    isAuthenticated,
    isLoading,
    login,
    logout,
    authenticate,
    updateProfile,
    changePassword,
    checkPermission,
  };

  return (
    <AuthContext.Provider value={value}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
};

// Hook tùy chỉnh để sử dụng context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth phải được sử dụng trong AuthProvider");
  }
  return context;
};
