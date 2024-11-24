const express = require('express');
const ProductType = require('../models/ProductType');
const router = express.Router();

// Lấy tất cả loại sản phẩm
router.get('/', async (req, res) => {
    try {
        const productTypes = await ProductType.find();
        res.status(200).json(productTypes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Tạo mới loại sản phẩm
router.post('/', async (req, res) => {
    const productType = new ProductType(req.body);

    try {
        const newProductType = await productType.save();
        res.status(201).json(newProductType);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Xóa loại sản phẩm
router.delete('/:id', async (req, res) => {
    try {
        const deletedProductType = await ProductType.findByIdAndDelete(req.params.id);
        if (!deletedProductType) return res.status(404).json({ message: "Loại sản phẩm không tồn tại" });
        res.json({ message: 'Xóa loại sản phẩm thành công' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
