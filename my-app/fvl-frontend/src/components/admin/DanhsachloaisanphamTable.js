// src/components/admin/DanhsachloaisanphamTable.js
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { FaTrashAlt } from "react-icons/fa";
import { GoPencil } from "react-icons/go";
import { getAllLoaisanpham } from "../../services/DanhsachloaisanphamService"; // Đã đổi thành DanhsachloaisanphamService

export default function DanhsachloaisanphamTable() {
  const [listLoaisanpham, setListLoaisanpham] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch loại sản phẩm when the component is mounted
  useEffect(() => {
    getLoaisanpham();
  }, [currentPage]);

  // Fetch all loại sản phẩm
  const getLoaisanpham = async () => {
    try {
      let res = await getAllLoaisanpham(); // Gọi API để lấy danh sách loại sản phẩm
      if (res) {
        setListLoaisanpham(res);
      }
    } catch (error) {
      console.log("Error with fetching loại sản phẩm: ", error);
    }
  };

  const handlePageClick = (event) => {
    const selectedPage = event.selected + 1;
    setCurrentPage(selectedPage);
  };

  const handleEditLoaisanpham = (loaisanpham) => {
    console.log("Edit loại sản phẩm: ", loaisanpham);
  };

  const handleDeleteLoaisanpham = (loaisanpham) => {
    console.log("Delete loại sản phẩm: ", loaisanpham);
  };

  return (
    <>
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Danh Sách Loại Sản Phẩm</h1>
          <button className="bg-sky-400 text-white px-4 py-2 rounded-md">
            Thêm loại sản phẩm mới
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
                  Loại sản phẩm
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                  Tùy chỉnh
                </th>
              </tr>
            </thead>
            <tbody>
              {listLoaisanpham.length > 0 ? (
                listLoaisanpham.map((loaisanpham, index) => (
                  <tr key={loaisanpham.id} className="border-t border-gray-200">
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {index + 1}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {loaisanpham.id}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {loaisanpham.name}
                    </td>
                    <td className="px-6 py-4 text-right text-sm font-medium">
                      <div className="flex float-right">
                        <GoPencil
                          className="text-xl text-yellow-400 hover:text-yellow-200 mr-5"
                          onClick={() => handleEditLoaisanpham(loaisanpham)}
                        />
                        <FaTrashAlt
                          className="text-xl text-red-400 hover:text-red-200"
                          onClick={() => handleDeleteLoaisanpham(loaisanpham)}
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
                    Không có loại sản phẩm nào.
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
