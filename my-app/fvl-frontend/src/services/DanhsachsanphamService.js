// src/services/DanhsachsanphamService.js

// Hàm lấy tất cả danh sách sản phẩm
export const getAllSanpham = async () => {
  try {
    const response = await fetch("/api/danhsach-san-pham"); // Thay đổi URL cho phù hợp với API của bạn
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching danh sách sản phẩm:", error);
    throw error; // Ném lại lỗi để xử lý ở nơi gọi hàm
  }
};

// Bạn có thể thêm các hàm khác cho các thao tác như thêm, sửa, xóa sản phẩm ở đây
