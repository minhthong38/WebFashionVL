import React from "react";
import { FaRegUser } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { MdAddShoppingCart } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext"; // Lấy cart từ context

export default function Header() {
  const navigate = useNavigate();
  const { getCartQuantity } = useCart(); // Lấy số lượng sản phẩm

  return (
    <div className="flex flex-col items-center">
      <div className="w-full flex justify-center bg-white py-4">
        <img
          className="h-20 w-auto cursor-pointer"
          src="https://imgur.com/aGyYV66.jpg"
          alt="Logo"
          onClick={() => navigate("/")}
        />
      </div>
      <hr className="w-full border-t-2 border-black" />

      <div className="flex pt-5">
        <div className="space-x-5 font-bold text-black flex justify-between items-center space-x-3 px-12 py-2">
          <a
            href="/"
            className="hover:text-blue-500 transition-colors duration-300"
          >
            TRANG CHỦ
          </a>
          <a
            href="/menu"
            className="hover:text-blue-500 transition-colors duration-300"
          >
            NAM
          </a>
          <a
            href="/menu"
            className="hover:text-blue-500 transition-colors duration-300"
          >
            NỮ
          </a>
          <a
            href="/menu"
            className="hover:text-blue-500 transition-colors duration-300"
          >
            TRẺ EM
          </a>
          <a
            href="/"
            className="hover:text-blue-500 transition-colors duration-300"
          >
            BỘ SƯU TẬP
          </a>

          <a
            href="/Store"
            className="hover:text-blue-500 transition-colors duration-300"
          >
            CỬA HÀNG
          </a>

          <a
            href="/admin"
            className="hover:text-blue-500 transition-colors duration-300"
          >
            ADMIN
          </a>
        </div>

        <div className="absolute right-0 mr-10 flex ">
          {/* Search bar */}
          <div className="space-x-5 border-black border-2 rounded-sm flex">
            <input
              type="text"
              className="w-full p-2 h-7"
              placeholder="Search..."
            />
            <IoSearchSharp className="justify-center my-auto text-2xl pr-1" />
          </div>

          {/* Cart and user icon */}
          <div className="flex space-x-4 text-xl items-center ">
            <div className="relative ml-7">
              <MdAddShoppingCart
                className="cursor-pointer hover:text-blue-500"
                onClick={() => navigate("/cart")}
              />
              {getCartQuantity() > 0 && (
                <span className="absolute bottom-4 left-4 bg-red-500 text-white rounded-full w-4 h-4 text-sm flex justify-center items-center">
                  {getCartQuantity()}
                </span>
              )}
            </div>
            <FaRegUser
              className="cursor-pointer hover:text-blue-500 ml-7  "
              onClick={() => navigate("/login")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
