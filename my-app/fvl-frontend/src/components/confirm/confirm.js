import React from "react";
import { useLocation, Link } from "react-router-dom";

export default function Confirm() {
  const location = useLocation();
  const { customerInfo, cartItems, totalAmount, orderCode } = location.state;

  const orderDate = new Date().toLocaleString("vi-VN", {
    timeZone: "Asia/Ho_Chi_Minh",
  });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Xác Nhận Đặt Hàng</h1>
      <h2 className="text-xl font-bold mb-2">Thông Tin Khách Hàng</h2>
      <p><strong>Tên: </strong>{customerInfo.fullName}</p>
      <p><strong>Số Điện Thoại: </strong>{customerInfo.phoneNumber}</p>
      <p><strong>Địa Chỉ: </strong>{customerInfo.address}</p>
      <p><strong>Mã Đơn Hàng: </strong>{orderCode}</p>
      <p><strong>Thời Gian Đặt Hàng: </strong>{orderDate}</p>
      <h2 className="text-xl font-bold mb-2 mt-4">Thông Tin Giỏ Hàng</h2>
      <div className="flex justify-between font-bold mb-2">
        <span>Tên Sản Phẩm</span>
        <span>Size</span>
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

      <div className="border-t mt-4 pt-2 flex justify-between font-bold">
        <span>Tổng Tiền Hàng:</span>
        <span>{totalAmount.toLocaleString("vi-VN")}đ</span>
      </div>

      <div className="flex justify-center mt-4">
        <Link to="/menu" className="bg-blue-500 hover:bg-red-600 text-white px-4 py-2 rounded-md">
          ⟲ Quay Lại Mua Sắm
        </Link>
      </div>
    </div>
  );
}
