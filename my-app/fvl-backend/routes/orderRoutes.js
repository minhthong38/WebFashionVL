const express = require('express');
const Order = require('../models/Order');
const router = express.Router();

// Lấy tất cả đơn hàng
router.get('/', async (req, res) => {
    try {
        const orders = await Order.find().populate('orderDetails.product');
        res.status(200).json(orders);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Tạo mới đơn hàng
router.post('/', async (req, res) => {
    const order = new Order(req.body);

    try {
        const newOrder = await order.save();
        res.status(201).json(newOrder);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Xóa đơn hàng
router.delete('/:id', async (req, res) => {
    try {
        const deletedOrder = await Order.findByIdAndDelete(req.params.id);
        if (!deletedOrder) return res.status(404).json({ message: "Đơn hàng không tồn tại" });
        res.json({ message: 'Xóa đơn hàng thành công' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
