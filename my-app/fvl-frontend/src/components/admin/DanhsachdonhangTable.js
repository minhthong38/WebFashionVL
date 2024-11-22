import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { FaTrashAlt } from "react-icons/fa";
import { GoPencil } from "react-icons/go";
import { useLocation } from "react-router-dom";

export default function DanhsachdonhangTable() {
  const location = useLocation(); // Access the passed state
  const [listDonhang, setListDonhang] = useState(
    location.state ? [location.state] : [] // Initialize with the passed data
  );
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageClick = (event) => {
    const selectedPage = event.selected + 1;
    setCurrentPage(selectedPage);
  };

  const handleEditDonhang = (donhang) => {
    console.log("Edit order: ", donhang);
  };

  const handleDeleteDonhang = (donhang) => {
    console.log("Delete order: ", donhang);
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Danh Sách Đơn Hàng</h1>
      </div>
      <div>
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                Mã Đơn Hàng
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                Tên
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                Địa Chỉ
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                Số Điện Thoại
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                Sản Phẩm
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                Size
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                SL
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                Đơn Giá
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                Thời Gian Đặt Hàng
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                Tùy Chỉnh
              </th>
            </tr>
          </thead>
          <tbody>
            {listDonhang.length > 0 ? (
              listDonhang.map((donhang, index) => (
                <tr
                  key={donhang.orderCode}
                  className="border-t border-gray-200"
                >
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {donhang.orderCode}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {donhang.customerName}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {donhang.address}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {donhang.phoneNumber}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {donhang.productName}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {donhang.size}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {donhang.quantity}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {donhang.unitPrice.toLocaleString("vi-VN")}đ
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {donhang.orderTime}
                  </td>
                  <td className="px-6 py-4 text-right text-sm font-medium">
                    <div className="flex">
                      <GoPencil
                        className="text-xl text-yellow-400 hover:text-yellow-200 mr-5"
                        onClick={() => handleEditDonhang(donhang)}
                      />
                      <FaTrashAlt
                        className="text-xl text-red-400 hover:text-red-200"
                        onClick={() => handleDeleteDonhang(donhang)}
                      />
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="10"
                  className="px-6 py-4 text-center text-sm text-gray-500"
                >
                  Không có đơn hàng nào.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <ReactPaginate
        previousLabel={<span className="text-gray-500">← Trước</span>}
        nextLabel={<span className="text-gray-500">Tiếp →</span>}
        breakLabel="..."
        pageCount={Math.ceil(listDonhang.length / 10)} // Adjust this based on your actual data count
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName="flex justify-center mt-4 space-x-2"
        pageClassName="text-white-700 hover:bg-sky-200 rounded-full w-8 h-8 flex items-center justify-center"
        activeClassName="bg-sky-400 text-white rounded-full"
      />
    </div>
  );
}
