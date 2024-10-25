// src/services/DanhsachloaisanphamService.js

// Hàm lấy tất cả danh sách loại sản phẩm
export const getAllLoaisanpham = async () => {
  try {
    const response = await fetch("/api/danhsach-loai-san-pham"); // Thay đổi URL cho phù hợp với API của bạn
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching danh sach loai san pham:", error);
    throw error; // Ném lại lỗi để xử lý ở nơi gọi hàm
  }
};

// Bạn có thể thêm các hàm khác cho các thao tác như thêm, sửa, xóa loại sản phẩm ở đây
