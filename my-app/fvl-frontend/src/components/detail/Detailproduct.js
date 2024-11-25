import React, { useState, useEffect } from "react";
import "../../icon/fontawesome-free-6.6.0-web/fontawesome-free-6.6.0-web/css/all.min.css";
import { useParams } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import axios from "axios";

export default function DetailProduct() {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [products, setProducts] = useState([]);
  const [selectedSize, setSelectedSize] = useState(""); // State để lưu size
  const { id } = useParams();

  // Danh sách size cứng
  const fixedSizes = ["S", "M", "L", "XL"];

  // Gọi API để lấy danh sách sản phẩm
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products"); // URL API
        setProducts(response.data); // Lưu danh sách sản phẩm vào state
      } catch (error) {
        console.error("Lỗi khi lấy danh sách sản phẩm:", error);
      }
    };
    fetchProducts();
  }, []);

  // Tìm sản phẩm cụ thể dựa trên id
  const product = products.find((item) => item.id === id);

  // Nếu không tìm thấy sản phẩm
  if (!product) {
    return <div>Sản phẩm không tồn tại!</div>;
  }

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrease = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : prevQuantity));
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Vui lòng chọn size!");
      return;
    }
    const productWithDetails = {
      ...product,
      quantity,
      size: selectedSize, // Thêm size vào đối tượng sản phẩm
    };
    addToCart(productWithDetails); // Gửi sản phẩm kèm size vào giỏ hàng
    alert("Đã thêm vào giỏ hàng thành công!");
  };

  return (
    <div className="flex flex-wrap container mx-auto p-10">
      {/* Left Section */}
      <div className="flex-1 max-w-lg border-b-black border-b-4 flex flex-row mr-8">
        <div className="w-full">
          <img src={`/assets/${product.id}.jpg`} alt={product.name} className="w-full rounded-lg" />
        </div>
        <div className="flex flex-col ml-8 gap-8">
          <img src="/assets/ao002.jpg" alt="Collar Detail" className="max-w-lg h-32 rounded-lg" />
          <img src="/assets/ao003.jpg" alt="Sleeve Detail" className="max-w-lg h-32 rounded-lg" />
          <img src="/assets/ao004.jpg" alt="Logo Detail" className="max-w-lg h-32 rounded-lg" />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 ml-16 max-w-xl">
        <h1 className="text-4xl font-bold pt-5">{product.name}</h1>
        <p className="text-sm pt-5">{product.description}</p>
        <p className="text-3xl font-semibold text-red-500 pt-5">
          {product.price.toLocaleString("vi-VN")}đ
        </p>
        <div className="flex items-center gap-2 pt-4"></div>
        {/* Size Options */}
        <div className="flex items-center gap-2 pt-4">
          <span className="text-sm font-semibold">Size:</span>
          <select
            className="border px-4 py-1"
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
          >
            <option value="">Chọn size</option>
            {fixedSizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
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
        <div className="flex flex-col mt-4 pt-4 w-96">
          <button
            className="border-4 border-black text-black py-2 rounded-md hover:bg-red-600 hover:text-white"
            onClick={handleAddToCart}
          >
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>
    </div>
  );
}
