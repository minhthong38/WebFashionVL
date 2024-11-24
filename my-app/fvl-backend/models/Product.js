const mongoose = require('mongoose');

// Định nghĩa Schema cho Products
const ProductSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true }, // Thêm `id` làm trường duy nhất
    cartegory_id: { type: String, required: true }, // Mã loại sản phẩm
    name: { type: String, required: true }, // Tên sản phẩm
    gender: { type: String, enum: ['NAM', 'NU', 'UNISEX'], required: true }, // Giới tính
    description: { type: String, required: true }, // Mô tả sản phẩm
    price: { type: Number, required: true }, // Giá
    originalPrice: { type: Number, required: true }, // Giá gốc
});

// Xuất model Product
module.exports = mongoose.model('Product', ProductSchema, 'Products');
