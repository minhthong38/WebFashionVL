import React, { createContext, useState, useContext } from "react";

// Tạo Context, bộ nhớ tạm
const CartContext = createContext();

// Provider để bọc các component cần dùng cart
export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]); // Lưu trữ giỏ hàng với các sản phẩm và size

  // Hàm để thêm sản phẩm vào giỏ
  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find(
        (i) => i.id === item.id && i.size === item.size // Kiểm tra sản phẩm và size đã tồn tại trong giỏ
      );

      if (itemExists) {
        // Nếu sản phẩm và size đã tồn tại, tăng số lượng
        return prevItems.map((i) =>
          i.id === item.id && i.size === item.size
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        );
      } else {
        // Nếu sản phẩm chưa có, thêm vào với quantity = 1 và size
        return [...prevItems, { ...item, quantity: item.quantity }];
      }
    });
  };

  // Hàm để lấy số lượng sản phẩm
  const getCartQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  // Hàm để xóa giỏ hàng
  const clearCart = () => {
    setCartItems([]); // Clear cart items
  };

  // Cung cấp context cho các component
  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, getCartQuantity, setCartItems, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Hook để sử dụng cart trong các component
export function useCart() {
  return useContext(CartContext);
}
