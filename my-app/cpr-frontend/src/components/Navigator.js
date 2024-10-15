import React from "react";

export default function NavigationBar() {
  return (
    <section
      className="bg-gray-300 py-4 mx-4 my-4 rounded-lg"
      style={{ margin: "25px" }}
    >
      <div className="container mx-auto flex justify-around">
        <div className="flex items-center ">
          <img
            src="https://imgur.com/Faiq0gW.jpeg"
            alt="Bestseller icon"
            className="mr-2 h-20 w-20"
          />
          <a href="#" className="font-bold hover:text-blue-500">
            BESTSELLER
          </a>
        </div>
        <div className="flex items-center  ">
          <img
            src="https://imgur.com/Ob2C4U3.jpeg "
            alt="Order icon"
            className="mr-2 h-16 w-16"
          />
          <a href="#" className="font-bold hover:text-blue-500">
            ĐẶT HÀNG
          </a>
        </div>
        <div className="flex items-center ">
          <img
            src="https://imgur.com/t8rJ3DY.jpeg"
            alt="Promotion icon"
            className="mr-2 h-16 w-16"
          />
          <a href="#" className="font-bold hover:text-blue-500">
            KHUYẾN MÃI
          </a>
        </div>
        <div className="flex items-center ">
          <img
            src="https://imgur.com/FhWxJwj.jpeg"
            alt="Store icon"
            className="mr-2 h-16 w-16"
          />
          <a href="#" className="font-bold hover:text-blue-500">
            CỬA HÀNG
          </a>
        </div>
      </div>
    </section>
  );
}
