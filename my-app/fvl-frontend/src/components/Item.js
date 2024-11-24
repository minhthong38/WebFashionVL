import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function ItemsList({ id, name, price, description, originalPrice }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    const product = { id, name, price, description, quantity: 1 };
    addToCart(product);
    alert("Đã thêm vào giỏ hàng thành công!");
  };

  return (
    <div className="flex flex-col h-full w-full max-w-xs">
      <div className="border border-gray-300 rounded-lg shadow-md h-full flex flex-col">
        <div className="relative flex-grow">
          <Link to={`/detailproduct/${id}`}>
            <img
              src={`assets/${id}.jpg`}
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
