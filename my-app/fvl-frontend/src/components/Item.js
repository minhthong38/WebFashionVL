import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

<<<<<<< HEAD
export default function ItemsList({ id, name, price, description, originalPrice }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    const product = { id, name, price, description, quantity: 1 };
    addToCart(product);
    alert("Đã thêm vào giỏ hàng thành công!");
=======
export default function ItemsList(props) {
  const { addToCart } = useCart(); // Sử dụng hook từ context

  const handleAddToCart = () => {
    const product = {
      id: props.id,
      name: props.name,
      price: props.price,
      description: props.description,
      quantity: 1, // Số lượng mặc định khi thêm vào giỏ
    };
    addToCart(product); // Thêm sản phẩm vào giỏ
    alert("Đã thêm vào giỏ hàng thành công!"); // Thông báo thành công
>>>>>>> bcd865b68def8cfcc4d408f3e0b7fd09e762ff7e
  };

  return (
    <div className="flex flex-col h-full w-full max-w-xs">
<<<<<<< HEAD
      <div className="border border-gray-300 rounded-lg shadow-md h-full flex flex-col">
        <div className="relative flex-grow">
          <Link to={`/detailproduct/${id}`}>
=======
      {" "}
      {/* Đảm bảo chiều cao và chiều rộng tối đa */}
      <div
        key={props.id}
        className="border border-gray-300 rounded-lg shadow-md h-full flex flex-col"
      >
        <div className="relative flex-grow">
          {" "}
          {/* Flex-grow để ảnh chiếm hết chiều cao */}
          {/* Tải ảnh combo động theo ID */}
          <Link to={`/detailproduct/${props.id}`}>
>>>>>>> bcd865b68def8cfcc4d408f3e0b7fd09e762ff7e
            <img
              src={`assets/${id}.jpg`}
              alt={name}
              className="w-full h-100 object-cover rounded-t-lg"
            />
          </Link>
<<<<<<< HEAD
=======
          {/* Nhãn giá ở góc trên của ảnh */}
>>>>>>> bcd865b68def8cfcc4d408f3e0b7fd09e762ff7e
          <div className="absolute top-0 left-0 bg-black text-white p-2 rounded-br-lg">
            Chỉ {price / 1000}K
          </div>
        </div>
        <div className="p-4 flex flex-col flex-grow">
<<<<<<< HEAD
          <h3 className="text-lg font-bold">{name}</h3>
          <p className="text-sm text-gray-600">{description}</p>
=======
          {" "}
          {/* Đảm bảo nội dung chiếm không gian còn lại */}
          {/* Tên và mô tả combo */}
          <h3 className="text-lg font-bold">{props.name}</h3>
          <p className="text-sm text-gray-600">{props.description}</p>
          {/* Giá và giá gốc */}
>>>>>>> bcd865b68def8cfcc4d408f3e0b7fd09e762ff7e
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
<<<<<<< HEAD
          <button
=======
          {/* Ẩn nút Thêm vào giỏ */}
          {/* <button
>>>>>>> bcd865b68def8cfcc4d408f3e0b7fd09e762ff7e
            className="mt-4 w-full flex justify-center items-center bg-black hover:bg-blue-500 text-white py-2 rounded-md"
            onClick={handleAddToCart}
          >
            <span className="mr-2">+</span> Thêm vào giỏ
          </button> */}
        </div>
      </div>
    </div>
  );
}
