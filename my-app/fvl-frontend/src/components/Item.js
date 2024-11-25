import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function ItemsList({ id, name, price, description, originalPrice }) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1); // State để lưu số lượng
  const [selectedSize, setSelectedSize] = useState(""); // State để lưu size được chọn

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Vui lòng chọn size trước khi thêm vào giỏ hàng!");
      return;
    }
    if (quantity < 1) {
      alert("Số lượng phải lớn hơn 0");
      return;
    }
    const product = { id, name, price, description, quantity, size: selectedSize };
    addToCart(product);
    alert("Đã thêm vào giỏ hàng thành công!");
  };

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrease = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <div className="flex flex-col h-full w-full max-w-xs">
      <div
        key={id}
        className="border border-gray-300 rounded-lg shadow-md h-full flex flex-col"
      >
        <div className="relative flex-grow">
          <Link to={`/detailproduct/${id}`}>
            <img
              src={`../../assets/${id}.jpg`}
              alt={name}
              className="w-full h-100 object-cover rounded-t-lg"
            />
          </Link>
          <div className="absolute top-0 left-0 bg-black text-white p-2 rounded-br-lg">
            Chỉ {price / 1000}K
          </div>
        </div>
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-lg font-bold">{name}</h3>
          <p className="text-sm text-gray-600">{description}</p>
          <div className="flex items-center mt-2">
            <span className="text-red-500 font-bold text-lg">
              {price.toLocaleString("vi-VN")}đ
            </span>
            {originalPrice && (
              <span className="text-gray-400 line-through ml-2">
                {originalPrice.toLocaleString("vi-VN")}đ
              </span>
            )}
          </div>
          {/* Chọn size */}
          <div className="flex items-center mt-4">
            <label htmlFor={`size-select-${id}`} className="mr-2 text-sm font-semibold">
              Size:
            </label>
            <select
              id={`size-select-${id}`}
              className="border px-2 py-1 rounded"
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
            >
              <option value="">Chọn size</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
          </div>
          {/* Bộ chọn số lượng */}
          <div className="flex items-center mt-4">
            <button
              className="px-3 py-1 border border-gray-300 rounded-l-md"
              onClick={handleDecrease}
            >
              -
            </button>
            <span className="px-5 py-1 border-t border-b border-gray-300">{quantity}</span>
            <button
              className="px-3 py-1 border border-gray-300 rounded-r-md"
              onClick={handleIncrease}
            >
              +
            </button>
          </div>
          {/* Nút thêm vào giỏ */}
          <button
            className="mt-4 w-full flex justify-center items-center bg-black hover:bg-blue-500 text-white py-2 rounded-md"
            onClick={handleAddToCart}
          >
            <span className="mr-2">+</span> Thêm vào giỏ
          </button>
        </div>
      </div>
    </div>
  );
}
