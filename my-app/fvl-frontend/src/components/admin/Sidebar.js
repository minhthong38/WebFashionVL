import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegListAlt } from "react-icons/fa";
import { MdAddBox, MdListAlt, MdCategory } from "react-icons/md";
import { HiOutlineCog } from "react-icons/hi";
import { GiChickenLeg } from "react-icons/gi";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="bg-gray-900 text-white w-64 space-y-6 py-7 px-2 h-screen">
      <nav className="space-y-4">
        <NavLink
          to="/"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
          activeClassName="bg-gray-700"
        >
          <IoHomeOutline className="inline-block h-5 w-5 mr-2" />
          Home
        </NavLink>

        <h1 className="font:bold block py-2.5 px-4 rounded transition duration-200">
          Danh Mục
        </h1>

        <NavLink
          to="/admin/"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
          activeClassName="bg-gray-700"
        >
          <MdAddBox className="inline-block h-5 w-5 mr-2" /> Thêm Danh Mục
        </NavLink>

        <NavLink
          to="/admin/DanhsachdanhmucTable"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
          activeClassName="bg-gray-700"
        >
          <MdListAlt className="inline-block h-5 w-5 mr-2" /> Danh Sách Danh Mục
        </NavLink>

        <h1 className="font:bold block py-2.5 px-4 rounded transition duration-200">
          Loại Sản Phẩm
        </h1>

        <NavLink
          to="/admin/"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
          activeClassName="bg-gray-700"
        >
          <MdAddBox className="inline-block h-5 w-5 mr-2" />
          Thêm Loại Sản Phẩm
        </NavLink>

        <NavLink
          to="/admin/DanhsachloaisanphamTable"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
          activeClassName="bg-gray-700"
        >
          <GiChickenLeg className="inline-block h-5 w-5 mr-2" />
          Danh Sách Loại Sản Phẩm
        </NavLink>

        <h1 className="font:bold block py-2.5 px-4 rounded transition duration-200">
          Sản Phẩm
        </h1>

        <NavLink
          to="/admin/"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
          activeClassName="bg-gray-700"
        >
          <MdAddBox className="inline-block h-5 w-5 mr-2" />
          Thêm Sản Phẩm
        </NavLink>

        <NavLink
          to="/admin/DanhsachsanphamTable"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
          activeClassName="bg-gray-700"
        >
          <MdCategory className="inline-block h-5 w-5 mr-2" />
          Danh Sách Sản Phẩm
        </NavLink>

        <NavLink
          to="/admin/DanhsachdonhangTable"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
          activeClassName="bg-gray-700"
        >
          <MdCategory className="inline-block h-5 w-5 mr-2" />
          Danh Sách Đơn Hàng
        </NavLink>
      </nav>
    </div>
  );
}

export default Sidebar;
