const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// Lấy tất cả sản phẩm
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Tạo mới sản phẩm
router.post('/', async (req, res) => {
    const product = new Product(req.body);

    try {
        const newProduct = await product.save();
        res.status(201).json(newProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Xóa sản phẩm
router.delete('/:id', async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        if (!deletedProduct) return res.status(404).json({ message: "Sản phẩm không tồn tại" });
        res.json({ message: 'Xóa sản phẩm thành công' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
