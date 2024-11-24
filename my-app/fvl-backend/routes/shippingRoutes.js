const express = require('express');
const Shipping = require('../models/Shipping');
const router = express.Router();

// Lấy tất cả thông tin giao hàng
router.get('/', async (req, res) => {
    try {
        const shippings = await Shipping.find();
        res.status(200).json(shippings);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Tạo mới thông tin giao hàng
router.post('/', async (req, res) => {
    const shipping = new Shipping(req.body);

    try {
        const newShipping = await shipping.save();
        res.status(201).json(newShipping);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Xóa thông tin giao hàng
router.delete('/:id', async (req, res) => {
    try {
        const deletedShipping = await Shipping.findByIdAndDelete(req.params.id);
        if (!deletedShipping) return res.status(404).json({ message: "Thông tin giao hàng không tồn tại" });
        res.json({ message: 'Xóa thông tin giao hàng thành công' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
