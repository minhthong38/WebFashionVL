import React, { useState } from "react";
import "../../icon/fontawesome-free-6.6.0-web/fontawesome-free-6.6.0-web/css/all.min.css";
import { combo } from "../../data/combo";
import { useParams } from "react-router-dom"; // Dùng để lấy id từ URL
import { useCart } from "../../context/CartContext";

export default function DetailProduct() {
  const { addToCart } = useCart(); // Use hook from context

  const [quantity, setQuantity] = useState(1); // Khởi tạo state quantity
  const [selectedSize, setSelectedSize] = useState(""); // State cho size
  const [error, setError] = useState(""); // State cho thông báo lỗi

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1); // Tăng quantity
  };

  const handleDecrease = () => {
    setQuantity((prevQuantity) =>
      prevQuantity > 1 ? prevQuantity - 1 : prevQuantity
    ); // Giảm quantity, không cho phép dưới 1
  };

  // Lấy id từ URL
  const { id } = useParams();

  // Tìm sản phẩm theo id (không cần parseInt vì id là chuỗi)
  const product = combo.find((item) => item.id === id);

  // Nếu không tìm thấy sản phẩm, hiển thị thông báo
  if (!product) {
    return <div>Sản phẩm không tồn tại!</div>;
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      setError("Bạn cần chọn size!"); // Hiển thị thông báo lỗi nếu chưa chọn size
      return;
    }

    // Nếu chọn size rồi, thêm sản phẩm vào giỏ
    addToCart({ ...product, quantity, size: selectedSize });
    setError(""); // Xóa thông báo lỗi nếu thêm thành công
    alert("Đã thêm vào giỏ hàng thành công!"); // Success notification
  };

  return (
    <div className="flex flex-col container mx-auto p-10">
      {/* Left Section (Product Images) */}
      <div className="flex border-b-black border-b-4 pb-4">
        {/* Main Image - Large */}
        <img
          src={`/assets/${product.id}.jpg`}
          alt={product.name}
          className="w-104 rounded-lg"
        />

        {/* Small Images - Vertical Align */}
        <div className="flex flex-col ml-10">
          <img
            src="/assets/ao002.jpg"
            alt="Collar Detail"
            className="w-28 h-32 rounded-lg"
          />
          <img
            src="/assets/ao003.jpg"
            alt="Sleeve Detail"
            className="w-28 h-32 rounded-lg"
          />
          <img
            src="/assets/ao004.jpg"
            alt="Logo Detail"
            className="w-28 h-32 rounded-lg"
          />
          <img
            src="/assets/ao005.jpg"
            alt="Logo Detail"
            className="w-28 h-32 rounded-lg"
          />
        </div>

        {/* Right Section (Product Details) */}
        <div className="w-1/2 ml-16">
          <h1 className="text-4xl font-bold pt-5">{product.name}</h1>
          <p className="text-2sm pt-5">{product.name}</p>
          <p className="text-3xl font-semibold text-red-500 pt-5">
            {product.price.toLocaleString("vi-VN")}đ
          </p>

          {/* Size Options */}
          <div className="flex items-center gap-2 pt-4">
            <span className="text-sm font-semibold">Size:</span>
            <select
              className="border px-4 py-1"
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)} // Cập nhật size khi thay đổi
            >
              <option value="">Chọn size</option>
              {product.sizes &&
                product.sizes.map(
                  (
                    size // Use product.sizes to get the available sizes
                  ) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  )
                )}
            </select>
          </div>

          {/* Error message */}
          {error && <p className="text-red-500 pt-2">{error}</p>}

          {/* Quantity Controls */}
          <div className="flex items-center gap-4 pt-4">
            <span>Số Lượng:</span>
            <div className="flex items-center border">
              <button className="px-2 py-1" onClick={handleDecrease}>
                -
              </button>
              <span className="px-4">{quantity}</span>
              <button className="px-2 py-1" onClick={handleIncrease}>
                +
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col mt-4 pt-4 w-96 ">
            <button
              className="border-4 border-black text-black py-2 rounded-md hover:bg-red-600 hover:text-white"
              onClick={handleAddToCart}
            >
              Thêm vào giỏ hàng
            </button>
            <div className="flex text-base justify-center">
              <div className="flex p-5 items-center">
                <i className="fa-solid fa-phone pr-2"></i>
                <p>Hotline</p>
              </div>
              <div className="flex p-5 items-center">
                <i className="fa-regular fa-comment pr-2"></i>
                <p>Chat</p>
              </div>
              <div className="flex p-5 items-center">
                <i className="fa-regular fa-envelope pr-2"></i>
                <p>Mail</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Description */}
      <div className="mt-6 pt-4">
        <h2 className="text-lg font-semibold mb-2">Mô tả sản phẩm</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Thoáng mát suốt ngày hè với Áo Polo Thể Thao Nam</li>
          <li>
            Chất liệu 85% Nylon + 15% Spandex mềm mịn, co giãn tốt, giúp vận
            động thoải mái.
          </li>
          <li>
            Công nghệ Aircool tiên tiến: Khô nhanh, hạn chế mồ hôi bám dính.
          </li>
          <li>Thấm hút mồ hôi tốt, giữ cơ thể luôn khô ráo.</li>
          <li>Giữ form lâu, bền đẹp.</li>
        </ul>
      </div>
    </div>
  );
}
