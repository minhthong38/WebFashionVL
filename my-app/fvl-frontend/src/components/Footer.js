import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 py-8 text-white">
      <div className="container mx-auto flex justify-between items-start px-8">
        {/* Contact Information */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-lg font-bold">Thông Tin Liên Hệ</h3>
          <p>
            <b>Số điện thoại:</b> 0987654321
          </p>
          <p>
            <b>Email:</b> vanlang.store@gmail.com
          </p>
          <p>
            <b>Địa chỉ cửa hàng:</b>
          </p>
          <p>69/68 Dương Quảng Hàm, Quận Bình Thạnh, TP.HCM</p>
          <p>45 Nguyễn Khắc Nhu, Quận 1, TP.HCM</p>
          <p>233A Phan Văn Trị, Quận Bình Thạnh, TP.HCM</p>
        </div>

        {/* Logo and Download Links */}
        <div className="flex flex-col items-center space-y-4">
          {/* Store Logo */}
          <img
            src="https://imgur.com/mtGek68.jpg"
            alt="Footer logo"
            className="w-48 h-auto"
          />
          <h3 className="text-lg font-bold">Tải ứng dụng FashionVL Store</h3>

          {/* App Store Buttons */}
          <div className="flex space-x-4">
            <img
              src="https://imgur.com/9FZAm7h.jpeg"
              alt="Google Play Store"
              className="h-10"
            />
            <img
              src="https://imgur.com/QcGKppH.jpeg"
              alt="Apple App Store"
              className="h-10"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
