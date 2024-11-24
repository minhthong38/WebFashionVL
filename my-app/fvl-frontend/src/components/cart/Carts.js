import React from "react";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Carts() {
  const { cartItems, setCartItems } = useCart();
  const navigate = useNavigate();

  const handleIncrease = (id, size) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.size === size
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const handleDecrease = (id, size) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.size === size && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleRemove = (id, size) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== id || item.size !== size)
    );
  };

  const handleCheckout = () => {
    if (cartItems.length > 0) {
      navigate("/payment");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Giỏ hàng của bạn</h2>
      {cartItems.length === 0 ? (
        <div>
          <p>Giỏ hàng của bạn đang trống. Không thể thanh toán.</p>
        </div>
      ) : (
        cartItems.map((item) => (
          <div
            key={`${item.id}-${item.size}`}
            className="flex justify-between items-center p-4 border-b"
          >
            <div className="flex items-center">
              <img
                src={`assets/${item.id}.jpg`}
                alt={item.name}
                className="h-16 w-16 object-cover mr-4"
              />
              <div>
                <h3 className="font-bold">{item.name}</h3>
                <p>{item.description}</p>
                <p>
                  {item.price.toLocaleString("vi-VN")}đ x {item.quantity} ={" "}
                  {(item.price * item.quantity).toLocaleString("vi-VN")}đ
                </p>
                <p>Size: {item.size}</p> {/* Hiển thị size */}
              </div>
            </div>
            <div className="flex items-center">
              <button
                className="bg-blue-500 text-white px-2 py-1 rounded-md mr-2"
                onClick={() => handleIncrease(item.id, item.size)}
              >
                +
              </button>
              <span>{item.quantity}</span>
              <button
                className="bg-blue-500 text-white px-2 py-1 rounded-md ml-2"
                onClick={() => handleDecrease(item.id, item.size)}
              >
                -
              </button>
              <button
                className="bg-red-700 text-white px-2 py-1 rounded-md ml-8"
                onClick={() => handleRemove(item.id, item.size)}
              >
                Xóa
              </button>
            </div>
          </div>
        ))
      )}
      {cartItems.length > 0 && (
        <div className="mt-4 flex justify-between items-center">
          <div>
            <h3 className="text-lg font-bold">Tổng cộng:</h3>
            <p className="text-xl">
              {cartItems
                .reduce((total, item) => total + item.price * item.quantity, 0)
                .toLocaleString("vi-VN")}
              đ
            </p>
          </div>
          <button
            className="bg-red-600 text-white px-4 py-2 rounded-md ml-4"
            onClick={handleCheckout}
          >
            Thanh toán
          </button>
        </div>
      )}
    </div>
  );
}
