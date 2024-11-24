import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { FaTrashAlt } from "react-icons/fa";
import { GoPencil } from "react-icons/go";
import danhMucData from "../../data/danhsachdanhmuc"; // Import dữ liệu danh mục

export default function DanhsachdanhmucTable() {
  const [listDanhsachdanhmuc, setListDanhsachdanhmuc] = useState(danhMucData); // Gán dữ liệu vào state
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageClick = (event) => {
    const selectedPage = event.selected + 1;
    setCurrentPage(selectedPage);
  };

  const handleEditDanhsachdanhmuc = (danhmuc) => {
    console.log("Edit danh mục: ", danhmuc);
  };

  const handleDeleteDanhsachdanhmuc = (danhmuc) => {
    console.log("Delete danh mục: ", danhmuc);
  };

  return (
    <>
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Danh Sách Danh Mục</h1>
          <button className="bg-sky-400 text-white px-4 py-2 rounded-md">
            Thêm danh mục mới
          </button>
        </div>
        <div className="">
          <table className="min-w-full bg-white border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                  Stt
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                  Id
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                  Danh mục
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                  Tùy chỉnh
                </th>
              </tr>
            </thead>
            <tbody>
              {listDanhsachdanhmuc.length > 0 ? (
                listDanhsachdanhmuc.map((danhmuc, index) => (
                  <tr
                    key={danhmuc.id_danhmuc}
                    className="border-t border-gray-200"
                  >
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {index + 1}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {danhmuc.id_danhmuc}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {danhmuc.ten_danhmuc}
                    </td>
                    <td className="px-6 py-4 text-right text-sm font-medium">
                      <div className="flex ">
                        <GoPencil
                          className="text-xl text-yellow-400 hover:text-yellow-200 mr-5"
                          onClick={() => handleEditDanhsachdanhmuc(danhmuc)}
                        />
                        <FaTrashAlt
                          className="text-xl text-red-400 hover:text-red-200"
                          onClick={() => handleDeleteDanhsachdanhmuc(danhmuc)}
                        />
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="4"
                    className="px-6 py-4 text-center text-sm text-gray-500"
                  >
                    Không có danh mục nào.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <ReactPaginate
        previousLabel={<span className="text-gray-500">← Trước</span>}
        nextLabel={<span className="text-gray-500">Tiếp →</span>}
        breakLabel="..."
        pageCount={2} // Số lượng trang đã được chỉnh lại nếu cần
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName="flex justify-center mt-4 space-x-2"
        pageClassName="text-white-700 hover:bg-sky-200 rounded-full w-8 h-8 flex items-center justify-center"
        activeClassName="bg-sky-400 text-white rounded-full"
      />
    </>
  );
}
