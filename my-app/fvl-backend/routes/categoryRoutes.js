// backend/routes/categoryRoutes.js
const express = require('express');
const Category = require('../models/Category');
const router = express.Router();

// Lấy tất cả categories
router.get('/', async (req, res) => {
  try {
    const categories = await Category.find();  // Lấy tất cả categories từ MongoDB
    res.status(200).json(categories);  // Trả về dữ liệu
  } catch (err) {
    res.status(500).json({ message: err.message });  // Xử lý lỗi
  }
});

module.exports = router;
