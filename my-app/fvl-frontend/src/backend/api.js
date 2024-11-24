// api.js (trong thư mục src/backend/)

import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000',
});

// Hàm lấy danh sách sản phẩm
export const fetchProducts = async () => {
  try {
    const response = await API.get('/api/products');
    console.log(response.data);  // Kiểm tra dữ liệu trả về từ API
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

