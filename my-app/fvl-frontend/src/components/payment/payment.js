import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

export default function Payment() {
  const navigate = useNavigate(); // Khai báo useNavigate
  const { cartItems, clearCart } = useCart(); // Lấy thông tin giỏ hàng và clearCart
  const [isGuest, setIsGuest] = useState(false); // Kiểm tra nếu là khách lẻ
  const [paymentMethod, setPaymentMethod] = useState(""); // Phương thức thanh toán

  // State cho thông tin khách lẻ
  const [customerInfo, setCustomerInfo] = useState({
    fullName: "",
    phoneNumber: "",
    address: "",
    email: "",
  });

  const handleGuestToggle = () => {
    setIsGuest(!isGuest);
  };

  // Tính tổng tiền
  const shippingFee = 30000; // Phí ship cố định
  let totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Nếu phương thức thanh toán là COD (Thanh Toán Khi Nhận Hàng), cộng phí ship
  if (paymentMethod === "cod") {
    totalAmount += shippingFee; // Cộng phí ship vào tổng tiền
  }

  const isShippingApplicable = paymentMethod === "cod";

  // Hàm kiểm tra số điện thoại
  const isValidPhoneNumber = (phoneNumber) => {
    return /^[0-9]+$/.test(phoneNumber); // Kiểm tra chỉ có số
  };

  // Hàm kiểm tra email
  const isValidEmail = (email) => {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email); // Kiểm tra định dạng email
  };

  // Hàm kiểm tra tên không chứa ký tự đặc biệt
  const isValidFullName = (fullName) => {
    return /^[a-zA-Z\s]+$/.test(fullName); // Kiểm tra chỉ chứa chữ cái và khoảng trắng
  };

  const handleConfirm = () => {
    // Validate required fields
    if (isGuest) {
      const { fullName, phoneNumber, address, email } = customerInfo;
      if (!fullName || !phoneNumber || !address || !email) {
        alert("Vui lòng điền đầy đủ thông tin.");
        return; // Prevent navigation
      }
      if (!isValidFullName(fullName)) {
        alert("Họ và tên không được chứa ký tự đặc biệt.");
        return;
      }
      if (!isValidPhoneNumber(phoneNumber)) {
        alert("Số điện thoại phải là số.");
        return;
      }
      if (!isValidEmail(email)) {
        alert("Email không hợp lệ. Email phải có '@' và '.com'.");
        return;
      }
    }

    // Generate order code: first four letters of full name + random five-digit number
    const orderCode =
      customerInfo.fullName.slice(0, 4).toUpperCase() +
      Math.floor(10000 + Math.random() * 90000);

    // Clear the cart after confirming
    clearCart();

    // Navigate to confirmation page
    navigate("/confirm", {
      state: {
        customerInfo,
        cartItems,
        totalAmount,
        orderCode, // Pass the order code to confirmation
      },
    });
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Phần bên trái - Thông tin thanh toán */}
        <div className="bg-white p-4 border rounded-md">
          <h2 className="text-xl font-bold mb-4">Thông Tin Thanh Toán</h2>

          {/* Nút đăng nhập */}
          <button className="bg-blue-500 hover:bg-red-600 text-white px-4 py-2 mb-4 rounded-md">
            Đăng Nhập
          </button>

          {/* Khách lẻ checkbox */}
          <div className="mb-4">
            <label>
              <input
                type="checkbox"
                checked={isGuest}
                onChange={handleGuestToggle}
                className="mr-2"
              />
              Khách lẻ
            </label>
          </div>

          {/* Hiện form thông tin khách lẻ nếu checkbox được chọn */}
          {isGuest && (
            <div className="mb-4">
              <input
                type="text"
                placeholder="Họ và Tên"
                value={customerInfo.fullName}
                onChange={(e) =>
                  setCustomerInfo({ ...customerInfo, fullName: e.target.value })
                }
                className="border px-4 py-2 w-full mb-2"
              />
              <input
                type="text"
                placeholder="Số Điện Thoại"
                value={customerInfo.phoneNumber}
                onChange={(e) =>
                  setCustomerInfo({
                    ...customerInfo,
                    phoneNumber: e.target.value,
                  })
                }
                className="border px-4 py-2 w-full mb-2"
              />
              <input
                type="text"
                placeholder="Địa Chỉ Cụ Thể"
                value={customerInfo.address}
                onChange={(e) =>
                  setCustomerInfo({ ...customerInfo, address: e.target.value })
                }
                className="border px-4 py-2 w-full mb-2"
              />
              <input
                type="text"
                placeholder="Email"
                value={customerInfo.email}
                onChange={(e) =>
                  setCustomerInfo({ ...customerInfo, email: e.target.value })
                }
                className="border px-4 py-2 w-full mb-2"
              />
            </div>
          )}

          {/* Chọn phương thức thanh toán */}
          <div className="mb-4">
            <h3 className="font-bold mb-2">Phương Thức Thanh Toán</h3>
            <label className="block">
              <input
                type="radio"
                name="payment"
                value="cod"
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="mr-2"
              />
              Thanh Toán Khi Nhận Hàng
            </label>
            <label className="block">
              <input
                type="radio"
                name="payment"
                value="storePickup"
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="mr-2"
              />
              Đến Nơi Nhận Hàng
            </label>
          </div>
        </div>

        {/* Phần bên phải - Thông tin giỏ hàng */}
        <div className="bg-white p-4 border rounded-md">
          <h2 className="text-xl font-bold mb-4">Thông Tin Giỏ Hàng</h2>

          <div className="flex justify-between font-bold mb-2">
            <span>Tên Sản Phẩm</span>
            <span>Size</span> {/* New column for Size */}
            <span>SL</span>
            <span>Thành Tiền</span>
          </div>

          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between mb-2">
              <span>{item.name}</span>
              <span>{item.size}</span>
              <span>x{item.quantity}</span>
              <span>{(item.price * item.quantity).toLocaleString("vi-VN")}đ</span>
            </div>
          ))}

          {/* Hiển thị phí vận chuyển nếu chọn COD */}
          {isShippingApplicable && (
            <div className="flex justify-between font-bold mt-2">
              <span>Phí Vận Chuyển:</span>
              <span>{shippingFee.toLocaleString("vi-VN")}đ</span>
            </div>
          )}

          {/* Tổng tiền hàng */}
          <div className="border-t mt-4 pt-2 flex justify-between font-bold">
            <span>Tổng Tiền Hàng:</span>
            <span>{totalAmount.toLocaleString("vi-VN")}đ</span>
          </div>

          <div className="flex justify-center mt-4">
            <button
              onClick={handleConfirm}
              className="bg-blue-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
            >
              Xác Nhận Thanh Toán
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
