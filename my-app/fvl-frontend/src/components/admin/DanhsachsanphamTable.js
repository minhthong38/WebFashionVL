// src/components/admin/DanhsachsanphamTable.js
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { FaTrashAlt } from "react-icons/fa";
import { GoPencil } from "react-icons/go";
import { getAllSanpham } from "../../services/DanhsachsanphamService"; // Nhập hàm từ dịch vụ

export default function DanhsachsanphamTable() {
  const [listSanpham, setListSanpham] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch sản phẩm when the component is mounted
  useEffect(() => {
    getSanpham();
  }, [currentPage]);

  // Fetch all sản phẩm
  const getSanpham = async () => {
    try {
      let res = await getAllSanpham(); // Gọi API để lấy danh sách sản phẩm
      if (res) {
        setListSanpham(res);
      }
    } catch (error) {
      console.log("Error with fetching sản phẩm: ", error);
    }
  };

  const handlePageClick = (event) => {
    const selectedPage = event.selected + 1;
    setCurrentPage(selectedPage);
  };

  const handleEditSanpham = (sanpham) => {
    console.log("Edit sản phẩm: ", sanpham);
  };

  const handleDeleteSanpham = (sanpham) => {
    console.log("Delete sản phẩm: ", sanpham);
  };

  return (
    <>
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Danh Sách Sản Phẩm</h1>
          <button className="bg-sky-400 text-white px-4 py-2 rounded-md">
            Thêm sản phẩm mới
          </button>
        </div>
        <div>
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
                  Sản phẩm
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                  Tùy chỉnh
                </th>
              </tr>
            </thead>
            <tbody>
              {listSanpham.length > 0 ? (
                listSanpham.map((sanpham, index) => (
                  <tr key={sanpham.id} className="border-t border-gray-200">
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {index + 1}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {sanpham.id}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {sanpham.name}
                    </td>
                    <td className="px-6 py-4 text-right text-sm font-medium">
                      <div className="flex float-right">
                        <GoPencil
                          className="text-xl text-yellow-400 hover:text-yellow-200 mr-5"
                          onClick={() => handleEditSanpham(sanpham)}
                        />
                        <FaTrashAlt
                          className="text-xl text-red-400 hover:text-red-200"
                          onClick={() => handleDeleteSanpham(sanpham)}
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
                    Không có sản phẩm nào.
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
