import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function ItemsList(props) {
  const { addToCart } = useCart(); // Use hook from context

  const handleAddToCart = () => {
    const product = {
      id: props.id,
      name: props.name,
      price: props.price,
      description: props.description,
      quantity: 1, // Default quantity when adding from the list
    };
    addToCart(product); // Add product to cart
    alert("Đã thêm vào giỏ hàng thành công!"); // Success notification
  };

  return (
    <div className="flex flex-col h-full w-full max-w-xs"> {/* Ensure max height and width */}
      <div
        key={props.id}
        className="border border-gray-300 rounded-lg shadow-md h-full flex flex-col"
      >
        <div className="relative flex-grow"> {/* Flex-grow for full image height */}
          {/* Dynamically load combo image based on ID */}
          <Link to={`/detailproduct/${props.id}`}>
            <img
              src={`assets/${props.id}.jpg`}
              alt={props.name}
              className="w-full h-100 object-cover rounded-t-lg"
            />
          </Link>
          {/* Price label on top of the image */}
          <div className="absolute top-0 left-0 bg-black text-white p-2 rounded-br-lg">
            Chỉ {props.price / 1000}K
          </div>
        </div>
        <div className="p-4 flex flex-col flex-grow"> {/* Ensure content takes remaining space */}
          {/* Combo name and description */}
          <h3 className="text-lg font-bold">{props.name}</h3>
          <p className="text-sm text-gray-600">{props.description}</p>

          {/* Price and original price */}
          <div className="flex items-center mt-2">
            <span className="text-red-500 font-bold text-lg">
              {props.price.toLocaleString("vi-VN")}đ
            </span>
            {props.originalPrice && (
              <span className="text-gray-400 line-through ml-2">
                {props.originalPrice.toLocaleString("vi-VN")}đ
              </span>
            )}
          </div>

          {/* Add to cart button */}
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
