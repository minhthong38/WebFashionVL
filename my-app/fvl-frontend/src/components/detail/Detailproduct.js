import React, { useState, useEffect } from 'react'; 
import '../../icon/fontawesome-free-6.6.0-web/fontawesome-free-6.6.0-web/css/all.min.css';
import { useParams } from 'react-router-dom'; 
import { useCart } from "../../context/CartContext";
import axios from 'axios';

export default function DetailProduct() {
  const { addToCart } = useCart(); // Hook từ context
  const [quantity, setQuantity] = useState(1); // Khởi tạo state quantity
  const [products, setProducts] = useState([]); // State để lưu danh sách sản phẩm
  const { id } = useParams(); // Lấy id từ URL

  // Gọi API để lấy danh sách sản phẩm
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products'); // URL API
        setProducts(response.data); // Lưu danh sách sản phẩm vào state
      } catch (error) {
        console.error('Lỗi khi lấy danh sách sản phẩm:', error);
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
    addToCart({ ...product, quantity });
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
    <p className="text-sm pt-5">{product.name}</p>
    <p className="text-3xl font-semibold text-red-500 pt-5">{product.price.toLocaleString("vi-VN")}đ</p>
    <div className="flex items-center gap-2 pt-4">
      <p>Màu sắc: <span className="font-semibold">Đen</span></p>
      <div className="w-6 h-6 bg-black rounded-full"></div>
    </div>
    <div className="flex items-center gap-2 pt-4">
      <span className="text-sm font-semibold">Size:</span>
      {['S', 'M', 'L', 'XL', 'XXL', 'XXXL'].map(size => (
        <button key={size} className="border px-4 py-1 hover:bg-gray-200">
          {size}
        </button>
      ))}
    </div>
    <div className="flex items-center gap-4 pt-4">
      <span>Số Lượng:</span>
      <div className="flex items-center border">
        <button className="px-2 py-1" onClick={handleDecrease}>-</button>
        <span className="px-4">{quantity}</span>
        <button className="px-2 py-1" onClick={handleIncrease}>+</button>
      </div>
    </div>
    <div className="flex flex-col mt-4 pt-4 w-96">
      <button className="border-4 border-black text-black py-2 rounded-md hover:bg-red-600 hover:text-white" onClick={handleAddToCart}>
        Thêm vào giỏ hàng
      </button>
      <button className="border-4 border-red-500 text-red-500 py-2 rounded-md hover:bg-red-500 hover:text-white mt-5">
        Tìm Tại Cửa Hàng
      </button>
      <div className='flex text-base justify-center'>
        <div className='flex p-5 items-center'>
          <i className="fa-solid fa-phone pr-2"></i>
          <p>Hotline</p>
        </div>
        <div className='flex p-5 items-center'>
          <i className="fa-regular fa-comment pr-2"></i>
          <p>Chat</p>
        </div>
        <div className='flex p-5 items-center'>
          <i className="fa-regular fa-envelope pr-2"></i>
          <p>Mail</p>
        </div>
      </div>
    </div>
  </div>

  {/* Product Description */}
  <div className="mt-6 pt-4 w-full">
    <h2 className="text-lg font-semibold mb-2">Mô tả sản phẩm</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Thoáng mát suốt ngày hè với Áo Polo Thể Thao Nam</li>
      <li>Chất liệu 85% Nylon + 15% Spandex mềm mịn, co giãn tốt, giúp vận động thoải mái.</li>
      <li>Công nghệ Aircool tiên tiến: Khô nhanh, hạn chế mồ hôi bám dính.</li>
      <li>Thấm hút mồ hôi tốt, giữ cơ thể luôn khô ráo.</li>
      <li>Giữ form lâu, bền đẹp.</li>
    </ul>
  </div>
</div>

  );
}
