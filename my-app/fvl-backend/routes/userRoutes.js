const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Lấy tất cả người dùng
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Tạo mới người dùng
router.post('/', async (req, res) => {
    const user = new User(req.body);

    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Xóa người dùng
router.delete('/:id', async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) return res.status(404).json({ message: "Người dùng không tồn tại" });
        res.json({ message: 'Xóa người dùng thành công' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
